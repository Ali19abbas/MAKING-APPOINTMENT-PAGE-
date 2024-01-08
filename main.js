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
let userDetails=JSON.stringify(myobj);
axios.post("https://crudcrud.com/api/977bc6b1d240421385a3741b49d43fed/userData",myobj).then((response)=>{
    console.log(response)
}).catch((error)=>{
    console.log("something went wrong")
})
localStorage.setItem(name,userDetails)
var n =document.createElement("li")
        n.appendChild(document.createTextNode(name))
        n.appendChild(document.createTextNode("----"))
        n.appendChild(document.createTextNode(phone))
        n.appendChild(document.createTextNode("----"))
        n.appendChild(document.createTextNode(email))
        let u=document.getElementById("list")
        u.appendChild(n)
        let btn=document.createElement("button");
        btn.id="delete";
        btn.innerHTML="DELETE"
        n.appendChild(btn)
        // making edit button
        //let ed=document.createElement("button");
        //ed.id="Edit";
        //ed.innerHTML="EDIT"
        //n.appendChild(ed)
        //deleleing element
        btn.addEventListener("click", function(e){
            n.remove();
           localStorage.removeItem(name, userDetails);
          })
  
          /*Editing
          ed.addEventListener("click" , function(e){
            let ne=document.createElement("li")
  
            let a=document.getElementById("name").value
            let d=document.getElementById('phone').value
            let s=document.getElementById('mail').value
            ne.appendChild(document.createTextNode(a))
            ne.appendChild(document.createTextNode("----"))
            ne.appendChild(document.createTextNode(d))
            ne.appendChild(document.createTextNode("----"))
            ne.appendChild(document.createTextNode(s))
            ne.appendChild(btn)
            ne.appendChild(ed)
  
            let r=u.lastElementChild;
            console.log(r)
            u.replaceChild(ne ,r)
            btn.addEventListener("click", function(e){
            ne.remove();
            localStorage.removeItem(name, userDetails);
            localStorage.removeItem;
            let j={
            name: a,
            phone   : d,
            email   : s
          };
          let j1=JSON.stringify(j);
          localStorage.setItem(name,j1)
          })
          })*/
        })
  


