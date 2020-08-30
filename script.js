const availableHours = [
    {
      time: "8am",
      meeting: "",
    },
    {
      time: "9am",
      meeting: "",
    },
    {
      time: "10am",
      meeting: "",
    },
    {
      time: "11am",
      meeting: "",
    },
    {
      time: "12pm",
      meeting: "",
    },
    {
      time: "1pm",
      meeting: "",
    },
    {
      time: "2pm",
      meeting: "",
    },
    {
      time: "3pm",
      meeting: "",
    },
    {
      time: "4pm",
      meeting: "",
    },
    {
      time: "5pm",
      meeting: "",
    },
  ];
  
  $(document).ready(function () {
    // Let us set today's date at the top of the calendar
    var calendarItems = JSON.parse(localStorage.getItem("myschedule"));
  
    // If there is nothing in local storage, start with a fresh calendar defined above
    if (!calendarItems) {
      calendarItems = availableHours;
    }
  
    // Inject today's date to the top of the screen
    document.getElementById("Today").innerHTML = moment(new Date()).format(
      "MM/DD/YYYY h:mma"
    );
  
    // Loop through our hours array and inject in to the DOM
    calendarItems.forEach(function (hour) {
      $(
        "#timeBlocks"
      ).append(`<div class="row calendarTimeBlock" data-hour="${hour.time}" data-toggle="modal" data-target="#exampleModal">
      <div class="col">
        <div class="hour">${hour.time}</div>
        <div class="meetingName">${hour.meeting || ""}</div>
      </div>
    </div>`);
    });
  
    // Click handler for hour blocksz
    $(".calendarTimeBlock").click(function (e) {
      $("#meetingTime").text($(this).attr("data-hour"));
      $("#scheduler").modal({
        options: {
          show: true,
        },
      });
    });
  
    // Save to local storage and refresh the page
    $("#savemeeting").click(function () {
      const time = $("#meetingTime").text();
      const title = $("#meetingTitle").val();
      const currentCalendar =
        JSON.parse(localStorage.getItem("myschedule")) || availableHours;
  
      currentCalendar.map(function (item) {
        if (item.time === time) {
          item.meeting = title;
        }
      });
      localStorage.setItem("myschedule", JSON.stringify(currentCalendar));
      location.reload();
    });
  
    // Check for items in the past, and future
    $(".calendarTimeBlock").map(function () {
      var timeBlock = $(this).attr("data-hour");
      var justHour = timeBlock.replace(/\D/g, "");
      var justTime = timeBlock.replace(/[0-9]/g, "").toUpperCase();
      var now = moment(new Date())
        .utcOffset("-05:00")
        .format("MM/DD/YYYY h:mm A");
      var justDate = moment(new Date()).format("MM/DD/YYYY");
      var meetingTime = justDate + " " + justHour + ":00 " + justTime;
      var diff = moment(now).diff(moment(meetingTime));
      if (diff > 0) {
        $(this).addClass("inThePast");
      } else {
        $(this).addClass("inTheFuture");
      }
    });
  });