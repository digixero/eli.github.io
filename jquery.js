$(document).ready(function() {
	$("#home_link").click(function(){
		$(".content").removeClass("active_content");
		$(".home").addClass("active_content");
	});
	$("#project_link").click(function(){
		$(".content").removeClass("active_content");
		$(".projects").addClass("active_content");
	});
	$("#resume_link").click(function(){
		$(".content").removeClass("active_content");
		$(".resume").addClass("active_content");
	});
	$("#contact_link").click(function(){
		$(".content").removeClass("active_content");
		$(".contact").addClass("active_content");
	});
});