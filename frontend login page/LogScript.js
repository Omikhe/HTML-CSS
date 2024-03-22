document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.querySelector('#login');
    const signupForm = document.querySelector('#signup');

    document.querySelector('#linksignup').addEventListener('click', e => {
        e.preventDefault()
        loginForm.classList.add('form-hidden');
        signupForm.classList.remove('form-hidden');
    });

    document.querySelector('#linklogin').addEventListener('click', e => {
        e.preventDefault()
        loginForm.classList.remove('form-hidden');
        signupForm.classList.add('form-hidden');
    });

});