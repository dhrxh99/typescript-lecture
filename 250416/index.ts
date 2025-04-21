let number: number = 42;
let string: string = 'hello, world';
let boolean: boolean = true;
const bigint: bigint = 900021314453n;
const nullType: null = null;
const undefinedType: undefined = undefined;
const anyType: any = 'This can be anything';

const array: number[] = [1, 2, 3, 4, 5];
const array2: string[] = ['a', 'b', 'c', 'd'];

const obj: { [key in string]: string | number } = {
  name: 'John Doe',
  age: 30
  // hobbies: ['reading', 'gaming', 'coding']
};

type StringOrNumberType = string | number;
const constant: StringOrNumberType = 'constant';
console.log(constant);

// enum Role {
//   ADMIN = 'admin',
//   USER = 'user',
//   GUEST = 'guest'
// }

// const someUserRole: Role = Role.ADMIN;
// console.log(someUserRole);

const func = (
  arg: string /*타입정의*/
): string /*반환 타입*/ => {
  console.log(arg);
  return arg;
};

const result = func('Hello, TS!');

// 작성하는 자리
