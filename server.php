<?php 

$json_string = file_get_contents("toDo-list.json");

$list = json_decode($json_string, true);

header("Content-Type: application/json");

echo json_encode($list);
?>