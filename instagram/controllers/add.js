app.run(function($rootScope){

	console.log("hello");
	$rootScope.globalArray=[
	];
});

app.controller("add",['$scope','$rootScope',function($scope,$rootscope){
	$scope.items=[
		{name:'john_c',images:[{image1:'images/stories1/johncena.jpg',image2:'images/stories1/Nayantara1.jpg',image3:'images/stories1/sakthivel.png',image4:'images/front/1/sridivya.jpg'}]},
		{name:'john_c',images:[{image1:'images/front/1/nayanthara.png',image2:'images/stories1/Nayanthara.jpg',image3:'images/stories1/johncena.jpg',image4:'images/stories1/sakthivel.png'}]},
		{name:'john_c',images:[{image1:'images/stories1/rock.jpg',image2:'images/stories1/vijay.jpg',image3:'images/stories1/ratchitha.jpg',image4:'images/front/1/rajini.jpg'}]},
		{name:'john_c',images:[{image1:'images/front/1/WWEjpg.jpg',image2:'images/front/1/vijay.jpg',image3:'images/stories1/Nayantara1.jpg',image4:'images/front/1/Roman.jpg'}]},
		{name:'john_c',images:[{image1:'images/stories1/undertaker.jpg',image2:'images/stories1/Nayantara1.jpg',image3:'images/stories1/undertaker.jpg',image4:'images/stories1/vijay.jpg'}]},
		{name:'john_c',images:[{image1:'images/stories1/johncena.jpg',image2:'images/front/1/Lakshmi-menon.png',image3:'images/stories1/ratchitha.jpg',image4:'images/stories1/ratchitha1.jpg'}]},
		{name:'john_c',images:[{image1:'images/front/1/trisha.jpg',image2:'images/stories1/sakthivel.png',image3:'images/stories1/Nayanthara.jpg',image4:'images/front/1/sridivya.jpg'}]},
		{name:'john_c',images:[{image1:'images/stories1/rock.jpg',image2:'images/stories1/vijay.jpg',image3:'images/stories1/ratchitha.jpg',image4:'images/stories1/sakthivel.png'}]}
	];


	$rootscope.images='images/stories1/undertaker.jpg';

	$scope.getmethod1=function(event,story1){
		$rootscope.images=(event.currentTarget, story1.image1);
		}

	$scope.getmethod2=function(event,story1){
		//console.log(event.currentTarget, story1.image2);
		$rootscope.images=(event.currentTarget, story1.image2);
	
		}
	$scope.getmethod3=function(event,story1){
		//console.log(event.currentTarget, story1.image3);
		$rootscope.images=(event.currentTarget, story1.image3);
	
		}
	$scope.getmethod4=function(event,story1){
		//console.log(event.currentTarget, story1.image4);
		$rootscope.images=(event.currentTarget, story1.image4);
	
		}
	$scope.storenext=function(){
		$rootscope.next=$rootscope.images;
		}

		/*var nextvalue=[];
		for(var i=0;i<10;i++){
			nextvalue.push($rootscope.next);
		}
		$scope.nextvalue=nextvalue;*/

		
		$scope.shareimage=function(){
			console.log($scope.conclusion);
			console.log($scope.next);
			$rootscope.globalArray.push({'conclusion':$scope.conclusion,'profile':$scope.next});
			console.log($rootscope.globalArray.length);
		}

		

		


}]);