/* 
class HashTable {
    constructor( toStrFun = defaultToString) {
        this.AnyFunc
        this.table = {}
    }
}
*/

// Methods
// put(key, value)
// remove(key)
// get(key)

class HashTable {
    constructor() {
        this.AnyFunc;
        this.table = new Array(100)
    }

    strToInt(str, tableSize) {
        let hash = 17;

        for (let i = 0; i < str.length; i++) {
            hash = (hash * str.charCodeAt(i)) % tableSize;
        }

        return hash;
    }

    setItem(key, value) {
        const index = strToInt(key, this.table.length);
        this.table[index] = value;
    }

    getItem(key) {
        const index = strToInt(key, this.table.length);
        return this.table[index];
    }

}

const myTable = new HashTable();
myTable.setItem('firstName', 'Shinn');
myTable.getItem('firstName');
myTable.setItem("lastName", "Krammer");
console.log(myTable.getItem('firstName'));

// Methods
// put(key, value)
// remove(key)
// get(key)

