
document.querySelector("form").addEventListener("submit",myfunction)

var arr=[]

function myfunction(){
    event.preventDefault()
    
  obj={
   x: document.querySelector("#name") ,
   y: document.querySelector("#number"),
     z:document.querySelector("#addres") ,
    
  }
 
arr.push(obj)
setTimeout(function(res,rej){
   alert("Your order is accepted ")
},0)

    setTimeout(function(res){
        alert("Your order is being Prepared")
    },300)
     
    setTimeout(function(res){
        alert("Your order is being packed ")
    },80000)
     
    setTimeout(function(res){
        alert("Your order is out for delivery ")
    },100000)
     
    setTimeout(function(res){
        alert(" Order delevered ")
    },120000)
     

}

