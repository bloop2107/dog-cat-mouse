
function Cat(){
    this.stomach = stomach;
}

Cat.prototype.eat = function(mouse){
    this.stomach.push(mouse);
}
module.exports = Cat;