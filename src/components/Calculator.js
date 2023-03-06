import React, { useState, useEffect, useRef } from "react";
import "../css/Calculator.css"




function Calculator () {
    const innerRef = useRef(null);
    // // All code here
    // // Convert sq ft to gallons of paint
     var gallonsOfPaint = 0;
     var squareFeet = 0;
    // // Paste source here
    var conversionRate = 350;

     function convertSquareFeetToGallons(squareFeet) {
        // 350 sq ft to 1 gallon of paint
        gallonsOfPaint = squareFeet / conversionRate;
        // Round number up to nearest whole number
        gallonsOfPaint = Math.ceil(gallonsOfPaint);

        return gallonsOfPaint;
    }

    // // Find and update number of gallons element with returned number
    function updateNumberOfGallonsUI(numberOfGallons) {
        // Find number of gallons element
        var numberOfGallonsElement = document.querySelector("[data-ui='numberOfGallons']");
        // Updating HTML with number of gallons
        numberOfGallonsElement.innerHTML = numberOfGallons;
    }

    // // Find and update square feet element with number from input
    function updateSquareFeetUI(numberOfSquareFeet) {
        // Find square feet element
        var squareFeetElement = document.querySelector("[data-ui='numberOfSquareFeet']");
        // Updating square feet number element with actual number from input
        squareFeetElement.innerHTML = numberOfSquareFeet;
    }

    // // Find square feet number
    //  var squareFeetElement = document.querySelector("#squareFeetNumber");

    // // Listen for input change
    // squareFeetElement.addEventListener("change", function (e) {
    //     // Grabbing number of square feet from event object
    //     var numberOfSquareFeet = e.target.value;
    //     // Converting square feet to number of gallons
    //     var numberOfGallons = convertSquareFeetToGallons(numberOfSquareFeet);

    //     // UPdating UI
    //     updateNumberOfGallonsUI(numberOfGallons);
    //     updateSquareFeetUI(numberOfSquareFeet);
    // });

    useEffect(() => {
        const div = innerRef.current;
        // subscribe event
        div.addEventListener("change",function (e) {
                // Grabbing number of square feet from event object
                var numberOfSquareFeet = e.target.value;
                // Converting square feet to number of gallons
                var numberOfGallons = convertSquareFeetToGallons(numberOfSquareFeet);
        
                // UPdating UI
                updateNumberOfGallonsUI(numberOfGallons);
                updateSquareFeetUI(numberOfSquareFeet);
            });
        // return () => {
        //   unsubscribe event
        //   div.removeEventListener("scroll", handleOnScroll);
        // };
      }, []);


    return (
        <div class="px-4 py-5 px-md-5 text-center text-lg-start background" >
            <div class="container">
                <div class="row gx-lg-5 align-items-center">
                    <div class="col-lg-6 mb-5 mb-lg-0">
                        <h1 class="my-5 display-3 fw-bold ls-tight">
                            Morya Paint Shop <br />
                            <span class="text-primary">Paint Calculator</span>
                        </h1>
                        <h5><p>
                            The paint calculator is intended to provide the user with the approximate amount of product needed for a project. Product requirements will vary according to factors such as application method and surface condition.
                        </p></h5>
                    </div>
                    <div class="col-lg-6 mb-5 mb-lg-0">
                        <div class="card">
                            <div class="card-body py-5 px-md-5">
                                <div class="container">
                                    <label>
                                        <h1><span class="input__question">How many square feet is the space?</span></h1>
                                        <hr />
                                        <div class="container">
                                            <input type="text" ref={innerRef}/>
                                            <br />
                                        </div>
                                    </label>
                                    <br />
                                    <h3 class="input__answer" >

                                        You will need to purchase
                                        <span data-ui="numberOfGallons"> 0 </span>
                                        liters of paint to cover <span data-ui="numberOfSquareFeet"> 0 square
                                            feet.</span>
                                    </h3>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Calculator;

