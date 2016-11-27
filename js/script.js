var firstLi = document.getElementsByTagName('li').item(0),
	secondLi = document.getElementsByTagName('li').item(1),
	thirdLi = document.getElementsByTagName('li').item(2),
	fourLi = document.getElementsByTagName('li').item(3),
	fiveLi = document.getElementsByTagName('li').item(4);

$('a').click(function(){
    $('html, body').animate({
        scrollTop: $( $(this).attr('href') ).offset().top
    }, 500);
    return false;
});