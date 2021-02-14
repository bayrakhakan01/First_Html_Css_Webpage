function dropdownMenu() {
    let dropdownClick = document.getElementById('dropdownClick');

    if (dropdownClick.className === 'topnav') {
        dropdownClick.className += ' responsive';
        /* change topnav to topnav.responsive */
       
    } else {
        dropdownClick.className = 'topnav';
    }
}
