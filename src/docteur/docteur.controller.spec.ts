import { Test, TestingModule } from '@nestjs/testing';
import { DocteurController } from './docteur.controller';

describe('DocteurController', () => {
  let controller: DocteurController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [DocteurController],
    }).compile();

    controller = module.get<DocteurController>(DocteurController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
