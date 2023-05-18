<?php 

$json_string = file_get_contents("toDo-list.json");

$list = json_decode($json_string, true);

if(isset($_POST["taskText"])){

    $newTask = [
        "taskText" => $_POST["taskText"],
        "isDone" => false
    ];

    $list[] = $newTask;
    filePutContents($list);
}

header("Content-Type: application/json");

echo json_encode($list);






//---------------FUNCTIONS-----------------

function filePutContents($list){
    file_put_contents("toDo-list.json", json_encode($list));
}
?>