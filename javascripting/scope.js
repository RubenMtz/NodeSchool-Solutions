var a=1, b=2, c=3;
(function firstfunction(){
	var b=5, c=6;
	(function secondfunction(){
		var b=8;
		console.log("a: "+a+", b: "+b+", c: "+c);
		(function thirdfunction(){
			a=7, c=9;
			(function fourthfunction(){
				a=1,c=8;	
				})();	
			})();		
		})();
	})();
