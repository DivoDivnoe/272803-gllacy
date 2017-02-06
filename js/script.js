document.addEventListener('DOMContentLoaded', function() {
    document.querySelector('.feedback-btn').addEventListener('click', function(event) {
        event.preventDefault();
        document.querySelector('.feedback-form').style.display = 'flex';
    });
    document.querySelector('.feedback-form-close').addEventListener('click', function(event) {
        event.preventDefault();
        document.querySelector('.feedback-form').style.display = 'none';
    });
});