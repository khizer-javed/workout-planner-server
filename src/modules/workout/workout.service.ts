import {
  Injectable, Logger
} from '@nestjs/common';
import { GlobalDbService } from '../global-db/global-db.service';

@Injectable()
export class WorkoutService {
  private logger = new Logger('WorkoutService');
  constructor(
    private readonly DB: GlobalDbService,
  ) {}
  
}
