const ttime  = 2000;
const tstep = 10 ;


function outNum(num, elem) {
   let l = document.querySelector('#' + elem);
   n = 0 ;
   let t = Math.round(ttime/(num/tstep));
   let interval = setInterval(() => {
      n = n + tstep ;
      if (n >= num ){
         clearInterval(interval);
      }
      l.innerHTML = n ;
   },

   t);

}




outNum ( 340 , 'out-3' );






