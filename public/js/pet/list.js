window.onload = () => {
  // Select row and set click
  const row_btn = document.querySelectorAll('tbody > tr');
  row_btn.forEach(btn => {
    const id = btn.getAttribute('accesskey');
    btn.onclick = () => {
      location.href = `/pets/${id}`;
    };
  });
};
