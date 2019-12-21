export class APIServer {
  constructor(public routes: string[]) {}

  @enumerable(true)
  getRoutes() {
    return this.routes;
  }
}

function enumerable(val: boolean) {
  return function(
    target: Object,
    propertyKey: string,
    descriptor: PropertyDescriptor
  ) {
    descriptor.enumerable = val;
  };
}
