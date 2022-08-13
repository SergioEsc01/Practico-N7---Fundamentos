function Proto() {
    // Crea un objeto
    // Luego crea otro objeto en donde el sea su padre y ademas se cree como nuevo objeto
    // Pista, utilizar: __proto__
    // Tu código:
    var obj={
        aa:"aa",
        bb:"bb",
        cc:"cc",
        }
        var xpers={
            aa:"aa",
            bb:"bb",
        }
        xpers.__proto__= obj
        console.log(xpers.cc)
}

function agregarMetodoPrototype(a,b) {
    // Agrega un método al Constructor del `prototype`
    // El método debe llamarse "saludar" y debe devolver la string "Hello World!"
    // Tu código:
this.nombre=a;
this.apellido=b;
}
agregarMetodoPrototype.prototype.saludar=function(){
    return "hola mundo"
}
var aa= new agregarMetodoPrototype("sergio","escudero")
console.log(aa.saludar())

function agregarStringInvertida(nombre, apellido) {
    // Agrega un método al prototype de String que devuelva la misma cadena de caracteres, pero invertida.
    // El método debe llamarse "reverse"
    // Ej: 'menem'.reverse() => menem
    // 'joaco'.reverse() => 'ocaoj' 
    // Pista: Necesitarás usar "this" dentro de "reverse"
this.nombre=nombre;
this.apellido=apellido;
}
agregarStringInvertida.prototype.reverse=function(){
//return this.nombre + "invertida es: "+ this.nombre.reverse();  *no lo entendi*//
}
var aaa=new agregarStringInvertida("sergio","escudero")
console.log(aaa.reverse())

function changeNombre() {
    // Crea un objeto
    // Agregar un getNombre()
    // Agregar un changeNombre()
    // Mostrar por consola changeNombre() y getNombre(), con nombre distinto en changeNombre() al del constructor y al del getNombre()
    // Tu código:

}

var persona={
    nom:"aa",
    ape:"cc",
    getNombre:function(){
        return "mi nombre es: "+this.nom
    },
    changeNombre:function(nuevonom){
        var nom=nuevonom
        return "Mi nuevo nombre es: "+ nom
    }
}
console.log(persona.getNombre())
console.log(persona.changeNombre("jose"))

function Objeto() {
    // Crea un objeto
    // Luego crea otro objeto en donde el sea su padre y ademas se cree como nuevo objeto
    // Utilizar obligatoriamente el Metodo Object
    // Tu código:
}
var personax={
    nombre:"alejo",
    apellido:"aaa",
}
var nuevapersona= Object.create(personax)
console.log(nuevapersona)