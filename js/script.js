'use strict';
window.onload = function () {
  but.onclick=function clickBut() {
    let str=document.forms[0].elements[0].value.trim();
    var arr=str.split(" ");
//удаление лишних пробелов
    for (var i = 0; i < arr.length; i++) {
        if(arr[i]=="") {
          arr.splice(i,1);
          i--;
        }
    }

    let k=0;
    for (var i = 0; i < arr.length; i++) {
      if(isNaN(arr[i])) k++;
    }
    if (k!=0) {
      {alert("Что-то из введенного не число. Попробуйте еще раз!")}
    }
    else {
      arr.push(-Infinity);
      console.log(`Наша строка ${arr}`);
      let str2="", strLength=1;
      let strMax="", maxLength=1;

      for (var i = 0; i < arr.length; i++) {
        if(+arr[i]<+arr[i+1]){
          str2+=arr[i]+" ";
          strLength++;
        }
        else {
          if(maxLength<strLength){
            maxLength=strLength;
            strLength=1;
            str2+=arr[i];
            strMax=str2;
            str2="";
          }
        //знаю, что нужна еще проверка на равенство:)
          else {
            strLength=1;
            str2="";
          }

        }
      }
      let div = document.createElement("div");
          div.innerText=`Самая длинная последовательность ${strMax}`;
          document.body.appendChild(div);
    }



  }

}
