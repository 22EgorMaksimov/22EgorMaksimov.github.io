$(document).ready(function (){
   showStartModal();
});

function showStartModal(){
   if(localStorage.getItem('modal-yes-btn')!=1){
      setTimeout(function(){ 
         $("#exampleModal").modal('show');
         $('#modal-yes-btn').on('click',function(){
            //save state modal 
            localStorage.setItem('modal-yes-btn',1);
            $('#exampleModal').modal('hide');
         });
     }, 5000); 
   }
   
}