document.getElementById('start').onclick = function(){
    var min = 1;
    var max = 75;
    var bingo = [];
    for(var i = min;i <= max;i++){
        bingo.push(i);
    }

    for(var i = bingo.length - 1; i > 0; i--){
        var r = Math.floor(Math.random() * (i + 1));
        var tmp = bingo[i];
        bingo[i] = bingo[r];
        bingo[r] = tmp;
    }

    var table = document.createElement('table');
    var tr = document.createElement('tr');
    var th = document.createElement('th');
    th.textContent = '番号';
    tr.appendChild(th);
    var th = document.createElement('th');
    th.textContent = '列';
    tr.appendChild(th);

    var td = document.createElement('td');
    var tr = document.createElement('tr');

    
    var BingoNum = bingo.pop();
    td.textContent = BingoNum;
    tr.appendChild(td);
    table.appendChild(tr);
    var td = document.createElement('td');
    if(BingoNum <= 15){
        td.textContent = 'B'; 
    }else if(BingoNum <= 30){
        td.textContent = 'I'; 
        }else if(BingoNum <= 45){
            td.textContent = 'N';
        }else if(BingoNum <= 60){
            td.textContent = 'G';
        }else{
            td.textContent = 'O';
        }
        tr.appendChild(td);
        table.appendChild(tr);
        document.getElementById('BingoTable').appendChild(table);
    
} 
