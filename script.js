//console.log('hello world')

var a = "hello"
var b = "Rajesh"
first();
function first(){
    var b = 'hi'
    second();
    function second(){
        var b = 'hey' 
        console.log(this)     
    }
    console.log(b);
}
console.log(b)