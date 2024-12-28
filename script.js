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

// pop method
pop(){
    const lastItem = this.data[this.length -1]
    delete this.data[this.length -1]
    this.length--
    return lastItem
 
}
}

const myList = new myFruits();
myList.push("Apple");
myList.push("banana");
myList.push("mango"); 
myList.pop()
myList.pop()
// get method 
console.log(myList);

