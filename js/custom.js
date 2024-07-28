// JavaScript to trigger Terms & Conditions modal
$("#termsLink").click(function (e) {
    e.preventDefault();
    $("#termandcondition").modal("show"); // Show the modal
});

   $("#signupnLink").click(function (e) {
    e.preventDefault();
    $("#Loginmodal").modal("hide");
    $("#signupnmodall").modal("show");
});

$(document).ready(function() {
    $('.buy-cdc').click(function(e) {
        e.preventDefault();
        $("#Loginmodal").modal("show"); // Show the modal
    });
});

$(document).ready(function() {
    $('.inverstormodal').click(function(e) {
        e.preventDefault();
        $("#investormodal").modal("show"); // Show the modal
    });
});
$("#loginLinkToggle").click(function (e) {
    e.preventDefault();
    $("#signupnmodall").modal("hide");
    $("#Loginmodal").modal("show"); // Show the modal
});

// Close the modal when close button or "x" button is clicked
$(".modal-close").click(function () {
    $(this).closest('.modal').modal("hide");
});
$(document).ready(function() {
    $('#signupBtn').click(function() {
        $('#thankYouModal').modal('show');
    });
});

    // JavaScript to trigger the modal when the link is clicked
    document.getElementById('openCopyrightModal').addEventListener('click', function() {
        $('#copyrightModal').modal('show');
    });

      
            // Function to handle smooth scrolling
            function smoothScrollToSection(sectionId) {
                const headerHeight = document.querySelector('nav').offsetHeight;
                const section = document.querySelector(sectionId);
                if (section) {
                    const sectionTop = section.offsetTop;
                    const scrollPosition = sectionTop - headerHeight;
                    window.scrollTo({
                        top: scrollPosition,
                        behavior: 'smooth'
                    });
                }
            }

            // Event listeners for sidebar/dropdown links
            document.querySelectorAll('.dropdown-item[href^="#"]').forEach(link => {
                link.addEventListener('click', function (event) {
                    event.preventDefault();
                    smoothScrollToSection(this.getAttribute('href'));
                });
            });

            // Event listeners for quick links in the footer
            document.querySelectorAll('.footer .btn.btn-link[href^="#"]').forEach(link => {
                link.addEventListener('click', function (event) {
                    event.preventDefault();
                    smoothScrollToSection(this.getAttribute('href'));
                });
            });

            // Prevent appending section ID to URL when clicking on footer links
            document.querySelectorAll('.footer .btn.btn-link[href^="#"]').forEach(link => {
                link.addEventListener('click', function (event) {
                    event.preventDefault();
                });
            });





