document.addEventListener('DOMContentLoaded', function() {

    setTimeout(function() {
         popoverWhatsapp = document.getElementById('popover_whatsapp');
         popoverWhatsapp.style.display = 'block';
    }, 5000);

    // Function to close the popover
    closePopover = function () {
        popoverWhatsapp = document.getElementById('popover_whatsapp');
        popoverWhatsapp.style.display = 'none';
    };
    // Show notification badge after 2 seconds
    setTimeout(function() {
        var badge = document.getElementById('notification-badge');
        badge.style.display = 'block';
    }, 3000);
});
