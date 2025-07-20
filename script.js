
document.addEventListener("DOMContentLoaded", () => {
  const params = new URLSearchParams(window.location.search);
  const licenceNo = params.get("licence");

  if (!licenceNo) {
    document.getElementById("license-info").innerHTML =
      "<p>No licence number provided in URL.</p>";
    return;
  }

  fetch("licenses.json")
    .then((res) => res.json())
    .then((data) => {
      const license = data.find((lic) => lic.licence_no === licenceNo);
      if (!license) {
        document.getElementById("license-info").innerHTML =
          "<p>Licence not found.</p>";
        return;
      }

      document.getElementById("license-info").innerHTML = `
        <h2>${license.name}</h2>
        <p><strong>Date of Birth:</strong> ${license.dob}</p>
        <p><strong>Blood Group:</strong> ${license.blood_group}</p>
        <p><strong>Father:</strong> ${license.father}</p>
        <p><strong>Issue Date:</strong> ${license.issue}</p>
        <p><strong>Validity:</strong> ${license.validity}</p>
        <p><strong>Licence No:</strong> ${license.licence_no}</p>
        <p><strong>Issuing Authority:</strong> ${license.issuing_authority}</p>
        <p><strong>Address:</strong> ${license.address}</p>
        <p><strong>Class(es):</strong> ${license.classes}</p>
      `;
    });
});
