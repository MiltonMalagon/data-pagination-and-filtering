/*
Treehouse Techdegree:
FSJS Project 2 - Data Pagination and Filtering
*/


/*
For assistance:
   Check out the "Project Resources" section of the Instructions tab: https://teamtreehouse.com/projects/data-pagination-and-filtering#instructions
   Reach out in your Slack community: https://treehouse-fsjs-102.slack.com/app_redirect?channel=unit-2
*/


/*
 */
function performSearch(list) {
    const header = document.querySelector(".header");
    const searchBar = `
      <label for="search" class="student-search">
         <span>Search by name</span>
         <input id="search" placeholder="Search by name...">
         <button type="button"><img src="img/icn-search.svg" alt="Search icon"></button>
      </label>
    `;

    header.insertAdjacentHTML("beforeend", searchBar);

    const search = document.querySelector("#search");

    for (let i = 0; i < list.length; i++) {
        if (search.value.length !== 0 && list[i].textContent.toLowerCase() === search.value.toLowerCase()) {

        }
    }
}

/*
 * The `showPage` function creates and displays a page of nine students.
 *
 * @param {array} list - The list with the students data.
 * @param {page} number - The page number.
 * @returns {string} - Template literal with the HTML list item and contents.
 */
function showPage(list, page) {
    // Number of items per page.
    const itemsPerPage = 9;
    // Vars to store the start and end indexes of the list items.
    let startIndex = (page * itemsPerPage) - itemsPerPage;
    let endIndex = page * itemsPerPage;
    // Selecting student list (ul).
    let studentList = document.querySelector(".student-list");
    let newList;
    // Removing any students previously displayed.
    studentList.innerHTML = "";
    // Iterating over the list parameter.
    for (let i = 0; i < list.length; i++) {
        // Checking indexes values to print the respective student's list item.
        if (i >= startIndex && i < endIndex) {
            // Creating student´s list item to log out into the DOM.
            let studentItem = `
               <li class="student-item cf">
                  <div class="student-details">
                     <img class="avatar" src="${list[i].picture.large}" alt="Profile Picture">
                     <h3>${list[i].name.first} ${list[i].name.last}</h3>
                     <span class="email">${list[i].email}</span>
                  </div>
                  <div class="joined-details">
                     <span class="date">Joined ${list[i].registered.date}</span>
                  </div>
               </li>
            `;
            // Inserting student's list item to the DOM.
            studentList.insertAdjacentHTML("beforeend", studentItem);
        }

    }

    //  let newList = studentList.querySelectorAll("li");

    let newList = performSearch(list);
}


/*
 * The `addPagination` function creates and inserts the pagination buttons.
 *
 * @param {array} list - The list with the students data.
 */
function addPagination(list) {
    // Number of items per page.
    const itemsPerPage = 9;
    // Number of pagination buttons needed.
    let numOfPages = Math.ceil(list.length / itemsPerPage);
    // Selecting the list that encloses all pagination buttons.
    let linkList = document.querySelector(".link-list");
    // Removing any pagination buttons previously displayed.
    linkList.innerHTML = "";
    // Iterating over the number of pages.
    for (let i = 1; i <= numOfPages; i++) {
        // Creating each pagination button.
        let button = `
            <li>
               <button type="button">${i}</button>
            </li>
         `;
        // Inserting each pagination button to the DOM.
        linkList.insertAdjacentHTML("beforeend", button);
    }
    // Setting button class to "active".
    document.querySelector("button").className = "active";
    // Adding event listener to listen for clicks on the list of pagination buttons (links).
    linkList.addEventListener("click", (event) => {
        // Condition to listen for any pagination button.
        if (event.target.tagName === "BUTTON") {
            // Removing class value to the first pagination button.
            linkList.querySelector("button[class=active]").className = "";
            // Setting the class active to any pagination button clicked.
            event.target.className = "active";
            // Calling showPage function and passing the array and clicked element as arguments.
            showPage(data, event.target.textContent);
        }
    });
}


// Call functions
// performSearch();
showPage(data, 1);
addPagination(data);