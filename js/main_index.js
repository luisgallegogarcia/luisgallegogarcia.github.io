window.addEventListener("load",
function () {
    /*Slideshow de imágenes*/
    let slideshow = document.querySelector(".slideshow");
    let figures = document.querySelectorAll(".slideshow .figures figure");
    let nextSlide = document.querySelector(".slideshow .next-slide");
    let previousSlide = document.querySelector(".slideshow .previous-slide");
    let position = parseInt(slideshow.getAttribute("position"));

    figures[0].scrollIntoView({ behavior: "smooth", block: "nearest", inline: "nearest" });

    nextSlide.addEventListener("click",
    function () {
        position = parseInt(slideshow.getAttribute("position"));
        if (position + 1 <= figures.length - 1) {
            slideshow.setAttribute("position", position + 1);
        } else {
            slideshow.setAttribute("position", 0);
        }
        position = parseInt(slideshow.getAttribute("position"));
        figures[position].scrollIntoView({ behavior: "smooth", block: "nearest", inline: "nearest" });
    })
    previousSlide.addEventListener("click",
    function () {
        position = parseInt(slideshow.getAttribute("position"));
        if (position - 1 >= 0) {
            slideshow.setAttribute("position", position - 1);
        } else {
            slideshow.setAttribute("position", figures.length - 1);
        }
        position = parseInt(slideshow.getAttribute("position"));
        figures[position].scrollIntoView({ behavior: "smooth", block: "nearest", inline: "nearest" });
    })

    document.querySelectorAll(".slideshow figure figcaption").forEach(w=> 
        w.addEventListener("click", 
        function(e){
        document.querySelector(".slideshow .modal-header .title").innerText= this.parentNode.getAttribute("modal-title")
        document.querySelector(".slideshow .modal-body").innerText= this.parentNode.getAttribute("modal-body")
        document.querySelector(".slideshow .modal .play").parentNode.href= this.parentNode.getAttribute("modal-play")
        document.querySelector(".slideshow .modal .source-code").parentNode.href= this.parentNode.getAttribute("modal-source")
        document.querySelector(".slideshow .modal").classList.add("visible")}))

    document.querySelector(".modal .close").addEventListener("click",
    function(){
        document.querySelector(".slideshow .modal").classList.remove("visible")
    })
    /*Burger menu*/
    document.querySelector(".burger-menu").addEventListener("click", function(){
        document.querySelector("header").classList.toggle("visibleNav")
    })
    /*Search*/
    document.querySelector(".search input.search").addEventListener("keypress", function(event) {
        if (event.key === "Enter") {
            document.querySelector(".search .search.button").click();
        }
      }); 
    document.querySelector(".search .search.button").addEventListener("click", function(){
        searchQuery= document.querySelector(".search input.search").value

        if(searchQuery=="")return

        document.querySelectorAll(".blog").forEach((_b)=>{
            _b.classList.remove("hidden")
        })

        document.querySelectorAll(".blog").forEach((b) => {
            searchQuery_Normalized= searchQuery.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase();
        
            textFromBlogPost= b.querySelector(".text").innerText
            textFromBlogPost_Normalized= textFromBlogPost.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase()

            if(textFromBlogPost_Normalized.indexOf(searchQuery_Normalized)== -1){
                b.classList.add("hidden")
            }
        })

        document.querySelector(".removeSearch span").innerText= searchQuery
        document.querySelector(".removeSearch").classList.add("visible")

        if(document.querySelector(".blog:not(.hidden)")== null){
            document.querySelector(".noResults").classList.add("visible")
        }
        setTimeout(function(){
            document.querySelector(".blogs").scrollIntoView({ behavior: "smooth", block: "nearest", inline: "nearest" });
        }, 273)
    })
    
    document.querySelector(".removeSearch").addEventListener("click", function(){
        this.classList.remove("visible")
        document.querySelector(".noResults").classList.remove("visible")

        document.querySelectorAll(".blog").forEach((b)=>{
            b.classList.remove("hidden")
        })


        setTimeout(function(){
            document.querySelector("header").scrollIntoView({ behavior: "smooth", block: "nearest", inline: "nearest" });
        }, 273)
    })
})