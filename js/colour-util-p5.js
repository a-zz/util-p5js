/* ************************************************************************** *
 * colour-util-p5.js                                                          *
 *  > Some utilities for colour handling in p5.js                             *
 * pareidolia.es, 2019 - GNU GENERAL PUBLIC LICENSE Version 3                 *
 * ************************************************************************** *
 * Dependencies: p5.js                                                        *
 * ************************************************************************** *
 * TODO Add some randomness to base, companion and accent hues                *
 * ************************************************************************** */
// 
var AZZP5 = AZZP5 || {};
(function(context) { 
    
	/* paletteMono3
	 * Generates a 3-colour "monochome" palette based on a certain hue.
	 * Args:	hue (integer) The base hue.
   *        s (p5 sketch) For multi-instance operation; not needed for 
   *          single (global) operation.
	 * Rtrn: 	([p5.Color]) A 3-colour array:
	 *					[0] Base hue with middle saturation
	 *					[1] Companion hue: biased halfway from the base hue, low sat.
	 *					[2] Accent hue: biased 3/4 from the base hue, full saturation
	 */
	context.paletteMono3 = function(hue, s) {
	
    s = s!=null?s:p5.instance;
		var palette = [];
		palette.push(s.color('hsb(' + AZZP5.fixHue(hue) 	 + ',  40%, 100%)'));
		palette.push(s.color('hsb(' + AZZP5.fixHue(hue-30) + ',  20%, 100%)'));
		palette.push(s.color('hsb(' + AZZP5.fixHue(hue+45) + ', 100%, 100%)'));
		return palette;
	}
	
	/* paletteMono5
	 * Generates a 5-colour "monochome" palette based on a certain hue
	 * Args:	hue (integer) The base hue.
   *        s (p5 sketch) For multi-instance operation; not needed for 
   *          single (global) operation.
	 * Rtrn: 	([p5.Color]) A 5-colour array:
	 *					[0] Base hue with middle saturation.
	 *					[1] Base hue, biased 1/4 clockwise, middle saturation
	 *					[2] Base hue, biased 1/4 anticlockwise, middle saturation
	 *					[3] Companion hue: biased halfway from the base hue, low sat.
	 *					[4] Accent hue: biased 3/4, full saturation.
	 */	
	context.paletteMono5 = function(hue, s) {
	
    s = s!=null?s:p5.instance;
		var palette = [];
		palette.push(s.color('hsb(' + AZZP5.fixHue(hue) 	 	+ ',  40%, 100%)'));
		palette.push(s.color('hsb(' + AZZP5.fixHue(hue-15) 	+ ',  40%, 100%)'));
		palette.push(s.color('hsb(' + AZZP5.fixHue(hue+15) 	+ ',  40%, 100%)'));
		palette.push(s.color('hsb(' + AZZP5.fixHue(hue-30) 	+ ',  20%, 100%)'));
		palette.push(s.color('hsb(' + AZZP5.fixHue(hue+45) 	+ ', 100%, 100%)'));
		return palette;
	}
	
	/* paletteCompl3
	 * Generates a 3-colour complementary palette based on a certain hue
	 * Args:	hue (integer) The base hue.
   *        s (p5 sketch) For multi-instance operation; not needed for 
   *          single (global) operation.
	 * Rtrn: 	([p5.Color]) A 3-colour array:
	 *					[0] Base hue with middle saturation
	 *					[1] Complementary hue, low saturation
	 *					[2] Accent hue: biased halfway from the compl. hue, full sat.
	 */	
	context.paletteCompl3 = function(hue, s) {
	
    s = s!=null?s:p5.instance;
		var palette = [];
		palette.push(s.color('hsb(' + AZZP5.fixHue(hue)			+ ',  40%, 100%)'));
		palette.push(s.color('hsb(' + AZZP5.fixHue(hue+180) + ',  20%, 100%)'));
		palette.push(s.color('hsb(' + AZZP5.fixHue(hue+150) + ', 100%, 100%)'));
		return palette;
	}
	
	/* paletteCompl5
	 * Generates a 5-colour complementary palette based on a certain hue
	 * Args:	hue (integer) The base hue.
   *        s (p5 sketch) For multi-instance operation; not needed for 
   *          single (global) operation.
	 * Rtrn: 	([p5.Color]) A 5-colour array:
	 *					[0] Base hue with middle saturation.
	 *					[1] Base hue, biased 1/4 clockwise, middle saturation
	 *					[2] Base hue, biased 1/4 anticlockwise, middle saturation
	 *					[3] Complementary hue, low saturation
	 *					[4] Accent hue: biased halfway from the compl. hue, full sat.
	 */		
	context.paletteCompl5 = function(hue, s) {
	
    s = s!=null?s:p5.instance;
		var palette = [];
		palette.push(s.color('hsb(' + AZZP5.fixHue(hue) 		+ ',  40%, 100%)'));
		palette.push(s.color('hsb(' + AZZP5.fixHue(hue-15) 	+ ',  40%, 100%)'));
		palette.push(s.color('hsb(' + AZZP5.fixHue(hue+15) 	+ ',  40%, 100%)'));
		palette.push(s.color('hsb(' + AZZP5.fixHue(hue+180) + ',  20%, 100%)'));
		palette.push(s.color('hsb(' + AZZP5.fixHue(hue+150) + ', 100%, 100%)'));
		return palette;
	}	

	/* paletteTriol3
	 * Generates a 3-colour equally-spaced triadic palette based on a certain hue
	 * Args:	hue (integer) The base hue.
   *        s (p5 sketch) For multi-instance operation; not needed for 
   *          single (global) operation.
	 * Rtrn: 	([p5.Color]) A 3-colour array:
	 *					[0] Base hue with middle saturation
	 *					[1] Companion hue, low saturation
	 *					[2] Accent hue, full sat.
	 */		
	context.paletteTrio3 = function(hue, s) {
	
    s = s!=null?s:p5.instance;
		var palette = [];
		palette.push(s.color('hsb(' + AZZP5.fixHue(hue) 		+ ',  40%, 100%)'));
		palette.push(s.color('hsb(' + AZZP5.fixHue(hue+120) + ',  20%, 100%)'));
		palette.push(s.color('hsb(' + AZZP5.fixHue(hue-120) + ', 100%, 100%)'));
		return palette;
	}

	/* paletteTrio5
	 * Generates a 5-colour equally-spaced triadic palette based on a certain hue
	 * Args:	hue (integer) The base hue.
   *        s (p5 sketch) For multi-instance operation; not needed for 
   *          single (global) operation.
	 * Rtrn: 	([p5.Color]) A 5-colour array:
	 *					[0] Base hue with middle saturation.
	 *					[1] Base hue, biased 1/4 clockwise, middle saturation
	 *					[2] Base hue, biased 1/4 anticlockwise, middle saturation
	 *					[3] Companion hue, low saturation
	 *					[4] Accent hue, full sat.
	 */		
	context.paletteTrio5 = function(hue, s) {
	
    s = s!=null?s:p5.instance;
		var palette = [];
		palette.push(s.color('hsb(' + AZZP5.fixHue(hue) 		+ ',  40%, 100%)'));
		palette.push(s.color('hsb(' + AZZP5.fixHue(hue-15) 	+ ',  40%, 100%)'));
		palette.push(s.color('hsb(' + AZZP5.fixHue(hue+15) 	+ ',  40%, 100%)'));
		palette.push(s.color('hsb(' + AZZP5.fixHue(hue+120) + ',  20%, 100%)'));
		palette.push(s.color('hsb(' + AZZP5.fixHue(hue-120) + ', 100%, 100%)'));
		return palette;
	}		
	
	/* fixHue()
	 * (internal use only)
	 */
	context.fixHue = function(hue) {

		return round(hue % 360 + (hue < 0?360:0));
	}
})(AZZP5);
/* ************************************************************************** */
