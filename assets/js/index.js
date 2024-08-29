function btnMain(){
    window.scrollTo({top:0, behavior:'smooth'});
}

function btnOne(){
    const mainHeight = document.querySelector("#header").offsetHeight;

    window.scrollTo({top:mainHeight, behavior:'smooth'});
}

function btnTwo(){
    const mainHeight = document.querySelector("#two").offsetHeight;

    window.scrollTo({top:mainHeight, behavior:'smooth'});
}

function btnThree(){
    const mainHeight = document.querySelector("#three").offsetHeight;

    window.scrollTo({top:mainHeight, behavior:'smooth'});
}