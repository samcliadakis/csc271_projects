document.addEventListener('DOMContentLoaded', (event) => {
    const form = document.querySelector('form');
    
    form.addEventListener('submit', (event) => {
        event.preventDefault();
        
        const photography = document.querySelector('input[name="interests"][value="photography"]').checked;
        const socialMedia = document.querySelector('input[name="interests"][value="social_media"]').checked;
        const hiking = document.querySelector('input[name="interests"][value="hiking"]').checked;


        const resultsDiv = document.getElementById('results');

        if (photography || socialMedia || hiking) {
            resultsDiv.textContent = "You will enjoy the app!";
        } else {
            resultsDiv.textContent = "You may not enjoy the app.";
        }
        
    });
});






