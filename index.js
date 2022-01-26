const question = document.querySelectorAll('.question');

question.forEach((question) => {question.addEventListener('click', () => {
    if (question.nextElementSibling.classList.contains('is-hidden')) {
        question.nextElementSibling.classList.remove('is-hidden');
        question.classList.add('is-bold');
    } else {
        question.lastElementChild.firstChild.classList.remove('.rotate');
        question.nextElementSibling.classList.toggle('is-hidden');
        question.classList.remove('is-bold');
    }
})});