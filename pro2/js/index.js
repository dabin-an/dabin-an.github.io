 const video = document.querySelector("video");

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        video.play(); 
      } else {
        video.pause(); 
      }
    });
  }, { threshold: 0.5 }); 

  observer.observe(video);


  AOS.init();


 AOS.init({ disable: 'mobile' }); 