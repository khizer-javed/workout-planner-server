import { Injectable, Logger } from '@nestjs/common';
import { GlobalDbService } from '../global-db/global-db.service';

@Injectable()
export class SelectedWorkoutService {
  private logger = new Logger('SelectedWorkoutService');
  constructor(private readonly DB: GlobalDbService) {}
}
