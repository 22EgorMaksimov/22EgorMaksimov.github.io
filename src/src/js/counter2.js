const time  = 4000;
const step = 10 ;


function outNum(num, elem) {
   let l = document.querySelector('#' + elem);
   n = 0 ;
   let t = Math.round(time/(num/step));
   let interval = setInterval(() => {
      n = n + step ;
      if (n == num ){
         clearInterval(interval);
      }
      l.innerHTML = n ;
   },

   t);

}




outNum ( 100 , 'out-1' );






