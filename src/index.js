
import Phaser from 'phaser'

import Game from './scenes/Game'

import GameOver from './scenes/GameOver';

//import '../assets/scss/index.scss' -- This was part of the tutorial. Using CSS file instead.

const config = 
{
    width: 640,
    height: 480,
    parent: 'mario',
    backgroundColor: '#FFFFAC',
    title: 'Tilemap',
    url: 'webtips.dev',
    pixelArt: true,
    physics:
    {
        default: 'arcade',
        arcade:
        {
            debug: false,
            gravity:
            {
                y: 1000
            }
        },
        fps:
        {
            max: 60,
            min: 30,
            target: 45,
            forceSetTimeOut: true
        }
    },
    scene: [Game,
        GameOver
    ],
};

new Phaser.Game(config);
