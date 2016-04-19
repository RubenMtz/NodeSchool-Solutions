var net =require('net');
var date = new Date();


function time()
{
	return date.getFullYear() + '-'+date.getMonth() + '-' + date.getDate() + ' ' + 	return date.getHours() + ':' + date.getMinutes();
}
 
}

function hour()
{

var server=net.createServer(function (socket)
{
	socket.end(time())
}).listen(8000);

