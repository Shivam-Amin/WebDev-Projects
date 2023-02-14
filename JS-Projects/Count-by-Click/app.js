
// set initial count
let count = 0;

// select value and buttons
const value = document.querySelector('#value');
const btns = document.querySelectorAll(".btn");

btns.forEach(function (btn) {
    // btn.addEventListener('click', (e) => console.log(e.currentTarget))
    btn.addEventListener('click', function (e) {
        const styles = e.currentTarget.classList;
        
        if (styles.contains('decrease')) {
            count--;
        } else if (styles.contains('increase')) {
            count++;
        } else {
            count = 0;
        }

        if (count > 0) {
            value.style.color = 'aqua';
        } else if (count < 0) {
            value.style.color = 'orangered'
        } else {
            value.style.color = 'var(--COLOR)';
        }

        value.textContent = count;
    });
});