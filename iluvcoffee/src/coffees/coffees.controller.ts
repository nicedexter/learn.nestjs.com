import { Body, Controller, Delete, Get, NotFoundException, Param, Patch, Post, Query, SetMetadata } from '@nestjs/common'
import { Public } from 'src/common/decorators/public.decorator'
import { PaginationQueryDto } from 'src/common/dto/pagination-query.dto'
import { CoffeesService } from './coffees.service'
import { CreateCoffeeDto } from './dto/create-coffee.dto'
import { UpdateCoffeeDto } from './dto/update-coffee.dto'

@Controller('coffees')
export class CoffeesController {
    constructor(private readonly coffeesService: CoffeesService) { }

    @Public()
    @Get()
    findAll(@Query() paginationQuery: PaginationQueryDto) {
        return this.coffeesService.findAll(paginationQuery)
    }

    @Get(':id')
    findOne(@Param('id') id: number) {
        const coffee = this.coffeesService.findOne(id)

        if (!coffee) {
            throw new NotFoundException(`Coffee ${id} not found`)
        }

        return coffee
    }

    @Post()
    create(@Body() createCoffeeDto: CreateCoffeeDto) {
        return this.coffeesService.create(createCoffeeDto)
    }

    @Patch(':id')
    update(@Param('id') id: number, @Body() updateCoffeDto: UpdateCoffeeDto) {
        return this.coffeesService.update(id, updateCoffeDto)
    }

    @Delete(':id')
    remove(@Param('id') id: number) {
        return this.coffeesService.remove(id)
    }
}
