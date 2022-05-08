const $ = document.querySelector.bind(document);

// DOM-referanser for input-felter
const boligpris = $('#boligpris');
const gjeld = $('#gjeld');
const egenkapital = $('#egenkapital');
const lonn = $('#lonn');

// DOM-referanser for sliders
const slider_boligpris = $('#slider_boligpris');
const slide_boligprisValue = $('#slide_boligpris.value');
const slider_egenkapital = $('#slider_egenkapital');
const slider_gjeld = $('#slider_gjeld');


let sliders = document.querySelectorAll('.slider');
// kjor function ved input for all slider's
// vis utregning for lanebelop ved justering av sliders
sliders.forEach(function (all) {
    all.addEventListener('input', function () {

        gjeld.value = slider_gjeld.value;
        const gjeldX = gjeld.value;
     
        lonn.value = slider_lonn.value;
        const lonnX = lonn.value;
        

        // utregning lånetilbud, inntekt x 5 minus gjeld.
        function x(lonnX, gjeldX) {
            return (lonnX * 5) - gjeldX;
        }
        // utregning i innerHTML 
        $('.laneBelop').innerHTML = x(lonnX, gjeldX);
        
    })
});


// vis utregning lånebeløp i innerHTML v/ input av tall
let inpNumbers = document.querySelectorAll('.inpNumber');
// kjor function ved input for all slider's
inpNumbers.forEach(function (all) {
    all.addEventListener('input', function () {

       
        const gjeldX = gjeld.value;
        const lonnX = lonn.value;
        

        // utregning lånetilbud, inntekt x 5 minus gjeld.
        function x(lonnX, gjeldX) {
            return (lonnX * 5) - gjeldX;
        }
        // utregning i innerHTML 
        $('.laneBelop').innerHTML = x(lonnX, gjeldX);
        
    })
});


// Vis utregning av lånebehov (totalpris minus egenkapital) trigges av input number. 

inpNumbers.forEach(function(all) {
    all.addEventListener('input', function () {
        const totalprisX = boligpris.value;
      

        const egenkapitalX = egenkapital.value;
       

        // vis lånetilbud 
        function y(totalprisX, egenkapitalX){
            return (totalprisX - egenkapitalX);
        }

        // utregning i innerHTML 
        $('.laneBehov').innerHTML = y(totalprisX, egenkapitalX);


    })
});

// slider for kun total pris og egenkapital, egne funksjoner



let slidersY = document.querySelectorAll('.sliderY');
// kjor function ved input for all slider's
// vis utregning for lanebelop ved justering av sliders
slidersY.forEach(function (all) {
    all.addEventListener('input', function () {

        // slider input set = input number 
        boligpris.value = slider_boligpris.value;
        egenkapital.value = slider_egenkapital.value;

         // vis lånetilbud 
            const totalprisX = boligpris.value;
            const egenkapitalX = egenkapital.value;

         function y(totalprisX, egenkapitalX){
            return (totalprisX - egenkapitalX);
        }

        // utregning i innerHTML 
        $('.laneBehov').innerHTML = y(totalprisX, egenkapitalX);
  
        
    })
});

