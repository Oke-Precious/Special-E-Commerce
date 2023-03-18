window.onscroll = function() {
    landingPageScroll()
}
const landingPageScroll=()=>{
    if(document.body.scrollTop > 110 || document.documentElement.scrollTop > 110){
        navSection.style.top = "-115px "
        // alert("work")
    }
    else{}
    
}
const cancelHeader=()=>{
    navHeader.innerHTML="";
    navHeader.style.padding="0px";
}

const dropObject=(param)=>{
    if(param==1){
        dropContainer.style.display="block";
        dropContainer.innerHTML=`
                        <h1>I'm Category</h1>
                    `
    }

    else if(param==2){
        dropContainer.style.display="block";
        dropContainer.innerHTML=`
                        <h1>Computer Accessories</h1>
                    `
    }
    else if(param==3){
        dropContainer.style.display="block";
        dropContainer.innerHTML=`
                        <h1>Phones and Tables</h1>
                        `
    }
    else if(param==4){
        dropContainer.style.display="block";
        dropContainer.innerHTML=`
                        <h1>Electronics</h1>
                    `
    }
    else if(param==5){
        dropContainer.style.display="block";
        dropContainer.innerHTML=`
                        <h1>Special Fashion</h1>
                    `
    }
    else if(param==6){
        dropContainer.style.display="block";
        dropContainer.innerHTML=`
                        <h1>Home and Kitchen</h1>
                    `
    }
    else if(param==7){
        dropContainer.style.display="block";
        dropContainer.innerHTML=`
                        <h1>Baby, Kids and Toys</h1>
                    `
    }
    else if(param==7){
        dropContainer.style.display="block";
        dropContainer.innerHTML=`
                        <h1>Baby, Kids and Toys</h1>
                    `
    }
    else if(param==8){
        dropContainer.style.display="block";
        dropContainer.innerHTML=`
                        <h1>Other Categories</h1>
                    `
    }
    else{
        dropContainer.style.display="none"
    }

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


// ===============SIGNUP PAGE=========================

let allCustomer = [];
if(localStorage.UserPersonalDetails){
    allCustomer = JSON.parse(localStorage.getItem("UserPersonalDetails"));
}
const createAnAccount=()=>{
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
        localStorage.setItem("UserPersonalDetails", JSON.stringify(allCustomer));
        alert("Successfully pddeedushed")
    }
}