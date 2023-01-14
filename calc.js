var button = document.getElementsByClassName("buttons") ; 
var btn = document.getElementsByClassName("btn") ;
console.log(button);
console.log(btn);
var screen = document.getElementById("screen") ; 
var val ;
for(var  i = 0 ; i<button[0].childNodes.length ; i++ )
{  
   button[0].childNodes[i].addEventListener('click' , function()
   {  
     val = this.getAttribute('data-value') ;
       if(val == '=')
        { "use strict";
           var s = document.getElementById('textview').value ; 
          
          try{
               s = s.replace('%' , ("/100*"))
              s = eval(s); 
              document.getElementById('textview').value = s ; 
          }
          catch{
              document.getElementById('textview').value = 'SYNTAX ERROR'; 
          }
           
        }
        
        else if(val == "ac")
        {
           document.getElementById('textview').value = "";
        }

        else if(val == "sign")
       {
           var s = document.getElementById('textview').value;
           try {
            
               if(s>0)
                   document.getElementById('textview').value = '-' +  s  ;
                else
                {
                   document.getElementById('textview').value =  s.replace('-' , '');
                }   
           }
           catch {
               document.getElementById('textview').value = 'SYNTAX ERROR';
           }
        }
  
      
        else 
        {
           document.getElementById('textview').value = document.getElementById('textview').value + val   ;

        }
        
   });

//    document.addEventListener('keypress' , function(event)
//    {   
//        if(event.key.charCodeAt(0)>=48 && event.key.charCodeAt(0)<=57 || event.key.charCodeAt(0)<=106 && event.key.charCodeAt(0)<=111 )
//        {
//         document.getElementById('textview').value += event.key ;
//        }
       
//    }) ;
}