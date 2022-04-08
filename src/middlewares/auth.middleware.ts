import config from 'config';
import { NextFunction, Response } from 'express';
import { verify } from 'jsonwebtoken';
import { HttpException } from '@exceptions/HttpException';
import { DataStoredInToken, RequestWithUser } from '@interfaces/auth.interface';
import userModel from '@models/users.model';

const authMiddleware = async (req: RequestWithUser, res: Response, next: NextFunction) => {
  try {
    const Authorization = req.cookies['Authorization'] || (req.header('Authorization') ? req.header('Authorization').split('Bearer ')[1] : null);
    const routes = ['/login', '/register'];
    const needAuth = !routes.includes(req.path);
    let findUser = null;
    if (Authorization) {
      const secretKey: string = config.get('secretKey');
      const verificationResponse = (await verify(Authorization, secretKey)) as DataStoredInToken;
      const userId = verificationResponse._id;
      findUser = await userModel.findById(userId);
    }
    if (needAuth && findUser) req.user = findUser;
    else if (needAuth && !findUser) return res.redirect('/login');
    else if (!needAuth && findUser) return res.redirect('/');

    next();
  } catch (error) {
    next(new HttpException(401, 'Wrong authentication token'));
  }
};

export const checkAdmin = (req: RequestWithUser, res: Response, next: NextFunction) => {
  console.log(req.user.admin);
  if (!req.user.admin) return res.redirect('/');
  next();
};

export default authMiddleware;
