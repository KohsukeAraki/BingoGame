var flagRunning;
var min = 1;
var max = 75;
var count = 0;
var bingo = [];
var timer;
var qtyRemainBall;
var Num;
var numLog_dsp;
/* 配列の数値入れ替え用のワーク */
var wkNumber;

txtWinNo  = document.getElementById("txtWinNo");
btnStart  = document.getElementById("start");

txtWinNo.textContent = 0;

/* 当選番号表示エリアを待機中 */
textWinArea.className = "textWaiting";
/* ボタンのテキスト表示 */
btnStart.textContent = "スタート";
numLog_dsp = document.getElementById("numLog_dsp");

for(var i = min;i <= max;i++){
    bingo.push(i);
}

for (var i = 1; i <= qtyRemainBall; i++) {
    //全番号モードの初期状態セットアップ
    display_setup();
}


document.getElementById("start").onclick = function(){

    if(flagRunning == true){
        ToStandby();
    }else{
        ToRun();
    }
}

function ToStandby(){
    clearInterval(timer);

    /* シャッフル中フラグをoffに */
    flgRunning = false;
    
    	/* 当選番号表示エリアを待機中 */
        textWinArea.className = "textWaiting";

        	/* 当選番号表示エリアの編集*/
    document.getElementById("dsp_li"+bingo[Num]).className = "BingoBallSelected";
    
    /* ビンゴ番号配列の編集*/
	wkNumber = bingo[Num] ;
	bingo[Num]  = bingo[qtyRemainBall] ;
	bingo[qtyRemainBall]  = wkNumber;
    qtyRemainBall = qtyRemainBall - 1;
    

    /* ボタンのテキスト編集 */
    btnStart.textContent = "スタート";

	/* ボールがなくなったら、ボタンをつかえなくする */
    if (qtyRemainBall == 0) {
		btnStart.disabled = true;

    }
}

var display_setup = function(){

     // li要素定義
  var newLi = document.createElement("dsp_li");
  // id属性追加
    newLi.setAttribute ("id","dsp_li"+i);
  // テキスト初期値　ボール番号
    var newContent = document.createTextNode(i);
  newLi.appendChild(newContent);
  // li要素をDOMに追加
  document.getElementById("numLog_dsp").appendChild(newLi);
  // 未当選状態のクラス
    document.getElementById("dsp_li"+i).className = "BingoBallNotSelected";
}


function ToRun(){
    /* 10ミリ秒ごとに残り時間を計算するタイマー処理 開始 */
    timer = setInterval(Shuffle, 10);
    flagRunning = true;

    /* 開始終了ボタンのテキスト"STOP"に書き換える */
    btnStart.textContent = "ストップ";
    
    /* 当選番号エリアのクラス名を、シャッフル中テキストのクラスに */
	textWinArea.className = "textShuffle";
}

function Shuffle(){
    Num = Math.ceil(Math.random() * qtyRemainBall);
	 txtWinNo.textContent = bingo[Num] ;
}
