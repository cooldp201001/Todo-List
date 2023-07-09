const doc = document;
//upper section's elements access
const inputTask = doc.querySelector("#inputTask");
const addBtn = doc.querySelector("#addBtn");

//lower section's elements access
const listEmptyAlert = doc.querySelector("#listEmptyAlert");
const userListOfTask = doc.querySelector(".userListOfTask");
const eachEntryDiv = doc.querySelector("#eachEntryDiv");
const eachEntryDivClone = doc.querySelector("#eachEntryDivClone");
const actionBtnsCon = doc.querySelector(".actionBtnsCon");
const doneSign = doc.querySelector("#doneSign");
const editSign = doc.querySelector("#editSign");
const deleteSign = doc.querySelectorAll("#deleteSign");

//update task input box element's access
const editInputCon = doc.querySelector(".editInputCon");
const editInputField = doc.querySelector("#editInputField");
const submitBtn = doc.querySelector("#submitBtn");
const cancelBtn = doc.querySelector("#cancelBtn");
let toEditTaskText = ""

//event handlers

addBtn.onclick = () => {
    //hiding  update task input box  if it is showing
    if (editInputCon.classList.contains("showInputCon")) {
        editInputCon.classList.toggle("showInputCon")
    }

    //removing extra space
    let taskInText = inputTask.value.trim();

    //validate task's text
    if (taskInText == "") {
        alert("invalid task!!")
    }
    else {
        //hinding list empty para
        listEmptyAlert.style.display = "none"
        let task = inputTask.value;
        inputTask.value = "";
        let clone = eachEntryDivClone.cloneNode(true);
        clone.removeAttribute("id")
        clone.id = "eachEntryDiv"
        let taskText = clone.querySelector("#taskText");
        taskText.innerHTML = task;
        userListOfTask.appendChild(clone);
    }
    inputTask.value = ""
}

//Event deligation  handler
userListOfTask.onclick = (event) => {


    if (event.target.id == "doneSign") {
        let targetText = event.target.parentNode.previousElementSibling;
        targetText.classList.toggle("doneTask");
    }

    if (event.target.id == "editSign") {

        let targetText = event.target.parentNode.previousElementSibling;

        if (!editInputCon.classList.contains("showInputCon"))
            editInputCon.classList.add("showInputCon")
        editInputField.value = targetText.innerHTML;

        //submit buttion  event handler
        submitBtn.onclick = () => {
            targetText.innerHTML = editInputField.value;
            editInputField.value = "";
            editInputCon.classList.toggle("showInputCon");
        }

        //cancel button  event handler
        cancelBtn.onclick = () => {
            editInputField.value = "";
            editInputCon.classList.toggle("showInputCon")
        }
    }

    if (event.target.id == "deleteSign") {
        let removeElm = event.target.closest("#eachEntryDiv");
        removeElm.remove();
        if (userListOfTask.childNodes.length == 1) {
            listEmptyAlert.style.display = "block";
            if (editInputCon.classList.contains("showInputCon")) {
                editInputCon.classList.toggle("showInputCon");
            }
        }
    }

}

