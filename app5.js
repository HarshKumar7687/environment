// Function to calculate and display total waste and profit on the checkout page
window.onload = function() {
    let totalWaste = 0;
    let totalProfit = 0;

    const wasteList = document.getElementById('waste-list');
    wasteList.innerHTML = ''; // Clear previous list

    // List of waste types to be retrieved from localStorage
    const wasteTypes = [
        'greenWaste', 'foodWaste', 'paperWaste', 'biodegradablePlastic', 'sewage', 'manure', 
        'plastic', 'glass', 'metals', 'thermocol', 'polymer', 'carbonPaper', 'battery', 
        'mobile', 'laptops', 'television', 'fans', 'ac', 'cleaning', 'acids', 'bases', 
        'metalFinishing', 'painting', 'medicalWastes', 'mining', 'electricity', 
        'reprocessing', 'nuclear'
    ];

    wasteTypes.forEach(type => {
        const quantity = parseInt(localStorage.getItem(type + 'Quantity')) || 0;
        const price = parseInt(localStorage.getItem(type + 'Price')) || 0;

        if (quantity > 0) {
            // Add each waste type that has been added with a remove button
            const wasteItem = document.createElement('div');
            wasteItem.classList.add('waste-item');
            wasteItem.innerHTML = `
                <span>${type.replace(/([A-Z])/g, ' $1').trim()}: ${quantity} tonnes</span>
                <span>Price: ₹${price}</span>  <!-- Updated to ₹ symbol -->
                <button class="remove-btn" data-type="${type}">Remove</button>
            `;
            wasteList.appendChild(wasteItem);

            totalWaste += quantity;
            totalProfit += quantity * price;
        }
    });

    // Display the total waste and profit on the checkout page
    document.getElementById('total-waste').innerText = totalWaste;
    document.getElementById('total-profit').innerText = `₹${totalProfit.toLocaleString()}`; // Display profit in rupees with ₹ symbol

    // Add event listeners to the remove buttons
    const removeButtons = document.querySelectorAll('.remove-btn');
    removeButtons.forEach(button => {
        button.addEventListener('click', function() {
            const wasteType = this.getAttribute('data-type');
            localStorage.removeItem(wasteType + 'Quantity');
            localStorage.removeItem(wasteType + 'Price');
            window.location.reload(); // Reload the page to update the waste list
        });
    });
};

// Logic for handling waste type submissions on individual waste type pages
const submitButtons = document.querySelectorAll('.submit');
submitButtons.forEach(button => {
    button.addEventListener('click', function() {
        const item = this.parentElement;
        const wasteType = item.getAttribute('data-name');
        const price = parseInt(item.getAttribute('data-price'));
        const quantity = parseInt(item.querySelector('.quantity').innerText);

        // Store quantity and price in localStorage
        localStorage.setItem(wasteType + 'Quantity', quantity);
        localStorage.setItem(wasteType + 'Price', price);

        alert('Data for ' + wasteType + ' saved!');
    });
});

// Quantity increment and decrement buttons logic
const minusButtons = document.querySelectorAll('.minus-btn');
const plusButtons = document.querySelectorAll('.plus-btn');

minusButtons.forEach(button => {
    button.addEventListener('click', function() {
        const quantityElement = this.nextElementSibling;
        let quantity = parseInt(quantityElement.innerText);
        if (quantity > 0) {
            quantity -= 1;
            quantityElement.innerText = quantity;
        }
    });
});

plusButtons.forEach(button => {
    button.addEventListener('click', function() {
        const quantityElement = this.previousElementSibling;
        let quantity = parseInt(quantityElement.innerText);
        quantity += 1;
        quantityElement.innerText = quantity;
    });
});
