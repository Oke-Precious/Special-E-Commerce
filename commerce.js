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
