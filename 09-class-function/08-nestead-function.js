function add(x){
    return function(y){
        return function(z){
            return x + y + z;
        }
    }

};

const addition = add(3)(4)(5);

console.log(addition)