// Created by: Marshall
// Created on: Mar 2022
// This file contains the JS functions for index.html

'use strict'
/**
 * This function calculates area of a rhombus.
 */
function calculate () {
  // input
  const base = parseInt(document.getElementById('base-of-rhombus').value)
  const height = parseInt(document.getElementById('height-of-rhombus').value)

  // process
  const area = base * height

   // output
  document.getElementById('area').innerHTML = 'The area of this rhombus is: ' + area.toFixed(2) + ' cm²'
}