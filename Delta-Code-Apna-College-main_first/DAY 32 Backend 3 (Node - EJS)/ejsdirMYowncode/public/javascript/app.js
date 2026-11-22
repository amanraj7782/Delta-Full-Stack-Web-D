const btn= document.querySelectorAll("button") ;
for(let button of btn)
     {
      button.addEventListener("click",()=>{
        console.log("button is clicked ") ;
      })  
     }