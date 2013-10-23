/*
   index.html
   
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

/* This object is a list of dom objecs ids and the screens they fire */
links = {
	'eraser':'pres',
	'roll_grp':'comp'
}

current_screen = '';

$(document).ready(function() {
	/* Add to links function that changes screen on click */
	$.each(links,function(key,value){
		$('#'+key).click({screen:value},changeScreen);
	});
	
	/* Add behavior to make links bigger on mouseover */
	$('.link').hover(
		function (){$(this).addClass('link_over');},
		function (){$(this).removeClass('link_over');}
	);
	/* Added to change to presentation screen */
	changeScreen('pres');
}); 

/* Function to change the screen in a cool animated way */
function changeScreen(event) {
	if (typeof event ===  'string'){
		$('body').children().addClass(event,2000,'swing');
		current_screen = event;
		return;
	}
	var screen=event.data.screen;
	if (screen == current_screen) {
		return;
	}
	$('body').children().switchClass(current_screen,screen,2000,'swing');
	current_screen = screen;
}