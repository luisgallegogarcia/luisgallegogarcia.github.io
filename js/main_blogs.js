window.addEventListener("load",
    function () {
        /*Burger menu*/
        document.querySelector(".burger-menu").addEventListener("click", function () {
            document.querySelector("header").classList.toggle("visibleNav")
        })
        /*Search*/
        document.querySelector(".search-cont input.search").addEventListener("keypress", function(event) {
            if (event.key === "Enter") {
                document.querySelector(".search-cont .search.button").click();
            }
          }); 
        document.querySelector(".search-cont .search.button").addEventListener("click", function(){
            searchQuery= document.querySelector(".search-cont input.search").value
    
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