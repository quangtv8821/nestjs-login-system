import { Controller, Get } from '@nestjs/common';

@Controller('user')
export class UserController {
    @Get()
    show() {
        return 'user controller'
    }

}
