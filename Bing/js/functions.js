
$(document).ready(function(){
    $('body').height(10000);
    var windowHeight = $('body').height();
    var amountFrames = 1000;
    var ratioFrames = windowHeight / amountFrames;
    var currentFrame = 0;
    
    
    $(window).scroll(function() {
        
        var currentScroll = parseInt($(window).scrollTop()); 
        //console.log(currentScroll);
        //$('.bannerContainer').css('margin-top',currentScroll);
        currentFrame = parseInt(currentScroll/ratioFrames);
        console.log("Frame: " + currentFrame);

        // animateBlueBlock(currentFrame, 120, 150);
        // animateRedBlock(currentFrame, 120, 150);
        animate($('.blueBlock'), "right",currentFrame, 120, 150, 99, 50);
        animate($('.redBlock'), "left",currentFrame, 120, 150, 99, 50);
        animate($('.bing'), "bottom",currentFrame, 0, 100, -90, 10);
        animate($('.rens'), "bottom",currentFrame, 0, 100, -90, 10);
        animate($('.block'), "bottom",currentFrame, 0, 100, 100, 0);

        animate($('.bar1'), "opacity",currentFrame, 170, 180, 0, 100);
        animate($('.bar2'), "opacity",currentFrame, 180, 190, 0, 100);
        animate($('.bar3'), "opacity",currentFrame, 190, 200, 0, 100);
        animate($('.bar4'), "opacity",currentFrame, 200, 210, 0, 100);
        animate($('.bar5'), "opacity",currentFrame, 210, 220, 0, 100);

        animate($('.bar1'), "width",currentFrame, 230, 240, 3, 70);
        animate($('.bar2'), "width",currentFrame, 240, 250, 3, 58);
        animate($('.bar3'), "width",currentFrame, 250, 260, 3, 46);
        animate($('.bar4'), "width",currentFrame, 260, 270, 3, 34);
        animate($('.bar5'), "width",currentFrame, 270, 280, 3, 22);

        animate($('.redHeart'), "opacity",currentFrame, 320, 360, 0, 100);
        animate($('.redHeart'), "left",currentFrame, 380, 460, 12, 50);
        animate($('.redHeart'), "top",currentFrame, 380, 440, 5, 35);
        animate($('.redHeart img'), "width",currentFrame, 470, 500, 100, 0);

        animate($('.blueHeart'), "opacity",currentFrame, 320, 360, 0, 100);
        animate($('.blueHeart'), "right",currentFrame, 380, 460, 12, 50);
        animate($('.blueHeart'), "top",currentFrame, 380, 440, 5, 35);
        animate($('.blueHeart img'), "width",currentFrame, 470, 500, 100, 0);
        

        animate($('.movingMessage2'), "opacity",currentFrame, 40, 60, 0, 100);
        animate($('.movingMessage3'), "opacity",currentFrame, 90, 110, 0, 100);
        animate($('.movingMessage4'), "opacity",currentFrame, 140, 160, 0, 100);
        animate($('.movingMessage5'), "opacity",currentFrame, 190, 210, 0, 100);
        animate($('.movingMessage6'), "opacity",currentFrame, 240, 260, 0, 100);
        animate($('.movingMessage7'), "opacity",currentFrame, 290, 310, 0, 100);
        animate($('.movingMessage8'), "opacity",currentFrame, 340, 360, 0, 100);
        animate($('.movingMessage9'), "opacity",currentFrame, 390, 410, 0, 100);
        animate($('.movingMessage10'), "opacity",currentFrame, 440, 460, 0, 100);
        animate($('.movingMessage11'), "opacity",currentFrame, 490, 510, 0, 100);

        animate($('.movingMessage2'), "left",currentFrame, 40, 60, 0, 100);
        animate($('.movingMessage3'), "right",currentFrame, 90, 110, 0, 100);
        animate($('.movingMessage4'), "left",currentFrame, 140, 160, 0, 100);
        animate($('.movingMessage5'), "right",currentFrame, 190, 210, 0, 100);
        animate($('.movingMessage6'), "left",currentFrame, 240, 260, 0, 100);
        animate($('.movingMessage7'), "right",currentFrame, 290, 310, 0, 100);
        animate($('.movingMessage8'), "left",currentFrame, 340, 360, 0, 100);
        animate($('.movingMessage9'), "right",currentFrame, 390, 410, 0, 100);
        animate($('.movingMessage10'), "left",currentFrame, 440, 460, 0, 100);
        animate($('.movingMessage11'), "right",currentFrame, 490, 510, 0, 100);

        // animate($('.barText1'), "opacity",currentFrame, 300, 320, 0, 100);
        // animate($('.barText2'), "opacity",currentFrame, 400, 420, 0, 100);
        // animate($('.barText3'), "opacity",currentFrame, 500, 520, 0, 100);
        // animate($('.barText4'), "opacity",currentFrame, 600, 620, 0, 100);
        // animate($('.barText5'), "opacity",currentFrame, 700, 720, 0, 100);

        // animate($('.barText1'), "margin-left",currentFrame, 300, 320, 100, 0);
        // animate($('.barText2'), "margin-left",currentFrame, 400, 420, -100, 0);
        // animate($('.barText3'), "margin-left",currentFrame, 500, 520, 100, 0);
        // animate($('.barText4'), "margin-left",currentFrame, 600, 620, -100, 0);
        // animate($('.barText5'), "margin-left",currentFrame, 700, 720, 100, 0);

        animate($('.flag'), "top",currentFrame, 740, 800, 250, 30);
        animate($('.flagText span'), "opacity",currentFrame, 830, 900, 0, 100);

        
    });

});

function animate(element, variable, frameNumber, startFrame, endFrame, startValue, endValue) {
    
    var amountAnimationFrames = endFrame - startFrame;
    var framesPerAnimation = amountAnimationFrames;
    if(frameNumber>endFrame) {
        frameNumber=endFrame;
    }
    if(frameNumber<startFrame) {
        frameNumber=startFrame;
    }
    var calculatedFrameNumber = frameNumber - startFrame;
    if(frameNumber >= startFrame && frameNumber <= endFrame){
        var differenceValues = startValue - endValue;
        
        var amountAnimationFrames = endFrame - startFrame;

        var ratio = differenceValues / amountAnimationFrames;
        var animationSpeed = (frameNumber-startFrame) * ratio;
        element.css(variable,startValue - animationSpeed+"%");
    };
    //$('audio#pop')[0].play();
}






