// import styles from "./Header.module.css";

import MyButton from "./MyButton";
import SubTitle from "./SubTitle";
import Title from "./Title";

// const logoURL: string = "https://hogent.be";
// const aNumber = 5;

// let maybeANumber: number;

// maybeANumber = "Hello world";

// maybeANumber = 10;

// console.log(typeof maybeANumber === "object")

// type ID = string | number;

// type Person = { id: ID; fName: string; lName: string; age: number };
// type CreatePerson = Omit<Person, "id">;
// type UpdatePerson = Partial<Omit<Person, "id">>;
// type Student = Person & { studentNumber: number };

// const createdPerson: CreatePerson = {
//   fName: "Tom",
//   lName: "Doe",
//   age: 23,
// };

// const updatedPerson: CreatePerson = {
//   fName: "Rik",
// };
// interface IPerson {
//   fName: string;
//   lName: string;
//   age?: number;
// }

// interface IStudent extends IPerson {
//   studentNumber: number;
// }

// const student: Student = {
//   fName: "John",
//   lName: "Doe",
//   studentNumber: 2026248623465823,
// };

// const student2: IStudent = {
//   fName: "Jane",
//   lName: "Doe",
//   studentNumber: 202624824982,
// };

// const aString = "Hello world";

// const arr: number[] = [];
// arr.push(5);
// arr.push("string");

// let tuple: [number, string] = [1, "test"];
// tuple = ["test", 2];

// console.log(student2);

// // Functies

// type sumFn = (a: number, b: number) => void;

// const sum: sumFn = (a, b) => {
//   console.log(a + "" + b);
// };

// student.age = 23;

// console.log(maybeANumber);

// function identity<T>(arg: T): T {
//   return arg;
// }
// // const identity = (arg: T ): T => {
// //   return arg;
// // };

// const value = identity<string>("Hello world");
// value.toUpperCase();

// const numberValue = identity<number>(5);
// numberValue.toString();

// const studentValue = identity<Student>({
//   fName: "David",
//   lName: "Breckx",
//   studentNumber: 23,
// });
interface HeaderProps {
  title: string;
  subtitle: string;
  width?: number;
}

const handleClick: React.MouseEventHandler<HTMLButtonElement> = (event) => {
  console.log("Geklikt op: ", event.target);
};

const Header = ({ title, subtitle, width = 150 }: HeaderProps) => {
  // const { title, subtitle } = props;

  return (
    // <div className={styles.header}>
    // <div style={{ backgroundColor: "red", width: width }}>
    <div className="bg-web-300" style={{ width: width }}>
      <Title title={title} />
      <SubTitle subTitle={subtitle} />
      <div>
        <p className="text-5xl">Test</p>
        <button>
          <div>
            <img />
            <p>Test</p>
          </div>
        </button>
      </div>
      <div>Header</div>
      <MyButton id="anotherId" onClick={handleClick} className="bg-teal-500">
        Klik mij vanuit Header
      </MyButton>
    </div>
  );
};

export default Header;
