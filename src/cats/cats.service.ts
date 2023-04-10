// This service will be responsible for data storage and retrieval, and is designed to be used by the CatsController,
// so it's a good candidate to be defined as a provider.

import { Injectable } from '@nestjs/common';
import { CreateCatDto } from './dto/create-cat.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Cat } from './entities/cat.entity';

@Injectable()
export class CatsService {
  constructor(
    @InjectRepository(Cat)
    private catRepository: Repository<Cat>,
  ) {}
  create(createCatDto: CreateCatDto) {
    return this.catRepository.save(createCatDto);
  }

  findAll() {
    return `This action returns all cats`;
  }

  // findOne(id: number) {
  //   return `This action returns a #${id} cat`;
  // }

  // update(id: number, updateCatDto: UpdateCatDto) {
  //   return `This action updates a #${id} cat`;
  // }

  // remove(id: number) {
  //   return `This action removes a #${id} cat`;
  // }
}
