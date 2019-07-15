var person = {};

person.addName = function(name){
    this.name = name;
}

person.talk = function(){
    console.log('输出的姓名是'+ this.name);
}

module.exports = person;