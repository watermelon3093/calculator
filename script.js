let result=document.getElementById("input");

let display=(Number)=>{
    result.value=result.value+Number;
}

let calculate=()=>{
    try{
        result.value=eval(result.value)
    }
    catch(err){
        alert("Syntax Error")
    }
}

function clr(){
    result.value= '';
}

function del(){
    result.value=result.value.slice(0,-1);
}