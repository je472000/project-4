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
  


    
    });
