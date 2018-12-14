$(document).ready(function(){
    $("#requirementsButton").click(function(){
        $('#list-tab a').removeClass('active');
        $("#requirementsButton").addClass('active');
          $('#requirementsTab').css("display", "block");
          $('#applyNowTab').css("display", "none");
          $('#admissionProcessTab').css("display", "none");
          $('#pagingBar').text("Requirements");
    });
  });
  
  $(document).ready(function(){
    $("#applyNowButton").click(function(){
        $('#list-tab a').removeClass('active');
        $("#applyNowButton").addClass('active');
        $('#requirementsTab').css("display", "none");
        $('#applyNowTab').css("display", "block");
        $('#admissionProcessTab').css("display", "none");
        $('#pagingBar').text("Apply Now");
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