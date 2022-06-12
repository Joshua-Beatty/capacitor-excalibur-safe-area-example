import { StatusBar } from '@capacitor/status-bar';
import { GetSafeArea } from 'get-safe-area-capacitor'
import { Capacitor } from '@capacitor/core';
import { Actor, Color, DisplayMode, Engine, PreUpdateEvent } from 'excalibur'
window.onload = async function () {
    if (Capacitor.getPlatform() == "android")
        await StatusBar.setOverlaysWebView({ overlay: true });
    StatusBar.hide()
    GetSafeArea().then((e) => {
        main(e)
    })
};
function main(insets: { top: number, bottom: number, right: number, left: number }) {
    console.log("xxxxxxxxxx" + JSON.stringify(insets))
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
        width: 30,
        height: 300,
        // Let's give it some color with one of the predefined
        // color constants
        color: Color.Gray,
    })

    game.on('preupdate', (evtObj: PreUpdateEvent) => {
        const thing = insets.left / window.innerWidth * game.screen.resolution.width
        leftBar.pos.x = - game.currentScene.camera.viewport.width / 2 + leftBar.width / 2 + thing
        console.log("posX", leftBar.pos.x)
    })
    game.add(leftBar)

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

}