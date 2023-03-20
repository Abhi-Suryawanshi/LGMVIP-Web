// add task
document.getElementById("add-task-form").addEventListener("submit", function(event) {
	event.preventDefault();
	var newTaskInput = document.getElementById("new-task-input");
	
	if (newTaskInput.value.trim() === "") {
		alert("Please enter a task!");
		return;
	}
	var newTaskText = newTaskInput.value.trim();
	newTaskInput.value = "";
	var newTask = document.createElement("li");
	newTask.innerHTML = "<span>" + newTaskText + "</span><button class='delete-button'>Delete</button>";
	document.querySelector(".task-list").appendChild(newTask);
});

// delete task
document.addEventListener("click", function(event) {
	if (event.target.classList.contains("delete-button")) {
		event.target.parentNode.remove();
	}
});
