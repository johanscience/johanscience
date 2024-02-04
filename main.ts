input.onButtonPressed(Button.B, function () {
    basic.showString("JOHAN")
    basic.showIcon(IconNames.Square)
    basic.showLeds(`
        . # . # .
        # # # # #
        # # # # #
        . # # # .
        . . # . .
        `)
    music.playMelody("C5 B A G F E D C ", 129)
})
basic.showLeds(`
    . . . . .
    . . . . .
    . . . . .
    . . . . .
    . . . . .
    `)
basic.showLeds(`
    # . # # #
    . # . . .
    . # . # .
    # . . . .
    # # # . .
    `)
basic.forever(function () {
	
})
