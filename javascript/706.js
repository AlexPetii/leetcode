var Node = function(key, value, next = null) {
    this.key = key
    this.value = value
    this.next = next
}

var MyHashMap = function() {
    this.size = 887
    this.bucket = new Array(this.size).fill(null)
};

MyHashMap.prototype.hash = function(key){
    return key % this.size
}

MyHashMap.prototype.put = function(key, value) {
    let index = this.hash(key)
    let curr = this.bucket[index]

    if(!curr){
        this.bucket[index] = new Node(key, value)
        return
    }

    let prev = null;
    while(curr){
        if(curr.key === key){
            curr.value = value
            return
        }
        prev = curr
        curr = curr.next
    }
    prev.next = new Node(key, value)
};

MyHashMap.prototype.get = function(key) {
    let index = this.hash(key)
    let curr = this.bucket[index]

    while(curr){
        if(curr.key === key){
            return curr.value
        }
        curr = curr.next
    }
    return -1
};

MyHashMap.prototype.remove = function(key) {
    let index = this.hash(key)
    let curr = this.bucket[index]
    let prev = null

    while(curr){
        if(curr.key === key){
            if(prev){
                prev.next = curr.next
            }else {
                this.bucket[index] = curr.next
            }return
        }
        prev = curr
        curr = curr.next
    }
};