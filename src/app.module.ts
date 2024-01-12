import { Module } from '@nestjs/common';
import { ChatGptAiModule } from './chat-gpt-ai/chat-gpt-ai.module';
import { ConfigModule } from '@nestjs/config';
import { ChatCompletionApiModule } from './chat-completion-api/chat-completion-api.module';

@Module({
  imports: [ChatGptAiModule,ConfigModule.forRoot(), ChatCompletionApiModule]
})
export class AppModule {}
