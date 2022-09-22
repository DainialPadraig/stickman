let mySprite = sprites.create(img`
    . . . . . . . . 
    . . . 5 5 5 . . 
    . . . 7 7 5 . . 
    . . . 7 7 5 5 5 
    . a . 8 8 . . . 
    . . a 8 8 a . . 
    . . . 8 8 . a . 
    . . . 8 8 . . . 
    . a a a a . . . 
    . a . . a . . . 
    a a . . a a a . 
    . . . . . . . . 
    . . . . . . . . 
    . . . . . . . . 
    . . . . . . . . 
    . . . . . . . . 
    `, SpriteKind.Player)
controller.moveSprite(mySprite)
