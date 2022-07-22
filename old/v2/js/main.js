$(".mobile-menu").click(function() {
	// $(".mobile-menu").css({ "display": "block" });
	$(".mobile-menu").fadeIn();

	$(".mobile-menu-x").css({
		"display": "inline-block"
	});
	$(".mobile-menu ").css({
		"display": "none"
	});
	$(".back-to-top ").css({
		"z-index": "98"
	});
	$("body").css({
		"overflow-y": "hidden"
	});
	$("#header-container nav").css({
		"display": "grid"
	});

});
$(".mobile-menu-x").click(function() {
	// $(".mobile-menu").css({ "display": "none" });
	$(".mobile-menu").fadeOut();
	$(".mobile-menu-x").css({
		"display": "none"
	});
	// $(".mobile-menu-x").fadeOut();;
	$(".mobile-menu").css({
		"display": "inline-block"
	});
	$("body").css({
		"overflow-y": "scroll"
	});
	$("#header-container nav").css({
		"display": "none"
	});




});

// 返回顶部
$(function() {
	$(window).scroll(function() {
		var scroHei = $(window).scrollTop();
		if (scroHei > 200) {
			$('.back-to-top').css("display", "block");
			$('.back-to-top').fadeIn;
		} else {
			$('.back-to-top').css("display", "none");
			$('.back-to-top').fadeOut;
		}
	})
	$('.back-to-top').click(function() {
		$('body,html').animate({
			scrollTop: 0
		}, 500);
	})
})
