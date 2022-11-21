import { invariant } from '../index';

describe('test invariant', () => {
  const error = 'error';

  test('test false to throw error', () => {
    expect(() => invariant(false, error)).toThrow(error);
  });

  test('test 0 to throw error', () => {
    expect(() => invariant(0, error)).toThrow(error);
  });

  test('test null to throw error', () => {
    expect(() => invariant(null, error)).toThrow(error);
  });

  test('test undefined to throw error', () => {
    expect(() => invariant(undefined, error)).toThrow(error);
  });

  test("est '' to throw error", () => {
    expect(() => invariant('', error)).toThrow(error);
  });

});
