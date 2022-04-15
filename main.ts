basic.forever(function () {
    while (input.buttonIsPressed(Button.A)) {
        for (let index = 0; index < 4; index++) {
            basic.showIcon(IconNames.Heart)
            basic.pause(100)
            basic.showIcon(IconNames.SmallHeart)
        }
        basic.showNumber(randint(0, 9))
        basic.pause(2000)
        basic.clearScreen()
    }
    basic.pause(50)
    basic.showLeds(`
        . . # . .
        . # . . .
        # # # # #
        . # . . .
        . . # . .
        `)
})
