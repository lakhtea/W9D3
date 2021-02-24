const game = require('./game.js');


class View {
    constructor(game, $el) {
        this.game = game;
        this.$el = $el;
        this.setupTowers();
    }

    render () {
        
    }

    bindeEvents() {
        this.$el.on("click", "ul", (event) => {
            const $firstTarget = $(event.currentTarget);
            this.$el.on("click", "ul", (event) => {
                const $secondTarget = $(event.currentTarget);
                this.makeMove($firstTarget, $secondTarget);
            }
            
        })
    }

    makeMove($firstTarget, $secondTarget) {
        const first = $firstTarget.data("pos");
        const second = $secondTarget.data("pos");

        this.game.move(first, second);
    }


    setupTowers() {
        for (let i = 0; i < 3; i++) {
            const $ul = $("<ul>");
            $ul.data("pos", i)
            for (let j = 0; j < 3; j++) {
                const $li = $("<li>");
                $ul.append($li)
                
            }
            this.$el.append($ul);
        }
        for (let i = 1; i < 4; i++) {
            // $ul.nth.addClass(`disc${i}`);
            $(`ul:first-of-type li:nth-child(${i})`).addClass(`disc${i}`);
            
        }
    }

    
}

module.exports = View;