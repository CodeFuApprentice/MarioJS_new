import increaseScore from "../src/ui/increaseScore";

class Coin
{
    constructor(scene)
    {
        this.scene = scene;
        this.coins = this.scene.physics.add.group
        (
            {
                immovable: true,
                allowGravity: false
            }

        );
        
        const coinObjects = this.scene.map.getObjectLayer('coin').objects;

        for (const coin of coinObjects)
        {
            this.coins.create(coin.x, coin.y, 'atlas')
            .setOrigin(0)
            .setDepth(-1);
        }

        /* const coinSprites = this.scene.map.createFromObjects('coin');*/
        /*
        for (const coin of coinSprites)
        {
            coin.setTexture('atlas')  // Produces multiple coins on top of placed coins
            .setScale(1)
            .setOrigin(0)
            .setDepth(-1);
            this.coins.add(coin);
        } */
               
    }

    collideWith(gameObject)
    {
        this.scene.physics.add.overlap(this.coins, gameObject, this.collect, null, this);

        return this;
    }
    update()
    {

        for (const coin of this.coins.children.entries)
        {
            coin.play('rotate', true);
        }

        /*Game has bug: Score increases by framerate, jumps very quickly, instead of by 1 point*/
        /* 
        {
            coin.collider = this.scene.physics.add.overlap(coin, this.scene.player.sprite, this.collect, null, this);
        }  */
            
        
        
    }

    



    collect()
    {
        for (const coin of this.coins.children.entries) // Don't add to Update method - Cause score increase by frame rate. ie: 60FPS
        {
            if (!coin.body.touching.none)
            {
                coin.body.setEnable(false);

                this.scene.tweens.add
                (
                    {
                        targets: coin,
                        ease: 'Power1',
                        scaleX: 0,
                        scaleY: 0,
                        duration: 200,
                        onComplete: () => coin.destroy()
           
                    }
                );

            }

        }
        
        increaseScore(1);
        //coin.collider.destroy(); // This triggers exception ... Why?

        
    }
    
}

export default Coin;
