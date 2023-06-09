var studentForm = document.getElementById("studentForm");
var studentTable = document.getElementById("studentTable");
var tbody = studentTable.querySelector("tbody");
var editForm = document.getElementById("editForm");
var editName = document.getElementById("editName");
var editAge = document.getElementById("editAge");
var editIndex;

studentForm.addEventListener("submit", function(event) {
  event.preventDefault();

  var name = document.getElementById("name").value;
  var age = document.getElementById("age").value;

  var newRow = document.createElement("tr");
  newRow.innerHTML = `
    <td>${name}</td>
    <td>${age}</td>
    <td><button class="delete">Delete</button></td>
    <td><button class="edit">Edit</button></td>
  `;

  tbody.appendChild(newRow);
  studentForm.reset();
});

tbody.addEventListener("click", function(event) {
  if (event.target.classList.contains("delete")) {
    event.target.parentElement.parentElement.remove();
  } else if (event.target.classList.contains("edit")) {
    var row = event.target.parentElement.parentElement;
    var name = row.cells[0].innerText;
    var age = row.cells[1].innerText;
    editName.value = name;
    editAge.value = age;
    editIndex = row.rowIndex;
    editForm.style.display = "block";
  }
});

editForm.addEventListener("submit", function(event) {
  event.preventDefault();

  var newName = editName.value;
  var newAge = editAge.value;

  var row = tbody.rows[editIndex - 1];
  row.cells[0].innerText = newName;
  row.cells[1].innerText = newAge;

  editForm.style.display = "none";
  editForm.reset();
});
