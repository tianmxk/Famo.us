var Engine = require('famous/core/Engine');
var Surface = require('famous/core/Surface');

var firstSurface = new Surface({
  content: "<h3>Hello World</h3>",
  size: [180, 80],
  properties: {
    backgroundColor: 'rgb(240, 238, 233)',
    textAlign: 'center',
    padding: '5px',
    border: '2px solid rgb(210, 208, 203)',
    marginTop: '50px',
    marginLeft: '50px'
  }
});

var context = Engine.createContext();
context.add(firstSurface);
