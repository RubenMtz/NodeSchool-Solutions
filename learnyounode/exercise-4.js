var fs= require('fs');

fs.readFile(process.argv[2],function(error,data){
	var buff_1= data.toString().split('\n').length;
	console.log(buff_1-1);	
});

//var st=buffer_1.toString();
//var b_split=st.split('\n').length;
//console.log(b_split-1);
