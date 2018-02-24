var crypto = require('crypto');

function encrypt(algorithm, password_key, buffer){
  var cipher = crypto.createCipher(algorithm,password_key)
  var encrypted = Buffer.concat([cipher.update(buffer),cipher.final()]);
  return encrypted;
}
 
function decrypt(algorithm, password_key, buffer){
  var decipher = crypto.createDecipher(algorithm,password_key)
  var decrypted = Buffer.concat([decipher.update(buffer) , decipher.final()]);
  return decrypted;
}

var algorithm = "aes-256-ecb";
var password_key = "secretkey"; 
var data = "test data sample";
var unicode = "utf8";
var hw = encrypt(algorithm,password_key,new Buffer(data, unicode));
console.log((hw).toString(unicode));
console.log(decrypt(algorithm,password_key,hw).toString(unicode));
