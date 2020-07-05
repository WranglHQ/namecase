var nc = require('namecase');
 
String.prototype.toNameCase = function () {
  var name = this.toString();
 
  if (nc.checkName(name)) {
    return nc(name, { individualFields : true } );
  }
}
 
console.log("WILLIAM".toNameCase());
console.log("MCKINLEY".toNameCase());