import { IsEnum, IsInt, IsPositive, IsString, MIN, Min } from 'class-validator';

export class CreateUserDto {
  @IsInt()
  id: number;

  @IsString()
  username: string;

  @IsString()
  email: string;

  @IsString()
  password: string;
}
