// Initail Setup
let a = 3;
let b = 5;
let c;

let output = 'let a = 3;\n';
output += 'let b = 5;\n';
output += 'let c;\n';
output += '--------\n';

output += 'a+b = ' + (a+b)+"\n";
output += 'a-b = ' + (a-b)+"\n";
output += 'a*b = ' + (a*b)+"\n";
output += 'a/b = ' + (a/b)+"\n";
output += 'a%b = ' + (a%b)+"\n";
output += '(a+=b) = ' + (a+=b)+"\n";
output += '(a-=b) = ' + (a-=b)+"\n";
output += '(a*=b) = ' + (a*=b)+"\n";
output += '(a/=b) = ' + (a/=b)+"\n";
output += '(a%=b) = ' + (a%=b)+"\n";
output += '(a==b) = ' + (a==b)+"\n";
output += '(a!=b) = ' + (a!=b)+"\n";
output += '(a>b) = ' + (a>b)+"\n";
output += '(a<b) = ' + (a<b)+"\n";
output += '(!a&&!c) = ' + (!a&&!c)+"\n";
output += '(!a||!c) = ' + (!a||!c)+"\n";

alert(output);

let first_name = "Thao";
let last_name = "Do";
let email ="thaomaido@gmail.com";
let sentence ;

output = "My name is" + " " + first_name + " " + last_name + " " + "." + "You can contact me at" + " " + email + " ";
alert(output);