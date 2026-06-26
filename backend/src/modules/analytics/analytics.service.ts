import { Injectable } from '@nestjs/common';

@Injectable()
export class AnalyticsService {
  overview() {
    return {
      visitorsToday: 1234,
      popularPages: ['/schemes', '/dashboard', '/employment'],
      searchTrends: ['rythu bharosa', 'veligonda', 'job mela'],
    };
  }
}
