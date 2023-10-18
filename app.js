var usersInfo = [
    {
        name: "Virat Kohli",
        bio: "Batsman",
        reviews: "Virat Kohli is an Indian international cricketer and the former captain of the Indian national cricket team. He currently represents Royal Challengers Bangalore in the IPL and Delhi in domestic cricket. "
    },
    {
        name: "Babar Azam",
        bio: "Batsman",
        reviews: "Babar Azam, is a Pakistani international cricketer and captain of the Pakistan national cricket team in all formats, and is widely regarded as one of the finest batters in contemporary world cricket"
    },
    {
        name: "kane williamson",
        bio: "Batsman",
        reviews: "Kane Stuart Williamson is a New Zealand cricketer. On 27 February 2023, Williamson became the all-time leading run-scorer for New Zealand in test cricket.Widely regarded as one of the greatest batsmen of his generation, he is a right-handed batsman and an occasional off spin bowler. "
    }
]

let images = [
    "./assets/Card pic 1.webp",
    "./assets/card pic 2.jpeg",
    "./assets/card pic 3.webp"
]

let cardNum = 0
let imgIndex = 0
let image = document.querySelector(".img")
let userName = document.querySelector(".name")
let bio = document.querySelector(".bio")
let reviews = document.querySelector(".reviews")
let rotate = document.querySelector(".mycontainer")


function next() {
    if (cardNum < usersInfo.length - 1 ) {
        cardNum++
        imgIndex++
        image.src = images[imgIndex]
        userName.textContent = usersInfo[cardNum].name
        bio.textContent = usersInfo[cardNum].bio
        reviews.textContent = usersInfo[cardNum].reviews
        rotate.classList.toggle('rotate');
    } else if (cardNum == usersInfo.length - 1 ) {
        cardNum = 0
        imgIndex = 0
        image.src = images[imgIndex]
        userName.textContent = usersInfo[cardNum].name
        bio.textContent = usersInfo[cardNum].bio
        reviews.textContent = usersInfo[cardNum].reviews
        rotate.classList.toggle('rotate');
    } else {
        console.log("sorry we have no mere reviews");
    }
}


function previous() {
    if (cardNum > 0) {
        cardNum--
        imgIndex--
        image.src = images[imgIndex]
        userName.textContent = usersInfo[cardNum].name;
        bio.textContent = usersInfo[cardNum].bio;
        reviews.textContent = usersInfo[cardNum].reviews;
        rotate.classList.toggle('rotate');
    } else if (cardNum == 0 ) {
        cardNum = usersInfo.length
        imgIndex = images.length
        cardNum--
        imgIndex--
        image.src = images[imgIndex]
        userName.textContent = usersInfo[cardNum].name
        bio.textContent = usersInfo[cardNum].bio
        reviews.textContent = usersInfo[cardNum].reviews
        rotate.classList.toggle('rotate');
    } 
}