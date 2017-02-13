document.addEventListener('DOMContentLoaded', function() {
    showFeedbackForm();
    hidePlaceholders();
});

function showFeedbackForm() {
    document.querySelector('.map-contacts-btn').addEventListener('click', function(event) {
        event.preventDefault();
        document.querySelector('.feedback-form').style.display = 'flex';
    });
    closeFeedbackForm();
}

function closeFeedbackForm() {
    document.querySelector('.feedback-form-close').addEventListener('click', function(event) {
        event.preventDefault();
        document.querySelector('.feedback-form').style.display = 'none';
    });
}

function hidePlaceholders() {
    var inputs = document.querySelectorAll('.input-cover input');
    for (var i = 0; i < inputs.length; i++) {
        inputs[i].addEventListener('focus', function() {
            hidePlaceholder(this);
        });
    }
    document.querySelector('.text-area-cover textarea').addEventListener('focus', function() {
        hidePlaceholder(this)
    });
}

function hidePlaceholder(input) {
    var str = input.getAttribute('placeholder');
    input.removeAttribute('placeholder');
    input.addEventListener('blur', function() {
        this.setAttribute('placeholder', str);
    });
}