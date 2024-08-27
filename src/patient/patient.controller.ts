// import { Controller } from '@nestjs/common';

// @Controller('patient')
// export class PatientController {}


import { Controller, Get, Param, Delete, Post, Body, Put } from '@nestjs/common';
import { PatientService } from './patient.service';
import { Patient } from './patient.entity';

@Controller('patients')
export class PatientController {
 
  constructor(private readonly patientService: PatientService) {}

  @Get()
  findAll(): Promise<Patient[]> {
    return this.patientService.findAll()
  }

  @Get(':id')
  findOne(@Param('id') id: number): Promise<Patient> {
    return this.patientService.findOne(id)
  }

  @Post()
  create(@Body() createBookDto: Patient): Promise<Patient> {
    return this.patientService.create(createBookDto)
  }

  @Put(':id')
  update(
    @Param('id') id: number,
    @Body() updateBookDto: Partial<Patient>
  ): Promise<Patient> {
    return this.patientService.update(id, updateBookDto)
  }

  @Delete(':id')
  remove(@Param('id') id: number): Promise<void> {
    return this.patientService.remove(id)
  }
 
 
  // constructor(private readonly patientService: PatientService) {}

  // @Get()
  // findAll() {
  //   return this.patientService.findAll();
  // }

  // @Get(':id')
  // findOne(@Param('id') id: string) {
  //   return this.patientService.findOne(+id);
  // }

  // @Delete(':id')
  // remove(@Param('id') id: string) {
  //   return this.patientService.remove(+id);
  // }
}
