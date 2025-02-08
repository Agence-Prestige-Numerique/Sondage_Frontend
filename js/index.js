document.addEventListener("DOMContentLoaded", function () {
    const surveyCards = document.querySelectorAll(".survey-card");
    const prevButtons = document.querySelectorAll(".prev-btn");
    const nextButtons = document.querySelectorAll(".next-btn");
    const finishButton = document.querySelector(".finish-btn");
    let currentStep = 0;

    function showStep(index) {
        surveyCards.forEach((card, i) => {
            card.classList.toggle("active", i === index);
        });
    }

    nextButtons.forEach((button, index) => {
        button.addEventListener("click", function () {
            currentStep = Math.min(currentStep + 1, surveyCards.length - 1);
            showStep(currentStep);
        });
    });

    prevButtons.forEach((button, index) => {
        button.addEventListener("click", function () {
            currentStep = Math.max(currentStep - 1, 0);
            showStep(currentStep);
        });
    });

    showStep(currentStep);
});