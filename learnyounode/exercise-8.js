var http=require('http');
var array=[];
var result;
http.get(process.argv[2],function(res) {
        res.setEncoding("utf-8");
        res.on("data",function(data)
        {
		array.push(data);
        });
	
	res.on("end",function()
	{
		result =array.join("");
		console.log(result.length);
		console.log(result);
	});
});

