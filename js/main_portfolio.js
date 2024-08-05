window.addEventListener("load",
function () {
    let portfolioItems = document.querySelectorAll(".works-container ul li .thumbnail");
    portfolioItems.forEach(w => w.addEventListener("click", 
        function(e){
            var active= document.querySelector(".active");
            var li= e.target.parentNode.parentNode;
            if(li == active){
                document.querySelector(".active").classList.remove("active");
                document.querySelector(".works-container").classList.remove("open");
            }else{
                if(active != null){
                    if((active.getBoundingClientRect().top + window.scrollY) != (li.getBoundingClientRect().top + window.scrollY)){
                        document.querySelector(".works-container").classList.remove("open");
                    }
                    document.querySelector(".active").classList.remove("active");
                    li.classList.add("active")
                }else{
                    li.classList.add("active")
                }
                setTimeout(function(){
                    if(!document.querySelector(".works-container").classList.contains("open")){
                        document.querySelector(".active .expander").scrollIntoView({ behavior: "smooth", block: "nearest", inline: "nearest" });
                    }
                    document.querySelector(".works-container").classList.add("open");
                }, 225)
                if(document.querySelector(".works-container").classList.contains("open")){
                    document.querySelector(".active .expander").scrollIntoView({ behavior: "smooth", block: "nearest", inline: "nearest" });
                }
            }
        }
    ))
    /*Burger menu*/
    document.querySelector(".burger-menu").addEventListener("click", function(){
        document.querySelector("header").classList.toggle("visibleNav")
    })
})