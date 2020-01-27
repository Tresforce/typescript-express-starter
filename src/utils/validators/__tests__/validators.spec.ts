import { exists } from '../index';

/**
 * Unit tests for custom validators
 * @group unit
 */
describe('validators', () => {
  test('exists should return all fields that do not exist in the object', () => {
    const INVALID_OBJECT = {
      one: 1,
      two: 2
    };
    const result = exists(INVALID_OBJECT, ['one', 'hello', 'eagle']);
    expect(result).toContain('hello');
    expect(result).toHaveLength(2);
  });

  test('exists should return fields that exist with undefined values', () => {
    const INVALID_OBJECT = {
      one: '',
      two: undefined,
      three: null
    };
    const result = exists(INVALID_OBJECT);
    expect(result).toHaveLength(3);
    expect(result).toContain('two');
  });

  test('exists should return fields that exist with undefined values by field lookup', () => {
    const INVALID_OBJECT = {
      one: '',
      two: undefined,
      three: null
    };
    const result = exists(INVALID_OBJECT, ['one']);
    expect(result).toHaveLength(1);
    expect(result).toContain('one');
  });

  test('exists should return an empty array if all values exist in an object', () => {
    const VALID_OBJECT = {
      first: 'asl',
      second: 0,
      third: false,
      eagle: 'scout'
    };
    const result = exists(VALID_OBJECT);
    expect(result).toHaveLength(0);
  });

  test('exists should return empty array if all properties exist in an object', () => {
    const VALID_OBJECT = {
      one: 'one',
      two: 'two',
      address: 45,
      accounts: ['23', 23]
    };
    const result = exists(VALID_OBJECT, ['address', 'accounts']);
    expect(result).toHaveLength(0);
  });

  // TODO: validate nested objects
  test.todo('validate nested objects with dot operator');
});
