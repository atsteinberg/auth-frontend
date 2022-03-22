import { IsString } from 'class-validator';

class User {
  @IsString()
    id: string;
}

export default User;
