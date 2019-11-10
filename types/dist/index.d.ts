declare abstract class Person {
    id: string;
    name: string;
    city: string;
    constructor(id: string, name: string, city: string);
    getDetails(): string;
    abstract getSpecificDetails(): string;
}
declare class Employee extends Person {
    readonly id: string;
    name: string;
    dept: string;
    city: string;
    getSpecificDetails(): string;
    constructor(id: string, name: string, dept: string, city: string);
    writeDept(): void;
}
declare let salesEmployee: Employee;
declare let data: any[];
