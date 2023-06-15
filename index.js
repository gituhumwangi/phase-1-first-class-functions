const chai = "chai"
const spies = "chai-spies"
 function receivesAFunction (callback) {
     callback ()
 }
 function returnsANamedFunction () {
   return function git () {

   }
 }

 function returnsAnAnonymousFunction () {
    return function () {
        
    }
 }