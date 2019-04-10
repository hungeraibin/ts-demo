interface hasLength {
  length: number;
}

function returnIt<T extends hasLength>(sth: T): T {
  return sth;
}

let returnIt2: <X extends hasLength>(sth: X)=>X = returnIt

let s = returnIt<string>('hi');

function returnArray<T>(array: T[]):T[] {
  return array;
}

interface Human1 {
  ab: string;
}

let aa: Array<Human1> = returnArray<Human1>([{ab: 'b'}, {ab: 'c'}]);

let ss: Array<string> = ['1', '2']

interface anyAdd<T> {
  (a: T, b: T): T
}

let numberAdd: anyAdd<number> = (a: number, b: number): number => {
  return a + b;
}