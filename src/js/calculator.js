// (function () {
//     // All code here
//     // Convert sq ft to gallons of paint
//     var gallonsOfPaint = 0;
//     var squareFeet = 0;
//     // Paste source here
//     var conversionRate = 350;

//     function convertSquareFeetToGallons(squareFeet) {
//         // 350 sq ft to 1 gallon of paint
//         gallonsOfPaint = squareFeet / conversionRate;
//         // Round number up to nearest whole number
//         gallonsOfPaint = Math.ceil(gallonsOfPaint);

//         return gallonsOfPaint;
//     }

//     // Find and update number of gallons element with returned number
//     function updateNumberOfGallonsUI(numberOfGallons) {
//         // Find number of gallons element
//         var numberOfGallonsElement = document.querySelector("[data-ui='numberOfGallons']");
//         // Updating HTML with number of gallons
//         numberOfGallonsElement.innerHTML = numberOfGallons;
//     }

//     // Find and update square feet element with number from input
//     function updateSquareFeetUI(numberOfSquareFeet) {
//         // Find square feet element
//         var squareFeetElement = document.querySelector("[data-ui='numberOfSquareFeet']");
//         // Updating square feet number element with actual number from input
//         squareFeetElement.innerHTML = numberOfSquareFeet;
//     }

//     // Find square feet number
//     var squareFeetElement = document.querySelector("[data-ui='squareFeetNumber']");

//     // Listen for input change
//     squareFeetElement.addEventListener("change", function (e) {
//         // Grabbing number of square feet from event object
//         var numberOfSquareFeet = e.target.value;
//         // Converting square feet to number of gallons
//         var numberOfGallons = convertSquareFeetToGallons(numberOfSquareFeet);

//         // UPdating UI
//         updateNumberOfGallonsUI(numberOfGallons);
//         updateSquareFeetUI(numberOfSquareFeet);
//     });

// })();