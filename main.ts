let y = 0
basic.forever(function () {
    y = 4
    for (let index = 0; index < 5; index++) {
        led.plot(4, y)
        basic.pause(100)
        y += -1
        basic.pause(100)
    }
    y = 0
    for (let index = 0; index < 5; index++) {
        led.plot(3, y)
        basic.pause(100)
        y += 1
        basic.pause(100)
    }
    y = 4
    for (let index = 0; index < 5; index++) {
        led.plot(2, y)
        basic.pause(100)
        y += -1
        basic.pause(100)
    }
    y = 0
    for (let index = 0; index < 5; index++) {
        led.plot(1, y)
        basic.pause(100)
        y += 1
        basic.pause(100)
    }
    y = 4
    for (let index = 0; index < 5; index++) {
        led.plot(0, y)
        basic.pause(100)
        y += -1
        basic.pause(100)
    }
    basic.clearScreen()
})
