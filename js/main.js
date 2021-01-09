$(document).ready(function(){

$('.popap__btn').on('click', function(event){
    event.preventDefault();
$('.popap').fadeIn();
});

$('.popap-close').on('click', function(event){
    event.preventDefault();
$('.popap').fadeOut();
});

$('.mobile__button').on('click',function(){
$('.menu__list').slideToggle()
});

});