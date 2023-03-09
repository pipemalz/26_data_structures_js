class MyArray {

    constructor(){
        this.length = 0;
        this.data = {};
    }

    get(index){
        return this.data[index];
    }

    push(item){
        this.data[this.length] = item;
        this.length++;
        return this.data;
    }

    pop(){
        const lastItem = this.data[this.length-1];
        delete this.data[this.length-1];
        this.length--;
        return lastItem;
    }

    delete(index){
        if(index === this.length-1){
            this.pop();
        }else{
            this.#shiftIndex(index);
        }
        return this.data;
    }

    #shiftIndex(index){
        for(let i = index; i < this.length - 1; i++){
            this.data[i] = this.data[i+1];
        }
        this.pop();
    }

    shift(){
        const firstItem = this.data[0];
        delete this.data[0];
        this.#shiftIndex(0);
        return firstItem;
    }

    unshift(value){
        for(let i = this.length - 1; i >= 0; i--){
            this.data[i+1] = this.data[i] 
        }
        this.data[0] = value;
        this.length++;
        return this.length;
    }
}

const data = new MyArray();
data.push('Diego');

data.push('Camilo');

data.push('Clara');

data.push('Hernando');

console.log(data.shift())

console.log(data)

console.log(data.unshift('Carlos'));

console.log(data);

