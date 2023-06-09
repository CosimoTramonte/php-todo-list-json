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
};

if(isset($_POST["indexTaskRemove"])){
    array_splice($list, $_POST["indexTaskRemove"], 1);
    filePutContents($list);
};

if(isset($_POST["isDoneOrNot"])){

    $list[$_POST["indexTask"]]["isDone"] = filter_var($_POST["isDoneOrNot"], FILTER_VALIDATE_BOOLEAN);
    filePutContents($list);
}




header("Content-Type: application/json");

echo json_encode($list);






//---------------FUNCTIONS-----------------

function filePutContents($list){
    file_put_contents("toDo-list.json", json_encode($list));
}
?>