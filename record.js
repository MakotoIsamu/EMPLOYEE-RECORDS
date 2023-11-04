// Function to add a new row to the table
function addRow() {
  // Get input values
  const name = document.getElementById("name").value;
  const employeeID = document.getElementById("employeeID").value;
  const department = document.getElementById("department").value;
  const experience = parseInt(document.getElementById("exp").value);
  const email = document.getElementById("email").value;
  const mobile = document.getElementById("mbl").value;

  // Calculate the role based on experience
  let role = "";
  if (experience > 5) {
    role = "Senior";
  } else if (experience >= 2 && experience <= 5) {
    role = "Junior";
  } else {
    role = "Fresher";
  }

  // Create a new table row
  const table = document.querySelector("table tbody");
  const newRow = table.insertRow(-1);

  // Create cells for the new row
  const nameCell = newRow.insertCell(0);
  const employeeIDCell = newRow.insertCell(1);
  const departmentCell = newRow.insertCell(2);
  const experienceCell = newRow.insertCell(3);
  const emailCell = newRow.insertCell(4);
  const mobileCell = newRow.insertCell(5);
  const roleCell = newRow.insertCell(6);
  const deleteCell = newRow.insertCell(7);

  // Set cell values
  nameCell.innerHTML = name;
  employeeIDCell.innerHTML = employeeID;
  departmentCell.innerHTML = department;
  experienceCell.innerHTML = experience;
  emailCell.innerHTML = email;
  mobileCell.innerHTML = mobile;
  roleCell.innerHTML = role;

// Create a delete button and attach a click event listener
const deleteButton = document.createElement("button");
deleteButton.innerText = "Delete";
deleteButton.addEventListener("click", function () {
  if (newRow.rowIndex > 0) { // Check if it's not the header row
    newRow.remove(); // Remove the row directly
  }
});

  // Add the delete button to the delete cell
  deleteCell.appendChild(deleteButton);

  // Reset the form
  document.querySelector("form").reset();
}

// Add an event listener to the form submit button
document.querySelector("form").addEventListener("submit", function (e) {
  e.preventDefault(); // Prevent the default form submission
  addRow(); // Call the addRow function
});
