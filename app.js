const glide = new Glide('.glide', {
    type: 'carousel',
    autoplay:false,
    perView: 3, // Number of slides visible
    gap: 10,    // Space between slides
    autoplay: 3000, // Auto-slide every 3 seconds
    swipeThreshold: false, // Disable swipe
    dragThreshold: false, // Disable drag
    breakpoints: {
        1024: { perView: 3},
        768: { perView: 1 },
      },
});

const project_glide = new Glide('.project_glide', {
    type: 'carousel',
    autoplay:false,
    perView: 3, // Number of slides visible
    gap: 0,    // Space between slides
    autoplay: 3000, // Auto-slide every 3 seconds
    swipeThreshold: false, // Disable swipe
    dragThreshold: false, // Disable drag
    breakpoints: {
        1024: { perView: 3},
        768: { perView: 1 },
      },
});


glide.mount();
project_glide.mount();