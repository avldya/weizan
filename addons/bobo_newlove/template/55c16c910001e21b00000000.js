var Qixi=function(){var confi={keepZoomRatio:false,layer:{"width":"100%","height":"100%","top":0,"left":0},audio:{enable:true,playURl:"../addons/bobo_newlove/template/music/happy.wav",cycleURL:"../addons/bobo_newlove/template/music/circulation.wav"},setTime:{walkToThird:6000,walkToMiddle:6500,walkToEnd:6500,walkTobridge:2000,bridgeWalk:2000,walkToShop:1500,walkOutShop:1500,openDoorTime:800,shutDoorTime:500,waitRotate:850,waitFlower:800},snowflakeURl:["../addons/bobo_newlove/template/images/55adde120001d34e00410041.png","../addons/bobo_newlove/template/images/55adde2a0001a91d00410041.png","../addons/bobo_newlove/template/images/55adde5500013b2500400041.png","../addons/bobo_newlove/template/images/55adde62000161c100410041.png","../addons/bobo_newlove/template/images/55adde7f0001433000410041.png","../addons/bobo_newlove/template/images/55addee7000117b500400041.png"]};var debug=0;if(debug){$.each(confi.setTime,function(key,val){confi.setTime[key]=500})}if(confi.keepZoomRatio){var proportionY=900/1440;var screenHeight=$(document).height();var zooomHeight=screenHeight*proportionY;var zooomTop=(screenHeight-zooomHeight)/2;confi.layer.height=zooomHeight;confi.layer.top=zooomTop}var instanceX;var container=$("#content");container.css(confi.layer);var visualWidth=container.width();var visualHeight=container.height();var getValue=function(className){var $elem=$(""+className+"");return{height:$elem.height(),top:$elem.position().top}};var pathY=function(){var data=getValue(".a_background_middle");return data.top+data.height/2}();var bridgeY=function(){var data=getValue(".c_background_middle");return data.top}();var animationEnd=(function(){var explorer=navigator.userAgent;if(~explorer.indexOf("WebKit")){return"webkitAnimationEnd"}return"animationend"})();if(confi.audio.enable){var audio1=Hmlt5Audio(confi.audio.playURl);audio1.end(function(){Hmlt5Audio(confi.audio.cycleURL,true)})}var swipe=Swipe(container);function scrollTo(time,proportionX){var distX=visualWidth*proportionX;swipe.scrollTo(distX,time)}var girl={elem:$(".girl"),getHeight:function(){return this.elem.height()},rotate:function(){this.elem.addClass("girl-rotate")