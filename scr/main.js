import { MenuScene } from './scenes/MenuScene.js';
import { GameScene } from './scenes/GameScene.js';

const config = {
    type: Phaser.AUTO,
    width: window.innerWidth,
    height: window.innerHeight,
    parent: 'game-container',
    pixelArt: true, // Включает четкий пиксель-арт без размытия
    physics: {
        default: 'arcade',
        arcade: {
            gravity: { y: 0 },
            debug: false
        }
    },
    scene: [MenuScene, GameScene]
};

const game = new Phaser.Game(config);

window.addEventListener('resize', () => {
    game.scale.resize(window.innerWidth, window.innerHeight);
});