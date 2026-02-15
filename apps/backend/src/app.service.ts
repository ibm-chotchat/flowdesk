import { Injectable } from '@nestjs/common';
import { HealthCheck } from '@flowdesk/shared';

@Injectable()
export class AppService {
  getHello(): { message: string } {
    return { message: 'Hello from Flowdesk API!' };
  }

  getHealth(): HealthCheck {
    return {
      status: 'ok',
      timestamp: new Date().toISOString(),
    };
  }
}
