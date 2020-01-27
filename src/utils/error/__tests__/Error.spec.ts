import UsefulError from '../Error';
/**
 * Unit Tests for Custom UsefulError Class
 * @group unit
 */
describe('error class', function describe() {
  test('should inherit params from Error Class', () => {
    const error = new Error('message should show up');
    const errResult = new UsefulError('test error', 500, error.message);
    expect(errResult.message).toBe(error.message);
    expect(errResult.stack).toBeDefined();
  });

  test('should have name, status and date properties', () => {
    const errResult = new UsefulError('StandardError', 400, 'new error please');
    expect(errResult.name).toBe('StandardError');
    expect(errResult.status).toBe(400);
    expect(new Date(errResult.date)).toBeDefined();
  });
});
