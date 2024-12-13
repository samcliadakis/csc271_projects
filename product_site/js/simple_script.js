const stateData = {
    alabama: "Cheaha Mountain, 2407 ft",
    alaska: "Denali, 20310 ft",
    arizona: "Humphreys Peak, 12637 ft",
    arkansas: "Mount Magazine, 2753 ft",
    california: "Mount Whitney, 14505 ft",
    colorado: "Mount Elbert, 14440 ft",
    connecticut: "Mount Frissell-South Slope, 2380 ft",
    delaware: "Ebright Azimuth, 447 ft",
    florida: "Britton Hill, 345 ft",
    georgia: "Brasstown Bald, 4784 ft",
    hawaii: "Mauna Kea, 13796 ft",
    idaho: "Borah Peak, 12662 ft",
    illinois: "Charles Mound, 1235 ft",
    indiana: "Hoosier Hill, 1257 ft",
    iowa: "Hawkeye Point, 1670 ft",
    kansas: "Mount Sunflower, 4039 ft",
    kentucky: "Black Mountain, 4145 ft",
    louisiana: "Driskill Mountain, 535 ft",
    maine: "Mount Katahdin, 5268 ft",
    maryland: "Hoye-Crest, 3360 ft",
    massachusetts: "Mount Greylock, 3489 ft",
    michigan: "Mount Arvon, 1979 ft",
    minnesota: "Eagle Mountain, 2301 ft",
    mississippi: "Woodall Mountain, 807 ft",
    missouri: "Taum Sauk Mountain, 1772 ft",
    montana: "Granite Peak, 12799 ft",
    nebraska: "Panorama Point, 5424 ft",
    nevada: "Boundary Peak, 13140 ft",
    newhampshire: "Mount Washington, 6288 ft",
    newjersey: "High Point, 1803 ft",
    newmexico: "Wheeler Peak, 13167 ft",
    newyork: "Mount Marcy, 5344 ft",
    northcarolina: "Mount Mitchell, 6684 ft",
    northdakota: "White Butte, 3506 ft",
    ohio: "Campbell Hill, 1549 ft",
    oklahoma: "Black Mesa, 4973 ft",
    oregon: "Mount Hood, 11239 ft",
    pennsylvania: "Mount Davis, 3213 ft",
    rhodeisland: "Jerimoth Hill, 812 ft",
    southcarolina: "Sassafras Mountain, 3560 ft",
    southdakota: "Black Elk Peak, 7242 ft",
    tennessee: "Clingmans Dome, 6643 ft",
    texas: "Guadalupe Peak, 8751 ft",
    utah: "Kings Peak, 13534 ft",
    vermont: "Mount Mansfield, 4393 ft",
    virginia: "Mount Rogers, 5729 ft",
    washington: "Mount Rainier, 14411 ft",
    westvirginia: "Spruce Knob, 4863 ft",
    wisconsin: "Timms Hill, 1951 ft",
    wyoming: "Gannett Peak, 13809 ft"
};

function processAge() {
    // Get the user input
    const birthYear = document.getElementById("ageInput").value;

    // Get the current year
    const currentYear = new Date().getFullYear();

    // Calculate age
    const age = currentYear - birthYear;

    // Output
    const outputDiv = document.getElementById("ageOutput");
    if (isNaN(age) || age < 0) {
        outputDiv.innerText = "Please enter a valid birth year.";
    } else {
        outputDiv.innerText = `You are approximately ${age} years old.`;
        alert("Your age has been submitted.");
    }
}

function processState() {
    // Get the user input
    const stateInput = document.getElementById("stateInput").value.trim().toLowerCase();
    const outputDiv = document.getElementById("output");

    // Check if the state exists
    if (stateData[stateInput]) {
        outputDiv.innerText = `The highest point in ${stateInput.charAt(0).toUpperCase() + stateInput.slice(1)} is ${stateData[stateInput]}.`;
        outputDiv.style.color = "black";
    } else {
        outputDiv.innerText = "Please enter a valid US state.";
        outputDiv.style.color = "red";
    }
}

// Add event listener to check input validity on input change
document.getElementById("stateInput").addEventListener("input", function() {
    const stateInput = this.value.trim().toLowerCase();
    const outputDiv = document.getElementById("output");

    // Check if the state exists
    if (stateData[stateInput]) {
        outputDiv.innerText = "";
    } else {
        outputDiv.innerText = "Please enter a valid US state.";
        outputDiv.style.color = "red";
    }
});

//getting element by different modes

document.getElementById("description").innerText += " Explore now.";

document.getElementsByClassName("welcome")[0].innerText += " Check us out!";

var listItems = document.getElementsByTagName("li");
for (let i = 0; i < listItems.length; i++) {
    listItems[i].style.color = "green";
}
