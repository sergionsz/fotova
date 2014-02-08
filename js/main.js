/*
   main.html
   
   Copyright 2013
   Sergio Navarrete Suárez <shnavarretes@correo.udistrital.edu.co>
   Luisa Vélez <lcvelezh@correo.udistrital.edu.co>
   
   This program is free software; you can redistribute it and/or modify
   it under the terms of the GNU General Public License as published by
   the Free Software Foundation; either version 2 of the License, or
   (at your option) any later version.
   
   This program is distributed in the hope that it will be useful,
   but WITHOUT ANY WARRANTY; without even the implied warranty of
   MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
   GNU General Public License for more details.
   
   You should have received a copy of the GNU General Public License
   along with this program; if not, write to the Free Software
   Foundation, Inc., 51 Franklin Street, Fifth Floor, Boston,
   MA 02110-1301, USA.
   
   
*/

var KEYCODE_ESC = 27;

/* Width and height percentage of the window */
WIDTH_PERCENTAGE = 0.9;
HEIGHT_PERCENTAGE = 0.9;

current_screen = '';
prev_screen = '';

$(document).ready(function() {
	/* Add to links function that changes screen on click */
	$('.link').click(changeScreen);
	
	/* Add behavior to make links bigger on mouseover */
	$('.link').hover(
		function (){$(this).addClass('link_over');},
		function (){$(this).removeClass('link_over');}
	);
	/* Added to change to presentation screen */
	changeScreen('pres');
	/* Esc key escapes from gray mode */
	$(document).keydown(function(e) {
		if (e.keyCode == KEYCODE_ESC) { changeScreen('ungray') } 
	});
	/* Add animations to Activities descriptions */
	$(".activity_desc").hover(
		function (){$(this).addClass('activity_desc_over',500);},
		function (){$(this).removeClass('activity_desc_over',500);}
	);
	/* Add JCrop to Framing Activity */
	window_h = $( window ).height();
	window_w = $( window ).width();
	$('#framing_activity_photo').Jcrop({
		boxWidth: window_w*WIDTH_PERCENTAGE,
		boxHeight: window_h*HEIGHT_PERCENTAGE,
		bgOpacity: 0.1
	});
});

/* Function to change the screen in a cool animated way */
function changeScreen(screen) {
	if (screen == 'pres') {
		$('body').find('*').addClass(screen,2000,'swing');
	}
	if (typeof screen != 'string') {
		screen = $(this).attr('link');
	}	
	if (screen == current_screen) {return;}
	if (screen == 'ungray') {
		if (current_screen.indexOf('gray') == -1) {
			return;
		}
		screen = ungray();
	} else if (screen.indexOf('gray') != -1){
		$('body').find('*').addClass(screen);
		$('#pencils').css('z-index','0');
	} else {
		$('body').find('*').switchClass(current_screen,screen,2000,'swing');
	}
	prev_screen = current_screen;
	current_screen = screen;
}

function ungray () {
	$('body').find('*').removeClass(current_screen);
	$('#pencils').css('z-index','3');
	$("video" ).each( function(){
		this.pause();
		this.load();
	});
	return prev_screen;
}