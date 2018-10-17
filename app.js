// var time = 0;
// var timer = setInterval(function(){ 
//     time+=1 ;
//     time > 5?clearInterval(timer):console.log(time+' sec passes.');
// },1000);


// console.log(__dirname)
// console.log(__filename)

/*function fun1(fun){
    fun();
}
var fun2 = function(){
    console.log('function 1 exe complete\nfuncion2 exe start');
}
fun1(fun2);*/

// var counter = function(arr){
//     return 'There are '+arr.length+' of elements in this array.';
// }
//TODO Module, Require, Exports Demos
// var utils =require('./src/helper/Util')
// console.log(utils.getString(['Hiren', 'Bhargav', 'Ashvin']));
// console.log(utils.counter(['Hiren', 'Bhargav', 'Ashvin']));

//TODO Simple Emit Demo
// var events = require('events');
// var myEmitter = new events.EventEmitter();
// myEmitter.on('test1',(msg)=>{ console.log("event "+msg+" Emit.")})
// myEmitter.on('test2',(msg)=>{ console.log("event "+msg+" Emit.")})
// myEmitter.emit('test1',"test 1");
// myEmitter.emit('test2',"test 2");

//TODO Multiple Type and obj Demo
var events = require('events');
var util = require('util');
var Person = function(name){
    this.name = name ;
}
util.inherits(Person, events.EventEmitter);
var hiren = new Person('Hiren')
var bhargav = new Person('Bhargav')
var Ashvin = new Person('Ashvin')
var peopleArr = [ hiren, bhargav, Ashvin ];
peopleArr.forEach(function(person){
    person.on('speak',function(msg){
        console.log(person.name+' says: '+msg);
    })
})


hiren.emit('speak',"Hi Good morning");
bhargav.emit('speak',"Hi very Good morning");
Ashvin.emit('speak',"Hi :)");


