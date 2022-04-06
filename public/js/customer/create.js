window.onload = () => {
  const create_customer_btn = document.getElementById('create_customer_btn');

  async function createCustomer() {
    const info = ['name', 'fullname', 'phone', 'address'];
    const [name, fullname, phone, address] = info.map(elm => document.getElementById(elm).value);
    await axios.post('/customers', {
      name,
      fullname,
      phone,
      address,
    });
    location.href = '/customers';
  }

  create_customer_btn.onclick = createCustomer;
};
