document.addEventListener('DOMContentLoaded', function() {
    hidePlaceholders();
});

function hidePlaceholders() {
    var inputs = document.querySelectorAll('.input-cover input');
    for (var i = 0; i < inputs.length; i++) {
        inputs[i].addEventListener('focus', function() {
            var str = this.getAttribute('placeholder');
            this.removeAttribute('placeholder');
            this.addEventListener('blur', function() {
                this.setAttribute('placeholder', str);
            });
        });
    }
}
