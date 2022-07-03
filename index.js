let form_str = new URLSearchParams(window.location.search);

let to = form_str.get("to");
let address = form_str.get("address");
let csc = form_str.get("csc");
let pincode = form_str.get("pincode");
let date = form_str.get("date");
let salutation = form_str.get("salutation");
let receiver = form_str.get("receiver");
let body = form_str.get("body");
let esalutation = form_str.get("esalutation");
let yname = form_str.get("yname");
let ydesignation = form_str.get("ydesignation");
let yemail = form_str.get("yemail");

document.getElementById("letter").innerHTML = `

<strong>To</strong> <br>
<strong>${to},</strong><br>
<strong>${address},</strong><br>
<strong>${csc},</strong><br>
<strong>PINCODE- ${pincode}.</strong><br>
<br>
<strong>Date:</strong> ${date}<br>
<br>
<strong>${salutation} ${receiver},</strong><br>
${body}<br>
<br>
<strong>${esalutation},</strong><br>
<strong>${yname},</strong><br>
<strong>${ydesignation},</strong><br>
<strong>Email: ${yemail}</strong><br>

`;
