// Create Box that perfectly scales to match a source text layer //

// Apply to “size” property //

var s = // pickwhip source text layer // ;
var w = s.sourceRectAtTime().width;
var h = s.sourceRectAtTime().height;

[w,h];

// Apply to “position property within “rectangle path” property //

var s = // pickwhip source text layer // ;
var w = s.sourceRectAtTime().width/2;
var h = s.sourceRectAtTime().height/2;
var l = s.sourceRectAtTime().left;
var t = s.sourceRectAtTime().top;

[w+l,h+t];

// test change number 2 //
