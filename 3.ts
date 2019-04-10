interface Shape {
  head: string;
  body: string;
}

interface Human {
  readonly name: string;
  age: number;
  shape: Shape;
  likedGame?: Array<string>;
  say(word: string): void;
  // [propName: string]: any;
}

let bin: Human = { 
  name: 'bin',
  age: 18,
  shape: { head: '', body: '' },
  say(word: string) { console.log(word) }
}

bin.say('hi')

interface func {
  (a: number, b: number): number;
}

let add:func = function(a: number, b:number): number {
  return a + b;
}

console.log(add(1, 2));

interface func2 {
  (a: number, b: number): number;
  sub(a: number, b: number): number;
}

let fn = (): func2 => {
  let x: any = function(a: number, b: number): number {
    return a + b;
  }

  x.sub = function(a: number, b: number): number {
    return a - b;
  }
  return x;
}

let add2: func2 = fn();

console.log(add2(1, 2));

interface Animal {
  move(): void;
}

interface Man extends Animal {
  name: string;
  age: number;
}

let ai: Man = {
  name: 'aibin',
  age: 18,
  move() {
    console.log('move');
  }
}
