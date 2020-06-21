export const lazyLoad = (target, nameOfClass) => {
    const io = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if(entry.isIntersecting){
                const div = entry.target;
                div.classList.add(nameOfClass);
                observer.disconnect();
            }
        })
    });
    io.observe(target);
}