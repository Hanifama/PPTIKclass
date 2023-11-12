//navbar color
window.addEventListener('scroll', () => {
    document.querySelector('nav').classList.toggle
    ('windows-scroll',window.scrollY > 0)
})


//show qna class pptik
const faqs = document.querySelectorAll('.faq');

faqs.forEach(faq => {
    faq.addEventListener('click', () =>{
        faq.classList.toggle('open');

        //icon
        const icon = faq.querySelector('.faq__icon i');

        if(icon.className === 'uil uil-plus'){
            icon.className = "uil uil-minus";
        }else{
            icon.className = "uil uil-plus";
        }

    })
})


//show navcloseandopen
const menu = document.querySelector(".nav__menu");
const menuBtn = document.querySelector("#open-menu-btn");
const closeBtn = document.querySelector("#close-menu-btn");

menuBtn.addEventListener('click',() =>{
    menu.style.display = "flex";
    closeBtn.style.display = "inline-block";
    menuBtn.style.display = "none";
})


//close nav
const closeNav= () =>{
    menu.style.display = "none";
    closeBtn.style.display = "none";
    menuBtn.style.display = "inline-block";
}

closeBtn.addEventListener('click', closeNav)



//on scrolling
const observer = new IntersectionObserver((entries)=>{
    entries.forEach((entry) => {
        console.log(entry)
        if (entry.isIntersecting) {
            entry.target.classList.add('show')            
        }else{
            entry.target.classList.remove('show')
        }
    });
})

const hiddenElements = document.querySelectorAll('.hidden')
hiddenElements.forEach((el) => observer.observe(el))

// Get all elements with the class "hoverable"
const hoverableElements = document.querySelectorAll('.hoverable');

// Add event listeners to each hoverable element
hoverableElements.forEach((element) => {
  element.addEventListener('mouseover', () => {
    element.classList.add('hovered');
  });

  element.addEventListener('mouseout', () => {
    element.classList.remove('hovered');
  });
});

//coursescrolling
document.addEventListener('DOMContentLoaded', () => {
    const courseElements = document.querySelectorAll('.course');
  
    // Fungsi untuk menentukan apakah elemen berada dalam pandangan layar
    const isElementInViewport = (el) => {
      const rect = el.getBoundingClientRect();
      return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
      );
    };
  
    // Fungsi untuk menetapkan transition-delay pada elemen-elemen yang terlihat
    const setTransitionDelay = () => {
      let delay = 0;
  
      courseElements.forEach((element) => {
        if (isElementInViewport(element)) {
          element.style.transitionDelay = `${delay}ms`;
          delay += 200; // Sesuaikan delay 
        }
      });
    };
  
    // Panggil fungsi setTransitionDelay saat halaman dimuat
    setTransitionDelay();
  
    // Panggil fungsi setTransitionDelay saat halaman di-scroll
    window.addEventListener('scroll', setTransitionDelay);
  });  
    



  

