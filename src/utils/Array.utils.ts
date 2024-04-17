export default abstract class ArrayUtils {
  static createRange(start: number, end: number) {
    const result: number[] = [];

    for (let i = start; i <= end; i++) {
      result.push(i);
    }

    return [...result];
  }

  static toMatrix<Position>(array: Array<Position>, max: number) {
    const result: Array<Array<Position>> = [];

    if (!max) return [];

    for (let i = 0; i < array.length; i++) {
      const indexToPush = Math.trunc(i / max);

      if (result[Number(indexToPush)] === undefined) {
        result.push([array[Number(i)]]);
      } else {
        result[Number(indexToPush)].push(array[Number(i)]);
      }
    }
    return result;
  }

  static filterMap<ArrayType extends unknown[], MapReturn>(
    arr: ArrayType | undefined,
    filterFn: (filterItem: ArrayType[number], ...rest: unknown[]) => boolean,
    mapFn: (mapItem: ArrayType[number], index?: number, array?: ArrayType, ...rest: unknown[]) => MapReturn
  ) {
    if (!Array.isArray(arr)) {
      return [];
    }
    const isFunction = (fn: (funcItem: ArrayType) => unknown) => typeof fn === 'function';
    return arr.reduce((acc, current, index) => {
      if (isFunction(filterFn) && filterFn(current) === false) return acc;
      const newItem = isFunction(mapFn) ? mapFn(current, index, arr as ArrayType) : current;
      return [...(acc as unknown[]), newItem];
    }, []) as MapReturn[];
  }
}
