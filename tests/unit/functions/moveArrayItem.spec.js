import moveArrayItem from '@/functions/moveArrayItem';

describe('tests for the moveArrayItem function', () => {
  test('it moves an item in an array correctly', () => {
    expect(moveArrayItem([0, 1, 2], 0, 1)).toEqual([1, 0, 2]);
    expect(moveArrayItem([0], 0, 1)).toEqual([0]);
  });
});
