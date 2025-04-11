scene.onHitWall(SpriteKind.Player, function (sprite, location) {
	
})
controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    if (jumpsDone < max_jumps || mySprite.isHittingTile(CollisionDirection.Bottom)) {
        mySprite.vy = -110
    }
    jumpsDone += 1
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.hazardLava0, function (sprite, location) {
    game.gameOver(false)
})
let max_jumps = 0
let jumpsDone = 0
let mySprite: Sprite = null
mySprite = sprites.create(img`
    . . . . . f f f f f f . . . . . 
    . . . f f 3 3 3 3 3 3 f f . . . 
    . . f 3 3 3 3 3 3 3 3 3 3 f . . 
    . . f 3 3 3 3 3 3 3 3 3 3 f . . 
    . f 3 3 3 3 3 3 f 3 f 3 3 3 f . 
    f 3 3 3 3 3 3 3 f 3 f 3 3 3 f . 
    f 3 3 3 3 3 3 3 f 3 f 3 3 3 3 f 
    f 3 3 3 3 3 3 3 3 3 3 3 3 3 3 f 
    f 3 3 3 3 3 2 2 3 3 3 2 2 3 3 f 
    f 3 3 3 3 3 3 3 3 f 3 3 3 3 3 f 
    . f 3 3 f 3 3 3 3 3 3 3 3 f 3 f 
    . . f f 3 3 3 3 3 3 3 3 3 f f . 
    . . . f f 3 3 3 3 3 3 3 f f . . 
    . . f 2 2 f f f f f f f 2 2 f . 
    . f 2 2 2 2 2 f f f f 2 2 2 2 f 
    . . f f f f f . . . f f f f f . 
    `, SpriteKind.Player)
scene.cameraFollowSprite(mySprite)
jumpsDone = 0
mySprite.ay = 300
tiles.setCurrentTilemap(tilemap`foot 1`)
max_jumps = 5
mySprite.setPosition(912, 0)
controller.moveSprite(mySprite, 100, 0)
game.onUpdate(function () {
    if (mySprite.isHittingTile(CollisionDirection.Bottom)) {
        jumpsDone = 0
    }
})
