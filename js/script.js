// Copyright (c) 2022 ZoiaB All rights reserved
//
// Created by: ZoiaB
// Created on: Apr 2022
// This file contains the JS functions for index.html

"use strict"

function radiusCalculate() {
  let radiusSphere = parseFloat(document.getElementById("radius").value);
  const pi = Math.PI;
  let volume = radiusSphere ** 3 * pi * 4 / 3;
  document.getElementById("results").innerHTML = "The volume of the sphere is " + volume.toFixed(2) + "cm<sup>3</sup>.";
}