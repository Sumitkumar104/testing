// when we run npm run test it go through all file end with .test.ts in our complete root directory and then run all file

import {describe, expect, test} from '@jest/globals';
import {sum} from '../index';

describe('sum module', () => {
  test('adds 1 + 2 to equal 3', () => {
    expect(sum(1, 2)).toBe(3);
  });
});