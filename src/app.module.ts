import { Module } from '@nestjs/common';
import { AuthModule } from './modules/auth/auth.module';
import { DatabaseModule } from './database/database.module';
import { UserModule } from './modules/user/user.module';
import { GlobalDbModule } from './modules/global-db/global-db.module';
import { WorkoutModule } from './modules/workout/workout.module';
import { ExerciseModule } from './modules/exercise/exercise.module';

@Module({
  imports: [
    GlobalDbModule,
    AuthModule,
    DatabaseModule,
    UserModule,
    WorkoutModule,
    ExerciseModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
