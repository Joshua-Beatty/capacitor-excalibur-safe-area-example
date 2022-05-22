import { Actor, Color, DisplayMode, Engine } from 'excalibur'
const game = new Engine({
    width: 600,
    height: 400,
    displayMode: DisplayMode.FitScreenAndFill
})
game.currentScene.camera.x = 0
game.currentScene.camera.y = 0


game.add(new Actor({
    x: -290,
    y: 0,
    width: 20,
    height: 400,
    // Let's give it some color with one of the predefined
    // color constants
    color: Color.Chartreuse,
}))
game.add(new Actor({
    x: 290,
    y: 0,
    width: 20,
    height: 400,
    // Let's give it some color with one of the predefined
    // color constants
    color: Color.Chartreuse,
}))
game.add(new Actor({
    x: 0,
    y: -190,
    width: 600 - 20,
    height: 20,
    // Let's give it some color with one of the predefined
    // color constants
    color: Color.Chartreuse,
}))
game.add(new Actor({
    x: 0,
    y: 190,
    width: 600 - 20,
    height: 20,
    // Let's give it some color with one of the predefined
    // color constants
    color: Color.Chartreuse,
}))

game.input.pointers.primary.on('down', function (evt) {
    game.add(new Actor({
        x: evt.coordinates.worldPos.x,
        y: evt.coordinates.worldPos.y,
        width: 30,
        height: 30,
        // Let's give it some color with one of the predefined
        // color constants
        color: Color.Rose,
    }))

})

game.start()

