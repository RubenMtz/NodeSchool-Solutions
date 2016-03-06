var fs= require('fs');
var path= require('path');

fs.readdir(process.argv[2],function(error,files)
{
//      console.log(files.length);
        for(var i=0; i<files.length; i++)
        {
                if(path.extname(files[i])=="." +  process.argv[3])
                {
                        console.log(files[i]);
                }
        }
});

module.export=f
