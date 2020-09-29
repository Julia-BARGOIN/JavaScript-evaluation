'use strict';

/**
 * Grid Generator
 * @constructor
 * @param {number} xAxis 
 * @param {number} yAxis 
 */
var GridGenerator = function gridGenerator(xAxis, yAxis) {
  this.xAxis = xAxis;
  this.yAxis = yAxis;
}

GridGenerator.prototype.renderGrid = function () {
  var createTable = document.createElement("table");
  
  for (var i = 0; i < this.xAxis; i++) {
    var tr = document.createElement("tr");
    createTable.appendChild(tr);

    for (var j = 0; j < this.yAxis; j++) {
      var td = document.createElement("td");
      td.style.border = 'solid 1px';
      td.style.width = '20px';
      td.style.height = '20px';
      tr.appendChild(td);
    }
  }
  document.querySelector("body").appendChild(createTable);
}

GridGenerator.prototype.run = function () {
  this.renderGrid();
  return
}

new GridGenerator(4, 4).run();




