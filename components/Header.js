// STEP 1: Create a Header component.
// -----------------------
// Write a function that takes no arguments and returns the markup you see below:
//
//  <div class="header">
//    <span class="date">MARCH 28, 2020</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div>
//
// Use your function to create a header
// and append it to the DOM inside the div.header-container
const headerContainer = document.querySelector('.header-container')

function Header() {
    // make variables with createElement
    const headerDiv = document.createElement('div')
    const date = document.createElement('span')
    const title = document.createElement('h1')
    const temp = document.createElement('span')

    // add classes and textContent
    headerDiv.classList.add('header');
    date.classList.add('date');
    temp.classList.add('temp');
    date.textContent = 'MARCH 28, 2020';
    title.textContent = 'Lambda Times';
    temp.textContent = '98'

    // append them to the existing dom
    headerDiv.appendChild(date)
    headerDiv.appendChild(title)
    headerDiv.appendChild(temp)

    // add any event listeners


    //return the div
    return headerDiv

}

headerContainer.appendChild(Header())