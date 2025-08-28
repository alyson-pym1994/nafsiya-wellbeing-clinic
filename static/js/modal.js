console.log('Modal.js loaded');

// Function to open modal
function openModal(modalId) {
    console.log('Opening modal:', modalId);
    const modal = document.getElementById(modalId);
    if (modal) {
        modal.style.display = "block";
        document.body.style.overflow = "hidden";
    } else {
        console.error('Modal not found:', modalId);
    }
}

// Function to close modal
function closeModal(modalId) {
    console.log('Closing modal:', modalId);
    const modal = document.getElementById(modalId);
    if (modal) {
        modal.style.display = "none";
        document.body.style.overflow = "auto";
    }
}

// Initialize modals when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    console.log('Initializing modals');
    
    // Add click handlers to all condition items
    const conditionItems = document.querySelectorAll('.condition-item');
    conditionItems.forEach(item => {
        const modalId = item.getAttribute('data-modal-id');
        console.log('Adding click handler to condition:', modalId);
        item.addEventListener('click', function() {
            openModal(modalId);
        });
    });

    // Add click handlers to all therapy items
    const therapyItems = document.querySelectorAll('.therapy-item');
    therapyItems.forEach(item => {
        const modalId = item.getAttribute('data-modal-id');
        console.log('Adding click handler to therapy:', modalId);
        item.addEventListener('click', function() {
            openModal(modalId);
        });
    });

    // Add click handlers to all close buttons
    const closeButtons = document.querySelectorAll('.close-button');
    closeButtons.forEach(button => {
        const modalId = button.getAttribute('data-modal-id');
        button.addEventListener('click', function() {
            closeModal(modalId);
        });
    });

    // Close modal when clicking outside
    const modals = document.querySelectorAll('.modal');
    modals.forEach(modal => {
        modal.addEventListener('click', function(event) {
            if (event.target === modal) {
                closeModal(modal.id);
            }
        });
    });
});

// Close modal when pressing Escape key
document.addEventListener('keydown', function(event) {
    if (event.key === "Escape") {
        const modals = document.querySelectorAll('.modal');
        modals.forEach(modal => {
            if (modal.style.display === "block") {
                closeModal(modal.id);
            }
        });
    }
}); 