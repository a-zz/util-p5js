/* ************************************************************************** *
 * raster-util-p5.js                                                          *
 *  > Raster utilites                                                         *
 * pareidolia.es, 2020 - GNU GENERAL PUBLIC LICENSE Version 3                 *
 * ************************************************************************** *
 * Dependencies: none                                                         *
 * ************************************************************************** *
 * TODO Very basic functionality; more to come...                             *
 * ************************************************************************** */
var AZZP5 = AZZP5 || {};
(function(context) { 
  
  /* halftoneRect
   * Fills a rectangle with halftone
   * Args.: rx (number) Left; x coordinate of upper-left corner.
   *        ry (number) Top; y coordinate of upper-left corner.
   *        rw (number) Width of the rectangle.
   *        rh (number) Height of the rectangle.
   *        ds (number) Dot-to-dot step. 
   *        sFcn (number function(number, number)) Dot-size function: computes
   *          the dot size (point stroke weight) for a pair of (x, y) 
   *          coordinates.
   *        cFcn (function(number, number)) Colour function: computes the dot 
   *          colour (point stroke colour) for a paint of (x, y) coordinates. A
   *          string rather than a function can be provided, in which case it's
   *          taken as a p5.js colour literal. If null, defaults to 'black'.
   *        s (p5 sketch) For multi-instance operation; not needed for 
   *          single (global) operation.
   * Rtrn.: (nothing)
   */
  context.halftoneRect = function(rx, ry, rw, rh, ds, sFcn, cFcn, s) {
   
      s = s!=null?s:p5.instance;
      let oddRow = true;
      for(let y = ry; y<=ry+rh; y+=ds) {
        for(let x = rx+(oddRow?0:ds/2); x<=rx+rw-(oddRow?0:ds/2); x+=ds) {
          let sw = sFcn(x, y);
          let sc = cFcn==null?'black':typeof cFcn=="string"?cFcn:cFcn(x, y);
          s.strokeWeight(sw);
          s.stroke(sc);
          s.point(x, y);
        }
        oddRow = !oddRow;
      }
  }
})(AZZP5);
/* ************************************************************************** */
