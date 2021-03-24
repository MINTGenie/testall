function set_grab_pos (num: number, grab: boolean) {
    while (num != grab_angle) {
        if (grab) {
            grab_angle += 5
            maqueen.servoRun(maqueen.Servos.S2, grab_angle)
            serial.writeValue("grab s1", grab_angle)
            if (grab_angle >= num) {
                break;
            }
            basic.pause(50)
        } else {
            grab_angle += -5
            maqueen.servoRun(maqueen.Servos.S2, grab_angle)
            if (grab_angle <= num) {
                break;
            }
            basic.pause(50)
        }
    }
}
function set_lift_pos (num: number, lift: boolean) {
    while (num != lift_angle) {
        if (lift) {
            lift_angle += -2
            maqueen.servoRun(maqueen.Servos.S1, lift_angle)
            if (lift_angle <= num) {
                break;
            }
            basic.pause(30)
        } else {
            lift_angle += 2
            maqueen.servoRun(maqueen.Servos.S1, lift_angle)
            if (lift_angle >= num) {
                break;
            }
            basic.pause(30)
        }
    }
}
function lift_gripper_test () {
    set_grab_pos(15, false)
    basic.pause(1000)
    set_lift_pos(40, true)
    basic.pause(1000)
    set_grab_pos(75, true)
    basic.pause(1000)
    set_lift_pos(100, false)
    basic.pause(1000)
}
function color_finder (r: number, g: number, b: number): any {
    serial.writeNumbers([OrientBit.getRed(), OrientBit.getGreen(), OrientBit.getBlue()])
    serial.writeString("" + (color_finder(OrientBit.getRed(), OrientBit.getGreen(), OrientBit.getBlue())))
    if (b > 110 && (r < 95 && g < 95)) {
        colName = "Blue"
    } else if (r > 110 && (b < 95 && g < 95)) {
        colName = "Red"
    } else if (g > 110 && (r < 95 && b < 95)) {
        colName = "Green"
    } else if (r > 120 && (g > 90 && b > 60)) {
        colName = "Yellow"
    } else {
        colName = "Unknown"
    }
    return colName
}
let colName = ""
let lift_angle = 0
let grab_angle = 0
grab_angle = 75
lift_angle = 100
basic.forever(function () {
	
})
