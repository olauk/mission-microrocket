// Vi programmerer fjernkontrollen til å sende 1 eller 0. Tallet 1 aktiverer logging. Tallet 0 avslutter logging.
radio.onReceivedNumber(function (receivedNumber) {
    aktiv = receivedNumber
    radio.sendNumber(aktiv)
    if (aktiv == 1) {
        led.plot(0, 0)
    } else {
        basic.clearScreen()
    }
})
let aktiv = 0
radio.setGroup(42)
input.setAccelerometerRange(AcceleratorRange.EightG)
datalogger.setColumnTitles("akselerasjon")
datalogger.includeTimestamp(FlashLogTimeStampFormat.Milliseconds)
aktiv = 0
basic.forever(function () {
	
})
loops.everyInterval(30, function () {
    if (aktiv == 1) {
        datalogger.log(datalogger.createCV("akselerasjon", input.acceleration(Dimension.Strength)))
    }
})
