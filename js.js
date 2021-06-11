const form = document.querySelector('.quiz-form');
const result = document.querySelector('.result');
const textResult = document.querySelector('span');
const correctAnswers = ['B', 'B', 'B', 'B'];


form.addEventListener('submit', e => {
    e.preventDefault();

    let score = 0;
    const userAnswers = [form.q1.value, form.q2.value, form.q3.value, form.q4.value];

    userAnswers.forEach((answer, index) => {
        if (answer === correctAnswers[index]) {
            score += 25;
        }
    });

    scrollTo(0,0);
    
    result.classList.remove('d-none');

    let percentage = 0;
    const interval = setInterval(()=>{
        textResult.textContent = `${percentage}%`;
        if(percentage === score) {
            clearInterval(interval);
        } else {
            percentage++;
        }
    }, 10);
});







