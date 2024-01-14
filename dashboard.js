// Move these functions outside the click event listener
let contentInvisible = () => {
    document.querySelector('.name').classList.add('content-invisible');
    document.querySelector('.name').classList.remove('content-visible');
};

let contentVisible = () => {
    document.querySelector('.name').classList.add('content-visible');
    document.querySelector('.name').classList.remove('content-invisible');
};

document.querySelector('.expand').addEventListener('click', function() {
    // Change the width of the side bar
    const sideBar = document.querySelector('.side-bar');
    if (sideBar.classList.contains('reduce')) {
        sideBar.classList.remove('reduce');
    } else {
        sideBar.classList.add('reduce');
    }

    //Change the width of the side bar
    const searchContainer = document.querySelector('.search-bar-container');
    if (sideBar.classList.contains('reduce')) {
        searchContainer.style.left = '40px';
    } else {
        searchContainer.style.left = '150px';
    }

    // Change the position of the button
    const expandBtn = document.querySelector('.expand');
    if (expandBtn.classList.contains('new-position')) {
        expandBtn.classList.remove('new-position');
    } else {
        expandBtn.classList.add('new-position');
    }

    const textArea = document.querySelector('#sticky-note-text-area');
    textArea.classList.toggle('size-expand');

    // Change content visibility
    const iconContents = document.querySelectorAll('.icon-content');
    for (var i = 0; i < iconContents.length; i++) {
        if (iconContents[i].classList.contains('content-invisible')) {
            if (i == 0) {
                contentVisible();
            }
            iconContents[i].classList.remove('content-invisible');
            iconContents[i].classList.add('content-visible');
        } else {
            if (i == 0) {
                contentInvisible();
            }
            iconContents[i].classList.add('content-invisible');
            iconContents[i].classList.remove('content-visible');
        }
    }

    //Change main content margin left (width)
    const marginLeft = document.querySelector('.main-section');
    if (marginLeft.classList.contains('default-main-section')) {
        marginLeft.classList.add('reduced-main-section');
        marginLeft.classList.remove('default-main-section');
    } else {
        marginLeft.classList.add('default-main-section');
        marginLeft.classList.remove('reduced-main-section');
    }

    //change the direction of the arrow
    const arrowDirection = document.querySelector('.expand i');
    if (arrowDirection.classList.contains('fa-angle-right')) {
        arrowDirection.classList.remove('fa-angle-right');
        arrowDirection.classList.add('fa-angle-left');
    } else {
        arrowDirection.classList.add('fa-angle-right');
        arrowDirection.classList.remove('fa-angle-left');
    }
});

//Code for Calendar
function generateCalendarDates(year, month) {
    const daysInMonth = new Date(year, month + 1, 0).getDate();
    const firstDayOfWeek = new Date(year, month, 1).getDay();

    const calendarDatesContainer = document.getElementById('calendar-dates');
    calendarDatesContainer.innerHTML = '';

    for (let i = 0; i < firstDayOfWeek; i++) {
        const emptyDate = document.createElement('div');
        emptyDate.classList.add('date', 'empty');
        calendarDatesContainer.appendChild(emptyDate);
    }

    for (let date = 1; date <= daysInMonth; date++) {
        const dateCell = document.createElement('div');
        dateCell.classList.add('date');
        dateCell.textContent = date;
        calendarDatesContainer.appendChild(dateCell);
    }
    changeButtonPosition();
}

// Generate calendar for July 2023
generateCalendarDates(2023, 12);