const getLocalData = key => localStorage.getItem(key);
const setLocalData = (key, val) => localStorage.setItem(key, JSON.stringify(val));

const checkLogin = () => {
    if (!getLocalData('login')) {
        window.location.href = "./login.html"
    }
}

const logout = () => {
    localStorage.clear()
    window.location.href = './login.html'
}

let menu = document.querySelectorAll('.navLink');
menu.forEach(menu => {
    menu.addEventListener('click', function() {
        menu.forEach(btn => btn.classList.remove('activeNav'));
        this.classList.add('activeNav');
    })
})