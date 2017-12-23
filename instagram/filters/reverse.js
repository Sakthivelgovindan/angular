app.filter('reverse',function(){
	console.log("hello");
	return function(items){
		return items.slice().reverse();
	}
});