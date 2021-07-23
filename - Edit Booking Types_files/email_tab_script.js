// Initial reminder toggle check


// defining email tags
const email_tabs = document.querySelectorAll('.email-control');
const email_div = document.querySelectorAll('.email_div');


// Initial Confirm set //

// Setting all email_div to none
 for (i = 0; i < 5; i++) {
    email_div[i].style.display = "none";
  }

// Setting confirm div to show and confirm tab to blue
email_div[0].style.display = "block";
email_tabs[0].style.backgroundColor = "#1e5dfd";
email_tabs[0].style.color = "white"


// Loop when clicked on email tabs
email_tabs.forEach((item, index, listArray) => {
     item.addEventListener('click', () => {
        console.log("edit_booking_type");
        item.style.backgroundColor = "#1e5dfd";
        item.style.color = "white";
        listArray.forEach((ele, i) => {
            if (i !== index) {
                ele.style.backgroundColor = "white";
                ele.style.color = "black";
            }
        })
        if (item.classList.contains('active')) {
            return;
            } 
        else {
            document.querySelector('.active').classList.remove('active');
            item.classList.add('active');
            }


  // set all tabs style none
  for (i = 0; i < 5; i++) {
    email_div[i].style.display = "none";
  }
    

    // confirm email
    if (listArray[0].classList.contains('active')) {
      document.querySelector("#confirm_email").style.display = "block";
    }

    // reminder email
    if (listArray[1].classList.contains('active')) {
      document.querySelector("#reminder_email").style.display = "block";
    }

    // cancel
    if (listArray[2].classList.contains('active')) {
      document.querySelector("#cancel_email").style.display = "block";
    }

    // reschedule
    if (listArray[3].classList.contains('active')) {
      document.querySelector("#reschedule_email").style.display = "block";
    }

    // followup
    if (listArray[4].classList.contains('active')) {
      document.querySelector("#followup_email").style.display = "block";
    }

  })
})


// on/off
const toggle2 = $(".toggle>input");
$(".toggle>input").click(function () {
    const onoff = $(this).siblings(".onoff");
    $(this).is(":checked") ? $(onoff).html("ON") : $(onoff).html("OFF");
});


// for initial open if reminder is on
remindertoggle();
followuptoggle();

function remindertoggle(){
  const toggle = document.querySelector('#remindertoggle');
   if (toggle.checked == true) {
       document.querySelector(".email_reminder_div").style.display = "block"
    }
    if (toggle.checked !== true) {
       document.querySelector(".email_reminder_div").style.display = "none"
    }
}

function followuptoggle(){
  const toggl = document.querySelector('#toggleFollowup')

    if (toggl.checked == true) {
       document.querySelector(".email_followup_div").style.display = "block"
    }
    if (toggl.checked !== true) {
       document.querySelector(".email_followup_div").style.display = "none" 
    }
}

// on/off

// email reminder
const toggle = document.querySelector('#remindertoggle');

toggle.addEventListener('click', () => {

     if (toggle.checked == true) {
       document.querySelector(".email_reminder_div").style.display = "block"
    }
    if (toggle.checked !== true) {
       document.querySelector(".email_reminder_div").style.display = "none"
    }

});

// email followup
const toggl = document.querySelector('#toggleFollowup')

toggl.addEventListener('click', () => {
    if (toggl.checked == true) {
       document.querySelector(".email_followup_div").style.display = "block"
    }
    if (toggl.checked !== true) {
       document.querySelector(".email_followup_div").style.display = "none" 
    }
});


// Email Reminder Timer generation
var i = 2, j = 1;
var top = document.querySelector(".time-cut")
var op = document.querySelector(".temp")

op.addEventListener("click", function () {

  if (j < 3) {
    document.querySelector(".timer").innerHTML += `<div class="a${i}"><div class="time-cut">
    <input type="email" class="form-control col-2 mr-2" value="1" id="exampleInputEmail1"
      aria-describedby="emailHelp">
    <select class="form-control col-7" id="exampleFormControlSelect1">
      <option>Hour(s) Before</option>
      <option>Day(s) Before</option>
      <option>Minute(s) Before</option>
    </select> <span class="px-3" onclick="hidebtn('a${i}')"><i class="far fa-trash-alt"></i></span>
  </div></div>`
    j += 1;
    i += 1;
  }
  console.log(i);

});

// Email reminder delete
function hidebtn(ele) {
  const hide = document.querySelector(`.${ele}`);
  hide.remove();
  if (j > 1) j--;
  console.log(j);
}