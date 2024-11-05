const hike1 = "Arcadia Management Area";
const hike2 = "Burlingame State Park";
const hike3 = "Lincoln Woods State Park";
const hike4 = "Ninigret National Wildlife Refuge";
const hike5 = "Colt State Park";
const hike6 = "Beavertail State Park";
const hike7 = "Sachuest Point National Wildlife Refuge";
const hike8 = "Fort Wetherill State Park";
const hike9 = "Trustom Pond National Wildlife Refuge";
const hike10 = "Snake Den State Park";

const hikes = [
    hike1, hike2, hike3, hike4, hike5, 
    hike6, hike7, hike8, hike9, hike10
];

const hikeListDiv = document.getElementById('hikeList');
const ul = document.createElement('ul');

for (let i = 0; i < hikes.length; i++) {
    const li = document.createElement('li');
    li.textContent = hikes[i];
    ul.appendChild(li);
}

hikeListDiv.appendChild(ul);


const state1 = "California";
const state2 = "Alaska";
const state3 = "Utah";
const state4 = "Colorado";
const state5 = "Arizona";

const states = [
    state1, state2, state3, state4, state5
];

const stateListDiv = document.getElementById('stateList');
const ulStates = document.createElement('ul');

let i = 0;
while (i < states.length) {
    const li = document.createElement('li');
    li.textContent = states[i];
    ulStates.appendChild(li);
    i++;
}

stateListDiv.appendChild(ulStates);