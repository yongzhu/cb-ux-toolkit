/*
    USE EXAMPLE
    @buildModel(target, key)
      public name: string;
*/

export function buildModel<T>(target: any, key: string) {
  let value;
  if (delete target[key]) {
    Object.defineProperty(target, key, {
      get: () => {
        if (this.value) {
          
        } else {

        }
      },
      set: (v) => {
        this.value = v;
      },
      enumerable: true,
      configurable: true
    });
  }
}

