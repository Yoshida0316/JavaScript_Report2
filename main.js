
let result = document.getElementById('result');

function clickbtn(target){
//   console.log(result)
let target_value = target.innerHTML; 
  if (target_value =="AC"){ 
    result.innerHTML = "0"
  } else if (target_value == "="){
    result.innerHTML = eval(result.innerHTML);
  }else{
     if(result.innerHTML== "0"){
       result.innerHTML = target_value
     }else if(result.innerHTML == "00"){
         result.innerHTML = target_value
     }else{
         result.innerHTML += target_value;
    }
  }
}
function signbtn(target){
 let target_value = target.innerHTML; 
  if(result.innerHTML.slice(-1) =="+"||result.innerHTML.slice(-1) ==="-"||result.innerHTML.slice(-1) ==="*"||result.innerHTML.slice(-1) ==="/"){
   result.innerHTML = result.innerHTML.slice(0,-1) +target_value
   }else{
   result.innerHTML += target_value;
     }
}
function pointbtn(target){
 let target_value = target.innerHTML; 
  if(result.innerHTML.slice(-2) ==="00"){
   result.innerHTML = result.innerHTML.slice(0,-1) +target_value
   }else{
   result.innerHTML += target_value;
     }
}
  
