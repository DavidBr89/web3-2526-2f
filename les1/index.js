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

// Simuleren pizza restaurant

// Stap 1: Deeg uitrollen
// setTimeout(() => {
//   console.log("Deeg uitgerold");
//   // Stap 2: Toppings erop
//   setTimeout(() => {
//     console.log("Toppings liggen erop");
//     // Stap 3: Pizza in de oven
//     setTimeout(() => {
//       console.log("Pizza is gebakken");
//     }, 500);
//   }, 2000);
// }, 1000);

// Promises

// Producing code -> meestal gaan we dit zelf niet schrijven

const myPromise = new Promise((resolve, reject) => {
  // API call
  // fetch("https://google.com")

  // GET request vertrokken
  setTimeout(() => {
    // Resultaat van de server ontvangen
    const isSuccess = false;
    if (isSuccess) {
      const data = [{ id: 1, name: "Web 3" }];

      resolve(data);
    } else {
      reject({ code: 500, msg: "Fout!" });
    }
  }, 1000);
});

myPromise
  .then((data) => {
    console.log("Promise fulfilled: ", data);
  })
  .catch((err) => {
    console.log("Promise rejected: ", err);
  });

// Uitleg voor het chainen van methodes
const naivePromise = {
  then: function () {
    console.log("THEN");
    return this;
  },
  catch: function () {
    console.log("CATCH");
    return this;
  },
  finally: function () {
    console.log("FINALLY");
  },
};

naivePromise.then().catch().finally();

// Pizza voorbeeld met Promises

const doughPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Deeg is uitgerold");
  }, 1000);
});

const toppingsPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Toppings liggen erop");
  }, 2000);
});

const ovenPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    const isOvenBroken = true;
    if (!isOvenBroken) {
      resolve("Pizza is gebakken");
    } else {
      reject("Oven is kapot");
    }
  }, 500);
});

// ovenPromise.catch((err) => console.log(err));

// doughPromise
//   .then((msg) => {
//     console.log(msg);
//     return toppingsPromise;
//   })
//   .then((toppingsMsg) => {
//     console.log(toppingsMsg);
//     return ovenPromise;
//   })
//   .then((ovenMsg) => {
//     console.log(ovenMsg);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

// Promise.all

Promise.all([doughPromise, ovenPromise, toppingsPromise])
  .then((arrOfData) => {
    console.log(arrOfData);
  })
  .catch((arrOfErrors) => {
    console.log(arrOfErrors);
  });

// ASYNC / AWAIT

const handlePizzaResto = async () => {
  try {
    const doughData = await doughPromise;
    console.log("ASYNC/AWAIT", doughData);
    const toppingsData = await toppingsPromise;
    console.log("ASYNC/AWAIT", toppingsData);
    const ovenData = await ovenPromise;
    console.log("ASYNC/AWAIT", ovenData);
  } catch (error) {
    console.log(error);
  }
};

handlePizzaResto();

const sumFn = () => {};

const anotherFunc = (a, cb) => {
  cb(a);
};

anotherFunc(5, () => {});

const anotherAnotherFunc = () => {
  return () => {};
};

const returnOfAnotherAnotherFunc = anotherAnotherFunc();
returnOfAnotherAnotherFunc();
