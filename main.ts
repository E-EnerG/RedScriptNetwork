namespace SpriteKind {
    export const MainSystemFile = SpriteKind.create()
}
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile0`, function (sprite, location) {
    if (dothis == 2) {
        if (controller.B.isPressed()) {
            blockSettings.writeString("SettingQuery", game.askForString("Insert Setting Name", 24))
            if (blockSettings.exists(blockSettings.readString("SettingQuery"))) {
                game.splash(blockSettings.readString(blockSettings.readString("SettingQuery")))
            } else {
                game.splash("Error 404 - File not Found")
            }
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
    } else if (text == "3") {
        mySprite = sprites.create(img`
            . . . . . . . . . . . . . . . . 
            . 4 4 4 4 7 7 7 7 a a a a . . . 
            . 5 5 5 5 5 5 5 5 5 5 5 5 5 5 . 
            . 5 f 5 f 5 5 5 5 5 5 5 5 5 5 . 
            . 5 f 5 f 5 f 5 5 5 5 5 5 5 5 . 
            . 5 f 5 f 5 f 5 5 5 5 5 5 5 5 . 
            . 5 f 5 f 5 f 5 5 5 5 5 5 5 5 . 
            . 5 f 5 f 5 f 5 5 5 5 5 5 5 5 . 
            . 5 f 5 f 5 f 5 5 5 5 5 5 5 5 . 
            . 5 f 5 f 5 f 5 5 5 5 5 5 5 5 . 
            . 5 f 5 f 5 f 5 5 5 5 5 5 5 5 . 
            . 5 f 5 f 5 f 5 5 5 5 5 5 5 5 . 
            . 5 f 5 f 5 5 5 5 5 5 5 5 5 5 . 
            . 5 5 5 5 5 5 5 5 5 5 5 5 5 5 . 
            . . 5 5 5 5 5 5 5 5 5 5 5 5 . . 
            . . . . . . . . . . . . . . . . 
            `, SpriteKind.MainSystemFile)
        mySprite.setPosition(20, 25)
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
        mySprite.z = -15
        mySprite3.z = -15
        mySprite4.z = -15
        personalization.z = -15
    } else if (text == "4") {
        tiles.setCurrentTilemap(tilemap`level4`)
        scene.setBackgroundColor(6)
    } else if (text == "5") {
        textSprite = textsprite.create("Volume - " + convertToText(Volume) + "", 1, 15)
        textSprite.setBorder(2, 1, 0)
        textSprite.setPosition(30, 115)
    } else if (text == "6") {
        Volume = 50
        BrightnessWhite = 255
        BrightnessBlack = 0
        dothis = 0
    } else if (text == "7") {
        mySprite2 = sprites.create(img`
            f f f . . . . 
            f 1 f f . . . 
            f 1 1 f f . . 
            f 1 1 1 f f . 
            f 1 1 1 1 f f 
            f 1 1 1 1 1 f 
            f f f f f f f 
            `, SpriteKind.Player)
        controller.moveSprite(mySprite2)
        mySprite2.z = 55
    }
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.MainSystemFile, function (sprite, otherSprite) {
    sprite.setImage(img`
        f f f f f f f 
        f 1 1 1 1 1 f 
        f 1 1 1 1 1 f 
        f 1 1 1 1 1 f 
        f 1 1 1 1 1 f 
        f 1 1 1 1 1 f 
        f f f f f f f 
        `)
    if (controller.B.isPressed()) {
        if (otherSprite == mySprite) {
            dothis = 2
            tiles.setCurrentTilemap(tilemap`level13`)
        } else if (otherSprite == mySprite3) {
            game.showLongText("0.1.0 - Revamped the User Interface", DialogLayout.Center)
        } else if (otherSprite == mySprite4) {
            game.showLongText("RedScript Base - Version 0.1.0", DialogLayout.Center)
        } else if (otherSprite == personalization) {
            dothis = 4
            tiles.setCurrentTilemap(tilemap`level6`)
        }
    }
    if (controller.A.isPressed()) {
        dothis = 0
    }
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile`, function (sprite, location) {
    sprite.setImage(img`
        f f f . . . . 
        f 1 f f . . . 
        f 1 1 f f . . 
        f 1 1 1 f f . 
        f 1 1 1 1 f f 
        f 1 1 1 1 1 f 
        f f f f f f f 
        `)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile7`, function (sprite, location) {
    if (dothis == 2) {
        if (controller.B.isPressed()) {
            game.splash("Total System Storage :", mainstorage)
        }
    }
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile4`, function (sprite, location) {
    if (dothis == 2) {
        if (controller.B.isPressed()) {
            Create_Setting = game.askForString("Insert Setting Name")
            Setting_Details = game.askForString("Insert Setting Info")
            blockSettings.writeString(Create_Setting, Setting_Details)
        }
    }
})
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    if (dothis2 == 6) {
        Volume += -1
    }
})
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    if (dothis2 == 6) {
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
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile5`, function (sprite, location) {
    if (dothis == 2) {
        if (controller.B.isPressed()) {
            Remove_Setting = game.askForString("Insert Setting Name")
            blockSettings.remove(Remove_Setting)
        }
    }
})
controller.menu.onEvent(ControllerButtonEvent.Pressed, function () {
    dothis = 0
    dothis2 = 0
})
function CreateFiles () {
    Create_file("1")
    Create_file("2")
    Create_file("3")
    Create_file("4")
    Create_file("5")
    Create_file("6")
    Create_file("7")
}
let Remove_Setting = ""
let dothis2 = 0
let Setting_Details = ""
let Create_Setting = ""
let mySprite2: Sprite = null
let BrightnessBlack = 0
let BrightnessWhite = 0
let Volume = 0
let textSprite: TextSprite = null
let personalization: Sprite = null
let mySprite4: Sprite = null
let mySprite3: Sprite = null
let mySprite: Sprite = null
let currentsessionstorageapps = 0
let mainstorage = 0
let currentsessionstoragecboy = 0
let dothis = 0
CreateFiles()
game.onUpdate(function () {
    let currentsessionstorageuser = 0
    console.logValue("Total Settings", blockSettings.readNumber("main.setting.storage"))
    console.logValue("Total Settings (in Cboy)", blockSettings.readNumber("cboy.setting.storage"))
    console.logValue("Total Settings (in User)", blockSettings.readNumber("user.setting.storage"))
    console.logValue("Total Settings (in Apps)", blockSettings.readNumber("apps.setting.storage"))
    blockSettings.writeNumber("main.setting.storage", mainstorage)
    blockSettings.writeNumber("cboy.setting.storage", currentsessionstoragecboy)
    blockSettings.writeNumber("user.setting.storage", currentsessionstorageuser)
    blockSettings.writeNumber("apps.setting.storage", currentsessionstorageapps)
})
game.onUpdate(function () {
    mainstorage = blockSettings.list().length
})
forever(function () {
    if (dothis == 0) {
        tiles.setCurrentTilemap(tilemap`level4`)
    } else if (dothis == 1) {
        tiles.setCurrentTilemap(tilemap`level13`)
    }
})
forever(function () {
    mySprite.sayText("Files")
    mySprite3.sayText("Devlog")
    mySprite4.sayText("About")
    personalization.sayText("Settings")
})
forever(function () {
    textSprite.setText("Volume - " + convertToText(Volume))
    music.setVolume(Volume)
})
