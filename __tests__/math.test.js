const { sum, mean } = require('../src/math');
test('sum adds numbers', () => { expect(sum([1, 2, 3])).toBe(6); });
test('mean of empty is 0', () => { expect(mean([])).toBe(0); });
test('mean averages', () => { expect(mean([2, 4])).toBe(3); });
test('max', () => { expect(require('../src/math').max([3, 9, 2])).toBe(9); });
test('min', () => { expect(require('../src/math').min([3, 9, 2])).toBe(2); });
