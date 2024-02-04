input.onButtonPressed(Button.A, function () {
    basic.showString("JOHAN")
    basic.showIcon(IconNames.Heart)
    basic.showLeds(`
        . # . # .
        # # # # #
        # # # # #
        . # # # .
        . . # . .
        `)
    music.playMelody("C5 B A G F E D C ", 129)
})
basic.forever(function () {
	
})
