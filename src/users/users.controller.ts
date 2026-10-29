import { Controller, Get, Param,ParseIntPipe } from '@nestjs/common';
import { ApiTags, ApiOperation } from '@nestjs/swagger';
import { UsersService } from './users.service';

@ApiTags('users')
@Controller('users')
export class UsersController {
    constructor(private readonly usersService: UsersService){}

    @Get()
    @ApiOperation({summary: "Retrieve all users"})
    findAll(){
        return this.usersService.findAll();
    }

    @Get(':id')
    @ApiOperation({summary:"Get a user by id"})
    findById(@Param('id', ParseIntPipe)id:number){
        return this.usersService.findById(id)
    }
    @Get('name/:name')
    @ApiOperation({summary: "Get user by name "})
    findByName(@Param('name')name:string){
        return  this.usersService.findByName(name)
    }

}
