type PermissionStatus = 'granted' | 'denied' | 'undetermined';

// Recreate isGranted inline or import if defined elsewhere
const isGranted = (status: PermissionStatus) => status === 'granted';

describe('isGranted', () => {
  it.each([
    ['granted', true],
    ['denied', false],
    ['undetermined', false],
  ])('returns %s => %s', (input, expected) => {
    expect(isGranted(input as PermissionStatus)).toBe(expected);
  });
});
