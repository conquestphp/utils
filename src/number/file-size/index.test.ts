import { it, expect } from 'vitest';
import { fileSize } from '.';

it('should format file sizes correctly', () => {
    expect(fileSize(0)).toBe('0 Bytes');
    expect(fileSize(1023)).toBe('1023 Bytes');
    expect(fileSize(1024)).toBe('1 KB');
    expect(fileSize(1048576)).toBe('1 MB');
    expect(fileSize(1073741824)).toBe('1 GB');
    expect(fileSize(1099511627776)).toBe('1 TB');
});