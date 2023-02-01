let accordion = document.getElementsByClassName("content-container");


for (let i=0; i<accordion.length; i++){

    //console.log(accordion)
    accordion[i].addEventListener("click",function(){
         console.log( "clicked");
        this.classList.toggle('active');
    })
}