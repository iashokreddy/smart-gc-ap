import { Injectable } from '@nestjs/common';

@Injectable()
export class AiService {
  summarize(content: string) {
    if (!content) return { summary: '' };
    return { summary: content.slice(0, 280) };
  }
}
