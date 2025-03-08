export function createObject<T>(
  data: Record<string, unknown>,
  searchKey: string
): Record<string, T> {
  return Object.keys(data).reduce((acc, key) => {
    if (
      typeof data[key] === "string" &&
      data[key]?.trim().length &&
      key.startsWith(searchKey)
    ) {
      return { ...acc, [key]: data[key as keyof typeof data] };
    }
    return acc;
  }, {});
}
