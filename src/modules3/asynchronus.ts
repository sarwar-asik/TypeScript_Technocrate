// MOKING === don't come from database ///

interface ITodoType {
  userId: number;
  id: number;
  title: string;
  completed: false;
}

const getToDo = async (): Promise<ITodoType> => {
  const response = await fetch("https://jsonplaceholder.typicode.com/todos/1");
  const data = await response.json();

  return data;
};

const getToDoData = async (): Promise<void> => {
  const result = await getToDo();
  console.log(result);
};

getToDoData();

const makePromise = (): Promise<string> => {
  return new Promise<string>((resolved, reject) => {
    const data: string = "Data is fetched";
    if (data) {
      resolved(data);
    } else {
      reject("failed to fetch");
    }
  });
};

// for boolean typeData ////
const makePromiseBoolean2 = (): Promise<boolean> => {
  return new Promise<boolean>((resolved, reject) => {
    const data: boolean = true;
    if (data) {
      resolved(data);
    } else {
      reject("failed to fetch");
    }
  });
};

type DataType = {
  data: string;
};
// for object typeData ////
const makePromiseObject3 = (): Promise<DataType> => {
  return new Promise<DataType>((resolved, reject) => {
    const data: DataType = { data: "successfully fetched" };
    if (data) {
      resolved(data);
    } else {
      reject("failed to fetch");
    }
  });
};

const getPromiseData = async (): Promise<string> => {
  const data = await makePromise();
  return data;
};

// for boolean typeData ////
const getPromiseBoolean2 = async (): Promise<boolean> => {
  const data = await makePromiseBoolean2();
  return data;
};

// for Object typeData ////
const getPromiseBoolean3 = async (): Promise<DataType> => {
  const data = await makePromiseObject3();
  return data;
};

// const result10 = makePromise()

// for boolean typeData ////
