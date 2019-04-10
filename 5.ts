{
  abstract class Animal {
    protected kind: string;
    constructor(kind: string) {
      this.kind = kind;
    }
    move(): void {}
    abstract makeNoice(): void // 抽象类不能创建实例
  }

  class Human extends Animal {
    static xxx = 1;
    public name: string;
    private _age: number;
    get age() {
      return this._age;
    }
    set age(value: number) {
      if (value < 0) {
        this._age = 0;
      } else {
        this._age = value;
      }
    }
    private secret: string;
    constructor(name: string, age: number) {
      super('哺乳动物');
      this.name = name;
      this.age = age;
      this.secret = '秘密';
    }
    move(): void {
      console.log(`${this.kind}move`);
    }
    makeNoice(): void {
      console.log('say chinese');
    }
  }

  let bin = new Human('aibin', 18); 
  console.log(bin);
  // console.log(bin.secret);
}