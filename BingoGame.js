document.getElementById('start').onclick = function(){
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

    var min = 1;
    var max = 75;
    
    var BingoNum = Math.floor(Math.random() * (max + 1 - min)) + min;
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
