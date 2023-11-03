function animationCallback(entries, observer)
{
    entries.forEach(entry => {
        console.log(entry.target.id + " visibility: " + entry.isIntersecting);
        if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
        } else {
            entry.target.classList.remove('is-visible');
        }
    });
}

let options = {
root: null,
rootMargin: '0px',
threshold: 0.5
};

let observer = new IntersectionObserver(animationCallback, options);
let animatedItems = document.querySelectorAll('.scranimate');
animatedItems.forEach((item) => {
observer.observe(item);
})
