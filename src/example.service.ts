import { Injectable } from '@nestjs/common';

@Injectable()
export class ExampleService {
  getW(): string {
    return 'WORKING!!!!!';
  }
  getS(): string {
    return 'RRRR!!!!!';
  }
}
