import { v4 as uuidv4 } from 'uuid';

/**
 * Generates a random UUID.
 * @returns the UUID in string format
 */
export const generate: (() => string) = uuidv4;

/**
 * Converts a UUID in string format to binary.
 * @param uuidString a valid UUID in string format
 * @returns the UUID in binary format
 * @throws if the string is not a valid UUID
 */
export function stringToBinary(uuidString: string): Buffer {
  const hex = uuidString.replace(/-/g, '');
  const buffer = Buffer.from(hex, 'hex');

  if (buffer.length !== 16) {
    throw new Error('Invalid UUID');
  }

  return buffer;
}

/**
 * Converts a UUID in binary format to a string.
 * @param uuidBuffer a valid UUID in binary format
 * @returns the UUID in string format
 * @throws if the buffer is not a valid UUID
 */
export function binaryToString(uuidBuffer: Buffer): string {
  if (uuidBuffer.length !== 16) {
    throw new Error('Invalid UUID');
  }

  const hex = uuidBuffer.toString('hex');

  return [
    hex.slice(0, 8),
    hex.slice(8, 12),
    hex.slice(12, 16),
    hex.slice(16, 20),
    hex.slice(20, 32),
  ].join('-');
}
