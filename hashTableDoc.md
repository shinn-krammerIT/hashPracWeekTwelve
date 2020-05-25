#Hash Tables
A way I used to visualize hash tables was when I was given this analogy by my professor a couple of years back. 
A linked list is like a  fancy train with one sleeping quarters per cart. Sometimes if you go to the next cart you can't go back to the one before if the train is made that way. 
A hash table on the other hand is like having one big cart with a bunch of sleeping cabins in it and each cabin has a door with it's own addressed number. 

Not only that but hash tables are way easier to visualize with tables. 

Keys | Hash function | Buckets
---|---|---
item1 | -> | 01 - hashNum
item2 | -> | 05 - hashNum
item3 | -> | 02 - hashNum
etc | -> | etc

---

To create a Hash Table class you need to have a table map constructor, a str to hash int function, a set function, a get function. 
For extras I would have a reprobing function which will change the position of the data if it is allocated to the same hash value. Quadratic rehashing is what I would use. And I would add a remove data function that deletes specified data at request. 

