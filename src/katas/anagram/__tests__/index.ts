import isAnagram from '../index';

const trueResult = { anagram: true };
const falseResult = { anagram: false };
const trueResultAndPalindrom = { anagram: true, specific: true };

describe('isAnagram', () => {
  it('should throw error if one of the word given is an empty string', () => {
    expect(() => isAnagram('', 'word')).toThrow();
    expect(() => isAnagram('word', '')).toThrow();
  });

  it('should throw error if one of the word given is shorter than 3 cars', () => {
    expect(() => isAnagram('ab', 'bab')).toThrow();
    expect(() => isAnagram('bab', 'ba')).toThrow();
  });

  it('should return true if given words are anagrams', () => {
    expect(isAnagram('chien', 'niche')).toStrictEqual(trueResult);
    expect(isAnagram('niche', 'chien')).toStrictEqual(trueResult);
    expect(isAnagram('marie', 'maire')).toStrictEqual(trueResult);
  });

  it('should detect specific types of anagrams and set a specific flag to true if found', () => {
    expect(isAnagram('trop', 'port')).toStrictEqual(trueResultAndPalindrom);
    expect(isAnagram('port', 'trop')).toStrictEqual(trueResultAndPalindrom);
    expect(isAnagram('bar', 'rab')).toStrictEqual(trueResultAndPalindrom);
    expect(isAnagram('kayak', 'kayak')).toStrictEqual(trueResultAndPalindrom);
  });

  it('should false if given words are NOT anagrams', () => {
    expect(isAnagram('rater', 'tarte')).toStrictEqual(falseResult);
    expect(isAnagram('poule', 'poole')).toStrictEqual(falseResult);
    expect(isAnagram('arme', 'marc')).toStrictEqual(falseResult);
  });
});
