// FIX FIX
// Go in and write a new method that includes
// canvasDemo._config.loadFile = false;

// All new Objects and buttons should be added here
// After adding the html elements for useage in the _config file
canvasDemo.undoButton.addEventListener('click',function(){
  canvasDemo._config.loadFile = false;
  undo();
});

canvasDemo.redoButton.addEventListener('click',function(){
  canvasDemo._config.loadFile = false;
  redo();
});
canvasDemo.addRectangleButton.addEventListener('click',function(){
canvasDemo._config.loadFile = false;

  canvasDemo.addRectangle()
  
});

canvasDemo.addTextBoxButton.addEventListener('click',function(){
canvasDemo._config.loadFile = false;

canvasDemo.addTextBox();
});
canvasDemo.addActorButton.addEventListener('click',function(){
canvasDemo._config.loadFile = false;

canvasDemo.addActor()
});
canvasDemo.addEllipseButton.addEventListener('click',function(){
canvasDemo._config.loadFile = false;

canvasDemo.addEllipse()
});
canvasDemo.addLabelButton.addEventListener('click',function(){
canvasDemo._config.loadFile = false;

canvasDemo.addLabel()
});
canvasDemo.addGenArrowButton.addEventListener('click',function(){
canvasDemo._config.loadFile = false;

canvasDemo.addGenArrow()
});
canvasDemo.addDashedArrowButton.addEventListener('click',function(){
canvasDemo._config.loadFile = false;

canvasDemo.addDashedArrow()
});
canvasDemo.addComLineButton.addEventListener('click',function(){
canvasDemo._config.loadFile = false;

canvasDemo.addComLine()
});
canvasDemo.addLineButton.addEventListener('click',function(){
canvasDemo._config.loadFile = false;
isDrawing = true;
canvasDemo.addLine()
});
canvasDemo.addAggregationButton.addEventListener('click',function(){
  canvasDemo._config.loadFile = false;

  canvasDemo.addAggregation()
});
canvasDemo.addCompositionButton.addEventListener('click',function(){
  canvasDemo._config.loadFile = false;

  canvasDemo.addComposition()
});
canvasDemo.addDependencyButton.addEventListener('click',function(){
  canvasDemo._config.loadFile = false;

  canvasDemo.addDependency()
});
canvasDemo.addArrowButton.addEventListener('click',function(){
  canvasDemo._config.loadFile = false;

  canvasDemo.addArrow()
});
// Used this for start of file to make sure default is part of history
canvasDemo._config.loadFile = true;
updateCanvasState();


//canvasDemo.CanvasGrid();
// Can be used for setting up basic template
//canvasDemo.addTextBox();
