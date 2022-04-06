window.onload = () => {
  // select create_btn and set click navigate
  function navigate() {
    location.href = '/customers/create';
  }
  const navigate_create_btn = document.getElementById('navigate_create_btn');
  navigate_create_btn.onclick = navigate;

  // select table row and set click
  const row_btn = document.querySelectorAll('tbody > tr');
  row_btn.forEach(btn => {
    const id = btn.getAttribute('accesskey');
    btn.onclick = () => {
      location.href = `/customers/${id}`;
    };
  });
};
