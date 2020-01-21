/* ************************************************************************** *
 * debug-util-p5.js                                                           *
 *  > Debugging tools                                                         *
 * pareidolia.es, 2020 - GNU GENERAL PUBLIC LICENSE Version 3                 *
 * ************************************************************************** *
 * Dependencies: none                                                         *
 * ************************************************************************** *
 * TODO Very basic functionality; more to come...                             *
 * ************************************************************************** */
var AZZP5 = AZZP5 || {};
(function(context) { 

  /**
   * checkFrameRate()
   * Checks if current frame rate meets a target one; shows a message otherwise
   * Args:  targetFps (number) Target frame rate
   *        customMsg (string) Message to be shown; default 'Low frame rate!'
   *        customLeft (number)
   *        customTop (number) Message position; default lower-left corner
   *        customSize (number) Text size; default 10
   *        customCol (any colour object supported by p5) Message colour; 
   *          default 'red'
   * Rrtn:  (nothing)
   */
  context.checkFrameRate = function (targetFps, customMsg, customLeft, 
                                     customTop, customSize, customCol) {
	
    customMsg = customMsg!=null?customMsg:'Low frame rate!';
    customSize = customSize!=null?customSize:10;
    customLeft = customLeft!=null?customLeft:customSize;
    customTop = customTop!=null?customTop:ch-customSize;
    customCol = customCol!=null?customCol:'red';
	
    let fps = frameRate();
    if(targetFps>fps) {		
      textAlign(LEFT);
      textSize(customSize);
      let warnText = customMsg + ': ' + round(fps) + '<' + targetFps + ' fps';
      fill(customCol);
      text(warnText, customSize, ch-customSize);
	}
}
})(AZZP5);
/* ************************************************************************** */
