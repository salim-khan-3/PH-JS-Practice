const salry = 25000;
const isBCS = true;
const height = 68;
const hasCar = false;

if(salry > 20000 && height > 66){
    console.log("you can marry that girl");
}
else{
    console.log("you cannot marry this girl please choice another girl");
}

if(salry > 25000 || height > 72){
    console.log("eso boli kobul");
}
else{
    console.log("vag tui mokbul");
}



/**
 * more and more condition
 */
if(salry>25000 || height>72 || isBCS == true){
    console.log("eso baba kobul");
}
else{
    console.log("vag tui mokbul");
}


if(salry>25000 && height>72 && isBCS == true){
    console.log("eso baba kobul");
}
else{
    console.log("vag tui mokbul");
}

// complex condition 
/**
 * complex condition one
 */
if((salry>25000 && hasCar==true)||isBCS == true){
    console.log("tomar 14 gusti ragi");
}
/**
 * complex condition two
 */

if((salry>25000 || hasCar==true)&& isBCS == true){
    console.log("tomar 14 gusti ragi");
}