export class MenuScene extends Phaser.Scene {
    constructor() {
        super('MenuScene');
    }

    create() {
        const width = this.scale.width;
        const height = this.scale.height;

        // Темный ретро-фон меню
        this.add.rectangle(0, 0, width, height, 0x0f111a).setOrigin(0);

        // Заголовок игры
        this.add.text(width / 2, height / 3 - 50, 'КЛАДБИЩЕ ЛЮБВИ', {
            fontSize: '48px',
            fill: '#ff4d4d',
            fontStyle: 'bold',
            align: 'center'
        }).setOrigin(0.5);

        this.add.text(width / 2, height / 3 + 10, '«Здесь покоятся те, кто сгорел ярче всех»', {
            fontSize: '18px',
            fill: '#8c92ac',
            fontStyle: 'italic',
            align: 'center'
        }).setOrigin(0.5);

        // Кнопка входа / старта игры
        const loginButton = this.add.rectangle(width / 2, height / 2 + 50, 260, 50, 0x2e3248)
            .setInteractive()
            .on('pointerover', () => loginButton.setFillStyle(0x3e4463))
            .on('pointerout', () => loginButton.setFillStyle(0x2e3248))
            .on('pointerdown', () => {
                // Переходим на сцену кладбища
                this.scene.start('GameScene');
            });

        this.add.text(width / 2, height / 2 + 50, 'ВОЙТИ НА КЛАДБИЩЕ', {
            fontSize: '20px',
            fill: '#ffffff'
        }).setOrigin(0.5);
    }
}