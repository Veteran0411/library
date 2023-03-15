const navslide= () => {
    const bars=document.querySelector('.som');
    const nav = document.querySelector('.nav-links');
   
    
    bars.addEventListener('click',()=>{
        // toogle effect
        nav.classList.toggle('nav-active');
     });
}

navslide();

// for sliding effect
var swiper = new Swiper(".team-slid", {
    loops:true,
    slidesPerView: 1,
    spaceBetween: 10,
    breakpoints:{
        "0": {
        slidesPerView: 1,
        autoplay:{
            delay:100,
            disableOnInteraction:false,
        },

    },
    "768":{
        slidesPerView:2,
    },
    "1024":{
        slidesPerView:3,
    },
},
  });

    /* @keyframes change1 {
      0%,100%{
          background: url("http://drive.google.com/uc?export=view&id=115tbyggqIFXNdnuPd6qDgIxYFQ9Z_qDQ");
          background-size: cover;
          background-attachment: fixed;
      }
      25%{
          background: url("http://drive.google.com/uc?export=view&id=115tbyggqIFXNdnuPd6qDgIxYFQ9Z_qDQ");
          background-size: cover;
          background-attachment: fixed;
      }
      50%{
          background: url("http://drive.google.com/uc?export=view&id=114WUdNKdZvj8D-Ny2VMPeaU5_fvFr2z_");
          background-size: cover;
          background-attachment: fixed;
      }
      75%{
          background: url("http://drive.google.com/uc?export=view&id=114WUdNKdZvj8D-Ny2VMPeaU5_fvFr2z_");
          background-size: cover;
          background-attachment: fixed;
      }
  } */