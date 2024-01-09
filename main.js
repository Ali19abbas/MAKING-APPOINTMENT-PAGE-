window.addEventListener("DOMContentLoaded" ,()=>{
    axios.get("https://crudcrud.com/api/f31b4322c996409f950b41f2e5221141/userData")
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

axios.post("https://crudcrud.com/api/f31b4322c996409f950b41f2e5221141/userData",myobj).then((response)=>{
    axios.get("https://crudcrud.com/api/f31b4322c996409f950b41f2e5221141/userData")
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
            let edit=document.createElement("button");
            edit.id="edit";
            edit.innerHTML="EDIT"
            n.appendChild(edit)
            btn.addEventListener("click", function(e){
                n.remove();
                let idd=(obj["_id"])
                axios.delete(`https://crudcrud.com/api/f31b4322c996409f950b41f2e5221141/userData/${idd}`).then(()=>{
                    })
                    })
                    edit.addEventListener('click', ()=>{
                        alert("PLEASE UPDATE DETAILS THEN CLICK ON 'UPDATE' icon")
                       

                        let upd=document.createElement("button")
                        upd.id="update";
                        upd.innerHTML="UPDATE"
                        n.appendChild(upd)
                        upd.addEventListener('click',()=>{
                            let nam=document.getElementById("name").value;
                            let phon=document.getElementById("phone").value;
                            let emai=document.getElementById("mail").value
                            let idd=(obj["_id"])
                         axios.put(`https://crudcrud.com/api/f31b4322c996409f950b41f2e5221141/userData/${idd}`,{
                            n: `${nam}`, p:`${phon}` , e:`${emai}`
                         }).then(()=>{}) 
                         let obj4={
                             n:nam,
                             p:phon,
                             e:emai
                         }
                         var k =document.createElement("li")
 
                         k.appendChild(document.createTextNode(obj4["n"]))
                         k.appendChild(document.createTextNode("----"))
                         k.appendChild(document.createTextNode(obj4["p"]))
                         k.appendChild(document.createTextNode("----"))
                         k.appendChild(document.createTextNode(obj4["e"]))
                         k.appendChild(btn)
                         k.appendChild(edit)
                         n.remove();
                         u.appendChild(k)
                         
  
                        })

                       

                    })
            
        }
