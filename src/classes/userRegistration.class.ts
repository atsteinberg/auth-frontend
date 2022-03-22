import { IsString } from 'class-validator';
import UserLogin from './userLogin.class';

class UserRegistration extends UserLogin {
  @IsString()
    name: string;
}

export default UserRegistration;
