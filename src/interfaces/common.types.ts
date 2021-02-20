/** Fact types per kind of content */
import { Joke, Quote, Riddle } from './index'

/** Fact types per kind of content */
// export type Fact = Quote | Quote[] | Joke<string> | Riddle | string;
// Alias genericos
export type Fact<T, U = {}> = T | U;

const joke: Fact<Joke<string>> = {
    body: 'UwU',
    category: 'Huhuhu'
};

const quote: Fact<Quote, Riddle> = {
    author: 'Juansecu',
    quote: 'Happy Coding and Learning',
    riddle: 'Agua pasa por mi casa, cate de mi corazón',
    answer: 'Aguacate'
};

const riddle: Fact<Riddle> = {
    riddle: 'Agua pasa por mi casa, cate de mi corazón',
    answer: 'Aguacate'
};

const riddleArr: Fact<Riddle[]> = [
    {
        riddle: 'Agua pasa por mi casa, cate de mi corazón',
        answer: 'Aguacate'
    },
    {
        riddle: 'Agua pasa por mi casa, cate de mi corazón',
        answer: 'Aguacate'
    },
    {
        riddle: 'Agua pasa por mi casa, cate de mi corazón',
        answer: 'Aguacate'
    }
];