import { Module } from '@nestjs/common';
import { AppService } from 'src/app.service';
import { CoffeesController } from './coffees.controller';
import { CoffeesService } from './coffees.service';

@Module({
    controllers: [CoffeesController],
    providers: [CoffeesService],
})
export class CoffeesModule { }
