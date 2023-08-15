const cards = document.querySelectorAll('.services-inner div')

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry =>{
        entry.target.classList.toggle('show', entry.isIntersecting)
        if(entry.isIntersecting){
            observer.unobserve(entry.target)
        }
    })
  });

  cards.forEach(card =>{
      observer.observe(card)
  })

  // function handleIntersection(entries, observer) {
  //   entries.forEach(entry => {
  //     if (entry.isIntersecting) {
  //       const ser = document.querySelectorAll('.services-inner div')
  //       ser.forEach(item =>{
  //         item.classList.add('show')
  //       })
  //       observer.unobserve(entry.target);
  //     }
  //   });
  // }

  // const observer = new IntersectionObserver(handleIntersection, {
  //   threshold: 0.5
  // });

  // // const servicesSection = document.querySelector('#services');
  // const ser = document.querySelectorAll('.services-inner div')

  // ser.forEach(se =>{

  //   observer.observe(se);
  // })
