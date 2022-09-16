import {
  changeStringCase,
  sumOfArray,
  divisibleBy,
  addDotsToString,
  objectEntries,
} from '../index';

describe('changeStringCase()', () => {
  describe('if the second argument is lowercase', () => {
    it('should return lowercase letters', () => {
      const result = changeStringCase('StraWberry CAke', 'lowercase');

      expect(result).toStrictEqual('strawberry cake');
    });
  });
  describe('if the second argument is uppercase', () => {
    it('should return uppercase letters', () => {
      const result = changeStringCase('StraWberry CAke', 'uppercase');

      expect(result).toStrictEqual('STRAWBERRY CAKE');
    });
  });
  describe('if the second argument is unexpected word or number', () => {
    it('should return initial string', () => {
      const result = changeStringCase('StraWberry CAke', 6);

      expect(result).toStrictEqual('StraWberry CAke');
    });
  }); 
});

describe('sumOfArray()', () => {
  describe('if all elements are numbers', () => {
    it('should return sum of all elements', () => {
      const result = sumOfArray([2, 5, 8, 15, 66]);

      expect(result).toStrictEqual(96);
    });
  });
  describe('if not all elements are numbers', () => {
    it('should return sum of numbers only', () => {
      const result = sumOfArray([2, 5, 8, 'sleep', , 15, 66]);

      expect(result).toStrictEqual(96);
    });
  });
  describe('if array is empty', () => {
    it('should return 0', () => {
      const result = sumOfArray([]);

      expect(result).toStrictEqual(0);
    });
  });
});

describe('divisibleBy()', () => {
  describe('if the number is 3', () => {
    it('should return array of numbers divisible by 3', () => {
      const result = divisibleBy([4, 3, 9, , 5, 12], 3);

      expect(result).toStrictEqual([3, 9, 12]);
    });
  });
  describe('if the number is 2', () => {
    it('should return array of numbers divisible by 2', () => {
      const result = divisibleBy([4, 3, 9, , 5, 12], 2);

      expect(result).toStrictEqual([4, 12]);
    });
  });
  describe('if the number is 0', () => {
    it('should return empty array', () => {
      const result = divisibleBy([4, 3, 9,5, 12], 0);

      expect(result).toStrictEqual([]);
    });
  });
  
});

describe('addDotsToString()', () => {
  describe('if the string is longer', () => {
    it('should return letters with dots', () => {
      const result = addDotsToString('Long word', 5);

      expect(result).toStrictEqual('Lo...');
    });
  });
  describe('if the string is not longer', () => {
    it('should return initial string', () => {
      const result = addDotsToString('Just a word', 12);

      expect(result).toStrictEqual('Just a word');
    });
  });
  describe('if the string is empty', () => {
    it('should return empty line', () => {
      const result = addDotsToString('', 12);

      expect(result).toStrictEqual('');
    });
  });
  describe('if the lenght is 0', () => {
    it('should return letters with dots', () => {
      const result = addDotsToString('Words', 0);

      expect(result).toStrictEqual('Wo...');
    });
  });
});

describe('objectEntries()', () => {
  describe('if object is not empty', () => {
    it('should return array', () => {
      const result = objectEntries({ 2: 'apple', tea: 'cake', banana: 6 });

      expect(result).toStrictEqual([
        ['2', 'apple'],
        ['tea', 'cake'],
        ['banana', 6],
      ]);
    });
  });
  describe('if object is empty', () => {
    it('should return empty array', () => {
      const result = objectEntries({});

      expect(result).toStrictEqual([]);
    });
  });
  
});
