function columna_led (temps: number) {
    for (let index2 = 0; index2 <= 4; index2++) {
        for (let index = 0; index <= 4; index++) {
            led.toggle(index2, index)
        }
        basic.pause(temps)
    }
}
basic.forever(function () {
    columna_led(1000)
})
