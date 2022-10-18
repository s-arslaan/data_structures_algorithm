const user = {
    name: "John",
    age: 54,
    magic: true,
    scream: function () {
        console.log("ahhhhhhhhh!");
    },
};

// log
// console.log(user.name); //O(1)

// insert
// user.spell = "abra cadabra"; //O(1)

// retrieve
// console.log(user.scream()); //O(1)

// ------------------- implementation --------------------------------

class HashTable {
    constructor(size) {
        this.data = new Array(size);
    }

    // a function that returns a hash of the data
    _hash(key) {
        let hash = 0;
        for (let i = 0; i < key.length; i++) {
            hash = (hash + key.charCodeAt(i) * i) % this.data.length;
        }
        return hash;
    }

    set(key, value) {
        this.data[key] = value;
    }

    get(key) {
        console.log(this.data[key]);
    }
}

const hashtable = new HashTable(50);
hashtable.set("grapes", 10000);
hashtable.set("apple", 20000);
hashtable.get("apple");
