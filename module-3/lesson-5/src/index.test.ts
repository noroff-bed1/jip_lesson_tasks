import request from 'supertest';
import app from './index';

describe('Test Express route', () => {
  it('GET / - success', async () => {
    const result = await request(app).get('/');
    expect(result.text).toEqual('Hello World!');
    expect(result.statusCode).toEqual(200);
  });
});