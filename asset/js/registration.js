let _name = document.getElementById('name')
let _lname = document.getElementById('lname')
let _email = document.getElementById('email')
let _pass = document.getElementById('pass')
let _user = document.getElementById('user')




function reg(){
    const _data ={
        username: _user.value ,
        password : _pass.value ,
        name : _name.value ,
        lastname: _lname.value ,
        email: _email.value ,
    }
   
      
      fetch('https://6533e61ee1b6f4c590465e0a.mockapi.io/reg', {
        method: 'POST',
        headers: {'content-type':'application/json'},
        // Send your data in the request body as JSON
        body: JSON.stringify(_data)
      }).then(res => {
        if (res.ok) {
            return res.json();
        }
        // handle error
      }).then(task => {
        // do something with the new task
        console.log(task);
      }).catch(error => {
        // handle error
      })

     _user.value = ''
       _pass.value = ''
      _name.value = ''
       _lname.value = ''
       _email.value = ''
}



