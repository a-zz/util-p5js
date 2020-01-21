/* ************************************************************************** *
 * perspective-util-p5.js                                                     *
 *  > Utility functions for perspective operations                            *
 * pareidolia.es, 2019 - GNU GENERAL PUBLIC LICENSE Version 3                 *
 * ************************************************************************** *
 * Dependencies: 3dvector-util-p5.js                                          *
 * ************************************************************************** *
 * TODO Only conical perspective so far; more to come...                      *
 * TODO Thorough testing needed.                                              *
 * ************************************************************************** */
var AZZP5 = AZZP5 || {};
(function(context) { 
  
  /* cpresolve()
  * Resolves a target point on a projection plane by conical perspective
  * Args: pv ([3]) Point of view (i.e. "camera position")
  *       ppn ([3]) Projection plane normal (i.e. "camera direction")
  *       ppt ([3]) Projection plane top (i.e. "camera roll"); must be
  *          normal to ppn.
  *       ppd (number) Projection plane distance from point of view
  *       tp ([3]) Target point
  * Rtrn: ([2]) The projected point within the plane. Coordinates are
  *          relative to ppt: x is clockwise normal to ttp; y is along ttp.
  */
  context.cpresolve = function(pv, ppn, ppt, ppd, tp) {

    // ppn and ppt must be normal
    if(AZZP5.vdot(ppn, ppt)!=0)
      return null;

    // Central point in the projection plane
    var p00 = AZZP5.vadd(AZZP5.svmult(ppd, ppn), pv);

    // Resolve target point to projection plane
    // TODO check for vanishing points 
    var d = AZZP5.vdot(AZZP5.vsubt(p00, tp), ppn) / 
            AZZP5.vdot(AZZP5.vsubt(pv, tp), ppn);
    var rp3 = AZZP5.vadd(AZZP5.svmult(d, AZZP5.vsubt(pv, tp)), tp);

    // Place the resolved point in the projection plane, accounting for top 
    //  direction
    var vx = AZZP5.vcross(ppt, ppn);
    var vy = ppt;
    return [AZZP5.vdot(rp3, vx), AZZP5.vdot(rp3, vy)];
  }
})(AZZP5);
/* ************************************************************************** */
