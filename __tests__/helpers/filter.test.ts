import { getUnique } from '@/shared/helpers/filter';

describe('getUnique function', () => {
  it('returns unique values based on a specified property', () => {
    const values = [
      { id: 1, name: 'John' },
      { id: 2, name: 'Jane' },
      { id: 3, name: 'John' },
      { id: 4, name: 'Alice' },
      { id: 5, name: 'Jane' },
    ];

    const uniqueNames = getUnique(values, 'name');

    expect(uniqueNames).toEqual(['Alice', 'Jane', 'John']);
  });

  it('returns empty array', () => {
    const values: any[] = [];

    const uniqueNames = getUnique(values, 'name');

    expect(uniqueNames).toEqual([]);
  });
});
