'use strict';
function changeUp () {
     var i = document.getElementById('img');
     var atr = $('#img').attr('src');
     if(atr == 'images/img_slider.jpg') {
	     i.src = 'images/img_slider2.jpg';
	     var a = document.getElementById('radio2');
	     a.click();
	} else if(atr == 'images/img_slider2.jpg') {
	     i.src = 'images/img_slider3.jpg';
	     var a = document.getElementById('radio3');
	     a.click();
     } else if(atr == 'images/img_slider3.jpg') {
	     i.src = 'images/img_slider.jpg';
	     var a = document.getElementById('radio1');
	     a.click();
     };
}
function changeDown () {
	 var i = document.getElementById('img');
	 var atr = $('#img').attr('src');
     if(atr == 'images/img_slider.jpg') {
	     i.src = 'images/img_slider3.jpg';
	     var a = document.getElementById('radio3');
	     a.click();
     } else if(atr == 'images/img_slider2.jpg') {
	     i.src = 'images/img_slider.jpg';
	     var a = document.getElementById('radio1');
	     a.click();
     } else if(atr == 'images/img_slider3.jpg') {
	     i.src = 'images/img_slider2.jpg';
	     var a = document.getElementById('radio2');
	     a.click();
     };	 
}