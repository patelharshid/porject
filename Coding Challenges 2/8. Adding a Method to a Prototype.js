function Student(name)
{
    this.name=name;
}
Student.prototype.print=function(){
    console.log(`hello ,my name is ${this.name}`);
};

const har=new Student("harshid");
har.print();

  