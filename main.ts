/* Copyright (c) 2020 MTHS All rights reserved
 *
 * Created by: Maria
 * Created on: Sep 2024
 * This program says the temperature in kelvin
*/

// our value for a temperature
let temperatureCelcius: number
let temperatureKelvin: number

basic.clearScreen()
basic.showIcon(IconNames.Happy)

input.onButtonPressed(Button.A, function () {
    // get temperature
    temperatureCelcius = input.temperature()
    temperatureKelvin = temperatureCelcius + 273.15
    temperatureKelvin = Math.round(temperatureKelvin)

    // output answer
    basic.clearScreen()
    basic.showString('The temperature is: ' + temperatureKelvin.toString() + ' K.')
})
