import { Injectable, NotFoundException } from '@nestjs/common';

@Injectable()
export class UsersService {
    private users=[
        {id:1,name:"Kevin",email:"kevin@gmail.com"},
        {id:2,name:"kayla",email:"kayla@gmail.com"},
         
    ];

    findAll(){
        return this.users;
    }

    
    findById(id: number){
        const user= this.users.find((user)=> user.id===id);
        if (!user){
            throw new NotFoundException(`User with ID ${id} not found`);
        }
        return user;
    }

    findByName(name: string){
        const user= this.users.find((user)=> user.name===name);
        if(!user){
            throw new NotFoundException(`User with the name ${name} not found`)
        }
        return user;

    }
}
