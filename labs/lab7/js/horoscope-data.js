var zodiacSign = "Aquarius";
var birthMonth = "February";
var birthday = 9;
var luckyNumber = 7.0;
var horoscopeDescription = "Known for being independent and not liking to be told what to do. Often full of ideas and are known for their creativity and originality";
var believeInAstrology = false;
var moodRating1 = 4;
var moodRating2 = 5;
var moodRating3 = 4.2;

var zodiacSigns = ["Aries", "Taurus", "Gemini", "Cancer", "Leo", "Virgo", "Libra", "Scorpio", "Sagittarius", "Capricorn", "Aquarius", "Pisces"];
var zodiacSignFromArray1 = zodiacSigns[10];
var zodiacSignFromArray2 = zodiacSigns[8];
var zodiacSignFromArray3 = zodiacSigns[11];

var horoscopeDescriptions = [
    "Today is a day for new beginnings. Embrace change and seize opportunities.",
    "Your determination will lead to success today. Stay focused on your goals.",
    "Communication is key today. Express yourself clearly and listen to others.",
    "Trust your intuition. It will guide you in making the right decisions.",
    "Your creativity shines today. Use it to inspire and lead others.",
    "Pay attention to the details. Your meticulous work will pay off.",
    "Balance is essential. Find harmony in all aspects of your life.",
    "Embrace transformation. Let go of what no longer serves you.",
    "Adventure awaits. Explore new horizons and expand your horizons.",
    "Hard work leads to success. Keep pushing toward your goals.",
    "Your unique perspective is an asset. Share your ideas with others.",
    "Be yourself"
];

var chosenDescription = horoscopeDescriptions[2];
var chosenDescription2 = horoscopeDescriptions[5];
var chosenDescription3 = horoscopeDescriptions[8];


document.getElementById("sign").textContent = zodiacSign;

document.querySelector(".birthday").textContent += ` ${birthMonth} ${birthday}th`;

document.querySelector(".luckyNum").textContent += ` ${luckyNumber}`;

var paragraphs = document.querySelectorAll("p");

paragraphs[0].textContent = horoscopeDescription;

paragraphs[1].innerHTML += ` <strong>${believeInAstrology}</strong>`;

var averageMoodRating = ((moodRating1 + moodRating2 + moodRating3) / 3).toFixed(1);

paragraphs[2].textContent = `Today's mood rating for Aquarius: ${moodRating1} out of 5. The average mood rating of Aquarius, Saggitaurius, and Picses is: ${averageMoodRating}`;
paragraphs[3].textContent = `My zodiac sign is: ${zodiacSignFromArray1}. ${zodiacSignFromArray1} Horoscope: ${chosenDescription}`;

paragraphs[4].textContent = `Zoe zodiac sign is: ${zodiacSignFromArray2}. ${zodiacSignFromArray2} Horoscope: ${chosenDescription2}`;

paragraphs[5].textContent = `Amir zodiac sign is: ${zodiacSignFromArray3}. ${zodiacSignFromArray3} Horoscope: ${chosenDescription3}`;


