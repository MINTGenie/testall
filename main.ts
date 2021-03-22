function set_lift_pos (num: number, lift: boolean) {
    while (num != lift_angle) {
        if (lift) {
            lift_angle += -2
            maqueen.servoRun(maqueen.Servos.S2, lift_angle)
            if (lift_angle <= num) {
                break;
            }
            basic.pause(50)
        } else {
            lift_angle += 2
            maqueen.servoRun(maqueen.Servos.S2, lift_angle)
            if (lift_angle >= num) {
                break;
            }
            basic.pause(50)
        }
    }
}
function set_grab_pos (num: number, grab: boolean) {
    while (num != grab_angle) {
        if (grab) {
            grab_angle += 2
            maqueen.servoRun(maqueen.Servos.S1, grab_angle)
            serial.writeValue("grab s1", grab_angle)
            if (grab_angle >= num) {
                break;
            }
            basic.pause(50)
        } else {
            grab_angle += -2
            maqueen.servoRun(maqueen.Servos.S1, grab_angle)
            if (grab_angle <= num) {
                break;
            }
            basic.pause(50)
        }
    }
}
let lift_angle = 0
let grab_angle = 0
grab_angle = 100
lift_angle = 100
basic.forever(function () {
    set_grab_pos(40, false)
    basic.pause(1000)
    set_lift_pos(40, true)
    basic.pause(1000)
    set_grab_pos(100, true)
    basic.pause(1000)
    set_lift_pos(100, false)
    basic.pause(1000)
})
