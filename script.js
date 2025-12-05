const postulatCards = document.querySelectorAll('.postulat-card');

const observer = new IntersectionObserver(entries=>{
    entries.forEach((entry, index)=>{
        if(entry.isIntersecting){
            setTimeout(()=> entry.target.classList.add('fade-in'), index*200);
        }
    });
},{threshold:0.3});

postulatCards.forEach(card => observer.observe(card));
