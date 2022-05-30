// Add the coffee to local storage with key "coffee"
// https://masai-mock-api.herokuapp.com/coffee/menu




async function main(){
   

    try{
        let res=await fetch(`https://masai-mock-api.herokuapp.com/coffee/menu`)


        let data= await res.json()
       
        appendData(data.menu.data)
    }
    catch(err)
    {
        console.log(err)
    }
}
main()
  let bucket=JSON.parse(localStorage.getItem("coffee"))||[]

  document.getElementById("coffee_count").append(bucket.length)

function appendData(data){
    data.forEach(function(el){
         

    

        let img=document.createElement("img")
        img.src=el.image

         let p=document.createElement("p")
         p.innerText=el.price;

         let t=document.createElement("p")
         t.innerText=el.title;

         let btn=document.createElement("button")
         btn.innerText="add_to_bucket"
         btn.addEventListener("click",function(){
             add(el)


         })
         let div=document.createElement("div")
        div.append(img,p,t,btn)
         document.querySelector("#menu").append(div)
    })

    function add(el){
          console.log(el)
        bucket.push(data)
        localStorage.setItem("coffee",JSON.stringify(bucket))
    }
    
}