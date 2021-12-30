$(function(){
  $('button').on('click',function(){
    $('ul').children().css('color','red');
    $('h1').css('display','none');
  });
});