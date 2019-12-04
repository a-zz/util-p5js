/* ************************************************************************** *
 * 3dvector-util-p5.js                                                        *
 *  > 3D vector algebra operations                                            *
 * pareidolia.es, 2019 - GNU GENERAL PUBLIC LICENSE Version 3                 *
 * ************************************************************************** *
 * Dependencies: none (not even p5.js)                                        *
 * ************************************************************************** *
 * TODO Very basic functionality yet                                          *
 * ************************************************************************** */
var AZZP5 = AZZP5 || {};
(function(context) { 
  
  /* vadd()
   * Adds two vectors
   * Args:	v1 ([3]) First vector to be added
   *        v2 ([3]) Second vector to be added
   * Rtrn: 	([3]) The addition of both vectors.
   */
  context.vadd = function(v1, v2) {

    var v = [];
    for(var i = 0; i<3; i++)
      v.push(v1[i]+v2[i]);
    return v;
  }

  /* vsubt()
   * Subtracts a vector from another one.
   * Args: v1 ([3]) The vector to subtract from.
   *       v2 ([3]) The vector to be subtracted.
   * Rtrn: ([3]) The resultant vector.
   */
  context.vsubt = function(v1, v2) {

    var v = [];
    for(var i = 0; i<3; i++)
      v.push(v1[i]-v2[i]);
    return v;
  }

  /* svmult()
   * Scalar x vector multiplication
   * Args: s1 (number) The scalar
   *       v2 (number) The vector to be multiplied
   * Rtrn: ([3]) The resultant vector
   */
  context.svmult = function(s1, v2) {
  
    var v = [];
    for(var i = 0; i<3; i++)
      v.push(s1*v2[i]);
    return v;
  }

  /* vdot
  * Dot multiplication of two vectors
  * Args: v1 ([3]) First vector to be multiplied
  *       v2 ([3]) Second vector to be multiplied
  * Rtrn: (number) The resultant scalar
  */
  context.vdot = function(v1, v2) {

    var s = 0;
    for(var i = 0; i<3; i++)
      s += v1[i]*v2[i];
    return s;
  }

  /* vcross
   * Cross multiplication of two vectos
   * Args: v1 ([3]) First vector to be multiplied
   *       v2 ([3]) Second vector to be multiplied
   * Rtrn: ([3]) The resultant vector
   */
  context.vcross = function(v1, v2) {

    var v = [];
    v.push(v1[1]*v2[2]-v1[2]*v2[1]);
    v.push(v1[2]*v2[0]-v1[0]*v2[2]);
    v.push(v1[0]*v2[1]-v1[1]*v2[0]);
    return v;
  }
})(AZZP5);
/* ************************************************************************** */
