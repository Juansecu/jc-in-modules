/** Interface for a simple Joke */
export interface Joke<T> {
  body: T;
  category: T;
  // Llaves dinámicas:
  [key: string]: T;
}

/** Interface for a complicated Joke */
export interface ComplicatedJoke extends Joke<string> {
  level: string;
}

const joke: Joke<string> = {
  body: 'Esta es una broma',
  category: 'Broma simple',
  name: 'Joker',
  title: 'Joker'
}

function random<T, U>(value: T, description: U): T {
  const result: T = value;
  console.log(`value: ${value} - description: ${description}`);
  return result;
}

const answer = random<boolean, string>(true, 'Hola');
