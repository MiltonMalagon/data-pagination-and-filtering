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
 * The `addSearchBar` function creates and adds a search bar.
 *
 * @returns {string} - Template literal with the HTML input and search button (search bar).
 */
function addSearchBar() {
    // Selecting the header HTML element. 
    const header = document.querySelector(".header");
    // Creating search bar to add it into the DOM.
    const searchBar = `
          <label for="search" class="student-search">
             <span>Search by name</span>
             <input id="search" placeholder="Search by name...">
             <button type="button"><img src="img/icn-search.svg" alt="Search icon"></button>
          </label>
        `;
    // Inserting search bar to the DOM.
    header.insertAdjacentHTML("beforeend", searchBar);
}

/*
 * The `performSearch` function filters students data so that students that match the search value are shown.
 *
 * @param {array} list - The list with the students data.
 * @returns {string} - Template literal with the HTML list items matched.
 */
function performSearch(list) {
    // Storing search input and search button elements.
    const search = document.querySelector("#search");
    const submit = document.querySelector(".student-search button");
    // Event listener performing searches in real-time when the user types a name.
    search.addEventListener("keyup", () => {
        // Storing name matches to display on the DOM.
        let newList = [];
        // Iterating over the list parameter.
        for (let i = 0; i < list.length; i++) {
            // Storing each student object separately.
            let student = list[i];
            // Storing student's first and last names as one string literal.
            let studentName = `${student.name.first.toLowerCase()}${student.name.last.toLowerCase()}`;
            // Storing the input values searched byt the user.
            let inputValue = search.value;
            // Splitting input values to escape white spaces typed into the search bar.
            let newArray = inputValue.split(" ");
            // Joining the new array to create a single string with a name without spaces.
            let newString = newArray.join("");
            // Checking if input values match student names to print the respective student's data.
            // If no matches are found it is display a “No results found” message.
            if (studentName.includes(newString.toLowerCase())) {
                // Pushing each student found into a new array.
                newList.push(student);
                // Creating and displaying students found.
                showPage(newList, 1);
                // Adding pagination based on the number of students found.
                addPagination(newList);
                // Checking if no matches are found so `newList` array doesn't have items to display.
            } else if (newList.length === 0) {
                // Storing the list (ul) containing all student items and pagination buttons.
                let studentList = document.querySelector(".student-list");
                let linkList = document.querySelector(".link-list");
                // Creating list item element with the message “No results found”.
                const message = `
                    <li class="student-item cf">
                        <h3>No resutls found</h3>
                    </li>
                `;
                // Priting message if no matches are found.
                studentList.innerHTML = message;
                // Removing pagination buttons previously display.
                linkList.innerHTML = "";
            }
        }
    });
    // Event listener performing searches when the user clicks on the search button.
    submit.addEventListener("click", () => {
        // Storing name matches to display on the DOM.
        let newList = [];
        // Iterating over the list parameter.
        for (let i = 0; i < list.length; i++) {
            // Storing each student object separately.
            let student = list[i];
            // Storing student's first and last names as one string literal.
            let studentName = `${student.name.first.toLowerCase()}${student.name.last.toLowerCase()}`;
            // Storing the input values searched byt the user.
            let inputValue = search.value;
            // Splitting input values to escape white spaces typed into the search bar.
            let newArray = inputValue.split(" ");
            // Joining the new array to create a single string with a name without spaces.
            let newString = newArray.join("");
            // Checking if input values match student names to print the respective student's data.
            // If no matches are found it is display a “No results found” message.
            if (studentName.includes(newString.toLowerCase())) {
                // Pushing each student found into a new array.
                newList.push(student);
                // Creating and displaying students found.
                showPage(newList, 1);
                // Adding pagination based on the number of students found.
                addPagination(newList);
                // Checking if no matches are found so `newList` array doesn't have items to display.
            } else if (newList.length === 0) {
                // Storing the list (ul) containing all student items and pagination buttons.
                let studentList = document.querySelector(".student-list");
                let linkList = document.querySelector(".link-list");
                // Creating list item element with the message “No results found”.
                const message = `
                    <li class="student-item cf">
                        <h3>No resutls found</h3>
                    </li>
                `;
                // Priting message if no matches are found.
                studentList.innerHTML = message;
                // Removing pagination buttons previously display.
                linkList.innerHTML = "";
            }
        }
    });
}

/*
 * The `showPage` function creates and displays a page of nine students.
 *
 * @param {array} list - The list with the students data.
 * @param {page} number - The page number.
 * @returns {string} - Template literal with the HTML list item and contents.
 */
function showPage(list, page) {
    // Declaring number of items per page.
    const itemsPerPage = 9;
    // Storing start and end indexes of the list items.
    let startIndex = (page * itemsPerPage) - itemsPerPage;
    let endIndex = page * itemsPerPage;
    // Selecting student list (ul).
    let studentList = document.querySelector(".student-list");
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
}


/*
 * The `addPagination` function creates and inserts the pagination buttons.
 *
 * @param {array} list - The list with the students data.
 */
function addPagination(list) {
    // Declaring number of items per page.
    const itemsPerPage = 9;
    // Storing number of pagination buttons needed.
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
    document.querySelector(".link-list button").className = "active";
    // Adding event listener to listen to clicks on the list of pagination buttons (links).
    linkList.addEventListener("click", (event) => {
        // Condition to listen to any pagination button.
        if (event.target.tagName === "BUTTON") {
            // Removing class value to the first pagination button.
            linkList.querySelector("button[class=active]").className = "";
            // Setting the class active to any pagination button clicked.
            event.target.className = "active";
            // Calling showPage function and passing the array and clicked element as arguments.
            showPage(list, event.target.textContent);
        }
    });
}

// Calling functions
addSearchBar();
performSearch(data);
showPage(data, 1);
addPagination(data);