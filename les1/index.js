const student = {
  fName: "John",
  print: function () {
    console.log(this.fName);
  },
};

student.print();

const arr = [1, 2, 3, 4, 5, 6];

const somAllEven = arr.reduce((acc, val) => {
  if (val % 2 === 0) {
    return acc + val;
  }
  return acc;
}, 0);

console.log(somAllEven);

const strArr = ["test", "test1", "test2"];

const obj = strArr.reduce((acc, val, idx) => {
  return { ...acc, ["prop" + idx]: val };
}, {});

console.log(obj);

const studentObjs = [
  { id: 1, firstName: "John" },
  { id: 2, firstName: "Jane" },
  { id: 3, firstName: "Tom" },
];

const tempArr = [];
for (let i = 0; i < studentObjs.length; i++) {
  const element = studentObjs[i];

  if (element.id !== 2) {
    tempArr.push(element);
  }
}

const filteredStudents = studentObjs.filter((val) => val.id !== 2);
console.log(filteredStudents);

console.log(null == undefined);

const isTomInStudents = studentObjs.includes({ id: 3, firstName: "Tom" });
console.log(isTomInStudents);

const isTomInStudentsWithSome = studentObjs.some(
  (val) => val.firstName === "Tom",
);

console.log(isTomInStudentsWithSome);

// Rest parameter

const sum = (...args) => args.reduce((acc, val) => acc + val, 0);

sum();
sum(1, 3);
sum(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);

// Spread operator voor arrays

const firstArr = [1, 2];
const secondArr = [3, 4, 5];

const newArr = [10, 11, 12, ...secondArr, 6, 7, 8];
const copyOfFirstArr = firstArr;

copyOfFirstArr.push(250);

console.log(copyOfFirstArr);
console.log(firstArr);

// Spread operator voor objecten

const studentCopy = {
  ...student,
  studentNumber: 123243453,
  print: function () {
    console.log("Test uit kopie");
  },
};
studentCopy.fName = "David";

student.print();
studentCopy.print();

// Destructuring uit arrays

const webTitles = ["Web 1", "Web 2", "Web 3", "Mobile"];

// const web1Title = webTitles[0];
// const web2Title = webTitles[1];

const [web1Title, , web3Title, mobileTitle] = webTitles;

console.log(web3Title);

const arrNumbers = [20, 30, 40, 50, 60, 70];

// OPGELET -> Rest parameter en geen spread
const [first, second, ...rest] = arrNumbers;

// Destructuring uit objecten

const person = {
  id: 1,
  fName: "John",
  address: { street: "Arbeidstraat", number: 14, city: "Aalst" },
};

const fName = "Nicolas";

const {
  fName: voornaam,
  address,
  address: { city },
} = person;

console.log(voornaam);
console.log(address);
console.log(city);
