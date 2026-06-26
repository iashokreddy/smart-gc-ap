import { Injectable } from '@nestjs/common';

@Injectable()
export class NotificationsService {
  broadcast(input: { title: string; message: string }) {
    return { queued: true, channels: ['push', 'email'], ...input };
  }
}
