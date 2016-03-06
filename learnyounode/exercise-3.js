var fs= require('fs');
var buffer_1= fs.readFileSync(process.argv[2]);
var st=buffer_1.toString();
var b_split=st.split('\n').length;
console.log(b_split-1);

