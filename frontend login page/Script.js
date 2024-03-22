const myHeader = document.querySelector('.respond')
document.querySelector('.myButton').addEventListener('click', e =>{
    e.preventDefault()
    console.log('hello world');
    myHeader.textContent = 'button clicked';
});