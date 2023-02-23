$(document).ready(function(){
    let options = { threshould: [0.5]};
    let observer = new IntersectionObserver(onEntry, options);
    let elements = $('.element-animation');
    elements.each((i,el) => {
        observer.observe(el);   
    });
});
function onEntry(entry){
    entry.forEach(change => {
          if (change.isIntersecting) {
            change.target.classlist.add('show-animation');
          }
    });
}