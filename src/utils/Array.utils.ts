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
}
