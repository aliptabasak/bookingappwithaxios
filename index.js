

const nameInput=document.querySelector('#username');
const emailInput=document.querySelector('#email');
const submitBtn = document.getElementById("submit");
submitBtn.addEventListener('click',onsubmit);

// const dt=axios.get(
//     "https://crudcrud.com/api/f906d53565df4af68d1d25dd6855bdfb/unicorns"
//     //     {"name":"alipta",
//     // "emailId":"alipta@345.com"
//     //     }
    
//     ).then(data=>console.log(data));
    

document.addEventListener("DOMContentLoaded", () => {
const localStorageObj=localStorage;
const localStorageKeys=Object.keys(localStorageObj);
for(var i=0;i<localStorageKeys.length;i++){
    const key=localStorageKeys[i];
    const userDetailsString=localStorageObj[key];
    const userDetailsObj=JSON.parse(userDetailsString);
    showUserOnScreen(userDetailsObj);
}
});

function onsubmit(e){
    e.preventDefault();
    const obj={
                name:nameInput.value,
               email:emailInput.value
            };
axios.post("https://crudcrud.com/api/e080933948fb4e06bac13c3d27956cf5/appointmentData",obj)
.then((response)=>{
    showUserOnScreen(response.data);
    console.log(response)
})
.catch((err)=>{
    document.body.innerHTML=document.body.innerHTML+"<h4>Something went wrong</h4>"
    console.log(err)
})
            //localStorage.setItem(myObj.email,JSON.stringify(myObj));
       
            // showUserOnScreen(myObj);
}
function showUserOnScreen(user){
    if(localStorage.getItem((user.email)!=null)){
        removeUserFromScreen(user.email);
    }
    const parentNode=document.getElementById('listOfPeople');
    const childHTML=`<li id=${user.email}> ${user.name} - ${user.email}
    <button onclick=deleteUser('${user.email}')> Delete User </button>
    <button onclick="editUserDetails('${user.email}','${user.name}')"> Edit </button>
    </li>`

    parentNode.innerHTML=parentNode.innerHTML+childHTML;
}
function removeUserFromScreen(emailId){
    const parentNode=document.getElementById('listOfPeople');
    const childNodeDeleted=document.getElementById(emailId);
    if(childNodeDeleted){
        parentNode.removeChild(childNodeDeleted);
    }
}
function deleteUser(emailId){
    localStorage.removeItem(emailId);
    removeUserFromScreen(emailId);
} 
function editUserDetails(emailId,name){
  
emailInput.value=emailId;
nameInput.value=name;


deleteUser(emailId);
}




