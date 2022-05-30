// On clicking remove button the item should be removed from DOM as well as localstorage.



let bucket=JSON.parse(localStorage.getItem("coffee"))||[]



 var total=bucket.reduce(function(sum,el,index){
    
     return sum+Number(el.price)

 },0)
let y=document.querySelector("h3").innerText=`${total}`
document.querySelector("#total_amount").append(y)

bucket.forEach(function(el,index){


    
   let img=document.createElement("img")
   img.src=el.image;
   

    let p=document.createElement("p")
    p.innerText=el.price;

    let t=document.createElement("p")
    t.innerText=el.title;

    let btn=document.createElement("button")
    btn.innerText="remove_coffee"
    btn.addEventListener("click",function(){
        remove(el,index)


    })
    let div=document.createElement("div")
   div.append(img,p,t,btn)
    document.querySelector("#bucket").append(div)
})
     function remove(el,index){
    console.log(el)
    bucket.splice(index,1)
    localStorage.setItem("coffee",JSON.stringify(bucket))
    window.location.reload()

}

  