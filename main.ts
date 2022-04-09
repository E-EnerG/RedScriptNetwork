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
            game.splash("!!Note!! It only works with White & Black")
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
            tiles.setCurrentTilemap(tilemap`level6`)
        } else if (otherSprite == mySprite3) {
            game.showLongText("0.04a - Added About me", DialogLayout.Center)
        } else if (otherSprite == mySprite4) {
            game.showLongText("RedScript - Version 0.04a", DialogLayout.Center)
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
        BrightnessBlack += 10
        color.setColor(1, color.rgb(BrightnessWhite, BrightnessWhite, BrightnessWhite))
        color.setColor(15, color.rgb(BrightnessBlack, BrightnessBlack, BrightnessBlack))
    }
})
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    if (dothis == 5) {
        BrightnessWhite += 10
        BrightnessBlack += -10
        color.setColor(1, color.rgb(BrightnessWhite, BrightnessWhite, BrightnessWhite))
        color.setColor(15, color.rgb(BrightnessBlack, BrightnessBlack, BrightnessBlack))
    }
})
controller.menu.onEvent(ControllerButtonEvent.Pressed, function () {
    dothis = 0
})
let mainstorage = 0
let currentsessionstorageapps = 0
let currentsessionstorageuser = 0
let currentsessionstoragecboy = 0
let personalization: Sprite = null
let mySprite4: Sprite = null
let mySprite3: Sprite = null
let mySprite: Sprite = null
let dothis = 0
let BrightnessBlack = 0
let BrightnessWhite = 0
BrightnessWhite = 255
BrightnessBlack = 0
dothis = 0
tiles.setCurrentTilemap(tilemap`level4`)
Create_file("1")
Create_file("2")
scene.setBackgroundColor(6)
mySprite = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . f c c c c c c c c c c c c c . 
    . f c d d d d d d d d d d d c . 
    . f c d d b b b b b b b d d c . 
    . f c d d d d d d d d d d d c . 
    . f c c c c c c c c c c c c c . 
    . f c d d d d d d d d d d d c . 
    . f c d d b b b b b b b d d c . 
    . f c d d d d d d d d d d d c . 
    . f c c c c c c c c c c c c c . 
    . f c d d d d d d d d d d d c . 
    . f c d d b b b b b b b d d c . 
    . f c d d d d d d d d d d d c . 
    . f c c c c c c c c c c c c c . 
    . f f f f f f f f f f f f f f . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.MainSystemFile)
mySprite.setPosition(20, 25)
let mySprite2 = sprites.create(img`
    . . . . . . . 
    . 2 2 2 2 2 . 
    . 2 1 1 1 2 . 
    . 2 1 2 1 2 . 
    . 2 1 1 1 2 . 
    . 2 2 2 2 2 . 
    . . . . . . . 
    `, SpriteKind.Player)
controller.moveSprite(mySprite2)
mySprite3 = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . f 5 5 5 5 5 5 5 5 5 5 5 5 5 . 
    . f 5 5 5 5 5 5 5 5 5 3 5 5 5 . 
    . f 5 5 5 5 5 5 5 5 3 3 3 5 5 . 
    . f 5 5 5 5 5 5 5 d d 3 3 3 5 . 
    . f 5 5 5 5 5 5 d d d d 3 5 5 . 
    . f 5 5 5 5 5 d d d d d 5 5 5 . 
    . f 5 5 5 5 d d d d d 5 5 5 5 . 
    . f 5 5 5 d d d d d 5 5 5 5 5 . 
    . f 5 5 d d d d d 5 5 5 5 5 5 . 
    . f 5 e d d d d 5 5 5 5 5 5 5 . 
    . f 5 e e d d 5 5 5 5 5 5 5 5 . 
    . f 5 f e e 5 5 5 5 5 5 5 5 5 . 
    . f 5 5 5 5 5 5 5 5 5 5 5 5 5 . 
    . f f f f f f f f f f f f f f . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.MainSystemFile)
mySprite3.setPosition(20, 57)
mySprite4 = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . f 1 1 1 1 1 1 1 1 1 1 1 1 1 . 
    . f 1 f f f f f f f f f f f 1 . 
    . f 1 f 2 2 2 2 2 2 2 2 2 f 1 . 
    . f 1 f 2 2 2 2 2 2 2 2 2 f 1 . 
    . f 1 f 2 2 2 2 2 2 2 2 2 f 1 . 
    . f 1 f 2 2 2 2 2 2 2 2 2 f 1 . 
    . f 1 f f f f f f f f f f f 1 . 
    . f 1 1 1 1 1 1 1 1 1 1 1 1 1 . 
    . f 1 f f f f f f f f f f f 1 . 
    . f 1 1 1 1 1 1 1 1 1 1 1 1 1 . 
    . f 1 f f f f f f f f 1 1 1 1 . 
    . f 1 1 1 1 1 1 1 1 1 1 f f 1 . 
    . f 1 1 1 1 1 1 1 1 1 1 1 1 1 . 
    . f f f f f f f f f f f f f f . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.MainSystemFile)
mySprite4.setPosition(20, 89)
personalization = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . f 1 1 1 1 1 1 1 1 1 1 1 1 1 . 
    . f 2 4 5 5 e e e e e e e e 1 . 
    . f 2 4 5 7 7 d d d d d d e 1 . 
    . f 2 4 5 7 6 6 3 3 3 3 d e 1 . 
    . f 2 4 5 7 6 8 8 c c 3 d e 1 . 
    . f 2 4 5 7 6 8 a a c 3 d e 1 . 
    . f 2 4 5 7 6 8 a a 8 3 d e 1 . 
    . f 2 4 5 7 6 8 8 8 8 6 d e 1 . 
    . f 2 4 5 7 6 6 6 6 6 6 7 e 1 . 
    . f 2 4 5 7 7 7 7 7 7 7 7 5 1 . 
    . f 2 4 5 5 5 5 5 5 5 5 5 5 1 . 
    . f 2 4 4 4 4 4 4 4 4 4 4 4 1 . 
    . f 2 2 2 2 2 2 2 2 2 2 2 2 1 . 
    . f f f f f f f f f f f f f f . 
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
        tiles.setCurrentTilemap(tilemap`level6`)
    }
})
