/* ************************************************************************** *
 * 2dgeometry-util-p5.js                                                      *
 *  > 2D geometry operations and utilites                                     *
 * pareidolia.es, 2019 - GNU GENERAL PUBLIC LICENSE Version 3                 *
 * ************************************************************************** *
 * Dependencies: none (not even p5.js)                                        *
 * ************************************************************************** *
 * TODO Very basic functionality; more to come...                             *
 * ************************************************************************** */
var AZZP5 = AZZP5 || {};
(function(context) { 
  
  /* linesIntersection
   * Finds the intersection point of two lines defined by duplets of points
   * Args.: p1 ([2]) Start point of first segment
   *        p2 ([2]) End point of first segment
   *        q1 ([2]) Start point of second segment
   *        q2 ([2]) End point of second segment
   * Rtrn.: ([]) Intersection point [x, y]; null if parallel or colinear
   * Credit to: http://www.ambrsoft.com/MathCalc/Line/TwoLinesIntersection/TwoLinesIntersection.htm
   */
  context.linesIntersection = function(p1, p2, q1, q2) {
   
    let x1 = p1[0], y1 = p1[1];
    let x2 = p2[0], y2 = p2[1];
    let x3 = q1[0], y3 = q1[1];
    let x4 = q2[0], y4 = q2[1];
    
    let den = (x2-x1)*(y4-y3)-(x4-x3)*(y2-y1);
    if(den==0)
      return null;
    else
      return [((x2*y1-x1*y2)*(x4-x3)-(x4*y3-x3*y4)*(x2-x1))/den,
              ((x2*y1-x1*y2)*(y4-y3)-(x4*y3-x3*y4)*(y2-y1))/den];
  }
  
  /* doSegmentsIntersect
   * Checks whether two segments intersect 
   * Args.: p1 ([2]) Start point of first segment
   *        p2 ([2]) End point of first segment
   *        q1 ([2]) Start point of second segment
   *        q2 ([2]) End point of second segment
   * Rtrn.: (boolean)
   * Credit to: https://www.geeksforgeeks.org/check-if-two-given-line-segments-intersect/
   */
  context.doSegmentsIntersect = function (p1, p2, q1, q2) {
   
    var o1 = AZZP5.tripletOrientation(p1, p2, q1); 
    var o2 = AZZP5.tripletOrientation(p1, p2, q2); 
    var o3 = AZZP5.tripletOrientation(q1, q2, p1); 
    var o4 = AZZP5.tripletOrientation(q1, q2, p2); 
    
    if(o1!=o2 && o3!=o4) 
      return true; 
    else if(o1==0 && AZZP5.onSegment(p1, q1, p2)) 
      return true;
    else if(o2==0 && AZZP5.onSegment(p1, q2, p2)) 
      return true;
    else if(o3==0 && AZZP5.onSegment(q1, p1, q2)) 
      return true;
    else if(o4==0 && AZZP5.onSegment(q1, p2, q2)) 
      return true;
    else 
      return false;
  }
  
	/* threePointOrientation
   * Finds the orientation of an ordered triplet of points
   * Args.: p ([2]) First point
   *        q ([2]) Second point
   *        r ([2]) Thrid point
   * Rtrn.: (number) 0, colinear; 1, clockwise; 2, counterclockwise
   */
	context.tripletOrientation = function(p, q, r) { 

    var val = (q[1] - p[1]) * (r[0] - q[0]) - 
              (q[0] - p[0]) * (r[1] - q[1]); 
  
    if(val==0) 
      return 0;
    else
      return (val>0)?1:2;
  }   
  
	/* onSegment
	 * Given three colinear points, checks whether a point lies on the segment
   *  defined by the two others.
	 * Args:	p1 ([2]) Start point of segment
   *        q ([2]) Point to be checked
   *        p2 ([2]) End point of segment
	 * Rtrn: 	(boolean)
	 */
	context.onSegment = function(p1, q, p2) {
	
    if (q[0] <= max(p1[0], p2[0]) && q[0] >= min(p1[0], p2[0]) && 
        q[1] <= max(p1[1], p2[1]) && q[1] >= min(p1[1], p2[1])) 
       return true;   
    else
      return false;
	}
})(AZZP5);
/* ************************************************************************** */
