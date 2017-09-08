var name = 'Søren';
name = 22;

var food = {
    type : 'apple',
    taste : 'Sour',
    price : 44,

    info : function(){
        return this.type + this.taste + this.price;
    },

    specs : ['Hello', 'FJFJFJFFJ', 0909909, {name : 'Søren'}],
    orm : {
        name : 'Olfot',
        age : 23,
    }
};

console.log(food.type);
food.type = 'Organe';
console.log(food.type);
food.xxx = 'blablabla';
console.log(food.xxx);
console.log(food.info());


var x = function(){
    return 'Hello';
}

x();