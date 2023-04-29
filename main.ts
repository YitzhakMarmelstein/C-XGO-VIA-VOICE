basic.showString("XGO")
basic.showLeds(`
    . . . . .
    # . . . #
    # # # # #
    # . . . #
    . . . . .
    `)
xgo.init_xgo_serial(SerialPin.P2, SerialPin.P1)
basic.forever(function () {
    if (input.soundLevel() < 30) {
        xgo.execution_action(xgo.action_enum.Squat)
    } else if (input.soundLevel() > 30 && input.soundLevel() < 60) {
        xgo.execution_action(xgo.action_enum.Sit_down)
    } else if (input.soundLevel() > 60 && input.soundLevel() < 90) {
        xgo.execution_action(xgo.action_enum.Go_prone)
    } else if (input.soundLevel() > 90 && input.soundLevel() < 120) {
        xgo.execution_action(xgo.action_enum.Looking_for_food)
    } else if (input.soundLevel() > 120 && input.soundLevel() < 150) {
        xgo.execution_action(xgo.action_enum.Wave)
    } else if (input.soundLevel() > 150 && input.soundLevel() < 180) {
        xgo.execution_action(xgo.action_enum.Play_pendulum)
    }
})
