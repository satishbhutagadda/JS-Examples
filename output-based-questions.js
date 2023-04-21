async function check() {
    var pro = (x) => {
    return new Promise(function(resolve, reject) {
        setTimeout(function(){
          resolve(console.log('inside timeout ' + x));
        }, x);
    });
    }
    var arr = [1000]
    console.log('before');
    arr.forEach(async i=>{
        await pro(i)
        console.log('after await')
    })
    console.log('after');
}
// check();

// Output: before > after > inside timeout 1000 > after await

// ***************************************// End //************************************** //

var foo = [];
for(var i=0;i<10;i++) {
    (function(){
        var y = i;
        foo[i] = function() {
            return y;
        };
    })()
}
// console.log(foo[2]());
// Output: 2

// ***************************************// End //************************************** //

class DS{
    constructor(x){
        this.x = x;
    }
    static addDSTest(f, b){
        return f.x + b.x + b.y;
    }
}
class Test extends DS{
    constructor(x, y){
        super(x);
        this.y = y;
    }
}
let f = new DS(5);
let b = new Test(5, 5);
// console.log(Test.addDSTest(f, b));

// Output: 15

// ***************************************// End //************************************** //