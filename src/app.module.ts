import { Module } from '@nestjs/common';
import { InfluencersModule } from './influencers/influencers.module';

@Module({
  imports: [InfluencersModule],
  controllers: [],
  providers: [ InfluencersModule],
})
export class AppModule {}
