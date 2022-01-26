const question = document.querySelectorAll('.question');
const arrowImage = document.getElementsByClassName('arrow');

question.forEach((question) => {question.addEventListener('click', () => {
    if (question.nextElementSibling.classList.contains('is-hidden')) {
        question.classList.add('is-bold');
        question.nextElementSibling.classList.remove('is-hidden');
    } else {
        question.nextElementSibling.classList.toggle('is-hidden');
        question.classList.remove('is-bold')
    }
    question.lastElementChild.firstChild.classList.add('.rotate');
})});