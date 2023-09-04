
const animatedElement1 = document.querySelectorAll('.Whyus');
const animatedElement2 = document.querySelectorAll('.Owner');
const animatedElement3 = document.querySelectorAll('.Footer');

// Function to check if an element is in the viewport
function isElementInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
      rect.top <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.left <= (window.innerWidth || document.documentElement.clientWidth)&&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

// Function to handle scroll events
function handleScroll() {


    animatedElement1.forEach(element => {
      if (isElementInViewport(element)) {
          element.classList.add('animate');
      } else {
         
      }
  });
  animatedElement2.forEach(element => {
    if (isElementInViewport(element)) {
        element.classList.add('animate');
    } else {
       
    }
});
animatedElement3.forEach(element => {
  if (isElementInViewport(element)) {
      element.classList.add('animate');
  } else {
     
  }
});
}


// Attach the handleScroll function to the scroll event
window.addEventListener('scroll', handleScroll);

// Trigger the initial check in case some elements are already visible on page load
handleScroll();