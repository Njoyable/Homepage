const listContainer = document.getElementById('list-container');

fetch('ha_spots.csv')
  .then(response => response.text())
  .then(data => {
    const rows = data.split('\n');
    listContainer.innerHTML = '';
    rows.forEach(row => {
      const li = document.createElement('li');
      li.textContent = row.trim();
      listContainer.appendChild(li);
    });
  })
  .catch(error => console.error(error));
