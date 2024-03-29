/*jslint browser:true*/
/*global console*/

/* ************************************************************************ */

console.log("*********************************");
console.log("*********** objects 1 ***********");
console.log("*********************************");

// Object initilizers and such
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Object_initializer

var k = [];    // Empty ad-hoc array object created (+var defined + assigment)
var l = {};    // Empty ad-hoc object crated (+var defined + assigment)

// here we have created a scope without function/if/for etc. This is allowed.
{
    let a = "foo";
    let b = "bar";

    let c = {a,b};                // ad-hoc object created {a:"foo",b:"bar"}
    console.log("c: ");
    console.dir(c);

    let d = {a:a,b:b}; // Same result {a:"foo",b:"bar"} just longer code
    console.log("d: ");
    console.dir(d);

    // Check this out! Used in some React code, if e.g. making same
    // event-handler to handle multiple fields same way
    let e = {[a]:a,[b]:b};  // object created: {foo:"foo",bar:"bar"}
    // [a] is called computed property name (ES6) 
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Object_initializer#New_notations_in_ECMAScript_2015

    console.log("e: ");
    console.dir(e);

    // https://developer.mozilla.org/en-US/docs/Web/API/Console
    // Remember that Browser console and Server (Node?) console are
    // two different things, even if they support some of the same
    // features.

    
    // ****************************************************************************

    let f = {...c};  // First:  {} -> _new_ object created, 
                     // Second: ...c means copy all field names and values 
                     // from object c to the newly created, separate object 
    // ...x is called the spread notation / spread syntax:
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax

    let g = [2,4,6];  // array with three Number items created
    let h = g;        // h has a 2nd reference to the _same_ object

    let i = [...g];   // exact _copy_ of the array created
    let j = [...g, 8]; // _copy_ (=similar but separate object) of the array, 
    // Plus one more item, 8, added!

    let k = {abc:true, xyz:false};  // object created
    let l = {...k};  // exact _copy_ of the object created

    let m = {...k};  // exact _copy_ of the object created
    m.abc=false;     // then changing one property

    let n = {...k, abc:false};   // replace field abc
    let o = {...k, def:123, abc:"foobarish"}; 
    // add field def, redefine/replace value of abc, even changing type

    let p = {def:123, abc:"disappearish", ...k};
    // add field def, add field abc, take all fields from k, replacing abc!!!
    // This is a possibly point of making error! So put ...k as first
    // unless a real reason to not to.

    console.log("Put a break point here for stopping the debugger");
}