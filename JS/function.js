// Load data to Home

function loadDataToHome() {
    document.title = 'HOME'
    document.getElementById('welcome').style.display = "none";
    document.getElementById('addNewUser').style.display = 'none';
    document.getElementById('editUser').style.display = 'none';
    document.getElementById('viewUser').style.display = 'none';
    document.getElementById('search').style.display = 'none';
    document.getElementById('home').style.display = "block"


    let usersData = localStorage.getItem('userData');
    let users = JSON.parse(usersData);
    console.log(users)
    console.log(users.length)
    document.getElementById('home').innerHTML = `


    <table class="table table-hover table-dark text-primary my-3">
                  <thead>
                             <tr>
                                 <th scope="col">#</th>
                                 <th scope="col">Name</th>
                                 <th scope="col">Point</th>
                                 <th scope="col">Company</th>
                                 <th scope="col">Email</th>
                                 <th scope="col">Phone</th>
                                 <th scope="col">Options</th>
                                 </tr>
                </thead>



                   <tbody>
       ${users.map((user, index) => `    
       <tr>
         <td>${index + 1}</td> 
         <td>${user.firstName} ${user.lastName}</td>
         <td>${user.point}</td> 
         <td>${user.company}</td>
         <td>${user.email}</td>
         <td>${user.phone}</td>
         <td>
               <button data-bs-toggle="modal" data-bs-target="#exampleModal" class="btn btn-outline-info">
                    <span onclick="viewUser(${index})" class="material-symbols-outlined"> visibility </span>
              </button>
              <button  onclick="editUserForm(${index})" class="btn btn-outline-primary">
                 <span class="material-symbols-outlined"> edit</span>
               </button>
               <button onclick="deleteUser(${index})" class="btn btn-outline-danger">
                    <span class="material-symbols-outlined"> delete </span>
               </button>
         </td>
       </tr> `).join('')}
                   </tbody>   
    </table >
           `
}





//SEARCHING USER
function searchUser() {
    document.title = "SEARCH RESULTS"
    document.getElementById('welcome').style.display = "none";
    document.getElementById('addNewUser').style.display = 'none';
    document.getElementById('editUser').style.display = 'none';
    document.getElementById('viewUser').style.display = 'none';
    document.getElementById('search').style.display = 'block';
    document.getElementById('home').style.display = "none"

    const searchString = document.getElementById('search-user').value;
    console.log(searchString.toUpperCase());


    let usersData = localStorage.getItem('userData');
    let users = JSON.parse(usersData);


    if (searchString.length == 0) {
        alert('Please Enter The First Name Of User');
        loadDataToHome();
    }

    else {

        for (let i = 0; i < users.length; i++) {
            let userName = users[i].firstName;

            if (searchString.toUpperCase() == userName.toUpperCase()) {

                document.getElementById('search').innerHTML = `
            <table class="table table-hover table-dark text-primary my-3">
            <thead>
                       <tr>
                           
                           <th scope="col">Name</th>
                           <th scope="col">Point</th>
                           <th scope="col">Company</th>
                           <th scope="col">Email</th>
                           <th scope="col">Phone</th>
                           <th scope="col">Options</th>
                           </tr>
          </thead>



             <tbody>


             <tr>
            
             <td>${users[i].firstName} ${users[i].lastName}</td>
             <td>${users[i].point}</td> 
             <td>${users[i].company}</td>
             <td>${users[i].email}</td>
             <td>${users[i].phone}</td>
             <td>
                   <button class="btn btn-outline-info">
                        <span class="material-symbols-outlined"> visibility </span>
                  </button>
                  <button class="btn btn-outline-primary">
                     <span class="material-symbols-outlined"> edit</span>
                   </button>
                   <button class="btn btn-outline-danger">
                        <span class="material-symbols-outlined"> delete </span>
                   </button>
             </td>
           </tr> 
                       </tbody >   
         </table >

                `
            }

        }

    }

    document.getElementById('search-user').value = ""
}





// ADD NEW USER
function addNewUserForm() {
    document.title = 'ADD NEW USER'
    document.getElementById('welcome').style.display = "none";
    document.getElementById('addNewUser').style.display = 'block';
    document.getElementById('editUser').style.display = 'none';
    document.getElementById('viewUser').style.display = 'none';
    document.getElementById('search').style.display = 'none';
    document.getElementById('home').style.display = "none"

    document.getElementById('addNewUser').innerHTML = `
    <div class="fs-4">

    <div class="mt-4 mx-auto w-50 bg-dark text-primary">
         <label for="formGroupExampleInput" class="form-label">First Name</label>
         <input type="text" class="form-control bg-dark text-primary" id="firstName" placeholder="First Name">
    </div>


  <div class="mt-2 mx-auto w-50 bg-dark text-primary">
     <label for="formGroupExampleInput2" class="form-label">Last Name</label>
     <input type="text" class="form-control text-primary bg-dark" id="lastName" placeholder="Last Name">
  </div>


  <div class="mt-2 mx-auto w-50 bg-dark text-primary">
     <label for="formGroupExampleInput2" class="form-label">Point</label>
     <input type="number" class="form-control text-primary bg-dark" id="point" placeholder="Point">
  </div>

  <div class="mt-2 mx-auto w-50 bg-dark text-primary">
     <label for="formGroupExampleInput" class="form-label">Company</label>
     <input type="text" class="form-control text-primary bg-dark" id="company" placeholder="Company">
  </div>


   <div class="mt-2 mx-auto w-50 bg-dark text-primary">
        <label for="formGroupExampleInput2" class="form-label">Email</label>
        <input type="email" class="form-control text-primary bg-dark"id="email" placeholder="Email">
   </div>

   <div class="mt-2 mx-auto w-50 bg-dark text-primary">
      <label for="formGroupExampleInput" class="form-label">Phone</label>
      <input type="number" class="form-control text-primary bg-dark" id="phone" maxlength="14" placeholder="Phone">
   </div>

   <button onclick="addUser()" class="d-block my-3 mx-auto fs-4 btn btn-outline-primary">Add New User</button>

</div>`
}

function addUser() {

    const firstName = document.getElementById('firstName').value;
    const lastName = document.getElementById('lastName').value;
    const company = document.getElementById('company').value;
    const phone = document.getElementById('phone').value;
    const point = document.getElementById('point').value;
    const email = document.getElementById('email').value;



    if (firstName, lastName, company, phone, point, email) {


        let newUser = {
            firstName: firstName,
            lastName: lastName,
            email: email,
            point: point,
            phone: phone,
            company: company
        }


        let usersData = localStorage.getItem('userData');
        let users = JSON.parse(usersData);


        let newArrUser = [...users, newUser]

        let newUserString = JSON.stringify(newArrUser)

        localStorage.setItem('userData', newUserString)

        document.getElementById('firstName').value = '';
        document.getElementById('lastName').value = '';
        document.getElementById('company').value = '';
        document.getElementById('phone').value = '';
        document.getElementById('point').value = '';
        document.getElementById('email').value = '';

        alert('New User Added')

        loadDataToHome()

    }
    else {
        alert('please fill the form')
    }

}






// VIEW
function viewUser(index) {
    let usersData = localStorage.getItem('userData');
    let users = JSON.parse(usersData);
    document.getElementById('viewUser').innerHTML = `
<!-- Modal -->
<div class="modal fade text-primary" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content bg-dark">
      <div class="modal-header">
        <h5 class="modal-title fs-3" id="exampleModalLabel">${users[index].firstName} ${users[index].lastName}</h5>
      
      </div>
      <div class="modal-body">
       <p>POINT: ${users[index].point}</p>
       <p>COMPANY: ${users[index].company}</p>
       <p>EMAIL: ${users[index].email}</p>
       <p>PHONE: ${users[index].phone}</p>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-outline-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" class="btn btn-outline-danger">Edit</button>
      </div>
    </div>
  </div>
</div>
    `
}






// EDIT
function editUserForm(index) {
    document.title = 'EDIT USER'
    document.getElementById('welcome').style.display = "none";
    document.getElementById('addNewUser').style.display = 'none';
    document.getElementById('editUser').style.display = 'block';
    document.getElementById('viewUser').style.display = 'none';
    document.getElementById('search').style.display = 'none';
    document.getElementById('home').style.display = "none"

    let usersData = localStorage.getItem('userData');
    let users = JSON.parse(usersData);

    document.getElementById('editUser').innerHTML = `
    <div class="fs-4">

    <div class="mt-4 mx-auto w-50 bg-dark text-primary">
         <label for="formGroupExampleInput" class="form-label">First Name</label>
         <input type="text" class="form-control bg-dark text-primary" id="firstName2" placeholder="${users[index].firstName}">
    </div>


  <div class="mt-2 mx-auto w-50 bg-dark text-primary">
     <label for="formGroupExampleInput2" class="form-label">Last Name</label>
     <input type="text" class="form-control text-primary bg-dark" id="lastName2" placeholder="${users[index].lastName}">
  </div>


  <div class="mt-2 mx-auto w-50 bg-dark text-primary">
     <label for="formGroupExampleInput2" class="form-label">Point</label>
     <input type="number" class="form-control text-primary bg-dark" id="point2" placeholder="${users[index].point}">
  </div>

  <div class="mt-2 mx-auto w-50 bg-dark text-primary">
     <label for="formGroupExampleInput" class="form-label">Company</label>
     <input type="text" class="form-control text-primary bg-dark" id="company2" placeholder="${users[index].company}">
  </div>


   <div class="mt-2 mx-auto w-50 bg-dark text-primary">
        <label for="formGroupExampleInput2" class="form-label">Email</label>
        <input type="email" class="form-control text-primary bg-dark"id="email2" placeholder="${users[index].email}">
   </div>

   <div class="mt-2 mx-auto w-50 bg-dark text-primary">
      <label for="formGroupExampleInput" class="form-label">Phone</label>
      <input type="number" class="form-control text-primary bg-dark" id="phone2" maxlength="14" placeholder="${users[index].phone}">
   </div>

   <button onclick="editUser(${index})" class="d-block my-3 mx-auto fs-4 btn btn-outline-primary">Save Changes</button>

</div>`
}

function editUser(index) {
    const firstName = document.getElementById('firstName2').value;
    const lastName = document.getElementById('lastName2').value;
    const company = document.getElementById('company2').value;
    const phone = document.getElementById('phone2').value;
    const point = document.getElementById('point2').value;
    const email = document.getElementById('email2').value;

    let usersData = localStorage.getItem('userData');
    let users = JSON.parse(usersData);


    if (firstName && lastName && company && phone && point && email) {
        users[index] = {
            firstName: firstName,
            lastName: lastName,
            email: email,
            point: point,
            phone: phone,
            company: company

        }
    }

    else {
        alert("PLEASE FILL ALL THE INPUT AREA")
    }

    localStorage.setItem("userData", JSON.stringify(users));

    loadDataToHome()
}






// DELETE
function deleteUser(index) {
    let usersData = localStorage.getItem('userData');
    let users = JSON.parse(usersData);

    if (window.confirm("Are you sure you want to delete this")) {

        users.splice(index, 1);
        localStorage.setItem("userData", JSON.stringify(users));
        loadDataToHome()
    }
    else {
        loadDataToHome()
    }


}
