var fs=require('fs');
var path=require('path');


function Directorio(directorio,tipo_archivo,callback)
{
	fs.readdir(directorio,function(error,files)
	{
		var lista;
		if(error)
		{
			return callback(error);
		}
		
		for(var i=0; i<files.length; i++)
      		 {
               		 if(path.extname(files[i])==tipo_archivo)
                	 {
                        	lista.push(files[i]);
               		 }
       		 }
		
		callback(null,lista);

	});
}
module.exports=Directorio;
/*fs.readdir(process.argv[2],function(error,files)
{
//	console.log(files.length);
	for(var i=0; i<files.length; i++)
	{
		if(path.extname(files[i])=="." +  process.argv[3])		{
			console.log(files[i]);
		}
	}
});*/

