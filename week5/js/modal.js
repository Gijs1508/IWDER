// When the user clicks on the button, open the modal
function OpenSpan(src, product, prijs) {
  // Get the modal
  var modal = document.getElementById("myModal");
  AddTextToModal(src, product, prijs);

  modal.style.display = "block";

  // Get the <span> element that closes the modal
  var span = document.getElementsByClassName("close")[0];
  // When the user clicks on <span> (x), close the modal
  span.onclick = function() {
    modal.style.display = "none";
  };

  // When the user clicks anywhere outside of the modal, close it
  window.onclick = function(event) {
    if (event.target === modal) {
      modal.style.display = "none";
    }
  };
}

function AddTextToModal(source, product, prijs){
  // Add the image to the modal
  document.getElementById("modalPic").src = source;
  // Add product name to the modal
  document.getElementById("modalNaam").innerText = "Product: " + product;
  // Add the product price to the modal
  document.getElementById("modalPrijs").innerText = "Prijs: " + prijs;
}
