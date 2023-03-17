const zodiac = document.getElementById("zodiac");

const body=document.body;

const changebackground=()=>{
    switch (zodiac.value) {
        case "aries":
            body.style.backgroundColor="Silver";
            break;
           case "taurus":
            body.style.backgroundColor="DarkSlateGrey";
            break; 
           case "gemini":
            body.style.backgroundColor="DarkSeaGreen";
            break; 
           case "cancer":
            body.style.backgroundColor="LightGreen";
            break; 
           case "leo":
            body.style.backgroundColor="NavajoWhite";
            break; 
           case "virgo":
            body.style.backgroundColor="Tan";
            break; 
           case "libra":
            body.style.backgroundColor="grey";
            break; 
           case "scorpio":
            body.style.backgroundColor="navy";
            break; 
           case "sagittarius":
            body.style.backgroundColor="BlueViolet";
            break; 
           case "capricorn":
            body.style.backgroundColor="Chartreuse";
            break; 
           case "aquarius":
            body.style.backgroundColor="Chocolate";
            break; 
           case "pisces":
            body.style.backgroundColor="Tan";
            break; 
    
        default:
            break;
    }
};
