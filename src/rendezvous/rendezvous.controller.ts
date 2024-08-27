import { RendezVous } from './rendezvous.entity';
import { RendezvousService } from './rendezvous.service';
import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';

@Controller('rendezvous')
export class RendezvousController {

  constructor(private readonly rendezvousService: RendezvousService) {}

  @Get()
  findAll(): Promise<RendezVous[]> {
    return this.rendezvousService.findAll()
  }

  @Get(':id')
  findOne(@Param('id') id: number): Promise<RendezVous> {
    return this.rendezvousService.findOne(id)
  }

  @Post()
  create(@Body() createBookDto: RendezVous): Promise<RendezVous> {
    return this.rendezvousService.create(createBookDto)
  }

  @Put(':id')
  update(
    @Param('id') id: number,
    @Body() updateBookDto: Partial<RendezVous>
  ): Promise<RendezVous> {
    return this.rendezvousService.update(id, updateBookDto)
  }

  @Delete(':id')
  remove(@Param('id') id: number): Promise<void> {
    return this.rendezvousService.remove(id)
  }
}
