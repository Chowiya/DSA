// DSA ARRAYS



class myFruits{
    constructor(){
        this.length="0";
        this.data={};
    }
// push method
    push(items){
      this.data[this.length]=items
      this.length++
      return this.length
    }
// get method
get(index){
    return this.data[index]
} 
}

const myList = new myFruits();
myList.push("Apple");
myList.push("banana");
myList.push("mango"); 
// get method 
console.log(myList.get(1));
