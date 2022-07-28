function countdown(){//ゲーム開始のカウントダウン部分
    if(time>0){
        time--;
        p.innerHTML=time;
    }else{
        time--;
    }
    if(time==0){
        game();
        var ttt = setInterval(time_cluc,1000);
    }
}
function timmer(){//ゲーム開始のカウントダウンの関数を引き出す部分
    var tim = setInterval(countdown,1000); 
}
function time_cluc(){//残り時間カウント
    if(remain_time>0){
        remain_time--;
        rrrTime.innerHTML=remain_time;
    }else if(remain_time==0){
        var finish = confirm('終了！あなたの得点は'+point+'でした！終了するには"はい"を押してください');
        if(finish){//終了後ダイアログを表示して「はい」を選択してタブを閉じさせる
            window.close();
        }else{

        }
    }
}
function game() {//0.5秒ごとにランダムでもぐら出現
    var trr = setInterval(appr,1500);
}
function appr(){//ゲーム部分
    //(乱数で1〜9までをランダムに出力してそれに応じた番号のもぐらを出現させる。1秒後、関数kesu_数字 でもぐらを隠す)
    let num = Math.floor(Math.random() * 9) + 1;
    switch (num) {
        case 1:
            a.style.visibility="visible";//1番のもぐらを出現
            bool_a = true;//判定用変数も変更
            setTimeout(kesu_1,1000);//1秒後、関数kesu_1によって１番のもぐらを隠す。case2以降も同じ。
            break;
        case 2:
            b.style.visibility="visible";
            bool_b = true;
            setTimeout(kesu_2,1000);
            break;
        case 3:
            c.style.visibility="visible";
            bool_c = true;
            setTimeout(kesu_3,1000);
            break;
        case 4:
            d.style.visibility="visible";
            bool_d = true;
            setTimeout(kesu_4,1000);
            break;
        case 5:
            e.style.visibility="visible";
            bool_e = true;
            setTimeout(kesu_5,1000);
            break;
        case 6:
            f.style.visibility="visible";
            bool_f = true;
            setTimeout(kesu_6,1000);
            break;
        case 7:
            g.style.visibility="visible";
            bool_g = true;
            setTimeout(kesu_7,1000);
            break;
        case 8:
            h.style.visibility="visible";
            bool_h = true;
            setTimeout(kesu_8,1000);
            break;
        case 9:
            i.style.visibility="visible";
            bool_i = true;
            setTimeout(kesu_9,1000);
            break;
        default:
            break;
    }
}
function kesu_1() {//出現後姿を消す(No.1)
    a.style.visibility="hidden";
    bool_a =false;
}
function kesu_2() {//出現後姿を消す(No.2)
    b.style.visibility="hidden";
    bool_b = false;
}
function kesu_3() {//出現後姿を消す(No.3)
    c.style.visibility="hidden";
    bool_c = false;
}
function kesu_4() {//出現後姿を消す(No.4)
    d.style.visibility="hidden";
    bool_d = false;
}
function kesu_5() {//出現後姿を消す(No.5)
    e.style.visibility="hidden";
    bool_e = false;
}
function kesu_6() {//出現後姿を消す(No.6)
    f.style.visibility="hidden";
    bool_f = false;
}
function kesu_7() {//出現後姿を消す(No.7)
    g.style.visibility="hidden";
    bool_g = false;
}
function kesu_8() {//出現後姿を消す(No.8)
    h.style.visibility="hidden";
    bool_h = false;
}
function kesu_9() {//出現後姿を消す(No.9)
    i.style.visibility="hidden";
    bool_i = false;
}
function judge1() {
    if(bool_a=true){
        point++;
        score.innerHTML=point;
    }
}
function judge2() {
    if(bool_b=true){
        point++;
        score.innerHTML=point;
    }
}
function judge3() {
    if(bool_c=true){
        point++;
        score.innerHTML=point;
    }
}
function judge4() {
    if(bool_d=true){
        point++;
        score.innerHTML=point;
    }
}
function judge5() {
    if(bool_e=true){
        point++;
        score.innerHTML=point;
    }
}
function judge6() {
    if(bool_f=true){
        point++;
        score.innerHTML=point;
    }
}
function judge7() {
    if(bool_d=true){
        point++;
        score.innerHTML=point;
    }
}
function judge8() {
    if(bool_h=true){
        point++;
        score.innerHTML=point;
    }
}
function judge9() {
    if(bool_i=true){
        point++;
        score.innerHTML=point;
    }
}
let point = 0;//ゲームの得点
let p = document.getElementById('countDown');
//No.1に関する変数など
//No.2〜No.9の変数セットの役割もNo.1と一緒
let a = document.getElementById('1');//htmlからid=1の要素を取得
let bool_a = false;//判定用のboolean変数
a.style.visibility="hidden";//最初はもぐらを隠しておく
a.addEventListener('click',judge1);//もぐらの画像を押したら判定関数judge1を起動して判定。
//No.2に関する変数など
let b = document.getElementById('2');
let bool_b = false;
b.style.visibility="hidden";
b.addEventListener('click',judge2);
//No.3に関する変数など
let c = document.getElementById('3');
let bool_c = false;
c.style.visibility="hidden";
c.addEventListener('click',judge3);
//No.4に関する変数など
let d = document.getElementById('4');
let bool_d = false;
d.style.visibility="hidden";
d.addEventListener('click',judge4);
//No.5に関する変数など
let e = document.getElementById('5');
let bool_e = false;
e.style.visibility="hidden";
e.addEventListener('click',judge5);
//No.6に関する変数など
let f = document.getElementById('6');
let bool_f = false;
f.style.visibility="hidden";
f.addEventListener('click',judge6);
//No.7に関する変数など
let g = document.getElementById('7');
let bool_g = false;
g.style.visibility="hidden";
g.addEventListener('click',judge7);
//No.8に関する変数など
let h = document.getElementById('8');
let bool_h = false;
h.style.visibility="hidden";
h.addEventListener('click',judge8);
//No.9に関する変数など
let i = document.getElementById('9');
let bool_i = false;
i.style.visibility="hidden";
i.addEventListener('click',judge9);

window.addEventListener('load',timmer);
let time = 3;//countdownTime
let remain_time = 15;
let rrrTime = document.getElementById('remain_time');
let socre = document.getElementById('score');
