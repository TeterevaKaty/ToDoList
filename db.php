<?php
$servername = "localhost";
$database = "toDo";

// Создаем соединение
$conn = mysqli_connect($servername, $database);
// Проверяем соединение
if (!$conn) {
    die("Connection failed: " . mysqli_connect_error());
}
echo "Connected successfully";
mysqli_close($conn);
?>