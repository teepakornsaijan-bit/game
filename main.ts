input.onButtonPressed(Button.A, function () {
    sprite.change(LedSpriteProperty.X, 1)
})
input.onButtonPressed(Button.B, function () {
    sprite.change(LedSpriteProperty.X, -1)
})
let sprite: game.LedSprite = null
sprite = game.createSprite(2, 2)
basic.forever(function () {
	
})
