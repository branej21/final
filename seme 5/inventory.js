// script.js
const compareButtons = document.querySelectorAll('.compare-btn');
const comparisonTable = document.getElementById('comparison-table');

let selectedVehicles = [];

// Sample vehicle data (can be dynamically loaded from a backend)
const vehicleData = {
    1: { name: 'Toyota Camry', year: 2021, price: '$25,000', mpg: '28/39' },
    2: { name: 'Honda Accord', year: 2022, price: '$26,500', mpg: '30/38' },
    3: { name: 'Ford Fusion', year: 2020, price: '$22,000', mpg: '25/34' },
};

function updateComparison() {
    if (selectedVehicles.length === 0) {
        comparisonTable.innerHTML = `<p>Select vehicles to compare.</p>`;
        return;
    }

    let headers = `
        <div><strong>Model</strong></div>
        <div><strong>Year</strong></div>
        <div><strong>Price</strong></div>
        <div><strong>MPG</strong></div>
    `;
    let rows = selectedVehicles.map(id => {
        let vehicle = vehicleData[id];
        return `
            <div>${vehicle.name}</div>
            <div>${vehicle.year}</div>
            <div>${vehicle.price}</div>
            <div>${vehicle.mpg}</div>
        `;
    }).join("");

    comparisonTable.innerHTML = `
        <div class="grid-container">
            ${headers}
            ${rows}
        </div>
    `;
}

compareButtons.forEach(button => {
    button.addEventListener('click', () => {
        let vehicleId = button.dataset.id;

        if (selectedVehicles.includes(vehicleId)) {
            selectedVehicles = selectedVehicles.filter(id => id !== vehicleId);
            button.textContent = "Compare";
        } else {
            if (selectedVehicles.length < 2) {
                selectedVehicles.push(vehicleId);
                button.textContent = "Remove";
            } else {
                alert("You can only compare 2 vehicles at a time.");
            }
        }

        updateComparison();
    });
});
