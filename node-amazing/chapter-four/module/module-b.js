module.exports = person;

function person(name){
    this.name = name;
}

person.prototype.talk = function(){
    
    this.name && console.log('我的名字是'+this.name);
}