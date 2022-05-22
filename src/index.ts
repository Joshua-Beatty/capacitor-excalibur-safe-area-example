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
const leftBar = new Actor({
    x: 0,
    y: 0,
    width: 50,
    height: 380,
    // Let's give it some color with one of the predefined
    // color constants
    color: Color.DarkGray,
    
})
game.add(leftBar)




leftBar.on('preupdate', (evtObj) => {
    const thing = Number(getComputedStyle(document.documentElement).getPropertyValue("--sal").replace("px", "")) / window.innerWidth * game.screen.resolution.width
    leftBar.pos.x =  - game.currentScene.camera.viewport.width / 2 + leftBar.width / 2 + thing
  })

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
const safeAreaInsets = require('safe-area-insets')
game.start().then(()=>{
    
console.log("sat: " + getComputedStyle(document.documentElement).getPropertyValue("--sat"))
console.log("sab: " + getComputedStyle(document.documentElement).getPropertyValue("--sab"))
console.log("sal: " + getComputedStyle(document.documentElement).getPropertyValue("--sal"))
console.log("sar: " + getComputedStyle(document.documentElement).getPropertyValue("--sar"))
console.log('safeAreaInsets.support', safeAreaInsets.support)
console.log("left: " + safeAreaInsets.left)
console.log("right: " + safeAreaInsets.right)
console.log("top: " + safeAreaInsets.top)
console.log("bottom: " + safeAreaInsets.bottom)
console.log("win: " + window.innerWidth)
}
    
)