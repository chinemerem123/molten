
  AOS.init();

  let btn=document.querySelector(".btn-start");

 window.addEventListener('scroll', ()=>{
  btn.style.backgroundColor="#3B23E6";
  btn.style.padding="8px";
  btn.style.border="none";
  btn.style.boxShadow="10px 10px 30px rgba(0,0,0,0.2)";
  document.querySelector(".nav-header").style.backgroundColor="white";
  })

  
let cardTabs=document.querySelectorAll(".card-tab");
let imgTab=document.querySelector("#tab-img");

cardTabs.forEach((tab)=>{
  tab.addEventListener("click",()=>{
    imgTab.src=tab.children[0].value;
  })
})

// console.log(tab.children[0].value);

