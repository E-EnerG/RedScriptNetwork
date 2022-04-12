namespace SpriteKind {
    export const MainSystemFile = SpriteKind.create()
}
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile0`, function (sprite, location) {
    if (dothis == 1) {
        if (controller.B.isPressed()) {
            game.splash("Cboy Storage : ", currentsessionstoragecboy)
            game.splash("User Storage : ", currentsessionstorageuser)
            game.splash("App Storage : ", currentsessionstorageapps)
            game.splash("Total System Storage :", mainstorage)
        }
    }
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile1`, function (sprite, location) {
    if (dothis == 4) {
        if (controller.B.isPressed()) {
            game.splash("{Press --> to increase brightness}", "{Press <-- to decrease Brightness}")
            game.splash("Click {menu} if you want to exit brightness editing")
            game.splash("!!Note!! This mode is under maintenance")
            dothis = 5
        }
    }
})
// Add Numbers for Pre-Added Setting
// Don't use them for custom settings or insert numbers into them. They will be stored as their name, which shouldn't have numbers, otherwise it will overwrite the main system settings D:
function Create_file (text: string) {
    if (text == "1") {
        blockSettings.writeString("main.setting.storage.base", "1111")
        currentsessionstoragecboy += 1
        mainstorage += 1
    } else if (text == "2") {
        blockSettings.writeString("main.folder.storage.viewer", "1111")
        currentsessionstorageapps += 1
        mainstorage += 1
    }
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.MainSystemFile, function (sprite, otherSprite) {
    if (controller.B.isPressed()) {
        if (otherSprite == mySprite) {
            dothis = 1
            tiles.setCurrentTilemap(tilemap`level13`)
        } else if (otherSprite == mySprite3) {
            game.showLongText("0.03 - Changed All Icons On Desktop", DialogLayout.Center)
        } else if (otherSprite == mySprite4) {
            game.showLongText("RedScript - Version 0.03", DialogLayout.Center)
        } else if (otherSprite == personalization) {
            dothis = 4
            tiles.setCurrentTilemap(tilemap`level6`)
        }
    }
    if (controller.A.isPressed()) {
        dothis = 0
    }
})
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    if (dothis == 5) {
        BrightnessWhite += -10
    } else if (dothis2 == 6) {
        Volume += -1
    }
})
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    if (dothis == 5) {
        BrightnessWhite += 10
    } else if (dothis2 == 6) {
        Volume += 1
    }
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile2`, function (sprite, location) {
    if (dothis == 4) {
        if (controller.B.isPressed()) {
            game.splash("{Press --> to increase volume}", "{Press <-- to decrease volume}")
            game.splash("Click {menu} if you want to exit volume editing")
            dothis2 = 6
        }
    }
})
controller.menu.onEvent(ControllerButtonEvent.Pressed, function () {
    dothis = 0
})
let dothis2 = 0
let mainstorage = 0
let currentsessionstorageapps = 0
let currentsessionstorageuser = 0
let currentsessionstoragecboy = 0
let personalization: Sprite = null
let mySprite4: Sprite = null
let mySprite3: Sprite = null
let mySprite: Sprite = null
let dothis = 0
let Volume = 50
let BrightnessWhite = 255
let BrightnessBlack = 0
dothis = 0
let textSprite = textsprite.create("Volume - " + convertToText(Volume))
textSprite.setPosition(100, 100)
tiles.setCurrentTilemap(tilemap`level4`)
Create_file("1")
Create_file("2")
scene.setBackgroundColor(6)
mySprite = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . 5 5 5 5 5 5 5 5 5 5 5 5 1 4 . 
    . 5 f f f f f f f f f f 5 1 4 . 
    . 5 5 5 5 5 5 5 5 5 5 5 5 1 4 . 
    . 5 f f f f f f f f f f 5 1 4 . 
    . 5 5 5 5 5 5 5 5 5 5 5 5 1 4 . 
    . 5 f f f f f f f f f f 5 1 4 . 
    . 5 5 5 5 5 5 5 5 5 5 5 5 1 4 . 
    . 5 f f f f 5 5 5 5 5 5 5 1 4 . 
    . 5 5 5 5 5 5 5 5 5 5 5 5 1 4 . 
    . 5 5 5 5 5 5 5 5 5 5 5 5 1 4 . 
    . 5 5 5 5 5 5 5 5 5 5 5 5 1 4 . 
    . 5 5 5 5 5 5 5 5 5 5 5 5 1 4 . 
    . 5 5 5 5 5 5 5 5 5 f f 5 1 4 . 
    . 5 5 5 5 5 5 5 5 5 5 5 5 1 4 . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.MainSystemFile)
mySprite.setPosition(20, 25)
let mySprite2 = sprites.create(img`
    f f f f f f f 
    f f f f f f f 
    f f f f f f f 
    f f f f f f f 
    f f f f f f f 
    f f f f f f f 
    f f f f f f f 
    `, SpriteKind.Player)
controller.moveSprite(mySprite2)
mySprite3 = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . 2 2 2 2 2 2 2 7 7 7 7 7 7 7 . 
    . 2 1 1 1 1 1 1 1 1 1 1 1 1 7 . 
    . 2 1 1 f f f f f f f f 1 1 7 . 
    . 2 1 f 1 1 1 1 1 1 1 1 f 1 7 . 
    . 2 1 1 1 1 1 1 1 1 1 1 f 1 7 . 
    . 2 1 1 1 1 1 1 1 1 1 1 f 1 7 . 
    . 2 1 1 1 1 1 1 1 1 1 1 f 1 7 . 
    . 2 1 1 1 1 1 1 f f f f 1 1 7 . 
    . 2 1 1 1 1 1 f 1 1 1 1 1 1 7 . 
    . 2 1 1 1 1 1 f 1 1 1 1 1 1 7 . 
    . 2 1 1 1 1 1 1 1 1 1 1 1 1 7 . 
    . 2 1 1 1 1 1 f 1 1 1 1 1 1 7 . 
    . 2 1 1 1 1 1 1 1 1 1 1 1 1 7 . 
    . 2 2 2 2 2 2 2 7 7 7 7 7 7 7 . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.MainSystemFile)
mySprite3.setPosition(20, 57)
mySprite4 = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . a a a a a a a a a a a a a a . 
    . a a a a a a a a a a a a a a . 
    . a a a a a a a a a a a a a a . 
    . a a a a a a a a a a a a a a . 
    . a a a a a a a a a a a a a a . 
    . a a a f f f f f f f f a a a . 
    . a a a a f f f f f f a a a a . 
    . a a a a a a a a a a a a a a . 
    . a a a a a a a a a a a a a a . 
    . a a a a a a a a a a a a a a . 
    . a a a a a a a a a a a a a a . 
    . a a a a a a a a a a a a a a . 
    . a a a a a a a a a a f f f a . 
    . a a a a a a a a a a a a a a . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.MainSystemFile)
mySprite4.setPosition(20, 89)
personalization = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . 2 2 4 4 5 5 7 7 8 8 a a 3 3 . 
    . 2 2 4 4 5 5 7 7 8 8 a a 3 3 . 
    . e e d d b b c c f f 1 1 2 2 . 
    . e e d d b b c c f f 1 1 2 2 . 
    . 4 4 5 5 7 7 8 8 a a 3 3 e e . 
    . 4 4 5 5 7 7 8 8 a a 3 3 e e . 
    . d d b b c c f f 1 1 2 2 4 4 . 
    . d d b b c c f f 1 1 2 2 4 4 . 
    . 5 5 7 7 8 8 a a 3 3 e e d d . 
    . 5 5 7 7 8 8 a a 3 3 e e d d . 
    . b b c c f f 1 1 2 2 4 4 5 5 . 
    . b b c c f f 1 1 2 2 4 4 5 5 . 
    . 7 7 8 8 a a 3 3 e e d d b b . 
    . 7 7 8 8 a a 3 3 e e d d b b . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.MainSystemFile)
personalization.setPosition(70, 25)
mySprite2.z = 55
game.onUpdate(function () {
    console.logValue("Total Settings", blockSettings.readNumber("main.setting.storage"))
    console.logValue("Total Settings (in Cboy)", blockSettings.readNumber("cboy.setting.storage"))
    console.logValue("Total Settings (in User)", blockSettings.readNumber("user.setting.storage"))
    console.logValue("Total Settings (in Apps)", blockSettings.readNumber("apps.setting.storage"))
    blockSettings.writeNumber("main.setting.storage", mainstorage)
    blockSettings.writeNumber("cboy.setting.storage", currentsessionstoragecboy)
    blockSettings.writeNumber("user.setting.storage", currentsessionstorageuser)
    blockSettings.writeNumber("apps.setting.storage", currentsessionstorageapps)
    mainstorage = blockSettings.readNumber("cboy.setting.storage") + (blockSettings.readNumber("user.setting.storage") + blockSettings.readNumber("apps.setting.storage"))
})
forever(function () {
    mySprite.sayText("Files")
    mySprite3.sayText("Devlog")
    mySprite4.sayText("About")
    personalization.sayText("Settings")
})
forever(function () {
    if (dothis == 0) {
        tiles.setCurrentTilemap(tilemap`level4`)
    } else if (dothis == 1) {
        tiles.setCurrentTilemap(tilemap`level13`)
    }
})
forever(function () {
    textSprite.setText("Volume - " + convertToText(Volume))
    music.setVolume(Volume)
})
