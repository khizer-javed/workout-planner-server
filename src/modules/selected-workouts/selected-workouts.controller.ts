import { Controller, Logger, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { SelectedWorkoutService } from './selected-workouts.service';

@UseGuards(AuthGuard())
@Controller('users')
export class SelectedWorkoutController {
  private logger = new Logger('SelectedWorkoutController');
  constructor(private readonly userService: SelectedWorkoutService) {}
}
