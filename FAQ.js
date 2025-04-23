document.addEventListener('DOMContentLoaded', () => {
    const faqList = document.querySelector('.faq-list');
    const faqItems = document.querySelectorAll('.faq-item');

    if (!faqList) {
        return;
    }

    // Закриваємо перше питання при завантаженні сторінки
    if (faqItems.length > 0) {
        const firstItem = faqItems[0];
        firstItem.classList.remove('is-open');
        const firstAnswer = firstItem.querySelector('.faq-answer');
        const firstQuestionButton = firstItem.querySelector('.faq-question');
        if (firstAnswer) {
            firstAnswer.hidden = true;
        }
        if (firstQuestionButton) {
            firstQuestionButton.setAttribute('aria-expanded', 'false');
        }
    }

    faqList.addEventListener('click', (event) => {
        const target = event.target.closest('.faq-question');

        if (target) {
            const currentItem = target.parentNode;
            const isOpen = currentItem.classList.contains('is-open');
            const answer = currentItem.querySelector('.faq-answer');
            const questionButton = target;

            // Закриваємо всі інші відкриті елементи
            faqItems.forEach(item => {
                if (item !== currentItem && item.classList.contains('is-open')) {
                    item.classList.remove('is-open');
                    const otherAnswer = item.querySelector('.faq-answer');
                    const otherQuestionButton = item.querySelector('.faq-question');
                    if (otherAnswer) {
                        otherAnswer.hidden = true;
                    }
                    if (otherQuestionButton) {
                        otherQuestionButton.setAttribute('aria-expanded', 'false');
                    }
                }
            });

            // Відкриваємо/закриваємо поточний елемент
            currentItem.classList.toggle('is-open');

            if (answer) {
                answer.hidden = isOpen;
            }
            if (questionButton) {
                questionButton.setAttribute('aria-expanded', !isOpen);
            }
        }
    });
});