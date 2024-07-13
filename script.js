const slider = document.querySelector(".slider");
const dots = document.querySelectorAll(".dot")

slider.addEventListener('wheel',(e)=>{
    e.preventDefault();
    slider.scrollLeft += e.deltaY ;
    
    if (1900>slider.scrollLeft &&  slider.scrollLeft>1136) {
        dots.forEach((d,index)=>{
            d.classList.remove('active')
        })
        dots[1].classList.add('active')
       
    }
    else if (slider.scrollLeft>1900) {
        dots.forEach((d,index)=>{
            d.classList.remove('active')
        })
        dots[2].classList.add('active')
       
    }
    else  {
        dots.forEach((d,index)=>{
            d.classList.remove('active')
        })
        dots[0].classList.add('active')
       
    }
})

dots.forEach((dot,index) => {
    dot.addEventListener('click',()=>{
        dots.forEach((d)=>{
            d.classList.remove('active');
        })
        dot.classList.add('active');
        console.log(index)
        
       if (index==0) {
        slider.scrollLeft = 0;
       }
       else if(index==1){
        slider.scrollLeft = 1136;
       }
       else{
        slider.scrollLeft = 2272;
       }
    })
});
const closeBtn = document.querySelector(".close-btn");
const popup = document.querySelector(".popup");
const contactBtn = document.querySelector("#btn");
contactBtn.addEventListener('click',()=>{
    popup.classList.add("btnActive")
    const form = document.getElementById('contactForm');
        form.reset(); 
})
closeBtn.addEventListener('click',()=>{
    popup.classList.remove("btnActive")
  
})


document.querySelector(".two").addEventListener('mouseover', ()=>{
    document.querySelector('.project-container-box1').classList.add('two-image')
}
)
document.querySelector(".two").addEventListener('mouseout', ()=>{
    document.querySelector('.project-container-box1').classList.remove('two-image')
}
)

   
