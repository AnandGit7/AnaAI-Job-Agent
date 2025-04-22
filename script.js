// Add animation to steps
document.addEventListener('DOMContentLoaded', function() {
    const steps = document.querySelectorAll('.step');
    
    steps.forEach((step, index) => {
        step.style.animation = `float 3s ease-in-out ${index * 0.5}s infinite`;
    });
});