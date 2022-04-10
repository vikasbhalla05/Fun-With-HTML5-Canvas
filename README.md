# Working with HTML Canvas in Browser

## Intuition Building 

### Click and Drag functionality
1. get the 2d context for the Canvas element with getContext('2d') function
2. change the width and height of the canvas to be the innerWidth and innerHeight of browser
3. setting up different setting for the context like -
 - strokeStyle
 - lineJoin
 - lineCap
4. Variables for registering isDrawing, & the last X and Y positions
5. Add event listener mousemove and fire only if isDrawing is true
6. Change the isDrawing with event listener mousedown, mouseup and mouseout

### The drawing part ( In the draw function )
1. add functions to context to draw the line 
 - beginPath
 - moveTo
 - lineTo
 - stroke
2. update move to coordinates to last
3. update move to coordinates to the last in the mousedown event listener
4. change the line width for the canvas context
5. programmatically select the hue with hsl color code