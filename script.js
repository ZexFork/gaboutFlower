window.onload = function() {
    var popup = document.getElementById('tampil');
    var lanjutkanButton = document.getElementById('lanjutkanButton');

    // Show the popup when the page loads
    popup.style.display = 'block';

    // When the user clicks on the button, close the popup
    lanjutkanButton.onclick = function() {
        popup.style.display = 'none';
    };

    // Optional: When the user clicks anywhere outside of the popup, close it
    window.onclick = function(event) {
        if (event.target == popup) {
            popup.style.display = 'none';
        }
    };
};

onload = () => {
  const c = setTimeout(() => {
    document.body.classList.remove("not-loaded");
    clearTimeout(c);
  }, 1000);
};
