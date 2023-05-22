// from file
import { colorCode } from './Leaflet_LayerColorCode';


export const Leaflet_OriginalColorSettings = (item, category, isHovering) => {

  // none
  if (category === '' || category === "none") {
    if (isHovering)
      return colorCode.grey.original;
    else
      return colorCode.grey.original;
  }


  // primaryNumOfSchools
  else if (category === 'primaryNumOfSchools') {

    if (isHovering)
      return colorCode.green.hover;
    else if (item.primaryNumOfSchools >= 0 && item.primaryNumOfSchools <= 1)
      return colorCode.green.c100;
    else if (item.primaryNumOfSchools > 1 && item.primaryNumOfSchools <= 2)
      return colorCode.green.c200;
    else if (item.primaryNumOfSchools > 2 && item.primaryNumOfSchools <= 4)
      return colorCode.green.c300;
    else if (item.primaryNumOfSchools > 4 && item.primaryNumOfSchools <= 8)
      return colorCode.green.c400;
    else if (item.primaryNumOfSchools > 8 && item.primaryNumOfSchools <= 16)
      return colorCode.green.c500;
    else if (item.primaryNumOfSchools > 16)
      return colorCode.green.c600;
    else
      return colorCode.grey.inactive;
  }
  // primaryNumOfGrads
  else if (category === 'primaryNumOfGrads') {

    if (isHovering)
      return colorCode.red.hover;
    else if (item.primaryNumOfGrads >= 0 && item.primaryNumOfGrads <= 200)
      return colorCode.red.c100;
    else if (item.primaryNumOfGrads > 200 && item.primaryNumOfGrads <= 400)
      return colorCode.red.c200;
    else if (item.primaryNumOfGrads > 400 && item.primaryNumOfGrads <= 800)
      return colorCode.red.c300;
    else if (item.primaryNumOfGrads > 800 && item.primaryNumOfGrads <= 1600)
      return colorCode.red.c400;
    else if (item.primaryNumOfGrads > 1600 && item.primaryNumOfGrads <= 3200)
      return colorCode.red.c500;
    else if (item.primaryNumOfGrads > 3200)
      return colorCode.red.c600;
    else
      return colorCode.grey.inactive;
  }
  // primaryNumOfStds
  else if (category === 'primaryNumOfStds') {
    if (isHovering)
      return colorCode.blue.hover;
    else if (item.primaryNumOfStds >= 0 && item.primaryNumOfStds <= 50)
      return colorCode.blue.c100;
    else if (item.primaryNumOfStds > 50 && item.primaryNumOfStds <= 100)
      return colorCode.blue.c200;
    else if (item.primaryNumOfStds > 100 && item.primaryNumOfStds <= 200)
      return colorCode.blue.c300;
    else if (item.primaryNumOfStds > 200 && item.primaryNumOfStds <= 400)
      return colorCode.blue.c400;
    else if (item.primaryNumOfStds > 400 && item.primaryNumOfStds <= 800)
      return colorCode.blue.c500;
    else if (item.primaryNumOfStds > 800)
      return colorCode.blue.c600;
    else
      return colorCode.grey.inactive;
  }
  // primaryNumOfStaff
  else if (category === 'primaryNumOfStaff') {
    if (isHovering)
      return colorCode.purple.hover;
    else if (item.primaryNumOfStaff >= 0 && item.primaryNumOfStaff <= 10)
      return colorCode.purple.c100;
    else if (item.primaryNumOfStaff > 10 && item.primaryNumOfStaff <= 20)
      return colorCode.purple.c200;
    else if (item.primaryNumOfStaff > 20 && item.primaryNumOfStaff <= 40)
      return colorCode.purple.c300;
    else if (item.primaryNumOfStaff > 40 && item.primaryNumOfStaff <= 60)
      return colorCode.purple.c400;
    else if (item.primaryNumOfStaff > 60 && item.primaryNumOfStaff <= 120)
      return colorCode.purple.c500;
    else if (item.primaryNumOfStaff > 120)
      return colorCode.purple.c600;
    else
      return colorCode.grey.inactive;
  }
  // Annual Expense
  else if (category === 'primaryAnnualExpense') {
    if (isHovering)
      return colorCode.orange.hover;
    else if (item.primaryAnnualExpense >= 0 && item.primaryAnnualExpense <= 6000)
      return colorCode.orange.c100;
    else if (item.primaryAnnualExpense > 6000 && item.primaryAnnualExpense <= 12000)
      return colorCode.orange.c200;
    else if (item.primaryAnnualExpense > 12000 && item.primaryAnnualExpense <= 24000)
      return colorCode.orange.c300;
    else if (item.primaryAnnualExpense > 24000 && item.primaryAnnualExpense <= 48000)
      return colorCode.orange.c400;
    else if (item.primaryAnnualExpense > 48000 && item.primaryAnnualExpense <= 96000)
      return colorCode.orange.c500;
    else if (item.primaryAnnualExpense > 96000)
      return colorCode.orange.c600;
    else
      return colorCode.grey.inactive;
  }

  // secondaryNumOfGrads
  else if (category === 'secondaryNumOfGrads' || category === 'tertiaryNumOfGrads') {
    if (isHovering)
      return colorCode.green.hover;
    else if ((item.secondaryNumOfGrads >= 0 && item.secondaryNumOfGrads <= 50) || (item.tertiaryNumOfGrads >= 0 && item.tertiaryNumOfGrads <= 50))
      return colorCode.green.c100;
    else if ((item.secondaryNumOfGrads > 50 && item.secondaryNumOfGrads <= 100) || (item.tertiaryNumOfGrads >= 50 && item.tertiaryNumOfGrads <= 100))
      return colorCode.green.c200;
    else if ((item.secondaryNumOfGrads > 100 && item.secondaryNumOfGrads <= 200) || (item.tertiaryNumOfGrads >= 100 && item.tertiaryNumOfGrads <= 200))
      return colorCode.green.c300;
    else if ((item.secondaryNumOfGrads > 200 && item.secondaryNumOfGrads <= 400) || (item.tertiaryNumOfGrads >= 200 && item.tertiaryNumOfGrads <= 400))
      return colorCode.green.c400;
    else if ((item.secondaryNumOfGrads > 400 && item.secondaryNumOfGrads <= 800) || (item.tertiaryNumOfGrads >= 400 && item.tertiaryNumOfGrads <= 800))
      return colorCode.green.c500;
    else if (item.secondaryNumOfGrads > 800 || item.secondaryNumOfGrads > 800)
      return colorCode.green.c600;
    else
      return colorCode.grey.inactive;
  }

  // secondaryNumOfStds
  else if (category === 'secondaryNumOfStds' || category === 'tertiaryNumOfStds') {
    if (isHovering)
      return colorCode.blue.hover;
    else if ((item.secondaryNumOfStds >= 0 && item.secondaryNumOfStds <= 50) || (item.tertiaryNumOfStds >= 0 && item.tertiaryNumOfStds <= 50))
      return colorCode.blue.c100;
    else if ((item.secondaryNumOfStds > 50 && item.secondaryNumOfStds <= 100) || (item.tertiaryNumOfStds >= 50 && item.tertiaryNumOfStds <= 100))
      return colorCode.blue.c200;
    else if ((item.secondaryNumOfStds > 100 && item.secondaryNumOfStds <= 200) || (item.tertiaryNumOfStds >= 100 && item.tertiaryNumOfStds <= 200))
      return colorCode.blue.c300;
    else if ((item.secondaryNumOfStds > 200 && item.secondaryNumOfStds <= 400) || (item.tertiaryNumOfStds >= 200 && item.tertiaryNumOfStds <= 400))
      return colorCode.blue.c400;
    else if ((item.secondaryNumOfStds > 400 && item.secondaryNumOfStds <= 800) || (item.tertiaryNumOfStds >= 400 && item.tertiaryNumOfStds <= 800))
      return colorCode.blue.c500;
    else if (item.secondaryNumOfStds > 800 || item.secondaryNumOfStds > 800)
      return colorCode.blue.c600;
    else
      return colorCode.grey.inactive;
  }


  // secondaryNumOfStaff
  else if (category === 'secondaryNumOfStaff' || category === 'tertiaryNumOfStaff') {
    if (isHovering)
      return colorCode.purple.hover;
    else if ((item.secondaryNumOfStaff >= 0 && item.secondaryNumOfStaff <= 10) || (item.tertiaryNumOfStaff >= 0 && item.tertiaryNumOfStaff <= 5))
      return colorCode.purple.c100;
    else if ((item.secondaryNumOfStaff > 10 && item.secondaryNumOfStaff <= 10) || (item.tertiaryNumOfStaff >= 5 && item.tertiaryNumOfStaff <= 10))
      return colorCode.purple.c200;
    else if ((item.secondaryNumOfStaff > 20 && item.secondaryNumOfStaff <= 20) || (item.tertiaryNumOfStaff >= 10 && item.tertiaryNumOfStaff <= 20))
      return colorCode.purple.c300;
    else if ((item.secondaryNumOfStaff > 40 && item.secondaryNumOfStaff <= 80) || (item.tertiaryNumOfStaff >= 20 && item.tertiaryNumOfStaff <= 40))
      return colorCode.purple.c400;
    else if ((item.secondaryNumOfStaff > 80 && item.secondaryNumOfStaff <= 160) || (item.tertiaryNumOfStaff >= 40 && item.tertiaryNumOfStaff <= 80))
      return colorCode.purple.c500;
    else if (item.secondaryNumOfStaff > 160 || item.secondaryNumOfStaff > 160)
      return colorCode.purple.c600;
    else
      return colorCode.grey.inactive;
  }
  // secondaryAnnualExpense
  else if (category === 'secondaryAnnualExpense' || category === 'tertiaryAnnualExpense') {
    if (isHovering)
      return colorCode.orange.hover;
    else if ((item.secondaryAnnualExpense >= 0 && item.secondaryAnnualExpense <= 10000) || (item.tertiaryAnnualExpense >= 0 && item.tertiaryAnnualExpense <= 10000))
      return colorCode.orange.c100;
    else if ((item.secondaryAnnualExpense > 10000 && item.secondaryAnnualExpense <= 20000) || (item.tertiaryAnnualExpense >= 10000 && item.tertiaryAnnualExpense <= 20000))
      return colorCode.orange.c200;
    else if ((item.secondaryAnnualExpense > 20000 && item.secondaryAnnualExpense <= 40000) || (item.tertiaryAnnualExpense >= 20000 && item.tertiaryAnnualExpense <= 40000))
      return colorCode.orange.c300;
    else if ((item.secondaryAnnualExpense > 40000 && item.secondaryAnnualExpense <= 80000) || (item.tertiaryAnnualExpense >= 40000 && item.tertiaryAnnualExpense <= 80000))
      return colorCode.orange.c400;
    else if ((item.secondaryAnnualExpense > 80000 && item.secondaryAnnualExpense <= 160000) || (item.tertiaryAnnualExpense >= 80000 && tertiaryAnnualExpense <= 16000))
      return colorCode.orange.c500;
    else if (item.secondaryAnnualExpense > 160000 || item.secondaryAnnualExpense > 80 || item.tertiaryAnnualExpense > 160000)
      return colorCode.orange.c600;
    else
      return colorCode.grey.inactive;
  }
}






