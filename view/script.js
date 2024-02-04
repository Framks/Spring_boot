const url = "http://localhost:8080/tasks/user/1";

function hideLoader(){
    document.getElementById("loader").style.display = "none";

}

function show(tasks) {
    let tab = `<thead>
        <th scope="col">#</th>
        <th scope="col">Description</th>
        <th scope="col">Username</th>
        <th scope="col">User Id</th>
        </thead>`;

    for (let task of tasks){
        tab += `<tr>
                <td>
                    ${task.id}
                </td>
                <td>
                    ${task.description}
                </td>
                <td>
                    ${task.user.username}
                </td>
                <td>
                    ${task.user.id}
                </td>
            </tr>`;
    }

    document.getElementById("tasks").innerHTML = tab;
}

async function getApi(url){
    const response = await  fetch(url , {method: "GET"});

    var data = await response.json();
    console.log(data);
    if (response)
        hideLoader();

    show(data);
}

getApi(url);