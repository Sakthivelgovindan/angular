$(document).ready(function(){
	var home=$("#home");
	var search=$("#search");
	var add=$("#add");
	var notification=$("#notification");
	var profile=$("#profile");
	var like=$("#like");
	var likes=$("#likes");
	var camera=$("#camera");
	var likes1=$("#likes1");
	var direct=$("#direct");
	likes.hide();
		$('#likes1').click(function(){
				likes1.attr('src','images/front/save_logo.png');
				$('#likes1').click(function(){
				likes1.attr('src','images/front/saved_logo.png');
			});
		});
		$("#home").click(function(){
				home.css('opacity',0.8);
				search.css('opacity',1);
				add.css('opacity',1);
				notification.css('opacity',1);
				profile.css('opacity',1);
				camera.css('opacity',1);
				direct.css('opacity',1);
				
		});
		$("#search").click(function(){
				home.css('opacity',1);
				search.css('opacity',0.8);
				add.css('opacity',1);
				notification.css('opacity',1);
				profile.css('opacity',1);
				camera.css('opacity',1);
				direct.css('opacity',1);
		});
		$("#add").click(function(){
				home.css('opacity',1);
				search.css('opacity',1);
				add.css('opacity',0.8);
				notification.css('opacity',1);
				profile.css('opacity',1);
				camera.css('opacity',1);
				direct.css('opacity',1);
		});
		$("#notification").click(function(){
				home.css('opacity',1);
				search.css('opacity',1);
				add.css('opacity',1);
				notification.css('opacity',0.8);
				profile.css('opacity',1);
				camera.css('opacity',1);
				direct.css('opacity',1);
		});
		$("#profile").click(function(){
				home.css('opacity',1);
				search.css('opacity',1);
				add.css('opacity',1);
				notification.css('opacity',1);
				profile.css('opacity',0.8);
				camera.css('opacity',1);
				direct.css('opacity',1);
		});
		$("#insta1").click(function(){
				home.css('opacity',1);
				search.css('opacity',1);
				add.css('opacity',1);
				notification.css('opacity',1);
				profile.css('opacity',1);
				camera.css('opacity',0.8);
				direct.css('opacity',1);
		});
		$("#insta3").click(function(){
				home.css('opacity',1);
				search.css('opacity',1);
				add.css('opacity',1);
				notification.css('opacity',1);
				profile.css('opacity',1);
				camera.css('opacity',1);
				direct.css('opacity',0.8);
		});
		$("#like").click(function(){
				like.attr('src','images/front/likes.png');
				$("#like").click(function(){
				like.attr('src','images/front/like.png');
			});
		});
});