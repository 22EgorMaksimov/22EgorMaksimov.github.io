const stime  = 3000;
const sstep = 10 ;


function outNum(num, elem) {
   let l = document.querySelector('#' + elem);
   n = 0 ;
   let t = Math.round(stime/(num/sstep));
   let interval = setInterval(() => {
      n = n + sstep ;
      if (n == num ){
         clearInterval(interval);
      }
      l.innerHTML = n ;
   },

   t);

}




outNum ( 1100 , 'out-2' );






