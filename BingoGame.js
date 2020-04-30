var min = 1;
var max = 75;
var count = 0;
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
if(count != 75){
    count++;
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
    }else{
        td.textContent = "終了!";
        alert("全部出し終わりました");
        tr.appendChild(td);
        table.appendChild(tr);
    }
        document.getElementById('BingoTable').appendChild(table);
    
}

document.getElementById('reset').onclick = function(){
    var res = confirm("リセットしても構いませんか？");
    if(res == true){
        bingo = [];

        for(var i = min;i <= max;i++){
            bingo.push(i);
        }
        
        for(var i = bingo.length - 1; i > 0; i--){
            var r = Math.floor(Math.random() * (i + 1));
            var tmp = bingo[i];
            bingo[i] = bingo[r];
            bingo[r] = tmp;
        }
        count = 0;
        var dom_obj = document.getElementById('BingoTable');
        while (dom_obj) dom_obj.removeChild(dom_obj.firstChild);

    }
}

