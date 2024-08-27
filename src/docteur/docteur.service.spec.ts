import { Test, TestingModule } from '@nestjs/testing';
import { DocteurService } from './docteur.service';

describe('DocteurService', () => {
  let service: DocteurService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DocteurService],
    }).compile();

    service = module.get<DocteurService>(DocteurService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
