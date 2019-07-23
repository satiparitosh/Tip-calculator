const myfunc = ()=>{
    let billamount = document.getElementById("billamount");
    let review = document.getElementById("review");
    let val = review.options[review.selectedIndex].value;
    let numpeople = document.getElementById("numpeople");
    let tip=0;
    if(val === "1"){
        tip = ((billamount.value)/(numpeople.value))*0.7;
    }
    else if(val === "2"){
        tip = ((billamount.value)/(numpeople.value))*0.5;
    }
    else if(val ==="3"){
        tip = ((billamount.value)/(numpeople.value))*0.3;
    }
    else if(val ==="4"){
        tip = ((billamount.value)/(numpeople.value))*0.1;
    }
    else if(val ==="5"){
        tip = 0;
    }
    else if(val ==="6"){
        tip = 0;
    }
    document.getElementById("finaltip").classList.add("lasttip");
    document.getElementById("finaltip").innerHTML="Tip of the day - Rs." + tip;
};