const input = document.getElementById('input');
const buttons = document.querySelectorAll('button');
let string = "";

buttons.forEach(button => {
    button.addEventListener('click', (e) => {
        const buttonText = e.target.innerHTML;
        if (buttonText === '=') {
            equalClickCount++;

            if (equalClickCount === 2) {

                input.value = string = "";
                equalClickCount = 0;
                return;
            }
        } else {
            equalClickCount = 0;
        } // if = btn will be clicked twice screen clears. 
        
        switch (buttonText) {
            case '=':
                input.value = string = eval(string);
                break;
            case 'AC':
                input.value = string = "";
                break;
            case 'DEL':
                input.value = string = string.slice(0, -1);
                break;
            default:
                input.value = string += buttonText;
        }
    });
});