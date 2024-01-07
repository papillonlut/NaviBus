function updateChrono(startDate, name) {
    const now = new Date();
    const elapsedTime = now - startDate;

    const days = Math.floor(elapsedTime / (24 * 60 * 60 * 1000));
    const hours = Math.floor((elapsedTime % (24 * 60 * 60 * 1000)) / (60 * 60 * 1000));
    const minutes = Math.floor((elapsedTime % (60 * 60 * 1000)) / (60 * 1000));
    const seconds = Math.floor((elapsedTime % (60 * 1000)) / 1000);

    document.getElementById('chrono-title').innerHTML = name;
    document.getElementById('chrono-time').innerHTML = `Il y a ${days} jours, <br> ${hours} h et ${minutes} min`;
}

function updateCountdown(targetDate, name) {
    const now = new Date();
    const timeLeft = targetDate - now;

    const days = Math.floor(timeLeft / (24 * 60 * 60 * 1000));
    const hours = Math.floor((timeLeft % (24 * 60 * 60 * 1000)) / (60 * 60 * 1000));
    const minutes = Math.floor((timeLeft % (60 * 60 * 1000)) / (60 * 1000));
    const seconds = Math.floor((timeLeft % (60 * 1000)) / 1000);

    document.getElementById('countdown-title').innerHTML = name;
    document.getElementById('countdown-time').innerHTML = `Dans ${days} jours, <br> ${hours} h et ${minutes} min`;
}

function fetchData() {
    fetch('https://api.npoint.io/e7f2325779c4d9374dc7')
    .then(response => response.json())
    .then(data => {
        const chronoDate = new Date(data.chrono.date);
        const countdownDate = new Date(data.countdown.date);
        const chronoName = data.chrono.name;
        const countdownName = data.countdown.name;

        updateChrono(chronoDate, chronoName);
        updateCountdown(countdownDate, countdownName);
    })
    .catch(error => console.error('Erreur lors de la récupération des données de l\'API', error));
}

setInterval(() => {
    fetchData();
}, 1000);
fetchData();