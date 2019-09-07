import { Controller, Post, Body, ValidationPipe, UseGuards, Req } from '@nestjs/common';
import { AuthCredentialsDto } from './dto/auth-credentials.dto';
import { AuthService } from './auth.service';
import { AuthGuard } from '@nestjs/passport';
import { GetUser } from './get-user.decorator';
import { User } from './user.entity';

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

    @Post('/signin')
    signIn(@Body(ValidationPipe) authCredentialsDto: AuthCredentialsDto): Promise<{ accessToken: string }> {
        return this.authService.signIn(authCredentialsDto);
    }

    /**
     *Binds guards to the particular context. When the @UseGuards() is used on the controller level:
     Guard will be register to each handler (every method)
     When the @UseGuards() is used on the handler level:
     Guard will be registered only to the specified method
     *This returns the user object
     Used for testing purposes
     * @param {*} req
     * @memberof AuthController
     */
    // @Post('/test')
    // @UseGuards(AuthGuard())
    // test(@GetUser() user: User) {
    //     console.log(user)
    // }
}
