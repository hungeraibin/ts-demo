// 重载
function add3(a: string, b: string): string;
function add3(a: number, b: number): number;
function add3(a, b) {
  return a + b
}

add3(1, 2)