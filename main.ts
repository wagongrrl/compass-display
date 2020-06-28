let heading = 0
basic.forever(function () {
    heading = input.compassHeading()
    if (heading > 315 || heading < 45) {
        basic.showString("N")
    } else if (heading < 135) {
        basic.showString("E")
    } else if (heading < 225) {
        basic.showString("S")
    } else {
        basic.showString("W")
    }
})
