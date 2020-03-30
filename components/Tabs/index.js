// Step 2: Create Tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-backend.herokuapp.com/topics
// Once the data is returned console.log it and review the structure.
// Iterate over the topics creating a new Tab component and add it to the DOM
// under the .topics element.
//
//  The tab component should look like this:
//    <div class="tab">topic here</div>

tabsContainer = document.querySelector('.topics')

axiosPromise = axios.get('https://lambda-times-backend.herokuapp.com/topics');
axiosPromise.then(response => {
  // console.log(response.data);
  response.data.topics.forEach(item => {
    const createTabs = Tabs(item);
    tabsContainer.appendChild(createTabs);
  })
});

axiosPromise.catch((error) => {
  console.log('Could not return data', error);
});

function Tabs(item) {
  const tab = document.createElement('div');
  const tabTopics = document.createElement('h5');

  tab.appendChild(tabTopics);
  tab.classList.add('tab');
  tabTopics.classList.add('topics')
  tabTopics.textContent = item;

  return tab;
}