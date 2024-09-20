/*************************************************
Code by Adeem Amir
*************************************************/
document.getElementById('showAlert').onclick = function() {
    document.getElementById('customAlert').style.display = 'block';
}

document.querySelector('.close').onclick = function() {
    document.getElementById('customAlert').style.display = 'none';
}

document.getElementById('confirm').onclick = function() {
    const isChecked = document.getElementById('termsCheckbox').checked;
    if (isChecked) {
        alert('You agreed to the terms!');
    } else {
        alert('You did not agree to the terms.');
    }
    document.getElementById('customAlert').style.display = 'none';
}

// Close modal when clicking outside of it
window.onclick = function(event) {
    const modal = document.getElementById('customAlert');
    if (event.target == modal) {
        modal.style.display = 'none';
    }
}
