import { Service } from 'typedi';

@Service()
export class UsersService {
    listUsers() {
        const users = [
            {
                id: 1,
                firstName: 'John',
                lastName: 'Doe',
                username: 'johndoe',
                email: '<EMAIL>',
                password: '<PASSWORD>'
            },
            {
                id: 2,
                firstName: 'Jane',
                lastName: 'Doe',
                username: 'janedoe',
                email: '<EMAIL>',
                password: '<PASSWORD>'
            }
        ];
        return users;
    }
}