//submit button event listener
let button = document.getElementById("but1");
button.addEventListener("click",onclick);

function onclick(){

    //getting input
    let input = document.getElementById("customerinput").value.trim();
    if(input.length>0){

    //creating a div to contain element
    let taskcontainer = document.createElement("div");
    taskcontainer.className = "taskclass";

    //creating checkbox for div
    let check = document.createElement("input");
    check.type="checkbox";
    check.className = "checkbox";

    //creating task node to display input
    let inputText = document.createTextNode(input);
    inputText.className="inputext"

    //creating delete button to delete task
    let del = document.createElement("button");
    del.innerText = "delete";
    del.className = "delete";

    let b = document.createElement('div');
    b.className = 'checktextdiv';
    b.append(check,inputText);

    taskcontainer.appendChild(b);
    taskcontainer.appendChild(del);


    let a = document.createElement('div');
    a.className = 'taskdeletediv'
 
    //container adding in html
    let newcont = document.getElementsByClassName("container2")[0];
    newcont.appendChild(taskcontainer);

    //delete click event
    del.addEventListener("click",function() {
        taskcontainer.remove()
    });

    //check box event
    check.addEventListener("change", function(){
        if(check.checked){

            //To display modal when checked
            document.getElementById("mymodal").style.display = "block";

            //changing task container as completed
            taskcontainer.classList.add("completed-task")
        }
        else{

            //to undisplay modal
            document.getElementById("mymodal").style.display = "none";

            //changing task container to normal
            taskcontainer.classList.remove("completed-task")
        }
    })

    //clearing the text box after submit
    document.getElementById("customerinput").value = "";

    }
    else{
    alert("Please Enter your Task!!!")
    }
}

//modal closing function
function closemodal(){
    document.getElementById("mymodal").style.display = "none";
}