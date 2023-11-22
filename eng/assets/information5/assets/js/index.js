function loadPage (page) {
  var img = $('<img />')
  img.load(function () {
    var container = $('.myBook .p' + page)
    img.css({width: container.width(), height: container.height()})
    img.appendTo($('.myBook .p' + page))
    container.find('.loader').remove()
  })

  img.attr('src', 'assets/pages/' + (page - 2) + '.jpg')

}

function addPage (page, book) {
  var id, pages = book.turn('pages')

  var element = $('<div />', {})

  if (book.turn('addPage', element, page)) {
    element.html('<div class="gradient"></div><div class="loader"></div>')
    loadPage(page);
  }
}

$('body').on('click', '.model .inner .close', function () {
  $(this).parents('.model').fadeOut();

  var iframe = $(this).parents('.model').find('iframe');
  if (iframe.length > 0) {
    iframe.attr('src', '');
  }
})


$('video').attr({disablePictureInPicture:'disablePictureInPicture',controlsList:'nodownload'});


$('.common_video_btn').on('click', function () {
  $(this).next().fadeIn();
  $(this).next().find('video').trigger('play');
})
$('.common_video').on('click', '.close', function () {
  $(this).parents('.common_video').find('video').trigger('load');
  $(this).parents('.common_video').find('video').trigger('pause');
  $(this).parents('.common_video').fadeOut();
})


$('.common_btn').on('click', function () {
  $('.common_btn').removeClass('active');
  $(this).addClass('active');
})


// 第1课

$('#btn1_5').on('click', function () {
  $('#video1_5 iframe').attr('src', 'assets/models/m1_5/index.html')
})

// 第2课

$('#video2_6 .tishi').on('click', function () {
  $(this).stop(true,false).toggleClass('act');
  $('#video2_6 .gameBox .show .tc').stop(true,false).toggleClass('act');

})

$('#video2_6 .inner .close').on('click', function () {
  $('#video2_6 .gameBox .show .tc').removeClass('act');
  $('#video2_6 .tishi').removeClass('act');
})






// 第3课`



$('#video3_3 .video_inner video').on('ended', function () {
  $('#video3_3 .video').addClass('act');
  $('#video3_3 video').trigger('pause')
  $('#video3_3 .btn_outer').fadeIn()
})


$('#video3_3 .video .btn_outer .anniu').on('click',function(){
  $('#video3_3 .video .btn_outer .img').stop(true,false).toggleClass('act');
  $(this).stop(true,false).toggleClass('act');
})

$('#video3_3 .video .close').on('click', function () {
  setTimeout(function () { 
    $('#video3_3 .video .btn_outer .img').stop(true,false).removeClass('act');
    $('#video3_3 .video').removeClass('act');
    $('#video3_3 .btn_outer').fadeOut()
  }, 500);
  $('#video3_3 .video .btn_outer .anniu').removeClass('act');
  
})




$('#btn3_6').on('click', function () {
  $('#video3_6 iframe').attr('src', 'assets/models/m3_6/index.html')
})


// 第4课


$('#video4_3 .video1 .video_inner video').on('ended', function () {
  $('#video4_3 .btn_outer1').fadeIn()
})


$('#video4_3 .video1 .btn_outer .anniu').on('click',function(){
  $('#video4_3').fadeOut();
  $('#video4_3 .btn_outer1').fadeOut()
  $('#video4_2_1').fadeIn();
})

$('#video4_3 .video1 .close').on('click', function () {
  $('#video4_3').fadeOut();
  setTimeout(function () { 
    $('#video4_3 .video1 .btn_outer1').fadeOut();
    $('#video4_3 .video1 video').trigger('pause')
  }, 500);

})

$('#video4_2_1 .jixu').on('click',function(){
  $('#video4_2_1').fadeOut();
  $('#video4_2_2').fadeIn().find('video').trigger('play');
})



$('#video4_4 .video .video_inner video').on('ended', function () {
  $('#video4_4 .btn_outer1').fadeIn()
})


$('#video4_4 .video .btn_outer .anniu').on('click',function(){
  $('#video4_4').fadeOut();
  $('#video4_4 .btn_outer1').fadeOut()
  $('#video4_4_1').fadeIn();
})

$('#video4_4 .video .close').on('click', function () {
  $('#video4_4').fadeOut();
  setTimeout(function () { 
    $('#video4_4 .video .btn_outer1').fadeOut();
    $('#video4_4 .video video').trigger('pause')
  }, 500);

})

$('#video4_4_1 .jixu').on('click',function(){
  $('#video4_4_1').fadeOut();
  $('#video4_4_2').fadeIn().find('video').trigger('play');
  $('#video4_4_1 .num').stop(true,false).fadeOut();
})

$('#video4_4_1 .tishi').on('click',function(){
  $(this).stop(true,false).toggleClass('act');
  $('#video4_4_1 .num').stop(true,false).fadeToggle();
})


$('.model .inner .close').on('click',function(){
  $('#video4_4_1 .num').stop(true,false).fadeOut();

  $('#video4_4_1 .tishi').removeClass('act');
})




$('#btn4_6').on('click', function () {
  $('#video4_6 iframe').attr('src', 'assets/models/m4_6/index.html')
})

// 第6课

$('#btn6_3').on('click', function () {
  $('#video6_3 iframe').attr('src', 'assets/models/m6_3/index.html')
})


$('#btn6_4').on('click', function () {
  $('#video6_4 iframe').attr('src', 'assets/models/m6_4/index.html')
})

$('#video6_7 .video .video_inner video').on('ended', function () {
  $('#video6_7 .btn_outer1').fadeIn()
})

$('#video6_7 .video .tishi').on('click', function () {
  $(this).stop(true,false).toggleClass('act');
  $('#video6_7 .video .bg').stop(true,false).fadeToggle()
})

$('#video6_7 .video .close').on('click', function () {
  $('#video6_7 .btn_outer1').fadeOut()
  $('#video6_7 .video .bg').fadeOut()
  $('#video6_7 .video .tishi').removeClass('act');
})



// 第7课



$('#btn7_9').on('click', function () {
  $('#video7_9 iframe').attr('src', 'assets/models/m7_9/index.html')
})

$('#video7_10 .fuzhi').on('click', function () {
  $('#video7_10 .cc').stop(true,false).fadeIn();
  setTimeout(function () { 
    $('#video7_10 .cc').stop(true,false).fadeOut();
  }, 2500);
  var copyText = $('#video7_10 .copy').get(0);
  copyText.select();
  document.execCommand('copy');
})



// 第8课`

$('#video8_6 .video .btn_outer .anniu').on('click',function(){
  $('#video8_6 .video .btn_outer .img').stop(true,false).toggleClass('act');
  $(this).stop(true,false).toggleClass('act');
})

$('#video8_6 .video .close').on('click', function () {
  setTimeout(function () { 
    $('#video8_6 .video .btn_outer .img').stop(true,false).removeClass('act');
  }, 500);

  $('#video8_6 .video .btn_outer .anniu').removeClass('act');
  
})



// 第9课`

function chongzhi9_7(){
  $('#video9_7 .ipt1').val('开始');
  $('#video9_7 .ipt2').val('输入年龄');
  $('#video9_7 .ipt3').val('年龄<6周岁');
  $('#video9_7 .ipt4').val('免票');
  $('#video9_7 .ipt5').val('年龄<14周岁');
  $('#video9_7 .ipt6').val('优惠票');
  $('#video9_7 .ipt7').val('全价票');
  $('#video9_7 .ipt8').val('输出票型');
  $('#video9_7 .ipt9').val('结束');

}

$('#video9_7 .chongzhi').on('click',function(){
  chongzhi9_7();
})




// 第10课
$('#btn10_4').on('click', function () {
  $('#video10_4 .cc').hide()
  $('#video10_4 .video .video_inner video').trigger('play');
  $('#video10_4 .video .video_inner video').prop('controls', true)
})

$('#video10_4 .video .video_inner video').on('ended', function () {
  $('#video10_4 .cc').fadeIn()
  $('#video10_4 .video .video_inner video').trigger('pause');
  $('#video10_4 .video .video_inner video').prop('controls', false)
})

$('#video10_4 .cc .anniu').on('click',function(){
  var src=$(this).attr('data-vid');
  $('#video10_4 .cc').fadeOut();
  $('#video10_4').fadeOut();
  $('#video10_4_1 ').fadeIn().find('video').attr({src:src}).trigger('play');

})

$('#video10_4 .video .close').on('click',function(){
  $('#video10_4 .cc').fadeOut();
  $('#video10_4').fadeOut();
})



$('#video10_4_1 .video .video_inner video').on('ended', function () {
  $('#video10_4_1 .cc').fadeIn()
})


$('#video10_4_1 .cc .zaikan').on('click',function(){
  $('#video10_4_1 .cc').fadeOut();
  $('#video10_4_1 ').find('video').trigger('play');
})



$('#video10_4_1 .cc .fanhui').on('click',function(){
  $('#video10_4_1 .cc').fadeOut();
  $('#video10_4_1 ').fadeOut();
  $('#video10_4 .cc').fadeIn();
  $('#video10_4').fadeIn();
 
})

$('#video10_4_1 .video .close').on('click',function(){
  $('#video10_4_1 .cc').fadeOut();
  $('#video10_4_1 ').fadeOut();
})


// 第11课


$('body ').on('click','#video11_4 .gameBox .show .laohu.act1',function(){
  $('#video11_4 .gameBox .show .laohu.act1 ').stop(true,false).removeClass('act1').stop(true,false).addClass('act2');
})


$('body').on('click','#video11_4 .gameBox .show .laohu.act2 ',function(){
  $('#video11_4 .gameBox .show .laohu.act2 ').stop(true,false).removeClass(' act2 ').stop(true,false).addClass('act3');
})

$('body ').on('click','#video11_4 .gameBox .show .laohu.act3', function(){
  $('#video11_4 .gameBox .show .laohu.act3 ').stop(true,false).removeClass('act3 ').stop(true,false).addClass('act4');
})

$('body ').on('click','#video11_4 .gameBox .show .laohu.act4', function(){
  $('#video11_4 .gameBox .show .laohu.act4 ').stop(true,false).removeClass('act4 ').stop(true,false).addClass('act5');
  $('#video11_4 .gameBox .show').addClass('act')
})

$('#video11_4 .inner .close').on('click',function(){
  $('#video11_4 .gameBox .show .laohu ').stop(true,false).removeClass('act2 act3 act4 act5').stop(true,false).addClass('act1');
  $('#video11_4 .gameBox .show').removeClass('act')
})




// 第12课

$('#video12_9 .gameBox .show .anniu').on('click',function(){
  $('#video12_9 .gameBox .show .shuzi').fadeToggle();
  $(this).stop(true,false).toggleClass('act');
})

$('#video12_9 .inner .close').on('click',function(){
  $('#video12_9 .gameBox .show .shuzi').fadeOut();
  $('#video12_9 .gameBox .show .anniu').removeClass('act');
})


// 第13课


$('#video13_5 .video .video_inner video').on('ended', function () {
  $('#video13_5 .video .btn_outer1').fadeIn()
})


$('#video13_5 .video .btn_outer .anniu').on('click',function(){
  $('#video13_5').fadeOut();
  $('#video13_5 .btn_outer1').fadeOut()
  $('#video13_5_1').fadeIn();
})


$('#video13_5 .video .close').on('click',function(){
  $('#video13_5').fadeOut();
  $('#video13_5 .btn_outer1').fadeOut()
})


// 第14课
$('body').on('click', '#video14_5 .inner .close', function () {
  $(this).parents('.model2').fadeOut();
})





// 第15课

$('#video15_3 .video .video_inner video').on('ended', function () {
  $('#video15_3 .btn_outer1').fadeIn()
})

$('#video15_3 .video .tishi').on('click', function () {
  $('#video15_3 .video .bg').stop(true,false).fadeToggle()
  $(this).stop(true,false).toggleClass('act');
})

$('#video15_3 .video .close').on('click', function () {
  $('#video15_3 .btn_outer1').fadeOut()
  $('#video15_3 .video .bg').fadeOut()
  $('#video15_3 .video .tishi').removeClass('act');
})