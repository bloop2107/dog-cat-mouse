function Dog(){
    this.stomach = stomach;
}
Dog.prototype.eat = function(cat){
    this.stomach.push(cat);
};
module.exports = Dog;