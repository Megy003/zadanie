function adjustFontSize(action) {
    const elements = document.querySelectorAll('body, .card-text, .navbar, .card-body, .form-control, .form-label, button.btn');
    elements.forEach(element => {
        let currentSize = window.getComputedStyle(element).fontSize;
        let newSize = action === 'increase' ? parseFloat(currentSize) * 1.1 : parseFloat(currentSize) * 0.9;
        element.style.fontSize = newSize + 'px';
        localStorage.setItem('fontSize', newSize + 'px');
    });
}

function toggleContrast() {
    document.body.classList.toggle('high-contrast');
    const isHighContrast = document.body.classList.contains('high-contrast');
    localStorage.setItem('highContrast', isHighContrast);
}

function resetSettings() {
    localStorage.removeItem('fontSize');
    localStorage.removeItem('highContrast');
    document.querySelectorAll('body, .card-text, .navbar, .card-body, .form-control, .form-label, button.btn').forEach(element => {
        element.style.fontSize = '';
    });
    document.body.classList.remove('high-contrast');
}

function applySettings() {
    const savedFontSize = localStorage.getItem('fontSize');
    if (savedFontSize) {
        document.querySelectorAll('body, .card-text, .navbar, .card-body, .form-control, .form-label, button.btn').forEach(element => {
            element.style.fontSize = savedFontSize;
        });
    }
    const savedContrast = localStorage.getItem('highContrast') === 'true';
    if (savedContrast) {
        document.body.classList.add('high-contrast');
    }
}
document.addEventListener('DOMContentLoaded', applySettings);
