// DSA ARRAYS

// push method

class myFruits{
    constructor(){
        this.length="0";
        this.data={};
    }

    push(items){
      this.data[this.length]=items
      this.length++
      return this.length
    }
}

const myList = new myFruits();
myList.push("Apple");
myList.push("banana");
myList.push("mango"); 
console.log(myList);
