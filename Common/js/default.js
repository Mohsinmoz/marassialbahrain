
    
 $('.email-div-wrapper').click(function(){
  $(this).find('.emails-div').slideToggle();
  });

    
	

$(document).ready(function(){ 
	
	
	var readAr = window.location.pathname.substring(0, 3);
		console.log('readAr: ' + $(window).width());
		if($(window).width() > 640)
		{
			if(readAr == "/ar" )
			{
				document.getElementsByClassName("sticky-container")[0].style.left ="-30px"    			
			}
			else
			{
				document.getElementsByClassName("sticky-container")[0].style.right ="-30px"     	
			}
		}
		
    
    //window.addEventListener("scroll", runOnScroll);
    //function runOnScroll(){
		window.onscroll = function() {			
        var y = window.scrollY;
        console.log("y:" + window.location.pathname);
      // document.getElementsByClassName("sticky-container")[0].style.webkitAnimationName = "alpha";
    if($(window).width() > 640)
		{
        if (y >= 500) {
          if( readAr == "/ar" )
					{
						document.getElementsByClassName("sticky-container")[0].style.left ="-152px";  						
						//$(".sticky-container").animate({'left': '-152px'}, 500);  	
					}
					else
						{
					
							document.getElementsByClassName("sticky-container")[0].style.right ="-152px"  ;
						}
						//$(".sticky-container").animate({'right': '-152px'}, 500);    	
					
          
           document.getElementsByClassName("sticky-container")[0].addEventListener("mouseover", myHover);
           document.getElementsByClassName("sticky-container")[0].addEventListener("mouseout", myHout);         
       	}  
        else
        {
          if(readAr == "/ar" )
					{
						document.getElementsByClassName("sticky-container")[0].style.left ="-30px"  ;					
						//$(".sticky-container").animate({'left': '-0px'}, 100);    	
					}
					else
					{					
						document.getElementsByClassName("sticky-container")[0].style.right ="-30px"   
					}
							//$(".sticky-container").animate({'right': '-0px'}, 100);    	  	
					
           document.getElementsByClassName("sticky-container")[0].removeEventListener("mouseover", myHover);
           document.getElementsByClassName("sticky-container")[0].removeEventListener("mouseout", myHout);      
        }
      }
    }
    
    
    function myHover()
    {
    	  if( readAr == "/ar" )
				{
					document.getElementsByClassName("sticky-container")[0].style.left ="-30px"     	
					//		$(".sticky-container").animate({'left': '-0px'}, 500);					
				}
				else
				{				
					document.getElementsByClassName("sticky-container")[0].style.right ="-30px"     	
				}
					//		$(".sticky-container").animate({'right': '-0px'}, 500);
				
		}
    		   		 	  		 	
    function myHout()
    {
    	if( readAr == "/ar" )
			{
				document.getElementsByClassName("sticky-container")[0].style.left ="-152px";				
			//			$(".sticky-container").animate({'left': '-152px'}, 500);
			}
			else
			{
				document.getElementsByClassName("sticky-container")[0].style.right ="-152px";
				//			$(".sticky-container").animate({'right': '-152px'}, 500);
			}
		}
	
	
  var current_slide_index,current_slide_index_2=-1;
  var current_slide,current_slide_2="";
  var galleries_index=-1;
  
 $('#main-slider').flexslider({
    animation: "slide"
  });
  $('#gallery-slider').flexslider({
    animation: "slide",
    autoplay:false,
    start:function(slider){
    var my_obj=slider.slides[0];
    current_slide=$(my_obj).find('img').attr('src');
     },
    after: function(slider){
    current_slide_index=slider.currentSlide;
    var my_obj=slider.slides[current_slide_index];
    current_slide=$(my_obj).find('img').attr('src');
    }
  });
    $('#gallery-slider-2').flexslider({
    animation: "slide",
    autoplay:false,
    start:function(slider){
    var my_obj=slider.slides[0];
    var my_obj2=slider.slides[0];
    current_slide_2=$(my_obj2).find('img').attr('src');
    },
    after: function(slider){
    current_slide_index_2=slider.currentSlide;
    var my_obj2=slider.slides[current_slide_index_2];
    current_slide_2=$(my_obj2).find('img').attr('src');
    console.log('slide 1' + current_slide);
    console.log('slide 2' + current_slide_2);
    }
  });
  $('#gallery-slider-3').flexslider({
    animation: "slide",
    autoplay:false,
    start:function(slider){
    var my_obj=slider.slides[0];
    var my_obj2=slider.slides[0];
    current_slide_2=$(my_obj2).find('img').attr('src');
    },
    after: function(slider){
    current_slide_index_2=slider.currentSlide;
    var my_obj2=slider.slides[current_slide_index_2];
    current_slide_2=$(my_obj2).find('img').attr('src');
    console.log('slide 1' + current_slide);
    console.log('slide 2' + current_slide_2);
    }
  });
  $('#gallery-slider-4').flexslider({
    animation: "slide",
    autoplay:false,
    start:function(slider){
    var my_obj=slider.slides[0];
    var my_obj2=slider.slides[0];
    current_slide_2=$(my_obj2).find('img').attr('src');
    },
    after: function(slider){
    current_slide_index_2=slider.currentSlide;
    var my_obj2=slider.slides[current_slide_index_2];
    current_slide_2=$(my_obj2).find('img').attr('src');
    console.log('slide 1' + current_slide);
    console.log('slide 2' + current_slide_2);
    }
  });
  $('#gallery-slider-5').flexslider({
    animation: "slide",
    autoplay:false,
    start:function(slider){
    var my_obj=slider.slides[0];
    var my_obj2=slider.slides[0];
    current_slide_2=$(my_obj2).find('img').attr('src');
    },
    after: function(slider){
    current_slide_index_2=slider.currentSlide;
    var my_obj2=slider.slides[current_slide_index_2];
    current_slide_2=$(my_obj2).find('img').attr('src');
    console.log('slide 1' + current_slide);
    console.log('slide 2' + current_slide_2);
    }
  });
  $('#gallery-slider-6').flexslider({
    animation: "slide",
    autoplay:false,
    start:function(slider){
    var my_obj=slider.slides[0];
    var my_obj2=slider.slides[0];
    current_slide_2=$(my_obj2).find('img').attr('src');
    },
    after: function(slider){
    current_slide_index_2=slider.currentSlide;
    var my_obj2=slider.slides[current_slide_index_2];
    current_slide_2=$(my_obj2).find('img').attr('src');
    console.log('slide 1' + current_slide);
    console.log('slide 2' + current_slide_2);
    }
  });
  $('#floor-plan-slider').flexslider({
    animation: "slide",
    autoplay:false,
  });
  $('#floor-plan-slider').flexslider({
    animation: "slide",
    autoplay:false,
  });
  $("div.my-video").click(function(){  
  $('#player').fadeToggle();
  $('#player').playVideo();
  });
  $('div.tile-type-1 img').hover(function(){
   });
   $('#my_popup').popup();  
    $('div.button-img').click(function(){     
     init_pano('canvas');
     $(this).hide();     
     });
     $('#zoom-1').click(function(){
       galleries_index=1;
      });
      $('#zoom-2').click(function(){
       galleries_index=2;
      });
      $('.gallery-zoom').click(function(){
    if(galleries_index==1){
     $('#my_popup img').attr('src',current_slide);     
     }
    else{
     $('#my_popup img').attr('src',current_slide_2);     
     }
    });
      /*image hover*/
      $('.tile-type-1 img').mouseenter(function(){
       $( this ).animate({
          width: "660px",
          height: "640px" 
        }, 500 );
       }).stop(false, true);
       $('.tile-type-1 img').mouseleave(function(){
       $( this ).animate({
          width: "640px",
          height: "620px" 
        }, 500 ).stop(false, true);
       });
      /*image hover*/
      $('.menu-toggle').click(function(){
       $(this).toggleClass('active');
       $('nav.main-nav-wrapper').slideToggle(300);
       });
       
 });