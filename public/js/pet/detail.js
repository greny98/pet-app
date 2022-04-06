window.onload = () => {
  // fill value for customer form
  // select table
  const tableHistory = document.getElementById('table-history');
  const tableImmunization = document.getElementById('table-immunization');
  const tableDeworm = document.getElementById('table-deworm');
  // select button
  const btnHistory = document.getElementById('btn_history');
  const btnImmunization = document.getElementById('btn_immunization');
  const btnDeworm = document.getElementById('btn_deworm');

  const activeTable = (activeTag, deactiveTag1, deactiveTag2) => {
    // Hidden tag
    deactiveTag1.classList.add('d-none');
    deactiveTag2.classList.add('d-none');
    // Display tag
    activeTag.classList.remove('d-none');
    activeTag.classList.add('d-block');
  };

  btnImmunization.onclick = () => activeTable(tableImmunization, tableHistory, tableDeworm);
  btnDeworm.onclick = () => activeTable(tableDeworm, tableHistory, tableImmunization);
  btnHistory.onclick = () => activeTable(tableHistory, tableImmunization, tableDeworm);
};
