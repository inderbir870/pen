input.onPinReleased(TouchPin.P2, function () {
    turtle.back(1)
})
input.onButtonPressed(Button.A, function () {
    turtle.turnLeft()
})
input.onSound(DetectedSound.Loud, function () {
    power.lowPowerRequest(LowPowerMode.Continue)
})
input.onButtonPressed(Button.B, function () {
    turtle.turnRight()
})
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    turtle.forward(1)
})
input.setSoundThreshold(SoundThreshold.Loud, 128)
turtle.pen(TurtlePenMode.Down)
