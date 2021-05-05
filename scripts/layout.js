const toggleSwitch = document.querySelector('.theme-switch input[type="checkbox"]');
const currentTheme = localStorage.getItem('theme');
const darkicon = document.getElementsByClassName("dark-mode-icon")[0];

if (currentTheme) {
    document.documentElement.setAttribute('data-theme', currentTheme);
  
    if (currentTheme === 'dark') {
        toggleSwitch.checked = true;
        darkicon.setAttribute("name", "sunny");
    }
} else {
    document.documentElement.setAttribute('data-theme', 'light');
    darkicon.setAttribute("name", "moon");
}

function switchTheme(e) {
    var icon = document.getElementsByClassName("dark-mode-icon");
    if (e.target.checked) {
        icon[0].setAttribute("name", "sunny");
        document.documentElement.setAttribute('data-theme', 'dark');

        localStorage.setItem('theme', 'dark');
    }
    else {
        icon[0].setAttribute("name", "moon");
        document.documentElement.setAttribute('data-theme', 'light');

        localStorage.setItem('theme', 'light');
    }    
}

toggleSwitch.addEventListener('change', switchTheme, false);
