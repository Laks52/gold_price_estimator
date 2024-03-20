document.getElementById('calculateBtn').addEventListener('click', function() {
  var gramsInput = parseFloat(document.getElementById('gramsInput').value);
  var caratValue = parseFloat(document.querySelector('input[name="carat"]:checked')?.value);
  var pricePerGram = parseFloat(document.getElementById('price').value);
  var wastagePercent = parseFloat(document.getElementById('percent').value);
  var gstPercent = parseFloat(document.getElementById('gst').value);

  if (!isNaN(gramsInput) && !isNaN(caratValue) && !isNaN(pricePerGram) && !isNaN(wastagePercent) && !isNaN(gstPercent)) {
      var caratPrice = pricePerGram / 24; // Calculate price per carat
      var totalPriceBeforeWastage = caratValue * caratPrice * gramsInput;
      var wastageAmount = totalPriceBeforeWastage * (wastagePercent / 100);
      var totalPriceAfterWastage = totalPriceBeforeWastage + wastageAmount;
      var GSTamount = totalPriceAfterWastage * (gstPercent / 100);
      var totalAmount = GSTamount + totalPriceAfterWastage;

      document.getElementById('result').innerHTML =
          "Total Price Before Wastage: " + totalPriceBeforeWastage.toFixed(2) + " INR<br>" +
          "Wastage Amount: " + wastageAmount.toFixed(2) + " INR<br>" +
          "Total Price After Wastage: " + totalPriceAfterWastage.toFixed(2) + " INR<br>" +
          "GST Amount: " + GSTamount.toFixed(2) + " INR<br>" +
          "Total Price After Tax and Wastage: " + totalAmount.toFixed(2) + " INR<br>";
  } else {
      document.getElementById('result').innerText = "Please enter all the fields.";
  }
});
