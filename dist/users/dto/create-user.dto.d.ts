export declare class LoginUserDto {
    useremail: string;
    password: string;
}
export declare class CreateUserDto extends LoginUserDto {
    fullname: string;
    phone: string;
}
