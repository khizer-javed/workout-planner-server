import {
  Controller,
  Logger,
  UseGuards
} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { ExerciseService } from './exercise.service';

@UseGuards(AuthGuard())
@Controller('users')
export class ExerciseController {
  private logger = new Logger('ExerciseController');
  constructor(private readonly service: ExerciseService) {}

}
