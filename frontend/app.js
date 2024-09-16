class person {
    constructor(name, age){
        this.name=name;
        this.age=age
    }
    talk(){
        console.log(`hi,my name is ${this.name}`);
    }
}

class student extends person{
    constructor(name, age, marks , study){
        super(name,age);
        this.marks=marks;
        this.study=study;
    }

}

class teacher extends person {
    constructor(name,age,subject){
        super(name,age);
        this.subject=subject;
    }
    talk(){
        console.log(`hi,my name is  ${this.name} and i will teach you ${this.subject}`);
    }

}




let s1=new student("ayush",20,90,"Python");
let s2=new student("sunny",20,89,"java");
let s3=new student("shukla",21,90,"webD");
let t1=new teacher("dwivedi",22,"english");
let t2=new teacher("bhashkar",21,"maths");