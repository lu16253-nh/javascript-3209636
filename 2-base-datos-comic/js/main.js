document.addEventListener('DOMContentLoaded',()=>{
  const slides = document.querySelector('.slides');
  const prev = document.getElementById('prev');
  const next = document.getElementById('next');
  let index = 0;

  function show(i){
    const slideWidth = slides.querySelector('.slide').clientWidth;
    slides.style.transform = `translateX(-${i * slideWidth}px)`;
  }

  next?.addEventListener('click', ()=>{
    const max = slides.querySelectorAll('.slide').length - 1;
    index = Math.min(max, index + 1);
    show(index);
  });

  prev?.addEventListener('click', ()=>{
    index = Math.max(0, index - 1);
    show(index);
  });

  window.addEventListener('resize', ()=> show(index));
});