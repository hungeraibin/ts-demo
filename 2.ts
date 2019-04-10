enum Gender {
  Man = 3,
  Woman = 6
}

let gender: Gender = Gender.Man;
gender = Gender.Woman;
console.log(gender);

function print(x: any): void {
  console.log(x);
}

let n2: any = '123';
console.log((<string>n2).split(''));