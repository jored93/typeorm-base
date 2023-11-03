import {
    JsonController,
    Param,
    Body,
    Get,
    Post,
    Put,
    Delete,
    Authorized,
    QueryParams,
    BadRequestError
} from 'routing-controllers';
import { Service } from 'typedi';
import { UsersService } from '../services/Users.service';

@JsonController('/users')
@Service()
export class UserController {
    constructor(private readonly usersService: UsersService) {}

    @Get()
    listUsers() {
        return this.usersService.listUsers();
    }

}