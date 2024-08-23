import Player from '/gameObjects/Player';
import Coin from '../../gameObjects/Coin';

import tiles from '../config/tiles';
import generateAnimations from '../config/animations';
import Goomba from '../../gameObjects/Goomba';
//import GameOver from './GameOver';

import Flag from '../../gameObjects/Flag'


class Game extends Phaser.Scene
{
    constructor()
    {
        super('Game');
    }

    preload()
    {
        this.load.image('tiles', './assets/tiles.png');
        this.load.tilemapTiledJSON('map', './assets/map.json');
        this.load.atlas('atlas', './assets/mario-atlas.png', './assets/mario-atlas.json');

        this.load.on('complete', () => 
        {
            generateAnimations(this);   
        });
    }

    create()
    {


        

        

        this.map = this.make.tilemap({ key: 'map' });
        this.tileset = this.map.addTilesetImage('map-tileset', 'tiles');
        this.platform = this.map.createLayer('platform', this.tileset, 0, 0);
    
        this.map.createLayer('background', this.tileset, 0, 0);
        this.platform.setCollisionByExclusion([-1, 450], true);

        this.player = new Player(this, 25, 300).collideWith(this.platform);
        this.goombas = new Goomba(this).collideWith(this.platform);
        this.coins = new Coin(this).collideWith(this.player.sprite);
        this.flag = new Flag(this);
        
        
        
        
        

        this.inputs = this.input.keyboard.createCursorKeys();
        
    }

    update()
    {
        
        this.player.update(this.inputs);
        this.goombas.update(); //Not yet implemented.
        this.coins.update();
        
        
    }

}


export default Game;