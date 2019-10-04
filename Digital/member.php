<?php
    session_start();
    if(isset($_SESSION['username']))
    {
        die ("You are not logged in!");
    }
    $username = $_SESSION['username'];
    echo "Hai " . $username;
    echo "<a href='logout.php'>Logout</a>";
?>