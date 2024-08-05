document.addEventListener("DOMContentLoaded", function(k){
	for (var i = 0; i < document.getElementsByClassName("casilla").length; i++) {
	    document.getElementsByClassName("casilla")[i].addEventListener("click", function(l){
			this.style.background= "#9d89df";
		})
	}
})