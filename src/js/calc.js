
let sum = 0, days = 0 ;
function calc() {
   
let site = prompt ("Какой тип сайта нужен ? 1 - Сайт-визитка 2 - Интернет-магазин 3 - Корпоративный сайт");
if (site == "1"){
   sum += 1000;
   days += 10;
} 
else if (site == "2"){
   sum += 5000;
   days += 5;
}
else if (site == "3"){
   sum += 12000;
   days += 15;
}
else {
   alert("Вы ввели что-то не то ");
   calc();
}
let design = prompt ("Какой тип дизайн ? 1 - Шаблонный  2 - Уникальный 3 - WOW-дизайн ");
if (design == "1"){
   design += 3000;
   days += 15;
} 
else if (design == "2"){
   design += 7000;
   days += 15;
}
else if (design == "3"){
   design += 12000;
   days += 15;
}
else {
   alert("Вы ввели что-то не то ");
   calc();
}
let adaptiv = prompt ("Какой тип адаптивности ? 1 - Только ПК 2 - Только мобильная 3 - ПК + Мобильная ");
if (adaptiv == "1"){
   adaptiv += 2400;
   days += 1;
} 
else if (site == "2"){
   adaptiv += 5800;
   days += 2;
}
else if (site == "3"){
   adaptiv += 8000;
   days += 5;
}
else {
   alert("Вы ввели что-то не то ");
   calc();
}
alert("Сроки :  "+ days +  "  Стоимость "+ sum);

}
calc();




















































/**
let site, design, adaptive;
let calcolator = {
   price: [
      [100, 500, 1000],
      [500, 1000, 2000],
      [1000,2000, 5000],
   ],
   days: [
      [1, 2, 3],
      [3, 2, 4],
      [1, 5, 6],
   ],
   run(siteType, designType, adaptivType){
      let sum = [parseInt(calculator.price[0][siteType-1])+parseInt(calculator.price[1][designType-1]) + parseInt( calculator.price[2][adaptiveType-1])];
      let days = [parseInt(calculator.days[0][siteType-1])+parseInt(calculator.days[1][designType-1]) + parseInt( calculator.days[2][adaptiveType-1])];
      alert("Сроки:"+ days + "Стоимость: "+ sum);
   }
}
function getAnswers{
   site = prompt ("Какой тип сайта нужен ? 1 - Сайт-визитка 2 - Интернет-магазин 3 - Корпоративный сайт");
   if (site != 1 && site != 2 && site != 3  ){
      alert("Такого варианта нет")
      getAnswers ();
      return;
   }

   design = prompt ("Какой тип дизайн ? 1 - Шаблонный  2 - Уникальный 3 WOW-дизайн ");
   if ( design != 1 &&  design != 2 &&  design != 3  ){
      alert("Такого варианта нет")
      getAnswers ();
      return;
   }
   adaptiv = prompt ("Какой тип адаптивности ? 1 - Только ПК 2 - Только мобильная 3 - ПК + Мобильная ");
   if ( adaptiv != 1 &&  adaptiv != 2 && adaptiv != 3  ){
      alert("Такого варианта нет")
      getAnswers ();
      return;
   }
   calculator.run(site, design, adaptiv);
}

getAnswers (); */