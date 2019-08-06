
export default {
    saveToStorage,
    loadFromStorage,
    formatTime
}

export function saveToStorage(key, value) {
    var str = JSON.stringify(value);
    localStorage.setItem(key, str);
}

export function loadFromStorage(key) {
    var str = localStorage.getItem(key);
    if (!str) return undefined;
    return JSON.parse(str);
}

function formatTime(time){
    var hour = new Date(time).getHours();
    //hour += 2; //offset
    var minute = new Date(time).getMinutes();
    var seconds = new Date(time).getSeconds();
    var day = new Date(time).getDate();
    var month = new Date(time).getMonth() + 1;
    var year = new Date(time).getFullYear();
    return day + '/' + month + '/' + year + '  ' + _pad(hour) + ':' + _pad(minute) + ':' + _pad(seconds);
}
function _pad(n) {
    return n < 10 ? '0' + n : n;
}