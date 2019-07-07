function changeBtnText() {
	
	var text = document.getElementById("tags-button").innerHTML;
	
	if (text.includes("Show less")){
		document.getElementById("tags-button").innerHTML = '<i class="fas fa-chevron-down"></i> Show more';
	}
	else {
		document.getElementById("tags-button").innerHTML ='<i class="fas fa-chevron-up"></i> Show less';
	}
}
