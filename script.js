const name=document.getElementById('name')
name.innerHTML="Uwineza Gloria";
//function to validate form
function validation(){
    const firstName=document.getElementById('fname').value.trim()
const lastName=document.getElementById('lname').value.trim()
let firstnameValidation=document.getElementById('fnameValidation')
let lastnameValidation=document.getElementById('lnameValidation')
  firstnameValidation.textContent = '';
 lastnameValidation.textContent= '';
let isValid=true;
  if(firstName ===''){
    firstnameValidation.innerHTML=" first name is required"
    isValid=false
  }
  if(lastName ===''){
    lastnameValidation.innerHTML="Last name is required"
    isValid=false
  }
  if(isValid){
    storeData(firstName,lastName)
    alert('form submitted successfully')
    displayData()
  }
  return isValid;
}
//function to store data on local storage
function storeData(firstName,lastName){
    const user={
        FirstName:firstName,
        LastName:lastName
    }
    //get users stored before or create an empty array
    let storeArray=JSON.parse(localStorage.getItem('users')) || [];
    storeArray.push(user)
    //store data as object
    localStorage.setItem('users',JSON.stringify(storeArray))
    return storeArray;
}
//displaying data stored on local storage
function displayData(){
    let displayData=document.getElementById('displayData')
    let heading=document.getElementById('title')
    const data=JSON.parse(localStorage.getItem('users'))
    if(data && data.length>0){
heading.innerHTML="List of All Users"
for(let i=0;i<data.length;i++){
const user=data[i]
    displayData.innerText +=`FirstName:${user.FirstName}` + "  "+`LastName:${user.LastName}\n` 
}
    
    }
    else{
heading.innerHTML="no data found"
    }
}
 window.onload=function(){
    displayData()
 }

