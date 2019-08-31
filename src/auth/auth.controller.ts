import { Controller, Post, Body, ValidationPipe } from '@nestjs/common';
import { AuthCredentialsDto } from './dto/auth-credentials.dto';
import { AuthService } from './auth.service';

/**
 * Controllers are responsible for handling incoming requests 
 * and returning responses to the client. A controller's purpose is to receive specific 
 * The routing mechanism controls which controller receives which requests. Frequently, each controller has 
 * more than one route, and different routes can perform different actions. In order to create a basic controller, 
 * we use classes and decorators. Decorators associate classes with 
 * required metadata and enable Nest to create a routing map 
(tie requests to the corresponding controllers).
 * @export
 * @class AuthController
 */
@Controller('auth')
export class AuthController {
    constructor(
        private authService: AuthService,
    ) { }

    @Post('/signup')
    signUp(@Body(ValidationPipe) authCredentialsDto: AuthCredentialsDto): Promise<void> {
        return this.authService.signUp(authCredentialsDto);
    }
}
