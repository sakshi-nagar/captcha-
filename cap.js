function captchaGenerator(){
    let alpha = new Array('A','B','C','D','E','F','a','b','c','x','y','z');
//                         0   1   2  

    let a = alpha[Math.floor(Math.random() * alpha.length)];
    let b = alpha[Math.floor(Math.random() * alpha.length)];
    let c = alpha[Math.floor(Math.random() * alpha.length)];
    let d = alpha[Math.floor(Math.random() * alpha.length)];
    let e = alpha[Math.floor(Math.random() * alpha.length)];
    
    let results = a +" "+ b +" "+ c +" "+ d +" "+ e;

    document.getElementById('createCaptcha').value = results;

}


//isvalid

function isValid(){
    let one = removeSpaces(document.getElementById('createCaptcha').value);
    let two = removeSpaces(document.getElementById('inputCaptcha').value);

    if(one == two){
        return true;
    }else{
        return false;
    }
}


// removeSpaces

function removeSpaces(s){
    return s.split(" ").join('');
    //       b,E,E,B,C - 'bEEBC'
}

