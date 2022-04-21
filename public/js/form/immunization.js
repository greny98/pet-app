// TODO-HA: send form value immunization to server
window.onload = () => {
  const petId = location.href.split('/')[4];
  const submit_btn = document.getElementById('submit-btn');

  submit_btn.onclick = async () => {
    const data = ['immunization-date', 'immunization-medicine'];
    const [date, vaccine] = data.map(e => document.getElementById(e).value);
    await axios.post(`/immunization/${petId}`, {
      date,
      vaccine,
    });
    location.href = `/pet/${petId}`;
  };
};
