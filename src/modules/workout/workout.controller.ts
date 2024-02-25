import {
  Controller,
  Logger,
  UseGuards
} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { WorkoutService } from './workout.service';

@UseGuards(AuthGuard())
@Controller('users')
export class WorkoutController {
  private logger = new Logger('WorkoutController');
  constructor(private readonly service: WorkoutService) {}

}
