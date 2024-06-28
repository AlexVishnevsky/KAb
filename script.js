let kabCounter = 0;
const kabList = document.getElementById('kab-list');

function startKabVisualization() {
    kabCounter++;
    const kabId = `kab${kabCounter}`;
    const kabDuration = kabCounter === 1 ? 4 * 60 : Math.floor(Math.random() * 7 + 4) * 60; // Випадковий час від 4 до 10 хвилин
    const kabStartHeight = ((kabDuration + 30) / 60) * 10000; // Висота спавну базується на тривалості в хвилинах плюс 30 секунд

    const kab = document.createElement('div');
    kab.id = kabId;
    kab.className = 'kab';
    kab.style.top = `${100 - (kabStartHeight / 10000) * 100}%`;
    kab.style.left = '0px';
    kab.style.transition = 'top 1s linear, left 1s linear, transform 1s linear';
    document.getElementById('visualization').appendChild(kab);

    const kabListItem = document.createElement('li');
    kabListItem.id = `kab-list-item-${kabId}`;
    kabListItem.innerHTML = `КАБ ${kabCounter}: <span>${formatTime(kabDuration - 30
