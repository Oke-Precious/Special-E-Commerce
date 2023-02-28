window.onscroll = function() {
    landingPageScroll()
}
const landingPageScroll=()=>{
    if(document.body.scrollTop > 110 || document.documentElement.scrollTop > 110){
        navSection.style.top = "-115px "
        // alert("work")
    }
    else{
        
    }
    
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
