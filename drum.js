  for (let index = 0; index < 7; index++) {
    document.querySelectorAll(".drum")[index].addEventListener("click",function(){
        // console.log(index);
        // if(index<4){
        // var audio1 = new Audio('tom-'+(index+1)+'.mp3');
        //  audio1.play();
        
        // }
        // else if(index===4){
        //     var audio1 = new Audio('snare.mp3');
        //     audio1.play();
        //    }
           
        //    else if(index===5){
        //     var audio1 = new Audio('crash.mp3');
        //     audio1.play();
        //    }
        //    else if(index===6) {
        //     var audio1 = new Audio('kick-bass.mp3');
        //     audio1.play();
        //    }
        var reqkey=this.innerHTML;
        makesound(reqkey);
        buttonAnimation(reqkey);
    });
  }
  document.addEventListener("keypress",function(event){makesound(event.key);buttonAnimation(key); });
  

  function makesound(key){
    switch(key){
      case "w":
        var audio1 = new Audio('tom-1.mp3');
        audio1.play();
        break;  
      case "a":
        var audio1 = new Audio('tom-2.mp3');
            audio1.play();  
        break;
        case "s":
          var audio1 = new Audio('tom-3.mp3');
              audio1.play();  
          break;   
          case "d":
            var audio1 = new Audio('tom-4.mp3');
                audio1.play();  
            break;
            case "j":
              var audio1 = new Audio('snare.mp3');
                  audio1.play();  
              break;
              case "k":
                var audio1 = new Audio('crash.mp3');
                    audio1.play();  
                break;  
                case "l":
                  var audio1 = new Audio('kick-bass.mp3');
                      audio1.play();  
                  break;  
   }

  }
  function buttonAnimation(reqkey){

    var r= document.querySelector("."+reqkey);
    r.classList.add("pressed");
    setTimeout(function(){r.classList.remove("pressed");},100);
  }
 