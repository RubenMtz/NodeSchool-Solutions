var D=require("./Directorio");
Dir(process.argv[2],process.argv[3],function(error,files)
{
	if(error)
	{
		console.log("error");
		return;
	}
	
	for(var i=0; i<files.length ;i++)
	{
		console.log(files[i]);
 	}

	/*for(i in files)
	{
		console.log(files[i]);
	}*/
});
