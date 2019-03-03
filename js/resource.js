$(document).ready(function () {
    $("#OverviewButton").click(function () {
      $('#list-tab button').removeClass('active');
      $('#list-tab button').removeClass('btn-secondary');
      $('#list-tab button').addClass('btn-danger');
      $('#list-tab a').removeClass('active');
      $('#OverviewButton').removeClass('btn-danger');
      $('#OverviewButton').addClass('btn-secondary');
      $("#OverviewButton").addClass('active');
      $('#OverviewTab').css("display", "block");
      $('#SeniorTab').css("display", "none");
      $('#JuniorTab').css("display", "none");
      $('#MiddleTab').css("display", "none");
      $('#pagingBar').text("Submissions");
    });
  });
  
  $(document).ready(function () {
    $("#JuniorButton").click(function () {
      $('#list-tab button').removeClass('active');
      $('#list-tab button').removeClass('btn-secondary');
      $('#list-tab button').addClass('btn-danger');
      $('#JuniorButton').removeClass('btn-danger');
      $('#JuniorButton').addClass('btn-secondary');
      $('#list-tab a').removeClass('active');
      $("#JuniorButton").addClass('active');
      $('#OverviewTab').css("display", "none");
      $('#SeniorTab').css("display", "none");
      $('#JuniorTab').css("display", "block");
      $('#MiddleTab').css("display", "none");
      $('#pagingBar').text("Complaints");
    });
  });
  
  $(document).ready(function () {
    $("#MiddleButton").click(function () {
      $('#list-tab button').removeClass('active');
      $('#list-tab button').removeClass('btn-secondary');
      $('#list-tab button').addClass('btn-danger');
      $('#MiddleButton').removeClass('btn-danger');
      $('#MiddleButton').addClass('btn-secondary');
      $('#list-tab a').removeClass('active');
      $("#MiddleButton").addClass('active');
      $('#OverviewTab').css("display", "none");
      $('#SeniorTab').css("display", "none");
      $('#JuniorTab').css("display", "none");
      $('#MiddleTab').css("display", "block");
      $('#pagingBar').text("Survey");
  
    });
  });
  
  
  $(document).ready(function () {
    $("#SeniorButton").click(function () {
      $('#list-tab button').removeClass('active');
      $('#list-tab button').removeClass('btn-secondary');
      $('#list-tab button').addClass('btn-danger');
      $('#SeniorButton').removeClass('btn-danger');
      $('#SeniorButton').addClass('btn-secondary');
      $('#list-tab a').removeClass('active');
      $("#SeniorButton").addClass('active');
      $('#OverviewTab').css("display", "none");
      $('#SeniorTab').css("display", "block");
      $('#JuniorTab').css("display", "none");
      $('#MiddleTab').css("display", "none");
      $('#pagingBar').text("Resources");
  
    });
  });
  