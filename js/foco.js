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
	$(".activity_control input").change(changeFocus);
	$(".activity_control input").val(OP_DIV).change();
	$("#focus_activity_show_general input").change(showGeneral);
});

function changeFocus () {
	focus = $(this).val();
	photos = ($(this).attr('max')/OP_DIV) +1;
	
	stage = Math.floor(focus/OP_DIV)+1;
	opacity = OP_DELTA*(OP_DIV - focus%(OP_DIV));
	
	for (i=1;i<stage; i++) {
		$(".photo_"+i).css('opacity',0);
	}
	$(".photo_"+stage).css('opacity',opacity);
	for (i=stage+1;i<=photos; i++) {
		$(".photo_"+i).css('opacity',1);
	}
}

function showGeneral () {
	var ch = $("#focus_activity_show_general input").prop('checked');
	var photo = $("#focus_photo_main");
	effect = 'fade';
	if (ch){
		photo.show(effect);
	} else {
		photo.hide(effect);
	}
}
