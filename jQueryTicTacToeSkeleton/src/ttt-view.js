const game = require("./game.js");

class View {
  constructor(game, $el) {
    this.game = game;
    this.$el = $el;
    this.setupBoard();
    this.bindEvents();
  }

  bindEvents() {
    this.$el.on("click", "li", (event) => {
      const $currentTarget = $(event.currentTarget);
      this.makeMove($currentTarget);
    });
  }

  makeMove($square) {
    let currentPlayer = this.game.currentPlayer;
    const pos = $square.data("pos");

    try {
      this.game.playMove(pos);
      $square.addClass(currentPlayer);
    } catch {
      alert("FUCKking GOD DAMn stupid moTHER FUCKER CAN'T u see???");
    }

    if (this.game.isOver()) {
      if (!this.game.winner()) {
        $("li").addClass("draw");
        const $h1 = $("<h1>");
        $h1.text(`Draw, both of you are shit`);
        this.$el.append($h1);
      } else {
        const $h1 = $("<h1>");
        $h1.text(`${currentPlayer.toUpperCase()} is the winner!`);
        this.$el.append($h1);
        $(`.${currentPlayer}`).addClass("winner");
        $("li:not(.winner)").addClass("loser");
      }
      this.$el.off("click");
      $("li").removeClass("example");
    }
  }

  setupBoard() {
    const $ul = $("<ul>");

    for (let i = 0; i < 3; i++) {
      for (let j = 0; j < 3; j++) {
        let $li = $("<li>");
        $li.addClass("example");
        $li.data("pos", [i, j]);
        $ul.append($li);
      }
    }
    this.$el.append($ul);
  }
}

module.exports = View;
