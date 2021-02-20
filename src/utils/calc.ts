import {
  confirm,
  connect,
  counter,
  frozen,
  init,
  Logger,
  prefix,
  test
} from "../decorators/common";

/** Calculator with basic operations */
@frozen
@init
@Logger('Hola Mundo!!!')
export class Calculator {
  @prefix('>>>')
  total = 0;

  constructor() {
    console.log('Calculator has been loaded...');
  }

  /** Sum any quantity of values */
  @confirm(false)
  sum(...values: number[]): number {
    return values.reduce((previous, current) => {
      return previous + current;
    });
  }

  /** Substract any quantity of values */
  // (f ∘ g)(x) es equivalente a f(g(x)).
  // (connect ∘ counter)(diff) es equivalente a connect(counter(diff)).
  @connect()
  @counter()
  @test()
  diff(...values: number[]): number {
    return values.reduce((previous, current) => {
      return previous - current;
    });
  }
}

const calc = new Calculator();
const result = calc.sum(1, 2, 3);

//console.log(calc.total);
console.log(`Resultado: ${result}`);

// for (let key in calc) {
//   console.log(`Key: ${key}`);
// }
