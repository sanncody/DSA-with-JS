const data = [
    {
        name: "Simran",
        age: 20
    },
    {
        name: "Alex",
        age: 25
    },
    {
        name: "Justin",
        age: 22
    },
    {
        name: "John",
        age: 18
    },
];

const newData = data.filter(d => d.age > 20);
console.log(newData); // [ { name: 'Alex', age: 25 }, { name: 'Justin', age: 22 } ]

console.log(data.map(d => ({ age: 30, ...d })));
/**
 * Output
 * [
  { age: 20, name: 'Simran' },
  { age: 25, name: 'Alex' },
  { age: 22, name: 'Justin' },
  { age: 18, name: 'John' }
]
 */ 

const newArr = data.map(d => ({ ...d, Gender: "" }));

console.log(newArr);

/**
 * [
  { name: 'Simran', age: 20, Gender: '' },
  { name: 'Alex', age: 25, Gender: '' },
  { name: 'Justin', age: 22, Gender: '' },
  { name: 'John', age: 18, Gender: '' }
]
 */

const anotherArr = data.map(d => ({ ...d, Gender: d.age === 20 ? d["Gender"] = "Female" : d["Gender"] = "Male" }))
console.log(anotherArr);

/**
 * [
  { name: 'Simran', age: 20, Gender: 'Female' },
  { name: 'Alex', age: 25, Gender: 'Male' },
  { name: 'Justin', age: 22, Gender: 'Male' },
  { name: 'John', age: 18, Gender: 'Male' }
]
 */

const obj = {
    name: "A",
    address: {
        city: "Delhi"
    }
};

console.log(obj);

const copyObj = { ...obj, address: { ...obj.address } };
copyObj.address.city = "Mumbai";

console.log(copyObj);
console.log();
console.log(obj);