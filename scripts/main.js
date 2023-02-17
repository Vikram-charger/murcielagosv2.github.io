let myImg = document.querySelector('img');

myImg.onclick = () => { 
    let mySrc = myImg.getAttribute('src');
    console.log(mySrc);
    if(mySrc === "./images/full.jpg"){
        myImg.setAttribute("src", "./images/full2.jpg")
    }
    else{
        myImg.setAttribute("src", "./images/full.jpg");
    }
}