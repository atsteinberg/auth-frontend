import { IsNotEmpty, IsString } from 'class-validator';
import UserLogin from './userLogin.class';

class UserRegistration extends UserLogin {
  @IsString()
  @IsNotEmpty()
    userName: string;
}

export default UserRegistration;
