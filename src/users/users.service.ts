import { Injectable } from '@nestjs/common';

@Injectable()
export class UsersService {
    private users=[
        {id:1,name:"Kevin",email:"kevin@gmail.com"},
        {id:2,name:"kayla",email:"kayla@gmail.com"},
    ];

    findAll(){
        return this.users;
    }
}
