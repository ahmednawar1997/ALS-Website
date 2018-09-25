$(document).ready(function(){
    $("#OverviewButton").click(function(){
        $('#list-tab a').removeClass('active');
        $("#OverviewButton").addClass('active');
          $('#OverviewTab').css("display", "block");
          $('#SeniorTab').css("display", "none");
          $('#JuniorTab').css("display", "none");
           $('#MiddleTab').css("display", "none");
          $('#pagingBar').text("Overview");
    });
  });
  
  $(document).ready(function(){
    $("#JuniorButton").click(function(){
        $('#list-tab a').removeClass('active');
        $("#JuniorButton").addClass('active');
        $('#OverviewTab').css("display", "none");
          $('#SeniorTab').css("display", "none");
          $('#JuniorTab').css("display", "block");
           $('#MiddleTab').css("display", "none");
          $('#pagingBar').text("Junior");
    });
  });
  
  $(document).ready(function(){
    $("#admissionButton").click(function(){
        $('#list-tab a').removeClass('active');
        $("#admissionButton").addClass('active');
        $('#requirementsTab').css("display", "none");
        $('#applyNowTab').css("display", "none");
        $('#admissionProcessTab').css("display", "block");
        $('#pagingBar').text("Admission Process");
   
    });
  });