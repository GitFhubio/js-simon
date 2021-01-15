
function isValid(num) {
  if(isNaN(num)) {
    return false;
  }
  if(num < 1) {
    return false;
  }
  if(num >100) {
    return false;
  }
  return true;
}

$(document).ready(function(){

var arr=[];
var RandomNumber;
while (arr.length<5) {
RandomNumber=Math.floor(Math.random()*100+1);
if (arr.indexOf(RandomNumber)==-1){

  arr.push(RandomNumber);
}
}
console.log(arr);
alert('Questi sono i numeri che devi memorizzare: '+arr);

var countdown = 29;
var clock = setInterval(function() {
    switch(countdown){
  case 0:
  messaggio=' ';
  clearInterval(clock);
  break;
  case 1:
  messaggio='Manca '+countdown+' secondo';
  break;
  default:
  messaggio='Mancano '+countdown+' secondi';
  }
    $("#numero").text(messaggio);
    countdown--;
}
, 1000);

setTimeout(function(){

var arrScelte=[];
var sceltaUtente;
while (arrScelte.length<5 ) {

sceltaUtente=parseInt(prompt('Inserisci il '+(arrScelte.length+1)+'°'+' numero'));
if(arrScelte.indexOf(sceltaUtente)!=-1)
{alert('Hai già inserito questo numero');
}
else if(!isValid(sceltaUtente))
{alert('Erano numeri da 1 a 100,non te lo conto manco errore');
}
else{
  arrScelte.push(sceltaUtente);
}
}
var scelteGiuste=[];
for (var i = 0; i < arrScelte.length; i++) {
if(arr.indexOf(arrScelte[i])!=-1)
{
  scelteGiuste.push(arrScelte[i]);
}
}

switch(scelteGiuste.length){
case 0:
alert('Non hai indovinato manco un numero,hai problemi di memoria grossi');
break;
case 1:
alert('Hai indovinato solo il numero '+[scelteGiuste]);
break;
default:
alert('Hai indovinato '+scelteGiuste.length+' numeri: '+[scelteGiuste]);
}

  ; },
30500);

}
)

// Nota:ho messo 29 e 30200 per considerare il delay naturale del prompt
