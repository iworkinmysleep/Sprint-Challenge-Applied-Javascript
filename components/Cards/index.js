// STEP 3: Create Article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Stduy the response data you get back, closely.
// You will be creating a component for each 'article' in the list.
// This won't be as easy as just iterating over an array though.
// Create a function that will programmatically create the following DOM component:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {authors name}</span>
//   </div>
// </div>
//
// Create a card for each of the articles and add the card to the DOM.
const cardsContainer = document.querySelector('.cards-container')

axiosCardPromise = axios.get('https://lambda-times-backend.herokuapp.com/articles');
axiosCardPromise.then(response => {
  console.log(response.data);
  let articleValues = Object.values(response.data.articles);
  articleValues.forEach(element => {
    element.forEach(article => {
    cardsContainer.appendChild(createCard(article));
    console.log('Created Card');
    })
  })
});
axiosCardPromise.catch(error => {
  console.log('Cannot return data', error);
});

function createCard(article) {
  const newsCard = document.createElement('div');
  const newsHeadline = document.createElement('div');
  const newsAuthorContainer = document.createElement('div');
  const newsImgContainer = document.createElement('div');
  const newsImg = document.createElement('img');
  const newsAuthor = document.createElement('span');

  newsHeadline.textContent = article.headline;
  newsAuthor.textContent = `By ${article.authorName}`; 
  newsImg.src = article.authorPhoto;

  newsCard.classList.add('card');
  newsHeadline.classList.add('headline');
  newsAuthorContainer.classList.add('author');
  newsImgContainer.classList.add('img-container');

  newsCard.appendChild(newsHeadline);
  newsCard.appendChild(newsAuthorContainer);
  newsAuthorContainer.appendChild(newsImgContainer);
  newsAuthorContainer.appendChild(newsAuthor);
  newsImgContainer.appendChild(newsImg);
  

  return newsCard;
}
