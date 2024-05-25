    var colors = ["red","blue","green","yellow","black","purple","violet"];
    var index = 0;

function changColors(){
    document.body.style.backgroundColor = colors[index];
    index++;
    if(index >= colors.length){
        index=0;
    }
}