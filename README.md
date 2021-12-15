# Data Pagination and Filtering
## Techdegree Project 2

The "Data Pagination and Filtering" program performs and filters in real time on a list of students and displays students' data based on user searches.

Also, the program creates pagination buttons based on the quantity of students that match a certain query. If no matches are found the program displays an alert message in the DOM.

The program is built up with:

- Four function declarations:
    - "**addSearchBar**": Creates and adds a search bar into the DOM.
    - "**performSearch**": Filters students' data so that students that match certain search value are shown.
        - "***keyup event***": Performs searches in real-time when the user types a name.
        - "***click event***": Performs searches when the user clicks on the search button.
    - "**showPage**": Creates and displays a page with a limit of nine students per page.
    - "**addPagination**": Creates and inserts the pagination buttons to navigate over search results.

