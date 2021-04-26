class Form{
    constructor(){
       this.input = createInput("Name");
       this.button = createButton('Play');
       this.greeting = createElement('h2');
       this.title = createElement('h2');
       this.reset = createButton('Reset');
    }
    hide() {
        this.greeting.hide();
        this.button.hide();
        this.input.hide();
        this.title.hide();
    }
    display() {
        this.title.html("FRUIT CATCHER");
        this.title.position(750, 50);
        this.title.style('font-size', '70px');
        this.title.style('color', 'skyblue');
        this.input.position(750,300);
        this.input.style('width', '500px');
        this.input.style('height', '50px');
        this.input.style('font-size', '40px');
        this.input.style('background', 'cyan');
        this.button.position(1250,300);
        this.button.style('width', '100px');
        this.button.style('height', '55px');
        this.button.style('font-size', '40px');
        this.button.style('color', 'yellow');
        this.button.style('background', 'black');
        this.reset.position(900, 660);
        this.reset.style('width', '100px');
        this.reset.style('height', '30px');
        this.reset.style('background', 'lightpink');

        this.button.mousePressed(() => {
            this.input.hide();
            this.button.hide();
            player.name = this.input.value();
            playerCount += 1;
            player.index = playerCount;
            player.update();
            player.updateCount(playerCount);
            this.greeting.html("Hello " + player.name)
            this.greeting.position(400,250);
            this.greeting.style('color', 'white');
            this.greeting.style('font-size', '100px');
        });

        this.reset.mousePressed(() => {
            //add code to reset the values of the gameState and the playerCount nodes to 0 in the database
            player.updateCount(0);
            game.update(0)
        });

    }
}