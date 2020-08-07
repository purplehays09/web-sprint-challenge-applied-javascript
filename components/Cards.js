// STEP 3: Create article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-api.herokuapp.com/articles
// Study the response data you get back, closely.
// You will be creating a card for each article in the response.
// This won't be as easy as just iterating over an array though.
//
// Write a function that takes a single article object and returns the following markup:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {author's name}</span>
//   </div>
// </div>
//
// Add a listener for click events so that when a user clicks on a card, the headline of the article is logged to the console.
//
// Use your function to create a card for each of the articles, and append each card to the DOM.

const { default: Axios } = require("axios");

const cardContainter = document.querySelector('.cards-container')


Axios.get('https://lambda-times-api.herokuapp.com/articles')
    .then(response => {
        const articlesObj = response.data.articles
        // const bootstrap = articlesObj.bootstrap
    
        for(let subject in articlesObj){
            console.log(subject)
            console.log(articlesObj)
            console.log(articlesObj[subject])
            articlesObj[subject].forEach(article => {
                console.log(article)
                cardContainter.appendChild(cardMaker(article))
            });
        }
        // const newDiv = cardMaker(bootstrap[0])
        // cardContainter.appendChild(newDiv)
    })
    .catch(error => console.log(error))

function cardMaker(cardObj){
    // createElements
    const card = document.createElement('div');
    const headline = document.createElement('div');
    const authorDiv = document.createElement('div');
    const imgDiv = document.createElement('div');
    const img = document.createElement('img');
    const name = document.createElement('span');

    // classList.add() and textContent.add and src/href/etc...
    card.classList.add('card');
    headline.classList.add('headline');
    authorDiv.classList.add('author');
    imgDiv.classList.add('img-container');

    headline.textContent = cardObj.headline;
    name.textContent = cardObj.authorName;

    img.src = cardObj.authorPhoto;

    // arrange with appendChild
    card.appendChild(headline)
    card.appendChild(authorDiv)
    authorDiv.appendChild(imgDiv)
    authorDiv.appendChild(name)
    imgDiv.appendChild(img)

    // addEventListeners
    card.addEventListener('click', event => console.log(cardObj.headline))


    // return the div
    console.log(card)
    return card
}