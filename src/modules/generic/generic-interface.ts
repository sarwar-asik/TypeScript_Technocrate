const rollNumbers: number[] = [22, 332, 11];
const rollNumbers2: Array<string> = ["11", "12", "44"];

const rollNumbers3: Array<boolean> = [true, false, true];

const rollAndAge: Array<{ name: string; age: number }> = [
  { name: "Dinki", age: 211 },
  { name: "pinki", age: 21 },
];

// or ///

type GenericArray<T> = Array<T>;

const rollNumber3: GenericArray<number> = [22, 332, 11];
const rollNumbers24: GenericArray<string> = ["11", "12", "44"];

type RollandAge5 = { name: string; age: number };

const rollAndAge2: GenericArray<RollandAge5> = [
  { name: "Dinki", age: 211 },
  { name: "pinki", age: 21 },
];

type GenericTurple<X, Y> = [X, Y];

interface salaryTypes {
  name: string;
  salary: number;
}

const relations: GenericTurple<string, number> = ["tinA", 33];
const relationSalary: GenericTurple<salaryTypes, string> = [
  { name: "KK tong", salary: 3000 },
  "Kahrina kaife",
];

interface CrushInterFace<T> {
  name: string;
  husband: T;
}

const crush10: CrushInterFace<boolean> = {
  name: "Keya",
  husband: true,
};

interface CrushInterFace<T> {
  name: string;
  husband: T;
}

const crush20: CrushInterFace<{ name: string; email: string }> = {
  name: "Keya",
  husband: {
    name: "tamim",
    email: "sss@gmail.com",
  },
};

interface CrushInterFace2<T, U = null> {
  name: string;
  husband: T;
  wife?: U;
}

const crush4: CrushInterFace2<{ name: string; age: number }, string> = {
  name: "ALia ",
  husband: {
    name: "Cintia",
    age: 22,
  },
  wife: "tAMIA",
};
