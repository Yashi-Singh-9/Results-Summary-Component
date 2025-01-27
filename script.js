document.addEventListener('DOMContentLoaded', () => {
  fetch('data.json')
    .then((response) => response.json())
    .then((data) => {
      const summaryList = document.querySelector('.summary-list');
      const totalScore = data.reduce((sum, item) => sum + item.score, 0) / data.length;
      document.querySelector('.average h1').textContent = Math.round(totalScore);

      data.forEach((item) => {
        const listItem = document.createElement('li');
        listItem.className = `summary-item ${item.category.toLowerCase()}`;
        listItem.innerHTML = `
          <div class="item-info">
            <img src="${item.icon}" alt="${item.category} icon">
            ${item.category}
          </div>
          <p><span>${item.score}</span> / 100</p>
        `;
        summaryList.appendChild(listItem);
      });
    })
    .catch((error) => console.error('Error loading data:', error));
});
