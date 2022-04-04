import { compare, hash } from 'bcrypt';
import config from 'config';
import { sign } from 'jsonwebtoken';
import { CreateUserDto, LoginDto } from '@dtos/users.dto';
import { HttpException } from '@exceptions/HttpException';
import { DataStoredInToken, TokenData } from '@interfaces/auth.interface';
import { EUserStatus, User } from '@interfaces/users.interface';
import userModel from '@models/users.model';
import { isEmpty } from '@utils/util';

class AuthService {
  public users = userModel;

  public async register(userData: CreateUserDto): Promise<{ cookie: string; user: User }> {
    if (isEmpty(userData)) throw new HttpException(400, "You're not userData");

    const findUser: User = await this.users.findOne({ email: userData.username });
    if (findUser) throw new HttpException(409, `Your username ${userData.username} already exists`);

    const hashedPassword = await hash(userData.password, 10);
    const user: User = await new this.users({ ...userData, password: hashedPassword }).save();

    const tokenData = this.createToken(findUser);
    const cookie = this.createCookie(tokenData);
    return { cookie, user };
  }

  public async login(userData: LoginDto): Promise<{ cookie: string; user: User }> {
    if (isEmpty(userData)) throw new HttpException(400, "You're not userData");

    const findUser: User = await this.users.findOne({ username: userData.username });
    if (!findUser) throw new HttpException(409, `Your username ${userData.username} not found`);
    if (findUser.status == EUserStatus.InActive) throw new HttpException(403, 'Your account is inactive');

    const isPasswordMatching: boolean = await compare(userData.password, findUser.password);
    if (!isPasswordMatching) throw new HttpException(409, "You're password not matching");
    const tokenData = this.createToken(findUser);
    const cookie = this.createCookie(tokenData);

    return { cookie, user: findUser };
  }

  public async logout(userData: User): Promise<User> {
    if (isEmpty(userData)) throw new HttpException(400, "You're not userData");

    const findUser: User = await this.users.findOne({ username: userData.username, password: userData.password });
    if (!findUser) throw new HttpException(409, `Your username ${userData.username} not found`);

    return findUser;
  }

  public createToken(user: User): TokenData {
    const dataStoredInToken: DataStoredInToken = { _id: user._id };
    const secretKey: string = config.get('secretKey');
    const expiresIn: number = 60 * 60;

    return { expiresIn, token: sign(dataStoredInToken, secretKey, { expiresIn }) };
  }

  public createCookie(tokenData: TokenData): string {
    return `Authorization=${tokenData.token}; HttpOnly; Max-Age=${tokenData.expiresIn};`;
  }
}

export default AuthService;
