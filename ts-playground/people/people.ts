abstract class Employee {

    public name;
    public age;
    public salary;
    public tasks;

    constructor (name: string, age: Number) {
        this.name = name;
        this.age = age;
        this.salary = 0;
        this.tasks = [];
    }

    public work(): void {
        const currentTask = this.tasks.shift();
        this.tasks.push(currentTask);
        console.log(this.name + currentTask);
    }

    public connectSalary() {
        console.log(`${this.name} received ${this.getSalary()}`)
    }

    public getSalary(): Number {
        return this.salary;
    }

}

class Junior extends Employee {
    constructor(name: string, age: Number) {
        super(name, age);
        this.tasks.push(` is working on a simple task.`);
    };
}

class Senior extends Employee {
    constructor(name: string, age: number) {
        super(name, age);
        this.tasks.push(` is working on a complicated task.`);
        this.tasks.push(` is taking time off work.`);
        this.tasks.push(` is supervising junior workers.`);

    }
}

class Manager extends Employee {
    public divident;
    constructor(name: string, age: number){
        super(name, age);
        this.divident = 0;
        this.tasks.push(` scheduled a meeting.`);
        this.tasks.push(` is preparing a quarterly report.`);
    }

    public getSalary(): Number {
        return this.salary + this.divident;
    }
}