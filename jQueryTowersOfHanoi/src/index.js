



const View = require("./hanoi-view.js");
const HanoiGame = require("./game.js");

$(() => {
  const rootEl = $('.hanoi');
  const game = new HanoiGame();
  new View(game, rootEl);
});
