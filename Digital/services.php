
<html>
<head>
<title>Digital Ticket form</title>
<link rel="stylesheet" type="text/css" href="style.css" />
</head>
<body>
    <div class="input-group">
        <form class="pic-class" name="frmContact" id="" frmContact"" method="post"
            action="confirm.php"  enctype="multipart/form-data"
            onsubmit="return validateContactForm()">
			
			
			
            <div class="input-row">
                <label style="padding-top: 20px;">Username</label> 
				<input
                    type="text" class="input-field" name="username"
                    id="username" />
            </div>
			 <div class="input-row">
                <label>Message</label> 
                <textarea name="content" id="content"
                    class="input-field" cols="52" rows="6"></textarea>
            </div>
            <div class="input-row">
                <label>Health department</label> 
				<?php
                      $mysqli = NEW MySQLi('localhost','root','','registration');
                       $resultSet = $mysqli->query("SELECT dept_name FROM departments");
                ?>

                <select name="departments" >	
                <?php
                 while ($rows=$resultSet->fetch_assoc())
                {
	               $dept_name = $rows['dept_name'];
	               echo "<option value='$dept_name'>$dept_name</option>";
                }
				
                ?>
                </select>
            <div class="input-row">
                <label>Responsive type</label> 
				<?php
                      $mysqli = NEW MySQLi('localhost','root','','registration');
                       $resultSet = $mysqli->query("SELECT communicationType FROM tickets");
                ?>

                <select name="communicationType" >	
                <?php
                 while ($rows=$resultSet->fetch_assoc())
                {
	               $communicationType = $rows['communicationType'];
	               echo "<option value='$communicationType'>$communicationType</option>";
                }
                   ?>
           
            <div>
                <input type="submit" name="Submit" class="btn-submit"
                    value="Submit" />
					

                <div id="statusMessage"> 
                        <?php
                        if (! empty($message)) {
                            ?>
                            <p class='<?php echo $type; ?>Message'><?php echo $message; ?></p>
                        <?php
                        }
                        ?>
                    </div>
            </div>
        </form>
    </div>

    <script src="https://code.jquery.com/jquery-2.1.1.min.js"
        type="text/javascript"></script>
    <script type="text/javascript">
        function validateContactForm() {
            var valid = true;

            $(".info").html("");
            $(".input-field").css('border', '#e0dfdf 1px solid');
            var userName = $("#userName").val();
            var userEmail = $("#userEmail").val();
            var subject = $("#subject").val();
            var content = $("#content").val();
            
            if (userName == "") {
                $("#userName-info").html("Required.");
                $("#userName").css('border', '#e66262 1px solid');
                valid = false;
            }
            if (userEmail == "") {
                $("#userEmail-info").html("Required.");
                $("#userEmail").css('border', '#e66262 1px solid');
                valid = false;
            }
            if (!userEmail.match(/^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/))
            {
                $("#userEmail-info").html("Invalid Email Address.");
                $("#userEmail").css('border', '#e66262 1px solid');
                valid = false;
            }

            if (subject == "") {
                $("#subject-info").html("Required.");
                $("#subject").css('border', '#e66262 1px solid');
                valid = false;
            }
            if (content == "") {
                $("#userMessage-info").html("Required.");
                $("#content").css('border', '#e66262 1px solid');
                valid = false;
            }
            return valid;
        }
</script>
</body>
</html>
