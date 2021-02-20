/** Interface for a simple Quote */
export interface Quote {
  quote: string;
  author: string;
  // Llaves dinámicas:
  [key: string]: string;
}

type QuoteKey = keyof Quote;

function getPropertyValue<T, U extends keyof T>(object: T, propertyName: U): T[U] {
  return object[propertyName];
}

const quote: Quote = {
  author: 'Juansecu',
  quote: 'Happy Coding and Learning',
  date: new Date().toString()
};

const quoteContent = getPropertyValue(quote, 'quote');
const authorContent = getPropertyValue(quote, 'author');

function getProperties<T, U extends keyof T>(object: T, properties: U[]): T[U][] {
  return properties.map(propertyName => object[propertyName]);
}

getProperties(quote, ['author', 'quote', 'date']);
