type CriteriaFunction<T> = (item: T) => string;

export default function groupBy<T>(
  array: T[],
  criteria: CriteriaFunction<T>
): { [key: string]: T[] } {
  const sortedArray = array.reduce(
    (accumulator: { [key: string]: T[] }, currentValue: T) => {
      const key = criteria(currentValue);

      if (!accumulator[key]) {
        accumulator[key] = [];
      }

      accumulator[key].push(currentValue);

      return accumulator;
    },
    {}
  );

  return sortedArray;
}
