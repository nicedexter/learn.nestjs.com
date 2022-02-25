import { Body, Controller, Get, HttpCode, HttpStatus, Param, Post } from '@nestjs/common';

@Controller('coffees')
export class CoffeesController {

    @Get()
    findAll() {
        return 'all coffees'
    }

    @Get(':id')
    findOne(@Param('id') id: string) {
        return `${id} coffee`
    }

    @Post()
    @HttpCode(HttpStatus.GONE)
    create(@Body() body) {
        return body
    }

}
