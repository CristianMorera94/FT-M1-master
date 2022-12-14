//# Homework JavaScript Avanzado I
//## Scope & Hoisting
//Determiná que será impreso en la consola, sin ejecutar el código.
//> Investiga cuál es la diferencia entre declarar una variable con `var` y directamente asignarle un valor.
//```javascript
x = 1;
var a = 5;
var b = 10;
var c = function(a, b, c) { //a=8 b=9, c=10
  var x = 10;
  console.log(x);//10
  console.log(a);//8
  var f = function(a, b, c) {  //a=8 b=9, c=10
    b = a;
    console.log(b); //b=8
    b = c; //10
    var x = 5;
  }
  f(a,b,c);
  console.log(b); //b=9
}
c(8,9,10);
console.log(b); //10
console.log(x);//1

//Ejercicio 2 


console.log(bar);//undefiend
//console.log(baz);//
foo();
function foo() { console.log('Hola!'); }//hola!
var bar = 1;
 baz = 2;

//Ejercicio 3

var instructor = "Tony";
if(true) {
    var instructor = "Franco";
}
console.log(instructor);//Franco

//Ejercicio 4

var instructor = "Tony";
console.log(instructor);// Tony
(function() {
   if(true) {
      var instructor = "Franco";
      console.log(instructor); //Franco
   }
})();
console.log(instructor); //Tony

//Ejercicio 5

var instructor = "Tony";
let pm = "Franco";
if (true) {
    var instructor = "The Flash";
    let pm = "Reverse Flash";
    console.log(instructor); // The Flash
    console.log(pm); // Reverse Flash
}
console.log(instructor);// The Flash
console.log(pm); //Franco

//### Coerción de Datos

//¿Cuál crees que será el resultado de la ejecución de estas operaciones?:
/*
6 / "3" //2
"2" * "3" //6
4 + 5 + "px" // 9px
"$" + 4 + 5 //
"4" - 2
"4px" - 2
7 / 0
{}[0]
parseInt("09")
5 && 2
2 && 5
5 || 0
0 || 5
[3]+[3]-[10]
3>2>1
[] == ![]
*/

//> Si te quedó alguna duda repasá con [este artículo](http://javascript.info/tutorial/object-conversion).


/*### Hoisting
¿Cuál es el output o salida en consola luego de ejecutar este código? Explicar por qué:*/

function test() {
   console.log(a);// undefined
   console.log(foo());//2

   var a = 1;
   function foo() {
      return 2;
   }
}

test();

//Y el de este código? :
var snack = 'Meow Mix';

function getFood(food) {
    if (food) {
        var snack = 'Friskies';
        return snack;
    }
    return snack;
}

getFood(false);
console.log(getFood(false));

//### This
//¿Cuál es el output o salida en consola luego de ejecutar esté código? Explicar por qué:


var fullname = 'Juan Perez';
var obj = {
   fullname: 'Natalia Nerea',
   prop: {
      fullname: 'Aurelio De Rosa',
      getFullname: function() {
         console.log(this.fullname);
         return this.fullname;         
      }
   }
};

console.log(obj.prop.getFullname());
var test = obj.prop.getFullname;
console.log(test());
//*### Event loop
//Considerando el siguiente código, ¿Cuál sería el orden en el que se muestra por consola? ¿Por qué?

function printing() {
   console.log(1);
   setTimeout(function() { console.log(2); }, 1000);
   setTimeout(function() { console.log(3); }, 0);
   console.log(4);
}

printing();
console.log(printing());
