//todo divide 이라는 함수를 만들고, role 커스텀 타입을 만들어서
//todo role 타입에 따라, 어떤 값인지에 따라 각각의 값을 구분하여 console.log()로 출력하는 함수를 만드시오.
//todo enum 타입과 switch문 활용
/*
enum Role {
    ADMIN = 'admin',
    USER = 'user',
    GUEST = 'guest'
  }

const divide = (role: Role | any): => {
       
};

const Role: Role = Role.ADMIN;
console.log(someUserRole);
*/
//todo SimpleUser 라고 하는 객체 타입을 만들고, 필드는 name, age
//todo logoUser 라는 함수를 만들어서 simpleUser 타입의 인자를 받고
//todo name age를 console.log 로 출력하는 함수를 만드시오
//todo 최소 3명 이상의 simple 사용자를 만들어서 반복적으로 logUser 함수를 호출하도록 코드를 작성하시오
/*
interface SimpleUser {
    name: string;
    age: number;
}

const users: SimpleUser[] = [
    { name: 'Ann', age: 25  },
    { name: 'Bee', age: 22 },
    { name: 'Cho', age: 27 }
]


const logUser = (user: SimpleUser) => {
    console.log(`Name: ${name}, Age: ${users.age} `)
}
*/
//todo 1.

import dayjs from 'dayjs';

const schedule = {
  study: '2025-04-03',
  election: '2025-06-03',
  trip: '2025-08-01'
};

const formatDate = (date: Date) => {
  const day = dayjs(date);
  return day.format('YYYY.MM.DD');
};

schedule.study = formatDate(new Date(schedule.study));
schedule.election = formatDate(new Date(schedule.election));
schedule.trip = formatDate(new Date(schedule.trip));
console.log(schedule);

//todo 2.

// interface Item {
//   name: string;
//   category: string;
//   price: number;
//   quantity: number;
// }

// const apple: Item = {
//   name: 'apple',
//   category: 'fruit',
//   price: 800,
//   quantity: 3
// };

// const onion: Item = {
//   name: 'onion',
//   category: 'vegetable',
//   price: 1000,
//   quantity: 4
// };

// const salmon: Item = {
//   name: 'salmon',
//   category: 'fish',
//   price: 1000,
//   quantity: 3
// };

// const cart: Item[] = [apple, onion, salmon];

// const calcTotal = (items: Item[]) => {
//   let totalPrice = 0;
//   items.forEach((item) => {
//     totalPrice += item.price * item.quantity;
//   });
//   return totalPrice;
// };

// const total = calcTotal(cart);
// console.log('total:', total);

//todo 3.

enum Category {
  FRUIT = 'fruit',
  VEGETABLE = 'vegetable',
  FISH = 'fish'
}

interface Item {
  name: string;
  category: Category;
  price: number;
  quantity: number;
}

const apple: Item = {
  name: 'apple',
  category: Category.FRUIT,
  price: 800,
  quantity: 3
};

const onion: Item = {
  name: 'onion',
  category: Category.VEGETABLE,
  price: 1000,
  quantity: 4
};

const salmon: Item = {
  name: 'salmon',
  category: Category.FISH,
  price: 1000,
  quantity: 3
};

const cart: Item[] = [apple, onion, salmon];

const calcTotal = (items: Item[]) => {
  let totalPrice = 0;
  items.forEach((item) => {
    if (item.category !== Category.FRUIT) {
      totalPrice += item.price * item.quantity;
    }
  });
  return totalPrice;
};

const total = calcTotal(cart);
console.log('total:', total);
