import app from './src/app';
import { calculateDiscount } from './src/utils';
import request from 'supertest';

describe('App', () => {
  it('should calculate the discount', () => {
    const result = calculateDiscount(100, 10);
    expect(result).toBe(10);
  });

  it('should return 200 Status', async () => {
    const response = await request(app).get('/').send();
    expect(response.statusCode).toBe(200);
  });
});
