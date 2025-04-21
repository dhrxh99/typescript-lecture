var number = 42;
var string = 'hello, world';
var boolean = true;
var bigint = 900021314453n;
var nullType = null;
var undefinedType = undefined;
var anyType = 'This can be anything';
var array = [1, 2, 3, 4, 5];
var array2 = ['a', 'b', 'c', 'd'];

var obj = {
  name: 'John Doe',
  age: 30,
  hobbies: ['reading', 'gaming', 'coding']
};

var constant = 'constant';
console.log(constant);

var Role;
(function (Role) {
  Role['ADMIN'] = 'admin';
  Role['USER'] = 'user';
  Role['GUEST'] = 'guest';
})(Role || (Role = {}));

var someUserRole = Role.ADMIN;
console.log(someUserRole);
