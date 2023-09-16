// from package
import React from 'react';
// from file
import { colorCode } from './../../../../../components/Maps/StatisticMap/Leaflet_LayerColorCode';

// function
export const BarItemColorMatcher = (input) => {
  if (input === "primaryNumOfSchools")
    return colorCode.green.c100;
  if (input === "primaryNumOfGrads" || input === "secondaryNumOfGrads")
    return colorCode.red.c100;
  if (input === "primaryNumOfStds" || input === "secondaryNumOfStds")
    return colorCode.blue.c100;
  if (input === "primaryNumOfStaff" || input === "secondaryNumOfStaff")
    return colorCode.purple.c100;
  if (input === "primaryAnnualExpense" || input === "secondaryAnnualExpense")
    return colorCode.orange.c100;
  else return;
};
