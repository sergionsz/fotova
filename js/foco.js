/*
   foco.js
   
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

OP_DIV=25;
OP_DELTA=1/OP_DIV

$(document).ready(function() {
	$("#focus_control input").change(changeFocus);
	$("#focus_control input").val(OP_DIV).change();
	$("#show_general input").change(showGeneral);
	
});

function changeFocus () {
	focus = $(this).val();
	switch(true) {
		case focus<=OP_DIV+1:
			opacity=1-OP_DELTA*focus;
			$("#focus_photo_4").css('opacity',opacity);
			$("#focus_photo_3").css('opacity',1);
			$("#focus_photo_2").css('opacity',1);
			break;
		case focus>OP_DIV && focus<=OP_DIV*2:
			opacity=1-OP_DELTA*(focus-20);
			$("#focus_photo_4").css('opacity',0);
			$("#focus_photo_3").css('opacity',opacity);
			$("#focus_photo_2").css('opacity',1);
			break;
		case focus>OP_DIV*2 && focus<=OP_DIV*3:
			opacity=1-OP_DELTA*(focus-40);
			$("#focus_photo_4").css('opacity',0);
			$("#focus_photo_3").css('opacity',0);
			$("#focus_photo_2").css('opacity',opacity);
			break;
	}
}

function showGeneral () {
	var ch = $("#show_general input").prop('checked');
	var photo = $("#focus_photo_main");
	effect = 'fade';
	if (ch){
		photo.show(effect);
	} else {
		photo.hide(effect);
	}
}
