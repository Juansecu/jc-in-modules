export function Logger(message: string): Function {
  //console.log(`Mensaje: ${message}`);

  return function target(target: any) {
    //console.log(`Clase decorada: ${target}`);
    //console.log(target);
  };
}

export function connect() {
  console.log('Decorador CONNECT --> evaluado');
  return function (
    target: any,
    propertyKey: string,
    descriptor: PropertyDescriptor
  ) {
    console.log('Decorador CONNECT  --> invocado');
  };
}

export function counter() {
  console.log('Decorador COUNTER --> evaluado');
  return function (
    target: any,
    propertyKey: string,
    descriptor: PropertyDescriptor
  ) {
    console.log('Decorador COUNTER  --> invocado');
  };
}

export function test() {
  console.log('Decorador TEST --> evaluado');
  return function (
    target: any,
    propertyKey: string,
    descriptor: PropertyDescriptor
  ) {
    console.log('Decorador TEST  --> invocado');
  };
}

export function init<T extends {new (...args: any[]): {}}>(constructor: T) {
    console.log(constructor);
    return class extends constructor {
        total = 10;
        description = 'Nueva propiedad';
    };
}

// Decoradores de clases:
export function frozen(constructor: Function) {
    Object.freeze(constructor);
    Object.freeze(constructor.prototype);
}

// Decoradores de métodos:
export function confirm(status: boolean) {
    return function(
        target: Object,
        key: string | symbol,
        descriptor: PropertyDescriptor
    ) {
        // console.log(descriptor.value);
        const original = descriptor.value;

        descriptor.value = function(...args: any[]) {
            if (status) {
                const result = original.apply(this, args);
                return result;
            } else return 0;
        }
    };
}

// Decoradores de propiedades:
export function prefix(label: string) {
    return function(target: any, key: string) {
        let value = target[key];

        const getter = () => {
            return value;
        }

        const setter = (next: string) => {
            console.log('Actualizando valor...');
            value = `${label} ${next}`;
        }

        Object.defineProperty(target, key, {
            get: getter,
            set: setter,
            enumerable: true,
            configurable: true
        });
    };
}