document.addEventListener('DOMContentLoaded', function() {
    const imageElement = document.getElementById('toggleImage');
    imageElement.addEventListener('click', function() {
        if (imageElement.src.includes('mountain.jpg')) {
            imageElement.src = 'images/ocean.jpg';
        } else {
            imageElement.src = 'images/mountain.jpg';
        }
    });
});


