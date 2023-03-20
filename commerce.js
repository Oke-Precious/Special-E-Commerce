window.onscroll = function() {
    landingPageScroll()
}
const landingPageScroll=()=>{
    if(document.body.scrollTop > 110 || document.documentElement.scrollTop > 110){
        navSection.style.top = "-47px"
        // alert("work")
    }
    else{}
    
}
const cancelHeader=()=>{
    navHeader.innerHTML="";
    navHeader.style.padding="0px";
}

function openNav() {
    document.getElementById("myNav").style.width = "100%";
    document.getElementById("myNav").style.opacity = "100%";
    document.getElementById("myNav").style.height = "100%";
    openicon.style.display="none"
    closeicon.style.display="block"
}

function closeNav() {
    document.getElementById("myNav").style.opacity = "0";
    document.getElementById("myNav").style.width = "0";
    document.getElementById("myNav").style.height = "0";

    openicon.style.display="block"
    closeicon.style.display="none"
}

const showPassword=()=>{
    let x = document.getElementById("inPassword");
    if(x.type == "password"){
        x.type = "text";
        showText.innerHTML = "Hide"
        // alert("text")
    }
    else{
        showText.innerHTML = "Show"
        x.type = "password";
    }
}

const goSignup=()=>{
    window.location.href = "signUp.html";
}
const goLogin=()=>{
    window.location.href = "logIn.html";
}

// ===============SIGNUP PAGE=========================



let allCustomer = [];
if(localStorage.customerPersonalDetails){
    allCustomer = JSON.parse(localStorage.getItem("customerPersonalDetails"))
}
const createAnAccount=()=>{
    for (let index = 0; index < allCustomer.length; index++) {
         if(allCustomer[index].email==eAddress.value){
            alert("email has been used")
            return
        }
            else if(allCustomer[index].phoneNumber==pNumber.value){
            alert("Phone Number has been used")
            return
        }
    }
    if(
        fName.value == "" ||
        lName.value == "" ||
        eAddress.value == "" ||
        pNumber.value == "" ||
        password.value == ""
    ){
        alert("Input something")
    }
    
    else{
        let  customerDetails = {
            firstName: fName.value,
            lastName: lName.value,
            email: eAddress.value,
            phoneNumber: pNumber.value,
            password: password.value,
            clickedProduct: [],
        };
        allCustomer.push(customerDetails);
        localStorage.setItem("customerPersonalDetails", JSON.stringify(allCustomer));
        alert("Signup successful")
    }
}


const loginAccount=()=>{
    let found =false;
    allCustomer = JSON.parse(localStorage.getItem("customerPersonalDetails"))

    for (let index = 0; index < allCustomer.length; index++) {
        if(allCustomer[index].email == inEmail.value || allCustomer[index].phoneNumber == inEmail.value && allCustomer[index].password == inPassword.value){
            localStorage.setItem("currentUserIndex", index)
            found = true;
            break;
        }
        
    }
    if(found==true){
        window.location.href = "index.html";
    }
    else{
        alert("not found")
    }
}
let currentUserIndex = localStorage.getItem("currentUserIndex");
// if()