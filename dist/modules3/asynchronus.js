"use strict";
// MOKING === don't come from database ///
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const getToDo = () => __awaiter(void 0, void 0, void 0, function* () {
    const response = yield fetch("https://jsonplaceholder.typicode.com/todos/1");
    const data = yield response.json();
    return data;
});
const getToDoData = () => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield getToDo();
    console.log(result);
});
getToDoData();
const makePromise = () => {
    return new Promise((resolved, reject) => {
        const data = "Data is fetched";
        if (data) {
            resolved(data);
        }
        else {
            reject("failed to fetch");
        }
    });
};
// for boolean typeData ////
const makePromiseBoolean2 = () => {
    return new Promise((resolved, reject) => {
        const data = true;
        if (data) {
            resolved(data);
        }
        else {
            reject("failed to fetch");
        }
    });
};
// for object typeData ////
const makePromiseObject3 = () => {
    return new Promise((resolved, reject) => {
        const data = { data: "successfully fetched" };
        if (data) {
            resolved(data);
        }
        else {
            reject("failed to fetch");
        }
    });
};
const getPromiseData = () => __awaiter(void 0, void 0, void 0, function* () {
    const data = yield makePromise();
    return data;
});
// for boolean typeData ////
const getPromiseBoolean2 = () => __awaiter(void 0, void 0, void 0, function* () {
    const data = yield makePromiseBoolean2();
    return data;
});
// for Object typeData ////
const getPromiseBoolean3 = () => __awaiter(void 0, void 0, void 0, function* () {
    const data = yield makePromiseObject3();
    return data;
});
// const result10 = makePromise()
// for boolean typeData ////
