$(function() { 
    var tooltipTriggerList = [].slice.call( 
        document.querySelectorAll('[data-bs-toggle="tooltip"]') 
    ); 
    tooltipTriggerList.map(function(tooltipTriggerEl) { 
        return new bootstrap.Tooltip(tooltipTriggerEl); 
    }); 
});

$(function(){
    $("#enviarCorreo").click(function(){
        var text = "El correo fue enviado correctamente..."
        alert(text);
    });
});

$(document).ready(function(){
    $("#ingredientes").on("dblclick", function(){
      $("#ingredientes").addClass("rojito");
    });

    $("#preparacion").on("dblclick", function(){
      $("#preparacion").addClass("rojito");
    });

    $(".titulo").click(function(){
        $(".parrafo").toggle();
    });
  });
