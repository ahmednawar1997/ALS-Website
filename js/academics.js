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
    $('#pagingBar').text("Overview");
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
    $('#pagingBar').text("Junior");
  });
});

$(document).ready(function () {
  $("#admissionButton").click(function () {
    $('#list-tab button').removeClass('active');
    $('#list-tab button').removeClass('btn-secondary');
    $('#list-tab button').addClass('btn-danger');
    $('#admissionButton').removeClass('btn-danger');
    $('#admissionButton').addClass('btn-secondary');
    $('#list-tab a').removeClass('active');
    $("#admissionButton").addClass('active');
    $('#requirementsTab').css("display", "none");
    $('#applyNowTab').css("display", "none");
    $('#admissionProcessTab').css("display", "block");
    $('#pagingBar').text("Admission Process");

  });
});