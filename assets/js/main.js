let suspects = [
    {
        name: "mrGreen",
        firstName: "Jacob",
        lastName: "Green",
        occupation: "Entrepreneur",
        age: 45,
        description: "He has a lot of connections",
        image: "https://pbs.twimg.com/profile_images/506787499331428352/65jTv2uC.jpeg",
        color: "green",
    },
    {
        name: "drOrchid",
        firstName: "Doctor",
        lastName: "Orchid",
        occupation: "Scientist",
        age: 26,
        description: " PhD in plant toxicology. Adopted daughter of Mr. Boddy",
        image: "https://i.guim.co.uk/img/media/00e0d30234b685b8bf5f26c0324397756f5753e0/0_0_1912_2419/master/1912.jpg?width=620&quality=45&dpr=2&s=none",
        color: "white"
    },
    {
        name: "profPlum",
        firstName: "Victor",
        lastName: "Plum",
        occupation: "Designer",
        age: 22,
        description: "Billionaire video game designe",
        image: "https://66.media.tumblr.com/ee7155882178f73b3781603f0908617c/tumblr_phhxc7EhPJ1w5fh03_540.jpg",
        color: "purple",
    },
    {
        name: "missScarlet",
        firstName: "Kasandra",
        lastName: "Scarlet",
        occupation: "Actress",
        age: 31,
        description: "She is an A- list movie star with a dark past",
        image: " https://static.standard.co.uk/s3fs-public/thumbnails/image/2016/07/04/10/cluedo-miss-scarlett.jpg",
        color: "red"
    },
    {
        name: "mrsPeacock",
        firstName: "Eleanor",
        lastName: "Peacock",
        occupation: "Socialité",
        age: 36,
        description: "She is from a wealthy family and uses her status and money to earn popularity",
        image: " https://pm1.narvii.com/6722/3bd0d86d367315d9e81a12390c17343a27d8a4d9_hq.jpg",
        color: "blue"
    },
    {
        name: "mrMustard",
        firstName: "Jack",
        lastName: "Mustard",
        occupation: "Retired Football player",
        age: 62,
        description: "He is a former football player who tries to get by on his former glory",
        image: "https://static.independent.co.uk/s3fs-public/thumbnails/image/2016/07/04/08/unspecified-3.jpg",
        color: "yellow"
    }
];

let weaponsArray = [
    {
        name: "rope",
        weight: 10,
    },
    {
        name: "knife",
        weight: 8,
    },
    {
        name: "candlestick",
        weight: 2,
    },
    {
        name: "dumbbell",
        weight: 30,
    },
    {
        name: "poisen",
        weight: 2,
    },
    {
        name: "axe",
        weight: 15,
    },
    {
        name: "bat",
        weight: 13,
    },
    {
        name: "trophy",
        weight: 25,
    },
    {
        name: "pistol",
        weight: 20,
    },
];

let roomsArray = ["Dining Room", "Conservatory", "Kitchen", "Study", "Library", "BilliardRoom", "Lounge", "Ballroom", "Hall", "Spa", "Living Room", "Observatory", "Theater", "Guest House", "Patio"];

function selectRandom(array) {

    return array[Math.floor(Math.random() * array.length)];


}
// console.log(selectRandom(roomsArray));
// console.log(selectRandom(suspects));
// console.log(selectRandom(weaponsArray));

// randomRoom = selectRandom(roomsArray);
//  console.log(randomRoom);
// randomSuspects = selectRandom(suspects);
// // console.log(randomsuspects);
// randomWeapons = selectRandom(weaponsArray);
// // console.log(randomweapons);



function pickMystery() {
let randomRoom = selectRandom(roomsArray);
let randomSuspects = selectRandom(suspects);
let randomWeapons = selectRandom(weaponsArray);

console.log('object');

    return [randomSuspects, randomWeapons,randomRoom,];
}








function revealMystery(){
    let pMy = pickMystery();

    console.log(pMy[0]);
console.log(pMy[1]);
console.log(pMy[2]);

  let misterysent =` ${pMy[0].firstName}  ${pMy[0].lastName} killed Mr.Boddy using the ${pMy[1].name} in the ${pMy[2]} `
let misterysent2 =` ${pMy[1].name} <br><br> / <br><br> ${pMy[2]} `
let misterysent3 =`<img class='bilder' src="${pMy[0].image}">`
 let misterysent4 =`${pMy[0]. age}-${pMy[0]. occupation} <br><br> ${pMy[0].description}`

document.getElementById('AaA').innerHTML = misterysent
document.getElementById('BBB').innerHTML = misterysent2
document.getElementById('CCC').innerHTML = misterysent3
document.getElementById('info').innerHTML = misterysent4

}
