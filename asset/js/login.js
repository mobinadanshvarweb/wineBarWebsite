let myemail = document.getElementById("myemail");
let mypass = document.getElementById("mypass");
let logintest = document.getElementById("logintest");
let myuserusername = document.getElementById("myuserusername");
let myuserpass = document.getElementById("myuserpass");
let myuseremail = document.getElementById("myuseremail");
let myusername = document.getElementById("myusername");
let myid = 0;
// let myuserpass = document.getElementById('myuserpass')
function enter(s) {
  fetch("https://6533e61ee1b6f4c590465e0a.mockapi.io/reg", {
    method: "GET",
    headers: { "content-type": "application/json" },
  })
    .then((res) => {
      if (res.ok) {
        return res.json();
      }
      // handle error
    })
    .then((tasks) => {
      // Do something with the list of tasks
      console.log(tasks);
      for (i = 0; i < tasks.length; i++) {
        if (
          (myemail.value == tasks[i].username ||
            myemail.value == tasks[i].email) &&
          mypass.value == tasks[i].password
        ) {
          console.log("im here");
          myid = tasks[i].id;
          console.log(myid);
          s.style.borderColor = "#81d8d0";
          s.style.color = "#81d8d0";
          logintest.style.display = "flex";
          myuserusername.innerText = tasks[i].username;
          myuserpass.innerText = tasks[i].password;
          myuseremail.innerText = tasks[i].email;
          myusername.innerText = tasks[i].name;
          alert('im not here')
          break;
        } else {
          console.log("im not here");
          s.style.borderColor = "red";
          s.style.color = "red";
          alert('im not here')
        }
      }
    })
    .catch((error) => {
      // handle error
    });
}

// function mybtnchange() {
//   const newdata={
//     username: myuserusername.innerText,
//     password: myuserpass,
//     name: myusername,
//     email: myuseremail,
//   }
//   console.log(newdata);
//   fetch("https://6533e61ee1b6f4c590465e0a.mockapi.io/reg/", {
//     method: "POST",
//     headers: { "content-type": "application/json" },
//     // Send your data in the request body as JSON
//     body: JSON.stringify(newdata),
//   })
//     .then((res) => {
//       if (res.ok) {
//         return res.json();
//       }
//       // handle error
//     })
//     .then((task) => {
//       // do something with the new task
//       console.log(task);
//     })
//     .catch((error) => {
//       // handle error
//     });
// }

function deleteaccount(){
  myuseremail.innerText = ''
  myusername.innerText = ''
  myuserpass.innerText = ''
  myuserusername.innerText = ''
  fetch('https://6533e61ee1b6f4c590465e0a.mockapi.io/reg/' + myid, {
  method: 'DELETE',
}).then(res => {
  if (res.ok) {
      return res.json();
  }
  // handle error
}).then(task => {
  // Do something with deleted task
}).catch(error => {
  // handle error
})
}