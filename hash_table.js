class HashTable {
  constructor(size) {
    this.data = new Array(size);
  }
  hashMethod(key) {
    let hash = 0;
    for (let i = 0; i < key.length; i++) {
      hash = (hash + key.charCodeAt(i) * i) % this.data.length;
    }
    return hash;
  }
  set(key, value) {
    const address = this.hashMethod(key);
    if (!this.data[address]) {
      this.data[address] = [];
    }
    this.data[address].push([key, value]);
    return this.data;
  }
  get(key) {
    const address = this.hashMethod(key);
    const currentBucket = this.data[address];
    if (currentBucket) {
      for (let i = 0; i < currentBucket.length; i++) {
        if (currentBucket[i][0] === key) {
          return currentBucket[i][1];
        }
      }
    } else {
      return undefined;
    }
  }
  remove(key){
    const address = this.hashMethod(key);
    let found = false;
    for(let i = 0; i < this.data[address].length; i++){
      if(found){
        this.data[address][i - 1] = this.data[address][i];
      }
      if(this.data[address][i][0] === key){
        delete this.data[address][i];
        found = true;
      }
    }
    if(found){
      this.data[address].pop();
      return true;
    }else{
      return false;
    }
  }
  keys(){
    return this.data.flat().map(value => value[0]);
  }
}

const myHashTable = new HashTable(50);
{
myHashTable.set("Julian", 2003);
myHashTable.set("Jasmine", 2001);
myHashTable.set("Milo", 1998);
myHashTable.set("Isla", 2002);
myHashTable.set("Oscar", 1997);
myHashTable.set("Aurora", 1999);
myHashTable.set("Sebastian", 2004);
myHashTable.set("Brielle", 2005);
myHashTable.set("Declan", 1996);
myHashTable.set("Penelope", 1995);
myHashTable.set("Leo", 2000);
myHashTable.set("Chloe", 1998);
myHashTable.set("Ethan", 1999);
myHashTable.set("Eleanor", 2003);
myHashTable.set("Nicholas", 1996);
myHashTable.set("Madelyn", 2002);
myHashTable.set("Gideon", 2005);
myHashTable.set("Lila", 1997);
myHashTable.set("Ezra", 2006);
myHashTable.set("Sadie", 2000);
myHashTable.set("Max", 1993);
myHashTable.set("Delilah", 1999);
myHashTable.set("Adam", 2004);
myHashTable.set("Gianna", 2003);
myHashTable.set("Isaiah", 1994);
myHashTable.set("Sofia", 2002);
myHashTable.set("Nolan", 1999);
myHashTable.set("Leah", 2004);
myHashTable.set("Josie", 2006);
myHashTable.set("Jack", 2003);
myHashTable.set("Lillian", 1991);
myHashTable.set("Ryan", 1998);
myHashTable.set("Violet", 2001);
myHashTable.set("Julia", 1992);
myHashTable.set("Atticus", 1995);
myHashTable.set("Naomi", 2006);
myHashTable.set("Maddox", 2001);
myHashTable.set("Cecilia", 1996);
myHashTable.set("Micah", 1994);
myHashTable.set("Lydia", 2000);
myHashTable.set("Braxton", 1999);
myHashTable.set("Nora", 1994);
myHashTable.set("Parker", 2004);
myHashTable.set("Ellie", 2002);
myHashTable.set("Colin", 1993);
myHashTable.set("Adeline", 2006);
myHashTable.set("Tristan", 1991);
myHashTable.set("Maeve", 2005);
myHashTable.set("Jude", 1992);
myHashTable.set("Arianna", 2000);
myHashTable.set("Maxwell", 2003);
myHashTable.set("Harper", 1996);
myHashTable.set("Bennett", 2006);
myHashTable.set("Rylee", 2002);
myHashTable.set("Griffin", 1995);
myHashTable.set("Elise", 1998);
myHashTable.set("Wesley", 2001);
myHashTable.set("Avery", 1993);
myHashTable.set("Maximus", 1994);
myHashTable.set("Lucy", 2005);
myHashTable.set("Camden", 2006);
myHashTable.set("Hannah", 1997);
myHashTable.set("Aubree", 2004);
myHashTable.set("Eli", 1999);
myHashTable.set("Harlow", 2001);
myHashTable.set("Asher", 1996);
myHashTable.set("Makayla", 2000);
myHashTable.set("Diego", 1990);
myHashTable.set("Felipe", 1996);
myHashTable.set("Mariana", 1998);
myHashTable.set("Eduardo", 2000);
myHashTable.set("Miguel", 2001);
myHashTable.set("Sophia", 1995);
myHashTable.set("Liam", 1992);
myHashTable.set("Emma", 2003);
myHashTable.set("Ethan", 1999);
myHashTable.set("Ava", 2002);
myHashTable.set("Noah", 1998);
myHashTable.set("Isabella", 2001);
myHashTable.set("Oliver", 2005);
myHashTable.set("Mia", 1997);
myHashTable.set("Evelyn", 1994);
myHashTable.set("William", 2004);
myHashTable.set("Sofia", 1993);
myHashTable.set("James", 2000);
myHashTable.set("Charlotte", 1999);
myHashTable.set("Benjamin", 1996);
myHashTable.set("Amelia", 2006);
myHashTable.set("Lucas", 2002);
myHashTable.set("Harper", 1991);
myHashTable.set("Henry", 1990);
myHashTable.set("Avery", 1998);
myHashTable.set("Alexander", 1997);
myHashTable.set("Ella", 2003);
myHashTable.set("Michael", 1992);
myHashTable.set("Abigail", 1993);
myHashTable.set("Daniel", 2001);
myHashTable.set("Emily", 1996);
myHashTable.set("Matthew", 2004);
myHashTable.set("Madison", 1995);
myHashTable.set("Joseph", 1994);
myHashTable.set("Elizabeth", 1999);
myHashTable.set("Owen", 2000);
myHashTable.set("Chloe", 2002);
myHashTable.set("Jacob", 1997);
myHashTable.set("Grace", 1998);
myHashTable.set("Logan", 1991);
myHashTable.set("Eleanor", 1992);
myHashTable.set("Lucy", 2003);
myHashTable.set("Jack", 2004);
myHashTable.set("Caroline", 2005);
myHashTable.set("Ryan", 1990);
myHashTable.set("Claire", 1994);
myHashTable.set("Nicholas", 1995);
myHashTable.set("Lila", 2001);
myHashTable.set("Samuel", 1996);
myHashTable.set("Aria", 1997);
myHashTable.set("Joshua", 2006);
myHashTable.set("Nora", 1993);
myHashTable.set("Christopher", 1998);
myHashTable.set("Audrey", 1999);
myHashTable.set("Nathan", 2000);
myHashTable.set("Lila", 2001);
myHashTable.set("Olivia", 1995);
myHashTable.set("Aiden", 2002);
myHashTable.set("Avery", 1998);
myHashTable.set("Zoe", 2005);
myHashTable.set("Mason", 2004);
myHashTable.set("Hazel", 1993);
myHashTable.set("Logan", 1991);
myHashTable.set("Emma", 2003);
myHashTable.set("Wyatt", 1996);
myHashTable.set("Aria", 1997);
myHashTable.set("Luke", 2000);
myHashTable.set("Evelyn", 1994);
myHashTable.set("Jacob", 1997);
myHashTable.set("Mia", 1997);
myHashTable.set("Carter", 2003);
myHashTable.set("Natalie", 1999);
myHashTable.set("Landon", 2002);
myHashTable.set("Victoria", 1996);
myHashTable.set("Lucas", 2002);
myHashTable.set("Audrey", 1999);
myHashTable.set("Gabriel", 2006);
myHashTable.set("Amelia", 2006);
myHashTable.set("Levi", 1998);
myHashTable.set("Grace", 1998);
myHashTable.set("Cameron", 1995);
myHashTable.set("Lily", 2001);
myHashTable.set("Elijah", 2004);
myHashTable.set("Claire", 1994);
myHashTable.set("Nora", 1993);
myHashTable.set("Isaac", 2005);
myHashTable.set("Caroline", 2005);
myHashTable.set("Asher", 1992);
myHashTable.set("Aubrey", 1990);
myHashTable.set("Gavin", 2001);
myHashTable.set("Makayla", 1999);
myHashTable.set("Brayden", 2003);
myHashTable.set("Aaliyah", 2004);
myHashTable.set("Connor", 1996);
myHashTable.set("Kaylee", 1997);
myHashTable.set("Daniel", 2001);
myHashTable.set("Stella", 2000);
myHashTable.set("Owen", 2000);
myHashTable.set("Genesis", 2002);
myHashTable.set("Josiah", 1998);
myHashTable.set("Jocelyn", 1991);
myHashTable.set("Nathan", 2000);
myHashTable.set("Alyssa", 2006);
myHashTable.set("Dominic", 1994);
myHashTable.set("Mackenzie", 1992);
}

console.table(myHashTable.data);

console.log(myHashTable.get("Diego"));
console.log(myHashTable.get("Marlon"));
console.log(myHashTable.get("Abigail"));

console.log(myHashTable.remove("Adeline"))

console.table(myHashTable.data);

console.log(myHashTable.keys())

