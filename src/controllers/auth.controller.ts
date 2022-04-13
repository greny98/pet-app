import { NextFunction, Request, Response } from 'express';
import { CreateUserDto, LoginDto } from '@dtos/users.dto';
import { RequestWithUser } from '@interfaces/auth.interface';
import AuthService from '@services/auth.service';

class AuthController {
  public authService = new AuthService();

  public renderLogin = async (req: Request, res: Response) => {
    res.render('auth/login', { title: 'Login Page' });
  };

  public renderRegister = async (req: Request, res: Response) => {
    res.render('auth/register', { title: 'Register Page' });
  };

  public register = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const userData: CreateUserDto = req.body;
      const { cookie } = await this.authService.register(userData);

      res.setHeader('Set-Cookie', [cookie]);
      res.status(200).redirect('/');
    } catch (error) {
      next(error);
    }
  };

  public logIn = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const userData: LoginDto = req.body;
      const { cookie } = await this.authService.login(userData);

      res.setHeader('Set-Cookie', [cookie]);
      res.status(200).redirect('/');
    } catch (error) {
      next(error);
    }
  };

  public logOut = async (req: RequestWithUser, res: Response, next: NextFunction) => {
    try {
      res.setHeader('Set-Cookie', ['Authorization=; Max-age=0']);
      res.status(200).redirect('/login');
    } catch (error) {
      next(error);
    }
  };
}

export default AuthController;
