// TODO-HA: send form value deworming to server
window.onload = () => {
  const petId = location.href.split('/')[4];
  const submit_btn = document.getElementById('submit-btn');

  submit_btn.onclick = async () => {
    const date = document.getElementById('deworming-date').value;
    await axios.post(`/deworming/${petId}`, {
      date,
    });
    location.href = `/pets/${petId}`;
  };
};
