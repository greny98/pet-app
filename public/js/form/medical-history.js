// TODO-HA: send form value medical history to server
window.onload = () => {
  const submit_btn = document.getElementById('submit-btn');
  const petId = location.href.split('/')[4];

  submit_btn.onclick = async () => {
    const medHistoryData = ['medical-date', 'medical-diagnosis'];
    const [date, diagnosis] = medHistoryData.map(e => document.getElementById(e).value);

    await axios.post(`/medicalHistories/${petId}`, {
      date,
      diagnosis,
    });
    location.href = `/pets/${petId}`;
  };
};
