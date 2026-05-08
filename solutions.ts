// problem -1 solution

function filterEvenNumbers(numbers: number[]): number[] {
  return numbers.filter((num) => num % 2 === 0);
}

// problem -2 solution
function reverseString(str: string): string {
  return str.split("").reverse().join("");
}

// problem -3 solution

type StringOrNumber = string | number;
function checkType(value: StringOrNumber): string {
  if (typeof value === "string") {
    return "String";
  }
  return "Number";
}

// problem -4 solution

const user = { id: 1, name: "John Doe", age: 21 };
function getProperty<T, K extends keyof T>(obj: T, key: K): T[K] {
  return obj[key];
}

// problem -5 solution
interface Book {
  title: string;
  author: string;
  publishedYear: number;
}

function toggleReadStatus(book: Book): Book & { isRead: boolean } {
  return {
    ...book,
    isRead: true,
  };
}

const myBook: Book = {
  title: "TypeScript Guide",
  author: "Jane Doe",
  publishedYear: 2024,
};

// problem -6 solution
class Person {
  name: string;
  age: number;
  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
}

class Student extends Person {
  grade: string;
  constructor(name: string, age: number, grade: string) {
    super(name, age);
    this.grade = grade;
  }

  getDetails(): string {
    return `Name: ${this.name}, Age: ${this.age}, Grade: ${this.grade}`;
  }
}

// problem -7 solution
