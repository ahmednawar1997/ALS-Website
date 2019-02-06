$(document).ready(function(){
    $("#requirementsButton").click(function(){
        $('#list-tab button').removeClass('active');
        $('#list-tab button').removeClass('btn-secondary');
        $('#list-tab button').addClass('btn-danger')
        $("#requirementsButton").addClass('active');
        $("#requirementsButton").removeClass('btn-danger');
        $("#requirementsButton").addClass('btn-secondary');
          $('#requirementsTab').css("display", "block");
          $('#applyNowTab').css("display", "none");
          $('#admissionProcessTab').css("display", "none");
          $('#pagingBar').text("Requirements");
          $('#title').text("Requirements");
    });
  });
  
  $(document).ready(function(){
    $("#applyNowButton").click(function(){
        $('#list-tab button').removeClass('active');
        $('#list-tab button').removeClass('btn-secondary');
        $('#list-tab button').addClass('btn-danger');
        $("#applyNowButton").addClass('active');
        $("#applyNowButton").removeClass('btn-danger');
        $("#applyNowButton").addClass('btn-secondary');
        $('#requirementsTab').css("display", "none");
        $('#applyNowTab').css("display", "block");
        $('#admissionProcessTab').css("display", "none");
        $('#pagingBar').text("Apply Now");
        $('#title').text("Apply Now");
    });
  });
  
  $(document).ready(function(){
    $("#admissionButton").click(function(){
        $('#list-tab button').removeClass('active');
        $('#list-tab button').removeClass('btn-secondary');
        $('#list-tab button').addClass('btn-danger');
        $("#admissionButton").addClass('active');
        $("#admissionButton").removeClass('btn-danger');
        $("#admissionButton").addClass('btn-secondary');
        $('#requirementsTab').css("display", "none");
        $('#applyNowTab').css("display", "none");
        $('#admissionProcessTab').css("display", "block");
        $('#pagingBar').text("Admission Process");
        $('#title').text("Admission Process");
   
    });
  });