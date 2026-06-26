import { Injectable } from '@nestjs/common';

@Injectable()
export class DashboardService {
  getSummary() {
    return {
      district: 'Markapuram',
      projects: { total: 524, completed: 378, inProgress: 112, planned: 34 },
      updatedAt: new Date().toISOString(),
    };
  }
}
