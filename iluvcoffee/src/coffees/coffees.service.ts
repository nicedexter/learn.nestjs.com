import { Injectable, NotFoundException } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'
import { CreateCoffeeDto } from './dto/create-coffee.dto'
import { Coffee } from './entities/coffee.entity'

@Injectable()
export class CoffeesService {
    constructor(
        @InjectRepository(Coffee)
        private readonly coffeeRepository: Repository<Coffee>
    ) { }

    findAll() {
        return this.coffeeRepository.find();
    }

    async findOne(id: number) {
        const coffee = await this.coffeeRepository.findOne(id)
        if (!coffee) throw new NotFoundException(`Coffe #${id} not found`)
        
        return coffee
    }

    async create(createCoffeeDto: CreateCoffeeDto) {
        const coffee = this.coffeeRepository.create(createCoffeeDto)
        
        return this.coffeeRepository.save(coffee)
    }

    async update(id: number, updateCoffeeDto: any) {
        const coffee = await this.coffeeRepository.preload({
            id,
            ...updateCoffeeDto
        })
        if (!coffee) throw new NotFoundException(`Coffee #${id} not found`)

        return coffee
    }

    async remove(id: number) {
        const coffee = await this.findOne(id)

        return this.coffeeRepository.remove(coffee);
    }
}
