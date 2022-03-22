import {
  IsEmail, IsNotEmpty, IsString, Length,
} from 'class-validator';

class UserLogin {
  constructor(loginData: UserLogin) {
    Object.assign(this, loginData);
  }

  @IsEmail()
  @IsNotEmpty()
    email: string;

  @IsString()
  @Length(6, 24)
    password: string;
}

export default UserLogin;
