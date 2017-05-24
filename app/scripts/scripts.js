$(document).ready(function() {

	$('#newTaskForm').hide();

	//create array for todo list
	var listo = [];

	var Task = function(task) {
		this.task = task;
		this.id = 'new';
	};

	//STEP 4 - Starting, Finishing, and Deleting Tasks
	//would have been added after //Closes form// section
	var advanceTask = function(task) {
		var modified = task.innerText.trim()
		for(var i = 0; i < listo.length; i++) {
			if(listo[i].task === modified) {
				if(listo[i].id === 'new') {
					list[i].id = 'inProgress';	
				} else if(listo[i].id === 'inProgress') {
					listo[i].id = 'archived';
				} else {
					listo.splice(i, 1);
				}
				break;
			}
		}
		task.remove();
	};

	var addTask = function(task) {
		if(task) {
			task = new Task(task);
			listo.push(task);

			$('#newItemInput').val('');
				$('#newList').append(
					'<a href="#finish" class="" id="item">' +
					'<li class="List-group-item">' +
					'<h3>' + task.task + '</h3>' +
					'<span class="arrow pull-right">' +
					'<i class="glyphicon glyphicon-arrow-right">' +
					'</span>' +
					'</li>' +
					'</a>'
				);
		}
		$('#newTaskForm').slideToggle('fast', 'linear');
	};



	//////// Adding to LOCAL STORAGE ////////

	// $(document).ready(function() {
 //    	$(window).unload(saveSettings);
 //    	loadSettings();
	// });

	//Saves new item
	$('#saveNewItem').on('click', function (e) {
		e.preventDefault();
		var task = $('#newItemInput').val().trim();
		addTask(task);
	});

	//Opens form
	$('add-todo').on('click', function() {
		$('#newTaskForm').fadeToggle('fast', 'linear');
	});

	//Closes form
	$('#cancel').on('click', function(e) {
		e.preventDefault();
		$('#newTaskForm').fadeToggle('fast', 'linear');
	});

	//change status of an item from 'new' 'inProgress'
	$(document).on('click', '#item', function(e) {
		e.preventDefault();
		var task = this;
		advanceTask(task);
		this.id = 'inProgress';
		$('#currentList').append(this.outerHTML);
	
	});

	//Move from inProgress to archived
	$(document).on('click', '#inProgress', function(e) {
		e.preventDefault();
		var task = this;
		task.id = "archived";
		var changeIcon = task.outerHTML.replace('glyphicon-arrow-right', 'glyphicon-remove');
		advanceTask(task);
		$('#archivedList').append(changeIcon);
	});

	//DELETE items
	$(document).on('click', '#archived', function(e) {
		e.preventDefault();
		var task = this;
		advanceTask(task);
	});


})
//end
















