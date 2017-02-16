$(function() {
	loadTab()
});
// 粒子背景
$(document).ready(function() {
  $('#particles').particleground({
    dotColor: '#8499af',
    lineColor: '#264b73'
  });
  $('.intro').css({
    'margin-top': -($('.intro').height() / 2)
  });
});


// banner部分的Tab
function resetTabs(obj) {
	$(obj).parent().parent().next("div").find("div").hide();
	$(obj).parent().parent().find("a").removeClass("current");
}
function loadTab() {
	$(".content > div").hide();
	$(".tabs").each(function () {
		$(this).find("li:first a").addClass("current");
	});
	$(".content").each(function () {
		$(this).find("div:first").fadeIn();
	});
	$(".tabs a").on("click", function (e) {
		e.preventDefault();
		if ($(this).attr("class") == "current") {
			return;
		} else {
			resetTabs(this);
			$(this).addClass("current");
			$($(this).attr("name")).fadeIn();
		}
	});
}
// banner底部tab消息通知
$(function () {
    $("#slider").responsiveSlides({
    auto: true,
    pager: false,
    nav: true,
    speed: 500,
    // 对应外层div的class : slide_container
    namespace: "slide"
    });
});


// 小轮播切换
$(function () {
    $("#slider_bans").responsiveSlides({
    auto: true,
    pager: false,
    nav: true,
    speed: 500,
    // 对应外层div的class : slide_container
    namespace: "slide"
    });
});

// 项目管理插件
$(function() {

    [].slice.call( document.querySelectorAll( '.tabs-style-underline' ) ).forEach( function( el ) {
        new CBPFWTabs( el );
    });

});


// 时间轴
$(function(){
    var $timeline_block = $('.cd-timeline-block');
    //hide timeline blocks which are outside the viewport
    // $timeline_block.each(function(){
    //     if($(this).offset().top > $(window).scrollTop()+$(window).height()*0.75) {
    //         $(this).find('.cd-timeline-img, .cd-timeline-content').addClass('is-hidden');
    //     }
    // });
    //on scolling, show/animate timeline blocks when enter the viewport
    // $(window).on('scroll', function(){
    //     $timeline_block.each(function(){
    //         if( $(this).offset().top <= $(window).scrollTop()+$(window).height()*0.75 && $(this).find('.cd-timeline-img').hasClass('is-hidden') ) {
    //             $(this).find('.cd-timeline-img, .cd-timeline-content').removeClass('is-hidden').addClass('bounce-in');
    //         }
    //     });
    // });
});

$(function(){
var appendNumber = 4;
    var prependNumber = 1;
    var swiper = new Swiper('.swiper-container', {
        pagination: '.swiper-pagination',
        nextButton: '.swiper-button-next',
        prevButton: '.swiper-button-prev',
        slidesPerView: 3,
        centeredSlides: true,
        paginationClickable: true,
        spaceBetween: 30,
    });
    document.querySelector('.prepend-2-slides').addEventListener('click', function (e) {
        e.preventDefault();
        swiper.prependSlide([
            '<div class="swiper-slide">Slide ' + (--prependNumber) + '</div>',
            '<div class="swiper-slide">Slide ' + (--prependNumber) + '</div>'
        ]);
    });
    document.querySelector('.prepend-slide').addEventListener('click', function (e) {
        e.preventDefault();
        swiper.prependSlide('<div class="swiper-slide">Slide ' + (--prependNumber) + '</div>');
    });
    document.querySelector('.append-slide').addEventListener('click', function (e) {
        e.preventDefault();
        swiper.appendSlide('<div class="swiper-slide">Slide ' + (++appendNumber) + '</div>');
    });
    document.querySelector('.append-2-slides').addEventListener('click', function (e) {
        e.preventDefault();
        swiper.appendSlide([
            '<div class="swiper-slide">Slide ' + (++appendNumber) + '</div>',
            '<div class="swiper-slide">Slide ' + (++appendNumber) + '</div>'
        ]);
    });
});