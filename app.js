
// Para referencia: 
// 1=spade/ trebol
// 2=club/ pica
// 3=heart/corazon
// 4=diamond/diamante


window.onload=()=>{
    const cardColor=['&spades;','&clubs;','&hearts;','&diams;'];
    let pint=cardColor[Math.floor(Math.random()*4)];
    let number=Math.floor(Math.random()*12);
    switch(number){
        case 0:
            number="A"
        case 10:
            number="J";
        case 11:
            number="Q";
        case 12:
            number="K";
        default:
            number=number;
    }
    document.getElementById("numero").innerHTML=number;
    document.getElementById("pinta").innerHTML=pint;
    document.getElementById("pinta2").innerHTML=pint;
    document.getElementById("pinta2").style.transform = "rotate(180deg)";
    if(pint=='&hearts;'||pint=='&diams;'){
        document.getElementById("pinta").style.color = "#ff0000";
        document.getElementById("pinta2").style.color = "#ff0000";
    }
         
}