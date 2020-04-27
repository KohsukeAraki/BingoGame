document.getElementById('start').onclick = function(){
    var min = 1;
    var max = 75;
    
    var BingoNum = Math.floor(Math.random() * (max + 1 - min)) + min;
    document.write(BingoNum+"</br>");
    if(BingoNum <= 15){
        document.write("B</br>"); 
    }else if(BingoNum <= 30){
        document.write("I</br>"); 
        }else if(BingoNum <= 45){
        document.write("N</br>");
        }else if(BingoNum <= 60){
            document.write("G</br>");
        }else{
            document.write("O</br>");
        }
    
} 
