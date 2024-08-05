var turno= "equis";

document.addEventListener("DOMContentLoaded", function(k){
	for (var i = 0; i < document.getElementsByClassName("casilla").length; i++) {
	    document.getElementsByClassName("casilla")[i].addEventListener("click", function(l){
			if(!this.classList.contains("equis") && !this.classList.contains("circulo")){
				this.classList.add(turno)
				if(turno == "equis"){
					turno= "circulo";
				}else{
					turno= "equis";
				}
			}
		})
	}
})