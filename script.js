// Show modal on page load
window.addEventListener('load', () => {
  const modal = document.getElementById('email-modal');
  modal.style.display = 'block'; // Show popup
});

// Close modal button
document.getElementById('close-modal').addEventListener('click', () => {
  document.getElementById('email-modal').style.display = 'none'; // Hide popup
});
