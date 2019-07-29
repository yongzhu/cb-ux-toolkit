/*
    USE EXAMPLE
    @propertyMap('title')
      public name: string;
*/

export function propertyMap(sourceProperty: string|string[]) {
  return (target: any, propertyKey: string) => {
    if (!target.constructor._propertyMap){
      target.constructor._propertyMap = {};
    }
    target.constructor._propertyMap[propertyKey] = sourceProperty;
  };
}

