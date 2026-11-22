// function personmaker(name,age){
//     const person={
//         name  :name,
//         age : age,
//         talk(){
//             console.log("can talk");
//         }
//     }
//     return person;
// }

// function personmaker(name,age){
//     this.name=name,
//     this.age=age
// }

// personmaker.prototype.talk = function(){
//     console.log("i can  talk");
// }

// let pi1=new personmaker("aman",34);
// let pi2=new personmaker("devil",33);

class person{
     constructor(name,age){
        this.name=name,
        this.age=age
     }
      talk()
     {
        console.log("can talk");
     }
}


class teacher extends person{
    constructor(name,age,sallary)
     {
        // this.name=name,
        // this.age=age,
        super(name,age);
        this.sallary=sallary
     }
    //  talk()
    //  {
    //     console.log("can talk");
    //  }
};

class student extends person{ 
    constructor(name,age,subject){
        super(name,age);
        // this.name=name,
        // this.age=age,
        this.subject=subject
    }
    //  talk()
    //  {
    //     console.log("can talk");
    //  }
};


// let p1=personmaker("aman",22);
// let p2=personmaker("raj",33);