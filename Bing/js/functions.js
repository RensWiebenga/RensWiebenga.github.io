
$(document).ready(function(){

    $( window ).resize(function() {
        $('.flagLeft').height($('.flagText').height()+60);
        $('.flagRight').height($('.flagText').height()+60);
    });


    $('body').height(8000);
    var windowHeight = $('body').height();
    var amountFrames = 800;
    var ratioFrames = windowHeight / amountFrames;
    var currentFrame = 0;
    $('.flagLeft').height($('.flagText').height()+80);
    $('.flagRight').height($('.flagText').height()+80);
    $(window).scroll(function() {
        
        var currentScroll = parseInt($(window).scrollTop()); 
        //console.log(currentScroll);
        //$('.bannerContainer').css('margin-top',currentScroll);
        currentFrame = parseInt(currentScroll/ratioFrames);
        console.log("Frame: " + currentFrame);

        // animateBlueBlock(currentFrame, 120, 150);
        // animateRedBlock(currentFrame, 120, 150);
        animate($('.blueBlock'), "right",currentFrame, 220, 250, 99, 50);
        animate($('.redBlock'), "left",currentFrame, 220, 250, 99, 50);
        animate($('.bing'), "bottom",currentFrame, 100, 200, -90, 6);
        animate($('.rens'), "bottom",currentFrame, 100, 200, -90, 6);
        animate($('.block'), "bottom",currentFrame, 100, 200, 100, 0);

        animate($('.bar1'), "opacity",currentFrame, 270, 280, 0, 100);
        animate($('.bar2'), "opacity",currentFrame, 280, 290, 0, 100);
        animate($('.bar3'), "opacity",currentFrame, 290, 300, 0, 100);
        animate($('.bar4'), "opacity",currentFrame, 300, 310, 0, 100);
        animate($('.bar5'), "opacity",currentFrame, 310, 320, 0, 100);

        animate($('.bar1'), "width",currentFrame, 330, 340, 3, 70);
        animate($('.bar2'), "width",currentFrame, 340, 350, 3, 58);
        animate($('.bar3'), "width",currentFrame, 350, 360, 3, 46);
        animate($('.bar4'), "width",currentFrame, 360, 370, 3, 34);
        animate($('.bar5'), "width",currentFrame, 370, 380, 3, 22);

        animate($('.redHeart'), "opacity",currentFrame, 420, 460, 0, 100);
        animate($('.redHeart'), "left",currentFrame, 480, 560, 12, 50);
        animate($('.redHeart'), "top",currentFrame, 480, 540, 5, 35);
        animate($('.redHeart img'), "width",currentFrame, 570, 600, 100, 0);

        animate($('.blueHeart'), "opacity",currentFrame, 420, 460, 0, 100);
        animate($('.blueHeart'), "right",currentFrame, 480, 560, 12, 50);
        animate($('.blueHeart'), "top",currentFrame, 480, 540, 5, 35);
        animate($('.blueHeart img'), "width",currentFrame, 570, 600, 100, 0);
        
        animate($('.purpleHeart'), "opacity",currentFrame, 590, 640, 0, 100);
        animate($('.purpleHeart'), "top",currentFrame, 590, 670, 10, 5);
        
        animate($('.blueBar1'), "left",currentFrame, 0, 50, -100, 90);
        animate($('.blueBar2'), "left",currentFrame, 10, 60, -100, 87.5);
        animate($('.blueBar3'), "left",currentFrame, 20, 70, -100, 85);
        animate($('.blueBar4'), "left",currentFrame, 30, 80, -100, 82.5);
        animate($('.blueBar5'), "left",currentFrame, 40, 90, -100, 80);
        animate($('.blueBar6'), "left",currentFrame, 50, 100, -100, 77.5);
        animate($('.blueBar7'), "left",currentFrame, 60, 110, -100, 75);
        animate($('.blueBar8'), "left",currentFrame, 70, 120, -100, 72.5);
        animate($('.blueBar9'), "left",currentFrame, 80, 130, -100, 70);
        animate($('.blueBar10'), "left",currentFrame, 90, 140, -100, 67.5);
        animate($('.blueBar11'), "left",currentFrame, 100, 150, -100, 65);

        animate($('.redBar1'), "left",currentFrame, 0, 50, 100, -90);
        animate($('.redBar2'), "left",currentFrame, 10, 60, 100, -87.5);
        animate($('.redBar3'), "left",currentFrame, 20, 70, 100, -85);
        animate($('.redBar4'), "left",currentFrame, 30, 80, 100, -82.5);
        animate($('.redBar5'), "left",currentFrame, 40, 90, 100, -80);
        animate($('.redBar6'), "left",currentFrame, 50, 100, 100, -77.5);
        animate($('.redBar7'), "left",currentFrame, 60, 110, 100, -75);
        animate($('.redBar8'), "left",currentFrame, 70, 120, 100, -72.5);
        animate($('.redBar9'), "left",currentFrame, 80, 130, 100, -70);
        animate($('.redBar10'), "left",currentFrame, 90, 140, 100, -67.5);
        animate($('.redBar11'), "left",currentFrame, 100, 150, 100, -65);

        animate($('.note1'), "opacity",currentFrame, 230, 290, 0, 50);
        animate($('.note1 img'), "width",currentFrame, 230, 270, 65, 80);

        animate($('.note4'), "opacity",currentFrame, 300, 360, 0, 50);
        animate($('.note4 img'), "width",currentFrame, 300, 340, 45, 65);

        animate($('.note2'), "opacity",currentFrame, 390, 450, 0, 50);
        animate($('.note2 img'), "width",currentFrame, 390, 430, 50, 70);

        animate($('.note3'), "opacity",currentFrame, 500, 560, 0, 50);
        animate($('.note3 img'), "width",currentFrame, 500, 550, 23, 45);

        animate($('.notesTree1'), "opacity",currentFrame, 150, 190, 0, 50);
        animate($('.notesTree1 img'), "width",currentFrame, 150, 170, 65, 80);

        animate($('.notesTree2'), "opacity",currentFrame, 350, 400, 0, 50);
        animate($('.notesTree2 img'), "width",currentFrame, 350, 390, 65, 80);

        animate($('.notesTree3'), "opacity",currentFrame, 440, 500, 0, 50);
        animate($('.notesTree3 img'), "width",currentFrame, 440, 490, 65, 80);

        animate($('.notesTree4'), "opacity",currentFrame, 550, 610, 0, 50);
        animate($('.notesTree4 img'), "width",currentFrame, 550, 600, 65, 80);

        animate($('.notesTree5'), "opacity",currentFrame, 620, 680, 0, 50);
        animate($('.notesTree5 img'), "width",currentFrame, 620, 660, 100, 120);
        animate($('.notesTree5 img'), "margin-left",currentFrame, 620, 660, 0, -10);

        animate($('.movingMessage2'), "opacity",currentFrame, 140, 160, 0, 100);
        animate($('.movingMessage3'), "opacity",currentFrame,190, 210, 0, 100);
        animate($('.movingMessage4'), "opacity",currentFrame, 240, 260, 0, 100);
        animate($('.movingMessage5'), "opacity",currentFrame, 290, 310, 0, 100);
        animate($('.movingMessage6'), "opacity",currentFrame, 340, 360, 0, 100);
        animate($('.movingMessage7'), "opacity",currentFrame, 390, 410, 0, 100);
        animate($('.movingMessage8'), "opacity",currentFrame, 440, 460, 0, 100);
        animate($('.movingMessage9'), "opacity",currentFrame, 490, 510, 0, 100);
        animate($('.movingMessage10'), "opacity",currentFrame, 540, 560, 0, 100);
        animate($('.movingMessage11'), "opacity",currentFrame, 590, 610, 0, 100);

        animate($('.movingMessage2'), "left",currentFrame, 140, 160, 0, 100);
        animate($('.movingMessage3'), "right",currentFrame, 190, 210, 0, 100);
        animate($('.movingMessage4'), "left",currentFrame, 240, 260, 0, 100);
        animate($('.movingMessage5'), "right",currentFrame, 290, 310, 0, 100);
        animate($('.movingMessage6'), "left",currentFrame, 340, 360, 0, 100);
        animate($('.movingMessage7'), "right",currentFrame, 390, 410, 0, 100);
        animate($('.movingMessage8'), "left",currentFrame, 440, 460, 0, 100);
        animate($('.movingMessage9'), "right",currentFrame, 490, 510, 0, 100);
        animate($('.movingMessage10'), "left",currentFrame, 540, 560, 0, 100);
        animate($('.movingMessage11'), "right",currentFrame, 590, 610, 0, 100);

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
    
}






