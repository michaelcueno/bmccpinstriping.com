$(document).ready(() => {
  console.log('running');
  const popover = document.getElementById('fullscreenPopover');

  // Show the popover
  popover.style.display = 'flex';

  // Hide the popover after 2 seconds
  setTimeout(function() {
   popover.classList.add('fade-out');
  }, 2000);
});
