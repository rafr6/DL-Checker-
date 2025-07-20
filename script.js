
document.addEventListener("DOMContentLoaded", () => {
    const params = new URLSearchParams(window.location.search);
    const licence = params.get("licence");

    const data = {
        "DK0897294CH0874": {
            name: "Ajharul Islam",
            dob: "10 March 2000",
            blood: "O+",
            father: "Azizul Haque",
            issue: "01 January 2024",
            validity: "01 January 2030",
            licenceNo: "DK0897294CH0874",
            authority: "BRTA Dhaka Metro",
            address: "Mirpur-1, Dhaka, Bangladesh",
            classes: "Light Motor Vehicle"
        }
    };

    const container = document.getElementById("result");

    if (licence && data[licence]) {
        const d = data[licence];
        container.innerHTML = `
            <p><strong>Name:</strong> ${d.name}</p>
            <p><strong>Date of Birth:</strong> ${d.dob}</p>
            <p><strong>Blood Group:</strong> ${d.blood}</p>
            <p><strong>Father:</strong> ${d.father}</p>
            <p><strong>Issue Date:</strong> ${d.issue}</p>
            <p><strong>Validity:</strong> ${d.validity}</p>
            <p><strong>Licence No:</strong> ${d.licenceNo}</p>
            <p><strong>Issuing Authority:</strong> ${d.authority}</p>
            <p><strong>Address:</strong> ${d.address}</p>
            <p><strong>Class(es):</strong> ${d.classes}</p>
        `;
    } else {
        container.innerHTML = "<p style='color:red;'>Licence not found.</p>";
    }
});
