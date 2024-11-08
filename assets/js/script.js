let selectedBundle = null;

function toggleBundle(bundle) {
    const bundles = document.querySelectorAll('.bundle-option');
    bundles.forEach(b => {
        const radio = b.querySelector('input[type="radio"]');
        if (b !== bundle) {
            b.classList.remove('selected');
            radio.checked = false;
        }
    });
    bundle.classList.toggle('selected');
    const radio = bundle.querySelector('input[type="radio"]');
    radio.checked = bundle.classList.contains('selected');
    selectedBundle = bundle.classList.contains('selected') ? bundle : null;

    // Update total price
    updateTotalPrice();
}

function updateTotalPrice() {
    const totalPriceElement = document.getElementById("totalPrice");
    if (selectedBundle) {
        const price = selectedBundle.getAttribute("data-price");
        totalPriceElement.textContent = `Total: DKK ${price}`;
    } else {
        totalPriceElement.textContent = "Total: DKK 0.00";
    }
}

function addToCart() {
    if (selectedBundle) {
        const pairLabel = selectedBundle.querySelector('.pair-label').textContent;
        alert(`${pairLabel} added to cart successfully!`);
    } else {
        alert("Please select a bundle option to add to cart.");
    }
}