document.addEventListener('DOMContentLoaded', function() {
    const imageElement = document.getElementById('toggleImage');

    const images = ['images/mountain.jpg', 'images/ocean.jpg', 'images/image1.jpg', 'images/image2.jpg', 'images/image3.jpg', 'images/image4.jpg'];
        let currentIndex = 0;

    imageElement.addEventListener('click', function() {
    currentIndex = (currentIndex + 1) % images.length;
    imageElement.src = images[currentIndex];
});

});


