//Create the Position and Board class
class Position {
  constructor(row, column) {
    this.row = row;
    this.column = column;
  }
}
/*
Position class definition
- constructor
  - parameters: row (number), column (number)
- row (number): index of the board row 
- column (number): index of the board column
Example use:
const position = new Position(0, 0); // row 0, column 0
*/
class Board {
  constructor(rows, columns) {
    this.rows = [];
    this.root = document.getElementById('board');
    for (let i = 0; i < rows; i++) {
      this.rows.push([]);
      for (let j = this.rows[i].length; j < columns; j++) {
        if (i === 0 || i === rows - 1 || j === 0 || j === columns - 1) {
          this.rows[i].push(new Wall());
        } else {
          this.rows[i].push(new Grass());
        }
      }
    }
  }
  render = (root) => {
    this.root = root;
    for (let i = 0; i < this.rows.length; i++) {
      let rowdiv = document.createElement('div');
      rowdiv.classList.add('row');
      for (let j = 0; j < this.rows[i].length; j++) {
        rowdiv.appendChild(this.rows[i][j].element);
      }
      root.appendChild(rowdiv);
    }
  };
  update = () => {};
  setEntity = (entity, position) => {
    const oldChild = this.root.childNodes[position.row].childNodes[
      position.column
    ];
    this.root.childNodes[position.row].replaceChild(entity.element, oldChild);
  };
  getEntity = (position) => {
    return this.rows[position.row][position.column];
  };
}
/*
Board class definition
- constructor
  - parameters: rows (number), columns (number)
  - Creates the array of rows and fills them with Wall and Grass entities.
- rows (array): 2D Array of rows. Each row is an array of Entity objects.
- root (HTMLElement) - HTML element in which the board elements are appended
- render (function)
  - parameters: root (HTMLElement)
  - Sets the root property
  - Used to create the HTML elements for the board and append the elements to the root element.
- update (function)
 - parameters: none
 - replaces the HTML element for each entity that has changed (e.g. Monster -> Grass)
- setEntity (function)
  - parameters: entity (Entity), position (Position)
  - Sets the Entity object at the specified position and updates the Board (using the update method)
  const oldChild = this.root.childNodes[0].childNodes[0];
  this.root.childNodes[0].childNodes[0].replaceChild(entity.element, oldChild)
- getEntity (function)
  - parameters: position (Position)
  - returns the Entity at the specified position
Example use:
const board = new Board(20, 20); // Creates a Board object with 20 rows, 20 columns, Wall entities (at the edges) and Grass entities.
*/
