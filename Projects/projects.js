let colors = ['red', 'blue', 'orange', 'green', 'yellow', 'pink', 'purple'];
       document.querySelector('.color-btn').addEventListener('click', () => {
           let colorText = document.querySelector('.color-text');
           let randomColor = colors[Math.floor(Math.random() * colors.length)];
           colorText.style.color = randomColor;
       });

       let Images = [
           'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmPKw2xDVJWLvZmL1QaV78b_r8MJB8HBHk6A&s',
           'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRlUx0Z22UJvdc0NGar1ug7zzpC8RmoKQ3aqQ&s',
           'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvngOec94_DI6CtT3ciZZ6WlNOHQWkP8VhZw&s'
       ];
       
       let currentIndex = 0;
       let imageSlider = document.querySelector('.slider-container img');
       imageSlider.src = Images[currentIndex];

       document.querySelector('.next-btn').addEventListener('click', () => {
           currentIndex = (currentIndex + 1) % Images.length;
           imageSlider.src = Images[currentIndex];
       });

       document.querySelector('.prev-btn').addEventListener('click', () => {
           currentIndex = (currentIndex - 1 + Images.length) % Images.length;
           imageSlider.src = Images[currentIndex];
       });