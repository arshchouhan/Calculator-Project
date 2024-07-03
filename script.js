const display=document.getElementsByClassName("display")
const buttons=document.querySelectorAll("button")

buttons.forEach(function (button){
   button.addEventListener("click",function(){
    if(button.value!="C" && button.value!="=" && button.value!="+" && button.value!="-" && button.value!="*" && button.value!="/" && button.value!=".") 
    {
        let last= display[0].innerText[display[0].innerText.length-1]
        if(last==0)
        {
            display[0].innerText=button.value
        }
        else{
            display[0].innerText+=button.value
        }
    }
})
})

buttons.forEach(function(button){
    button.addEventListener("click",function(){
    if(button.value=="C")
    {
        display[0].innerText="0"
    }
})
})

buttons.forEach(function(button){
    button.addEventListener("click",function(){
        if(button.value=="=")
        {
            display[0].innerText=eval(display[0].innerText)
        }
})
})


buttons.forEach(function(button){
    button.addEventListener("click",function(){
        
        if(button.value=="+" || button.value=="-" || button.value=="*" || button.value=="/"){
            let last1= display[0].innerText[display[0].innerText.length-1]
            console.log(last1)
            if(!isNaN(parseInt(last1)))
            { 
                display[0].innerText+=button.value
            }
            else
            {
                display[0].innerText=display[0].innerText.replace(last1,button.value)
            }
            
        }        
})
})

buttons.forEach(function(button){
    button.addEventListener("click",function(){
        if(button.value==".")
        {
            let last2= display[0].innerText[display[0].innerText.length-1]
            if(!isNaN(parseInt(last2)))
            {
                display[0].innerText+=button.value
            }
        }
    })
})





    

