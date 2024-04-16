import { type MutableRefObject, type RefCallback } from 'react';

type MutableRefList<T> = Array<RefCallback<T> | MutableRefObject<T> | undefined | null>;

export default abstract class ReactUtils {
  private static setRef<T>(val: T, ...refs: MutableRefList<T>): void {
    refs.forEach((ref) => {
      if (typeof ref === 'function') {
        ref(val);
      } else if (ref != null) {
        ref.current = val;
      }
    });
  }

  static conditionalClass(classesObject: Record<string, boolean>) {
    const keys = Object.keys(classesObject);
    return keys.reduce((acc, current) => {
      if (classesObject[`${current}`]) {
        acc += acc ? ` ${current}` : `${current}`;
      }
      return acc;
    }, '');
  }
  static mergeRefs<T>(...refs: MutableRefList<T>): RefCallback<T> {
    return (val: T) => {
      ReactUtils.setRef(val, ...refs);
    };
  }
}
