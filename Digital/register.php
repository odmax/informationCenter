<?php include('server.php') ?>
<!DOCTYPE html>
<html>
<head>
  <title>Registration</title>
  <link rel="stylesheet" type="text/css" href="style.css">
</head>
<body>
  <div class="header">
  	<h2>Register</h2>
  </div>
	
  <form method="post" action="register.php">
  	<?php include('errors.php'); ?>
	<div class="input-group">
  	  <label>Full names</label>
  	  <input type="text" name="name" placeholder="Enter name..." value="<?php echo $name; ?>">
  	</div>
  	<div class="input-group">
  	  <label>Username</label>
  	  <input type="text" name="username" placeholder="Enter username..." value="<?php echo $username; ?>" >
  	</div>
  	<div class="input-group">
  	  <label>Email</label>
  	  <input type="email" name="email" placeholder="Your e-mail..." value="<?php echo $email; ?>">
  	</div>
	<div class="input-group">
  	  <label>ID number</label>
  	  <input type="idnumber" name="idnumber" placeholder="Enter IDNO..." value="<?php echo $idnumber; ?>">
  	</div>
	<div class="input-group">
  	  <label>Gender</label>
  	  <input type="text" name="gender" placeholder="Enter gender..." value="<?php echo $gender; ?>">
  	</div>
	<div class="input-group">
  	  <label>Mobile number</label>
  	  <input type="text" name="mobilenumber" placeholder="Enter mobile_number..." value="<?php echo $mobilenumber; ?>">
  	</div>
  	<div class="input-group">
  	  <label>Password</label>
  	  <input type="password" placeholder="Enter password..." name="password_1">
  	</div>
  	<div class="input-group">
  	  <label>Confirm password</label>
  	  <input type="password" placeholder="Re-enter password..." name="password_2">
  	</div>
	<div class="input-group">
  	  <button type="submit" class="btn" name="reg_user">Register</button>
  	</div>
  	<p>
  		Already a member? <a href="login.php">Sign in</a>
  	</p>
  </form>
</body>
</html>