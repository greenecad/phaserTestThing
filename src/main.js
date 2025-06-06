import { Physics } from 'phaser';
import { Boot } from './scenes/Boot';
import { Level } from './scenes/Level';
import { Preloader } from './scenes/Preloader';

//  Find out more information about the Game Config at:
//  https://newdocs.phaser.io/docs/3.70.0/Phaser.Types.Core.GameConfig
const config = {
    type: Phaser.AUTO,
    width: 1024,
    height: 768,
    parent: 'game-container',
    backgroundColor: '#028af8',
    pixelArt: true,
    Physics:{
        default: 'arcade',
        arcade:{
            gravity: {y:800},
            debug: false
        }
    },
    scale: {
        mode: Phaser.Scale.FIT,
        autoCenter: Phaser.Scale.CENTER_BOTH
    },
    scene: [
        Level
    ]
};

export default new Phaser.Game(config);
