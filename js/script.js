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
Create the `showPage` function
This function will create and insert/append the elements needed to display a "page" of nine students
*/
function showPage(list, page) {
    const itemsPerPage = 9;
    let startIndex = (page * itemsPerPage) - itemsPerPage;
    let endIndex = page * itemsPerPage;
    let studentList = document.querySelector(".student-list");

    studentList.innerHTML = "";

    for (let i = 0; i < list.length; i++) {
        if (i >= startIndex && i < endIndex) {
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

            studentList.insertAdjacentHTML("beforeend", studentItem);
        }
    }
}


/*
Create the `addPagination` function
This function will create and insert/append the elements needed for the pagination buttons
*/
function addPagination(list) {
    const itemsPerPage = 9;
    let numOfPages = Math.ceil(list.length / itemsPerPage);
    let linkList = document.querySelector(".link-list");

    linkList.innerHTML = "";

    for (let i = 1; i <= numOfPages; i++) {
        let button = `
            <li>
               <button type="button">${i}</button>
            </li>
         `;
        linkList.insertAdjacentHTML("beforeend", button);
    }

    document.querySelector("button").className = "active";
}


// Call functions
showPage(data, 1);
addPagination(data);