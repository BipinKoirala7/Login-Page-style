<?
$name = $_POST['user-name'];
$pass = $_POST['user-pass'];
$email = $_POST['user-email'];
$servername = 'localhost';

$conn = new mysqli($servername,'root','', 'test');
if ($conn->connect_error) {
  die("Connection failed: " . $conn->connect_error);
}
else{
    $info = $conn ->prepare('insert into registration(Name, Email, Password) value(?,?,?)');
    $info->bind_param('sss',$name,$email,$pass);
    $info->execute();
    echo'registration sucessfull';
    $info->close();
    $conn->close();
}
?>
