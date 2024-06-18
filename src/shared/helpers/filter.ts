export const getUnique = <T>(values: T[], by: keyof T): string[] => {
  const uniques = values.map((value) => String(value[by]) as unknown as string);
  return Array.from(new Set(uniques)).sort();
};
