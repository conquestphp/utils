// import { describe, it, expect } from 'vitest';
// import { abbreviate, clamp, fileSize, format, ordinal } from '../src/numbers';

// it('should abbreviate numbers correctly', () => {
//     expect(abbreviate(1000)).toBe('1K');
//     expect(abbreviate(1500)).toBe('1.5K');
//     expect(abbreviate(1000000)).toBe('1M');
//     expect(abbreviate(1500000)).toBe('1.5M');
//     expect(abbreviate(1000000000)).toBe('1B');
// });

// it('should clamp numbers within the given range', () => {
//     expect(clamp(5, 0, 10)).toBe(5);
//     expect(clamp(-5, 0, 10)).toBe(0);
//     expect(clamp(15, 0, 10)).toBe(10);
// });

// it('should format file sizes correctly', () => {
//     expect(fileSize(0)).toBe('0 Bytes');
//     expect(fileSize(1023)).toBe('1023 Bytes');
//     expect(fileSize(1024)).toBe('1 KB');
//     expect(fileSize(1048576)).toBe('1 MB');
//     expect(fileSize(1073741824)).toBe('1 GB');
//     expect(fileSize(1099511627776)).toBe('1 TB');
// });

// it('should format numbers with default precision and locale', () => {
//     expect(format(1234.5678)).toBe('1,234.57');
//     expect(format(1234.5)).toBe('1,234.5');
//     expect(format(1234)).toBe('1,234');
// });

// it('should format numbers with custom precision', () => {
//     expect(format(1234.5678, 3)).toBe('1,234.568');
//     expect(format(1234.5678, 1)).toBe('1,234.6');
// });

// it('should format numbers with custom locale', () => {
//     expect(format(1234.56, 2, 'de-DE')).toBe('1.234,56');
// });

// it('should return correct ordinal suffixes', () => {
//     expect(ordinal(1)).toBe('1st');
//     expect(ordinal(2)).toBe('2nd');
//     expect(ordinal(3)).toBe('3rd');
//     expect(ordinal(4)).toBe('4th');
//     expect(ordinal(11)).toBe('11th');
//     expect(ordinal(21)).toBe('21st');
//     expect(ordinal(22)).toBe('22nd');
//     expect(ordinal(23)).toBe('23rd');
//     expect(ordinal(100)).toBe('100th');
//     expect(ordinal(101)).toBe('101st');
// })
