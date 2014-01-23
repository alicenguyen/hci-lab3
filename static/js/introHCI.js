'use strict';

// Call this function when the page loads (the "ready" event)
$(document).ready(function() {
    initializePage();
})

/*
 * Function that is called when the document is ready.
 */
function initializePage() {
    $("#testjs").click(function(e) {
        $('.jumbotron h1').text("Experience Chan! It's not a lot of questions. Too many questions is the Chan disease. The best way is just to observe the noise of the world. The answer to your questions? Ask your own heart.");
        $("#testjs").text("Please wait...");
        $(".jumbotron p").toggleClass("active");
    });
    // Add any additional listeners here
    // example: $("#div-id").click(functionToCall);
    $("a.thumbnail").click(projectClick);

    $("#submitBtn").click(updateProject);
}

function updateProject(e) {
   var projectID = $('#project').val();
   $(projectID).animate({
      width: $('#width').val()
   });

   var newText = $('#description').val();
   $(projectID + " .project-description").text(newText);
}


function projectClick(e) {
    // Cancel the default action, which prevents the page from reloading
    e.preventDefault();

    // In an event listener, $(this) is the leement that fired the event
    var projectTitle = $(this).find("p").text();
    console.log('projectTitle is ' + projectTitle);
    $('.jumbotron h1').text(projectTitle);

    var containingProject = $(this).closest(".project"); 
        var description = $(containingProject).find(".project-description");
    if (description.length == 0) { 
        $(containingProject).append("<div class='project-description'><p>Description of the project.</p></div>"); 
    } else { 
        if($(description).is(":visible")) 
            description.fadeOut();
        else
            description.fadeIn();
    }
}



