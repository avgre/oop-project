//Create the Entity, Wall, Grass, Gold, Dungeon and Tradesman class

/*
Entity class definition
- constructor
  - parameters: src (string)
  - Creates an img element and sets the src.
  - Sets the element property to the created img element.
- element (HTMLElement): HTML element for the entity (img element)
- setImg (function)
  - parameters: src (string)
  - Updates the src of the element property
Example use: not used by itself. 
*/
class Entity {
  constructor(src) {
    const img = document.createElement('img');
    img.src = src;
    this.element = img;
  }
  setImg = (src) => {
    this.element.src = src;
  };
}

/*
Wall class definition. A Wall is an Entity
- constructor
  - parameters: none
  - Creates a wall entity with the 'wall' img
Example use:
new Wall()
*/

class Wall extends Entity {
  constructor() {
    super('imgs/environment/wall.png');
  }
}
/*
Grass class definition. Grass is an Entity
- constructor
  - parameters: none
  - Creates a grass entity with a random grass image
Example use:
new Grass()
*/

let grassArr = [
  'imgs/environment/grass1.png',
  'imgs/environment/grass2.png',
  'imgs/environment/grass3.png',
];
class Grass extends Entity {
  constructor() {
    super(grassArr[getRandom(0, 2)]);
  }
}
/*
Gold class definition. Gold is an Entity
- constructor
  - parameters: value (number)
  - Creates a gold entity with the 'gold' image and sets the gold value
- value (number): gold value
Example use:
new Gold()
*/
class Gold extends Entity {
  constructor() {
    super('imgs/gold.gif');
  }
}
/*
Dungeon class definition. Gold is an Entity
- constructor
  - parameters: isOpen (boolean), hasPrincess (boolean), gold (number), items (Item[])
  - Creates a dungeon entity with the 'open' or 'closed' image depending on isOpen.
- isOpen (boolean)
- hasPrincess (boolean)
- gold (number)
- items (Item[])
- open (function)
  - parameters: none
  - Sets isOpen to true and sets the entity image to 'open'
Example use:
new Dungeon(true, false, 30, [new Potion(2), new Bomb(2)]);
*/

/*
Tradesman class definition. A Tradesman is an Entity
- constructor
  - parameters: items (Item[])
  - Creates a tradesman with items and the tradesman image
- items (Item[])
Example use:
new Tradesman([new Potion(0), new Bomb(0), new Key()]);
*/
