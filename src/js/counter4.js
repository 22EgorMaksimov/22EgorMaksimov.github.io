const ftime  = 1000;
const fstep = 10 ;


function outNum(num, elem) {
   let l = document.querySelector('#' + elem);
   n = 0 ;
   let t = Math.round(ftime/(num/fstep));
   let interval = setInterval(() => {
      n = n + fstep ;
      if (n == num ){
         clearInterval(interval);
      }
      l.innerHTML = n ;
   },

   t);

}




outNum ( 220 , 'out-4' );






