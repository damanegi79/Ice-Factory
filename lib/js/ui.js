// JavaScript Document

$(document).ready(function(){
    $( '.btn_menu_left' ).on( 'click', function () {
//        $("html,body").toggleClass('active');
//        $("#container,#header_area,#footer_area").toggleClass('active');
        $("#left_side_wrap").toggleClass('active');
        $(".overay_layer").show(0);
        return false;
    } );
    $( '.btn_menu_right' ).on( 'click', function () {
//        $("html,body").addClass('active');
//        $("#container,#header_area,#footer_area").toggleClass('active_right');
        $("#right_side_wrap").toggleClass('active');
        $(".overay_layer").show(0);
        return false;
    } );
    $(".overay_layer,.side_wrap .btn_close_layer").on( 'click', function () {
//        $("html,body").removeClass('active');
//        $("#container,#header_area,#footer_area").removeClass('active').removeClass('active_right');
        $(".side_wrap").removeClass('active');
        $(".overay_layer").hide(0);
        return false;
    } );
    $(".game_list_check dt").each(function(){
        if($(this).hasClass('active')){
            $(this).next().show();
        }
    })

    $(".game_list_check dt a").on( 'click', function () {
        $(this).parent().toggleClass('active').next().toggle();
        return false;
    } );
    $(".repple_form a.emoticon").on( 'click', function () {
        $(this).parent().parent().find(".emoticon_area").show()
        return false;
    } );
    $(".emoticon_area .btn_close_layer").on( 'click', function () {
        $(".emoticon_area").hide();
        return false;
    } );
})

$(window).load(function () {
    var winHeight = $(window).height();
    var header_height = $("#header_area").height();
    var con_height = winHeight-header_height;
    var left_height = $("#left_menu").height()
    $("#contents_wrap").css({minHeight:con_height});
    $("#left_menu").css({minHeight:con_height-50});
    // 1208 추가
    if(left_height>con_height){
        $("#left_menu .copyright").css({position:'absolute'})
    }
    // 1208 추가끝
    $("#right_contents").css({minHeight:con_height-30});
    if(left_height>con_height){$("#contents_wrap").css({minHeight:left_height+50});}
});
