import * as Uuid from '../src';

const UUID = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/;

describe('Uuid', () => {

  describe('#generate', () => {
    it('returns a valid UUID string', () => {
      const uuid = Uuid.generate();
      expect(uuid).toMatch(UUID);
    });
  });

  describe('#stringToBinary', () => {
    it('converts a UUID from string to binary', () => {
      const string = '00010203-0405-0607-0809-0a0b0c0d0e0f';
      const binary = Buffer.from([...Array(16).keys()]); // [0, 1, ..., 15]
      expect(Uuid.stringToBinary(string)).toEqual(binary);
    });

    it('throws error when called with invalid UUID', () => {
      const invalid = 'not-a-uuid';
      expect(() => Uuid.stringToBinary(invalid)).toThrow('Invalid UUID');
    });
  });

  describe('#binaryToString', () => {
    it('converts a UUID from binary to string', () => {
      const binary = Buffer.from([...Array(16).keys()]); // [0, 1, ..., 15]
      const string = '00010203-0405-0607-0809-0a0b0c0d0e0f';
      expect(Uuid.binaryToString(binary)).toEqual(string);
    });

    it('throws error when called with invalid UUID', () => {
      const invalid = Buffer.from([1, 2, 3, 4]);
      expect(() => Uuid.binaryToString(invalid)).toThrow('Invalid UUID');
    });
  });
});
