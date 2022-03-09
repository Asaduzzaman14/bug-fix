let email = document.getElementById('email')
let span = document.getElementsByTagName('span')
const submit = () => {
    const regex = /^([_a-zA-Z0-9]+)@([a-zA-Z]+)\.([a-zA-Z]){2,8}$/;
    const rege = /^([_a-zA-Z0-9]+)@([a-zA-Z]+)\.([a-zA-Z]){2,8}\.([a-zA-Z]){2,3}$/;

    if (regex.test(email.value) || rege.test(email.value)) {
        span[0].innerText = 'your email is valid'
        span[0].style.color = 'blue'

    } else {
        span[0].innerText = 'your email is  invalid'
        span[0].style.color = 'red'

    }

}

