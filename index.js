const question = document.querySelectorAll('.question');
const arrowImage = document.querySelectorAll('.arrow');

question.forEach((question) => {question.addEventListener('click', () => {
    if (question.nextElementSibling.classList.contains('is-hidden')) {
        question.nextElementSibling.classList.remove('is-hidden');
        question.classList.add('is-bold');
        question.lastElementChild.classList.add('toggle-up');
    } else {
        question.nextElementSibling.classList.toggle('is-hidden');
        question.classList.remove('is-bold');
        question.lastElementChild.classList.remove('toggle-up');
    }
})});