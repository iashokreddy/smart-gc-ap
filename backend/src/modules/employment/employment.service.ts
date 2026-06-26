import { Injectable } from '@nestjs/common';

@Injectable()
export class EmploymentService {
  jobs() {
    return [{ id: 'j1', title: 'Junior Assistant', sector: 'Government', location: 'Markapuram' }];
  }
}
