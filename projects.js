document.addEventListener('DOMContentLoaded', function() {
    const loadMoreButton = document.querySelector('.load-more-button');
    const projectsGrid = document.querySelector('.projects-grid');
    const initialPhotosCount = projectsGrid.children.length; // Початкова кількість фото (3)
    let loadedPhotosCount = 0; // Кількість вже завантажених додатково фото

    // Масив з даними про нові фотографії (URL та підпис)
    const newPhotosData = [
        { url: '/img/my-project/img_4@x2.jpg', alt: 'STARLIGHT STUDIO LANDING PAGE' },
        { url: '/img/my-project/img_5@x2.jpg', alt:  'ENERGY FLOW WEBSERVICE' },
        { url: '/img/my-project/img_6@x2.jpg', alt:  'FRUITBOX ONLINE STORE'  },
        { url: '/img/my-project/img_7@x2.jpg', alt:  'CHEGO JEWELRY WEBSITE' },
        { url: '/img/my-project/img_8@x2.jpg', alt:  'MIMINO WEBSITE'    },
        { url: '/img/my-project/img_9@x2.jpg', alt: 'VYSHYVANKA VIBES LANDING PAGE' },
        { url: '/img/my-project/img_10@x2.jpg', alt:  'POWER PULSE WEBSERVICE'     },
    ];

    if (loadMoreButton) {
        loadMoreButton.addEventListener('click', function() {
            // Обчислюємо індекс початку завантаження
            const startIndex = loadedPhotosCount;
            // Обчислюємо індекс кінця завантаження 
            const endIndex = Math.min(startIndex + 3, newPhotosData.length);
            const photosToLoad = newPhotosData.slice(startIndex, endIndex);

            if (photosToLoad.length > 0) {
                photosToLoad.forEach(photoData => {
                    const projectCard = document.createElement('li');
                    projectCard.classList.add('project-card');

                    const img = document.createElement('img');
                    img.src = photoData.url;
                    img.alt = photoData.alt;

                    const caption = document.createElement('p');
                    caption.classList.add('project-caption'); // Додаємо клас для стилізації підпису
                    caption.textContent = photoData.alt;

                    projectCard.appendChild(img);
                    projectCard.appendChild(caption); // Додаємо підпис до картки
                    projectsGrid.appendChild(projectCard);
                });

                loadedPhotosCount += photosToLoad.length;

                // Якщо всі нові фотографії завантажені, ховаємо кнопку
                if (loadedPhotosCount >= newPhotosData.length) {
                    loadMoreButton.style.display = 'none';
                }
            }
        });
    }
});
/*FAQ*/


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