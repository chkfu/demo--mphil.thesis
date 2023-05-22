// from package
import React from 'react';

// function
function TitleDetector(input) {
  if (input === "primaryNumOfSchools")
    return "Number of Regional Constable Schools";
  if (input === "primaryNumOfGrads")
    return "Number of Regional Constables School Graduates";
  if (input === "primaryNumOfStds")
    return "Number of Regional Constables School Students";
  if (input === "primaryNumOfStaff")
    return "Number of Regional Constables School Staff";
  if (input === "primaryAnnualExpense")
    return "Annual Expense of Regional Constable Schools ";
  if (input === "secondaryNumOfGrads")
    return "Number of Regional Police Academy Graduates";
  if (input === "secondaryNumOfStds")
    return "Number of Regional Police Academy Students";
  if (input === "secondaryNumOfStaff")
    return "Number of Regional Police Academy Staff ";
  if (input === "secondaryAnnualExpense")
    return "Annual Expense of Regional Police Academy ";
  else
    return "Please Arrange Filter For Data Analysis";
}

export default TitleDetector;
