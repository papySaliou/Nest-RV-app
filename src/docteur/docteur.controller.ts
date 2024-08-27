import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { DocteurService } from './docteur.service';
import { Docteur } from './docteur.entity';

@Controller('docteurs')
export class DocteurController {


  constructor(private readonly docteurService: DocteurService) {}

  @Get()
  findAll(): Promise<Docteur[]> {
    return this.docteurService.findAll()
  }

  @Get(':id')
  findOne(@Param('id') id: number): Promise<Docteur> {
    return this.docteurService.findOne(id)
  }

  @Post()
  create(@Body() createBookDto: Docteur): Promise<Docteur> {
    return this.docteurService.create(createBookDto)
  }

  @Put(':id')
  update(
    @Param('id') id: number,
    @Body() updateBookDto: Partial<Docteur>
  ): Promise<Docteur> {
    return this.docteurService.update(id, updateBookDto)
  }

  @Delete(':id')
  remove(@Param('id') id: number): Promise<void> {
    return this.docteurService.remove(id)
  }
  // constructor(private readonly docteurService: DocteurService) {}

  // @Get()
  // findAll() { Promise<Docteur[]>
  //   return this.docteurService.findAll();
  // }

  // @Get(':id')
  // findOne(@Param('id') id: string):Promise<Docteur> {
  //   return this.docteurService.findOne(+id);
  // }
  

  // @Delete(':id')
  // remove(@Param('id') id: string) {
  //   return this.docteurService.remove(+id);
  // }
}
