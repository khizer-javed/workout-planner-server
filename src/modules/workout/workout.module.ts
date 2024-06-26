import { Module, forwardRef } from '@nestjs/common';
import { WorkoutController } from './workout.controller';
import { AuthModule } from 'src/modules/auth/auth.module';
import { authProvider } from 'src/modules/auth/auth.provider';
import { WorkoutService } from './workout.service';

@Module({
  imports: [forwardRef(() => AuthModule)],
  controllers: [WorkoutController],
  providers: [WorkoutService, ...authProvider],
  exports: [WorkoutService],
})
export class WorkoutModule {}
