<?php

$first_name = $_POST["fname"];
$middle_name = $_POST["mname"];
$last_name = $_POST["lname"];
$email = $_POST["signupEmail"];
$password = $_POST["password"];
$last_password = $_POST["repassword"];

$shuffled = str_shuffle($first_name);
$strCon = substr($shuffled, 0, 4);
$uID = $strCon . rand(100000, 999999);

if ($filename = $_FILES['file']['name'] != "") {
    $filename = $_FILES['file']['name'];
    $extension = pathinfo($filename, PATHINFO_EXTENSION);
    $valid_extensions = array("jpg", "jpeg", "png");

    if (in_array($extension, $valid_extensions)) {
        $new_name = rand(100000, 9999999) . "." . $extension;
        $path = "server_uploads/images/" . $new_name;

        if (move_uploaded_file($_FILES['file']['tmp_name'], $path)) {
            echo 1;
        } else {
            echo 0;
        }
    } else {
        echo 0;
    }
}

$conn = mysql_connect("127.0.0.1", "root", "");
mysql_select_db("farmecy", $conn);

$sql = "insert into farm values('$first_name','$middle_name','$last_name','$email','$new_name','$password','$last_password','$uID')";

mysql_query($sql) or die("SQL Query Failed");
