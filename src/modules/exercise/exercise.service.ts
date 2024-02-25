import {
  Injectable, Logger
} from '@nestjs/common';
import { GlobalDbService } from '../global-db/global-db.service';

@Injectable()
export class ExerciseService {
  private logger = new Logger('ExerciseService');
  constructor(
    private readonly DB: GlobalDbService,
  ) {}
  
}
