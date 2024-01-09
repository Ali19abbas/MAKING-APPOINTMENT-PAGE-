window.addEventListener("DOMContentLoaded" ,()=>{
    axios.get("https://crudcrud.com/api/36141b82b5ee43c6881c476568b4db28/userData")
    .then((response)=>{
        console.log(response)
        let c=0;
        let xyz=0;
        for(let i=0;i<response.data.length;i++){
            showUserData(response.data[i])   
        }
    })
  })
  let fo =document.getElementById("form")
fo.addEventListener('submit',function(event){
event.preventDefault();
let name=document.getElementById("name").value;
let phone=document.getElementById("phone").value;
let email=document.getElementById("mail").value
let myobj={
    n:name,
    p:phone,
    e:email
}
let currData

axios.post("https://crudcrud.com/api/36141b82b5ee43c6881c476568b4db28/userData",myobj).then((response)=>{
    axios.get("https://crudcrud.com/api/36141b82b5ee43c6881c476568b4db28/userData")
.then((response)=>{
     currData=response.data[response.data.length-1]["_id"]
     myobj._id=currData
})
}).catch((error)=>{
    console.log("something went wrong")
})
showUserData(myobj)
        
        })
        function showUserData(obj){
            
            var n =document.createElement("li")
            
            n.appendChild(document.createTextNode(obj["n"]))
            n.appendChild(document.createTextNode("----"))
            n.appendChild(document.createTextNode(obj["p"]))
            n.appendChild(document.createTextNode("----"))
            n.appendChild(document.createTextNode(obj["e"]))
            let u=document.getElementById("list")
            u.appendChild(n)
            let btn=document.createElement("button");
            btn.id="delete";
            btn.innerHTML="DELETE"
            n.appendChild(btn)
            btn.addEventListener("click", function(e){
                n.remove();
                let idd=(obj["_id"])
                axios.delete(`https://crudcrud.com/api/36141b82b5ee43c6881c476568b4db28/userData/${idd}`).then(()=>{
                    })
                    })
            
        }
       
        
  


