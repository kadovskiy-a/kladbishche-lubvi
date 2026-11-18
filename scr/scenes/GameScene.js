export class GameScene extends Phaser.Scene {
    constructor() {
        super('GameScene');
    }

    preload() {
        // Здесь будут загружаться спрайты и звуки. 
        // Пока генерируем временные цвета, чтобы код сразу работал без внешних картинок.
    }

    create() {
        // Создаем большое процедурное поле кладбища (трава и дорожки)
        const mapWidth = 3000;
        const mapHeight = 3000;
        
        this.add.rectangle(0, 0, mapWidth, mapHeight, 0x1b241f).setOrigin(0);

        // Рисуем несколько тестовых дорожек
        this.add.rectangle(1500, 0, 200, mapHeight, 0x2c2d30).setOrigin(0.5, 0);

        // Устанавливаем границы мира
        this.physics.world.setBounds(0, 0, mapWidth, mapHeight);

        // Создаем игрока (наш персонаж)
        this.player = this.add.rectangle(1500, 1500, 32, 48, 0x61afef);
        this.physics.add.existing(this.player);
        this.player.body.setCollideWorldBounds(true);

        // Настраиваем камеру, чтобы она следила за игроком
        this.cameras.main.setBounds(0, 0, mapWidth, mapHeight);
        this.cameras.main.startFollow(this.player, true, 0.09, 0.09);

        // Управление с клавиатуры (WASD / Стрелки)
        this.cursors = this.input.keyboard.createCursorKeys();
        this.wasd = this.input.keyboard.addKeys({
            up: Phaser.Input.Keyboard.KeyCodes.W,
            down: Phaser.Input.Keyboard.KeyCodes.S,
            left: Phaser.Input.Keyboard.KeyCodes.A,
            right: Phaser.Input.Keyboard.KeyCodes.D
        });

        // Интерфейс: Шуточная ачивка в левом верхнем углу (фиксирована на экране камеры)
        this.createUI();
    }

    createUI() {
        // Контейнер для интерфейса, который не двигается вместе с камерой (scrollFactor(0))
        const uiText = this.add.text(20, 20, '🏆 Достижение разблокировано:\n«Первый блин комом»', {
            fontSize: '16px',
            fill: '#ffcc00',
            backgroundColor: '#000000aa',
            padding: { x: 10, y: 10 }
        });
        uiText.setScrollFactor(0);

        // Плавное исчезновение ачивки через 5 секунд
        this.time.delayedCall(5000, () => {
            this.tweens.add({
                targets: uiText,
                alpha: 0,
                duration: 1000,
                onComplete: () => uiText.destroy()
            });
        });
    }

    update() {
        const speed = 200;
        const body = this.player.body;

        body.setVelocity(0);

        if (this.cursors.left.isDown || this.wasd.left.isDown) {
            body.setVelocityX(-speed);
        } else if (this.cursors.right.isDown || this.wasd.right.isDown) {
            body.setVelocityX(speed);
        }

        if (this.cursors.up.isDown || this.wasd.up.isDown) {
            body.setVelocityY(-speed);
        } else if (this.cursors.down.isDown || this.wasd.down.isDown) {
            body.setVelocityY(speed);
        }
    }
}