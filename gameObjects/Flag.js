class Flag
{
    constructor(scene)
    {
        const flagObject = scene.map.getObjectLayer('flagpole').objects[0];
        const flagCoordinates = scene.tileset.texCoordinates[962];
        const flagRoot = scene.platform.getTileAt(75, 23);
        

        this.scene = scene;
        this.sprite = scene.add.tileSprite(flagObject.x, flagObject.y, 16, 16, 'tiles')
        .setOrigin(0, 1)
        .setTilePosition(flagCoordinates.x, flagCoordinates.y);

        

    }


}

export default Flag;