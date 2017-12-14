var ExitEmitter = require('../index.js');

Array.prototype.slice.call(document.querySelectorAll('.widget')).forEach(function(el) {
    el.addEventListener('focusin', function(e) {
        console.log(e);
        ExitEmitter.addFocusExit(el);
        this.classList.add('focusin');
    });

    el.addEventListener('focusExit', function(e) {
        console.log(e);
        ExitEmitter.removeFocusExit(el);
        this.classList.remove('focusin');
    });
});
