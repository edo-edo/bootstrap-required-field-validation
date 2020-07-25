class validForm {
    validInput(input, sib) {
        input.className = "form-control is-valid";
        sib.className = 'valid-feedback';
        sib.innerHTML = 'Looks good!';
    }
    invalidEmailInput(input, sib){
        input.className = "form-control is-invalid";
        sib.className = 'invalid-feedback';
        sib.innerHTML = 'please enter valid email address!';
    }
    invalidInput(input, sib) {
        input.className = "form-control is-invalid";
        sib.className = 'invalid-feedback';
        sib.innerHTML = 'please fill out this field!';
    }
    showInfo() {
        let parent = document.querySelector('#info');
        let info = document.createElement('div')
        info.id = 'child';
        info.className = 'alert alert-success';
        info.innerHTML = '<strong>Success!</strong> information Sent successfully'
        parent.appendChild(info);
        setTimeout(() => document.querySelector('#child').remove(), 3000);
    }
    deleteWarning(input, sib) {
        input.value = '';
        input.className = "form-control";
        sib.removeAttribute("class");
        sib.innerHTML = ''
    }

}


const valid = new validForm();
const btn = document.getElementById('btn');
btn.addEventListener('click', (e) => {
    let c = 0;
    e.preventDefault()
    const input = document.querySelectorAll('input');
    input.forEach((field) => {
        if (field.value !== '') {
            if (field.id === "emali"){
                let check = field.value.includes("@",0);
                if (field.value.length < 3 || !check){
                    valid.invalidEmailInput(field, field.nextElementSibling);
                    return;
                }
            }
            c++;
            valid.validInput(field, field.nextElementSibling);
        } else {

            valid.invalidInput(field, field.nextElementSibling);
        }

    })
    if (c === 5) {
        valid.showInfo();
        input.forEach((field) => {
            valid.deleteWarning(field, field.nextElementSibling);
        })
    }

})