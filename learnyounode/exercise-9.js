var http=require('http');
var array=[];
var result_a;
var count=0;
var url_array=[];
for(var i=0; i<3; i++)
{
	url(i);
}
function url(url_count)
{
	 http.get(process.argv[2 + url_count],function(res) {
        	res.setEncoding("utf-8");
        	res.on("data",function(data)
        	{
			array.push(data);
        	});
	
		res.on("end",function()
		{	
			//url_array[url_count]=array;
			url_array[url_count] =array.join("");
			//console.log(result.length);
			//console.log(result);

			//result_a=array.join("");
			//url_array[url_count]=result_a;					
			count ++;
			if(count==3)
			{
				result();
			}
					
	});
		//	count ++;
			/*if(count==3)
			{
				result();
			}*/
		});
			//count ++;
		/*	if(count==3)
			{
				result();
			}*/	
}

function result()
{
	for(var i=0;i<3;i++)
	{
		console.log(url_array[i]);
	}	
}
