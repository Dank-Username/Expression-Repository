// Duplicate selected layer for each motion copy //
// Apply to Position property //

leader = thisComp.layer(1);
delay = .1 + (thisLayer.index - (leader.index-1));

d = delay/thisComp.frameDuration*(index - 1);
thisComp.layer(1).position.valueAtTime(time - d)

// Apply to Opacity prperty //

opacityFactor = 1;

Math.pow(opacityFactor,index - 1)*100;
