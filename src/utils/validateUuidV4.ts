export function validateUuidV4(value: string): boolean {
  const uuidV4regex =
    /^[0-9A-F]{8}-[0-9A-F]{4}-[4][0-9A-F]{3}-[89AB][0-9A-F]{3}-[0-9A-F]{12}$/i;

  return uuidV4regex.test(value);
}
