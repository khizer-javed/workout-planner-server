import { User } from 'src/modules/user/entities/user.entity';
import { SuperUser } from 'src/modules/user/entities/super-user.entity';
import { LoginToken } from 'src/modules/auth/entities/login-token.entity';

const models = [
  User,
  SuperUser,
  LoginToken,
];

export const appModels = models;