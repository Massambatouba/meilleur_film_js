window.onload = function(){


    /*
         <div class="film">
                <img width=250 height=300 src="images/intouchable.webp" alt="">
                <h3>Test titre</h3>
            </div>
    */
   for (let i = 0; i < filmData.length; i++) {
    createFilm(i);
   }
    function createFilm(number){
       let someFilm  = filmData[number];
       let film = document.createElement("div");
       film.className="film";
       film.id = number+"-film";

       let image = document.createElement("img");
       image.src=someFilm.image;
       image.alt = someFilm.title;

       let titre = document.createElement("h3");
       titre.innerHTML = someFilm.title;

       film.appendChild(image);
       film.appendChild(titre);
       document.getElementById("films").appendChild(film);
      
    }

    let input = document.getElementsByTagName("input");
    let selection = document.getElementById("selection")
    let films = document.getElementById("films");
    films.addEventListener('mouseover', survolFilm, false)
    input[0].addEventListener("keyup",recherche, false);
    input[1].addEventListener('mouseup',checkbox,false)
    films.addEventListener("mouseout",finSurVole, false)
    films.addEventListener("click", selectionFilm, false)
    selection.addEventListener("click", clickSelection, false)

    function recherche(event){
       let inputValue = event.target.value.toLowerCase();
       //console.log(inputValue);
       
        for (let i = 0; i < filmData.length; i++) {
            let titre = filmData[i].title.toLowerCase();
            let film = document.getElementById(i+"-film")
            if(titre.includes(inputValue)==false){
                film.style.display = "none";
            }else{
                film.style.display = "inline-block";
            }
            
        
       }
    }

    function checkbox(event) {
        let detail = document.getElementById("details")
       let checked = event.target.checked;
       console.log(checked);
       if (checked){
            detail.style.display = "none";
       }else{
        detail.style.display = "block";
       }
    }
    function survolFilm(event) {
        let survol = event.target.parentNode;
        let identifiant = survol.id;
        let position;
        if(identifiant=="catalogue"){
            return
        }
        else if(identifiant.length == 6){
            position = identifiant[0];
        }else if (identifiant.length == 7){
            position = identifiant[0]+identifiant[1];
        }else{
            return
        }
        let description = filmData[position].text;
        let details = document.getElementById("details")
        details.innerHTML = description;
        
    }
    function finSurVole(event) {
        details.innerHTML = "";
    }

    function selectionFilm(event){
       let film = event.target.parentNode;
       let select1 = document.getElementById("selection1");
       let select2 = document.getElementById("selection2");
       film.addEventListener("mouseover", survolFilm, false)
       film.addEventListener("mouseout", finSurVole, false)
       let select1Child1 = select1.childNodes;
       let select1Child2 = select2.childNodes;
       if(select1Child1.length==1){
        select1.insertBefore(film, select1Child1[0]);
       }else if(select1Child2.length==1){
           select2.insertBefore(film, select1Child2[0]);
       }else {
        alert("Désolé Vous avez deja choisi deux film");
       }
 
    }
    function clickSelection(event) {
        let film = event.target.parentNode;
        let select = film.parentNode;
        let selectChild = select.childNodes;
        if(selectChild[0].className=="film") {
            let copieFilm =selectChild[0];
            select.removeChild(copieFilm);
            document.getElementById("films").appendChild(copieFilm);
        }
        //console.log(selectChild);
    }






    // function survolFilm(event) {
    //     let elementSurVole = event.target.parentNode;
    //     let position;
    //     let identifiantFilm = elementSurVole.id;
    //     if(identifiantFilm=="catologue"){
    //         return
    //     }else if(identifiantFilm.length == 6){
    //         position = identifiantFilm[0];
    //     }else if(identifiantFilm.length == 7){
    //         position = identifiantFilm[0]+identifiantFilm[1];
    //     }
    //     else{
    //         return
    //     }
    //     let description = filmData[position].text;
    //     console.log(description);
    //     document.getElementById("details").innerHTML = description;
    // }
    // function finSurVole(event){
    //     document.getElementById("details").innerHTML = "";
    // }
    
   

}