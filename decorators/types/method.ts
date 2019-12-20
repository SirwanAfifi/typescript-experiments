export function log(
  target: Object,
  propertyKey: string,
  descriptor: PropertyDescriptor
) {
  var originalMethod = descriptor.value;
  descriptor.value = function(...args: any[]) {
    try {
      const start = performance.now();
      originalMethod(...args);
      const end = performance.now();
      console.log(end - start);
    } catch {
      console.log(`${propertyKey} has and error with these arguments: ${args}`);
    }
  };
}
