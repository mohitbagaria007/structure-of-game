class Form {
    constructor(){}
        display(){ 
            var tittle = createElement('h4');
            tittle.html("Race begins");
            tittle.position(130,0);
            var input = createInput("name");
            input.position(130,160); 
            var button = createButton("play"); 
            button.position(250,200); 
            button.mousePressed(function(){
                input.hide(); 
                button.hide(); 
                var name = input.value(); 
                playerCount = playerCount+1 ;
                player.update(name);
                player.updateCount(playerCount); 
                var greting = createElement('h3');
                greting.html("Hello,BE Redy"+name); 
                greting.position(130,160);
            }) 
        }
    
}