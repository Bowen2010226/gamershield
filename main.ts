enum buttons {
    //% block="A"
    a = 2,
    //% block="B"
    b = 148,
    //% block="C"
    c = 297,
    //% block="D"
    d = 489,
    //% block="E"
    e = 735
}

enum vr {
    //% block="X"
    x = 0,
    //% block="Y"
    y = 1
}

enum doj {
    //% block="up"
    u = 0,
    //% block="down"
    d = 1,
    //% block="left"
    l = 2,
    //% block="right"
    r = 3
}
//% weight=100 color=#0000FF icon="✚"
namespace 游戏手柄 {
    //% block="Button %buttons|Pressed?"
    export function buttonPressed(but: buttons): boolean {
        if (Math.abs(pins.analogReadPin(AnalogPin.P2) - but) <= 5 ) {
            
            return true
        } else {
            return false
        }
    }

    //% block="Joystick %vr|Value"
    export function vrvalue(vrv: vr): number {
        if (vrv == 0) {
            return pins.analogReadPin(AnalogPin.P0)
        } else {
            return pins.analogReadPin(AnalogPin.P1)
        }
    }

    //% block="Joystick pointed %doj|?"
    export function jpd(dojo: doj): boolean {
        if(dojo == 0){
            if(游戏手柄.vrvalue(vr.y) > 800){
                return true
            } else {
                return false
            }
        } else if(dojo == 1){
            if(游戏手柄.vrvalue(vr.y) < 200){
                return true
            } else {
                return false
            }
        } else if(dojo == 2){
            if(游戏手柄.vrvalue(vr.x) < 200){
                return true
            } else {
                return false
            }
        } else {
            if(游戏手柄.vrvalue(vr.x) > 800){
                return true
            } else {
                return false
            }
        }
    }
}
