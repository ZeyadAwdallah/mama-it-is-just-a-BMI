const height = document.getElementById("height");
const weight = document.getElementById("weight");
const result = document.getElementById("result")
const btn = document.getElementById("submit");

btn.addEventListener("click",function(){
    var preresult = 0;
    var status = "normal"
    preresult = (Number(weight.value)/(Number(height.value)*Number(height.value))).toFixed(2)
    if(preresult<=18){status="Underweight"
    result.style.color="blue"
}
    else if(preresult<=25){status="Normal"
    result.style.color="green"
}
    else if(preresult<=30){status="Overweight"
    result.style.color="orange"
}
    else{
         status="Obese"
         result.style.color="red"
 }
    result.innerHTML=preresult+"<br>"+status;
    weight.value="";
    height.value="";
})