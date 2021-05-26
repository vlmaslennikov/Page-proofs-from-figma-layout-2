let observer = new IntersectionObserver((entries,observer)=>{
    entries.forEach(
        entry => {
            if(entry.isIntersecting){
                observer.unobservable(entry.target);
            }
        }
    )
},{threshold:0.8}) ;

document.querySelectorAll('.block').forEach(
    block => { observer.observe(block)}
)