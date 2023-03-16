let listStudent = [];
function saveInfo(){
    let nameValue = document.getElementById("name").value;
    let msvValue = document.getElementById("msv").value;
    let genderValue = document.getElementById("Gender").value;
    let hometownValue = document.getElementById("HomeTown").value;
    let nameStudent={
        id:1,
        name: nameValue,
        msv: msvValue,
        gender: genderValue,
        hometown: hometownValue,
    }
  
   
    let flag = JSON.parse(localStorage.getItem("flag"));
    if(flag != null){
        listStudent.splice(flag,1,nameStudent);
        localStorage.removeItem("flag");
        manageListStudent();
        return ; 
    }
        listStudent.push(nameStudent);
        document.getElementById("id").value = "";
        document.getElementById("name").value = "";
        document.getElementById("msv").value = "";
        document.getElementById("Gender").value = "";
        document.getElementById("HomeTown").value = "";
        manageListStudent();
}   
function manageListStudent(){
    let result =
    `
    <tr>
        <td>ID</td>
        <td>Name</td>
        <td>MSV</td>
        <td>Gender</td>
        <td>HomeTown</td>
      
    </tr>
    `;
    for (i = 0; i < listStudent.length; i++) {
        result+=
        `
        <tr>
            <td>${i+1}</td>
            <td>${listStudent[i].name}</td>
            <td>${listStudent[i].msv}</td>
            <td>${listStudent[i].gender}</td>
            <td>${listStudent[i].hometown}</td>
           <td><button onclick="editStudent(${i})"> Edit </button></td>
           <td><button onclick= "deteleStudent(${i})">Detele</button></td>
        </tr>
        `     
    }
    document.getElementById("table").innerHTML= result;
}
manageListStudent();
//phần edit
function editStudent (id){
    document.getElementById("id").value= listStudent[id].id;
    document.getElementById("name").value= listStudent[id].name
    document.getElementById("msv").value= listStudent[id].msv
    document.getElementById("Gender").value= listStudent[id].gender
    document.getElementById("HomeTown").value=listStudent[id].hometown
    localStorage.setItem("flag",id) 
}
// phần detele
function deteleStudent(id){
    listStudent.splice(id,1) 
    manageListStudent();
}

