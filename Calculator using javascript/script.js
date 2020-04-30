function getHistory(){
    return document.getElementById("historyvalue").innerText;
}
function printHistory(num){
    document.getElementById("historyvalue").innerText=num;
}
function getOutput(){
    return document.getElementById("outputvalue").innerText;
}
function printOutput(num){
   if(num==""){
    document.getElementById("outputvalue").innerText=num;
   } 
    else{
        document.getElementById("outputvalue").innerText=getFormattedNumber(num);
    }
}
function getFormattedNumber(num){
    var n = Number(num);
    var value = n,tolocaleString("en");
    return value;
}
function reverseNumberFormat(num){
    return Number(num.replace(/,/g,''));
}