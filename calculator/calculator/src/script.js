$(document).ready(
function(){
  
    var displayFig = {
      num: "0",
      res: 0,
      oper: 0,
      minus: false,
      dispNum: function () { $(".result").text(this.num);
     }
  ,
     dispRes : function() { $(".result").text(this.res);
}
    };
/*
Base functions
*/   
  $(".basePad li").click(function(e){
    if($(this).index() == 0){
      displayFig.num = "0";
      displayFig.res = 0;
      displayFig.oper = 0;
      displayFig.minus = false;
    } else {
      displayFig.num +="";
        if(displayFig.num.indexOf("-") < 0){
 displayFig.num = "-"+displayFig.num; 
  
      } else {
        displayFig.num = displayFig.num.slice(1);
      }
      
    }
    displayFig.dispNum();
  });
/*
Numpad click
*/   
  $(".numPad li").click(function(e) {
    displayFig.num += "";
    
    if(displayFig.num.length < 11){
    if ($(this).index() < 9){
      if((+displayFig.num) != 0){
      displayFig.num += ""+($(this).index()+1);
      } else {
        if(displayFig.num.indexOf(".")< 0){
        displayFig.num = $(this).index()+1;
        } else {
          displayFig.num += ""+($(this).index()+1);
        }
      }
        
        
    } else if ($(this).index() == 9){
      if((+displayFig.num) != 0){
        displayFig.num += "0";
      } else {
        
      }
    } else {
     displayFig.num += "";
      if(displayFig.num.indexOf(".") < 0){
          displayFig.num += ".";
        }
    }
    }
    
    if(displayFig.minus){
      displayFig.num = "-" + displayFig.num;
      displayFig.minus = false;
    }
    
     displayFig.dispNum();
                             });
  

/*
Operations
*/   
  
  $(".operationPad li").click(function(e){

    if($(this).index() == 1 & displayFig.num == 0){
      displayFig.minus = true;
      console.log(displayFig.minus );
    } else if(displayFig.minus & $(this).index() == 0){
      displayFig.minus = false;
      displayFig.oper = $(this).index();
    } else{
    
    switch(displayFig.oper){
      case 0:
        displayFig.res += (+displayFig.num);
        break;
      case 1:
        displayFig.res -= (+displayFig.num);
        displayFig.minus = false;
        break;
      case 2:
        displayFig.res *= (+displayFig.num);
        break;
      case 3:
        displayFig.res /= (+displayFig.num);
       break;
   case 4:
        displayFig.minus = false;
  //      displayFig.res = (+displayFig.num);      
    }
    displayFig.oper = $(this).index();
    displayFig.num = "0";      
    }
    

    
    displayFig.dispRes();
    
    
  });
  
  
});