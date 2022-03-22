let clickExtinct = document.querySelectorAll(".clickExtinct");

    for (let i = 0; i < clickExtinct.length; i++){
        // console.log(clickExtinct[i]);
        let clickedDino = clickExtinct[i];
        clickedDino.addEventListener("click", function(){
            clickedDino.style.textDecoration = "line-through";
        })
    }

let clickFade = document.querySelectorAll("ul li");

for (let i = 0; i < clickFade.length; i++){
    let dinoFade = clickFade[i];
    dinoFade.addEventListener("click", function(){
        dinoFade.style.opacity = "0";
    })
}

let dinoPicRow = document.querySelectorAll("#row img");

for (let item of dinoPicRow){
    item.addEventListener("click", function(event){
        let clickedEvent = event.target;
        clickedEvent.style.width = "0";
    })
}


let meteor = document.querySelector("#destroy-all");

const destroyAll = function(){
    for (let item of clickExtinct){
        item.style.textDecoration = "line-through";
    }
    for (let item of clickFade){
        item.style.opacity = "0";
    }
    for (let item of dinoPicRow){
        item.style.width = "0";
    }
}
meteor.addEventListener("click", destroyAll);






// for (let i = 0; i < dinoPicRow.length; i++){
//     let dinoPic = dinoPicRow[i];
//     console.log(dinoPic);

//     dinoPic.addEventListener("click", function(){
//         dinoPic.style.width = "0";
//     })
// }


