export class ModelMapper<T> {
  _propertyMapping: any;
  _target: any;

  constructor(type: { new(): T ; }) {
    this._target = new type();
    this._propertyMapping = this._target.constructor._propertyMap;
  }

  map(source) {
    Object.keys(this._target).forEach((key) => {
      const mappedKey = this._propertyMapping[key];
      const concat: string[] = [];
      if (mappedKey) {
        if (Array.isArray(mappedKey)) {
          mappedKey.map(prop => {
            if (source[prop]) { concat.push(source[prop]); }
          });
          this._target[key] = concat.join(' ');
        } else {
          this._target[key] = source[mappedKey];
        }
      } else {
        this._target[key] = source[key];
      }
    });
    /*
    // Don't return api keys not in the map object [extra api kruft]
    Object.keys(source).forEach((key) => {
      const targetKeys = Object.keys(this._target);
      if (targetKeys.indexOf(key) === -1) {
        this._target[key] = source[key];
      }
    });
    */
    return this._target;
  }
}
