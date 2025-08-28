//Nav Bar menu

document.addEventListener('DOMContentLoaded', function() {
  const toggleButton = document.getElementById('navbar-toggle');
  const navbarMenu = document.getElementById('navbar-menu');

  if (toggleButton && navbarMenu) {  // Check if elements exist
    toggleButton.addEventListener('click', function() {
      navbarMenu.style.display = navbarMenu.style.display === 'block' ? 'none' : 'block';
    });
  }
});

  // Pop-up modal JS
  document.addEventListener('DOMContentLoaded', function() {
    // Get the modal
    var modal = document.getElementById("ptsd-modal");
  
    // Get the button that opens the modal (you'll need to add this button to your services page)
    var btn = document.getElementById("ptsd-button"); // Example button ID
  
    // Get the <span> element that closes the modal
    var span = document.getElementsByClassName("close-button")[0];
  
    // When the user clicks the button, open the modal 
    btn.onclick = function() {
      modal.style.display = "block";
    }
  
    // When the user clicks on <span> (x), close the modal
    span.onclick = function() {
      modal.style.display = "none";
    }
  
    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function(event) {
      if (event.target == modal) {
        modal.style.display = "none";
      }
    }
  });

  // back to the top button
  document.addEventListener('DOMContentLoaded', function() {
    var backToTopButton = document.getElementById('back-to-top');

    window.onscroll = function() {
        if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
            backToTopButton.style.display = 'block';
        } else {
            backToTopButton.style.display = 'none';
        }
    };

    backToTopButton.addEventListener('click', function(e) {
        e.preventDefault(); // Prevent default anchor behavior
        window.scrollTo({ top: 0, behavior: 'smooth' }); // Smooth scroll to top
    });
});

