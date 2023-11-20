// Name:Mohamed Ahmed
//File: Assignment4a.html
//Date: 11 November 2023
 //Assignment 4b Image gallery /web Development - Fundamentals

// Get the elements from the HTML document
 var displayedImage = document.querySelector('.displayed-img'); 
 var thumbBar = document.querySelector('.thumb-bar'); 
 var btn = document.querySelector('button'); 
 var overlay = document.querySelector('.overlay');

// Make an array of image filenames
 var images = ['pic1.jpg', 'pic2.jpg', 'pic3.jpg', 'pic4.jpg', 'pic5.jpg']; 
 // Make an object of alternative text for each image file
 var alts = { 'pic1.jpg' : ' an eye', 'pic2.jpg' : 'Canyon', 'pic3.jpg' : 'Purple and white flowers', 'pic4.jpg' : 'paintings of the pharoahs in Egypt', 'pic5.jpg' : 'butterfly on a leaf' }

// Loop through the imagesarray 
for (var i = 0; i < images.length; i++) { 
  // Create a new image element 
  var newImage = document.createElement('img'); 
  // Set the source and alt attributes of the new image element 
  newImage.setAttribute('src', 'images/' + images[i]); newImage.setAttribute('alt', alts[images[i]]); 
  // Add the new image element to the thumbBar
   thumbBar.appendChild(newImage);
    // Add a click event listener to the new image element 
    newImage.addEventListener('click', function(e) { 
      // Change the source and alt attributes of the displayedImage to match the clicked image
      displayedImage.src = e.target.src; displayedImage.alt = e.target.alt; }); }

// Add a click event listener to the button
 btn.addEventListener('click', function() { 
  // Get the class attribute of the button
   var btnClass = btn.getAttribute('class'); 
   // Check if the button class is ‘dark’ 
   if (btnClass === 'dark') { 
    // Change the button class to ‘light’
     btn.setAttribute('class','light'); 
     // Change the button text to ‘Lighten’
      btn.textContent = 'Lighten'; 
      // Change the overlay background color to dark 
      overlay.style.backgroundColor = 'rgba(0,0,0,0.5)'; } else { 
        // Change the button class to ‘dark’
         btn.setAttribute('class','dark'); 
         // Change the button text to ‘Darken’
          btn.textContent = 'Darken'; 
          // Change the overlay background color to transparent 
          overlay.style.backgroundColor = 'rgba(0,0,0,0)'; } });
