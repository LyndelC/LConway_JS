//registration form 
<!DOCTYPE html>
<html>
<body>

<h2>Registration Form</h2>

<form action="/process.php" target="_blank" method="post">
  <fieldset>
    <legend>Your details</legend>
    <label for="name">Name:</label><br>
    <input type="text" id="name" name="name"><br>
    <label for="username">Username:</label><br>
    <input type="text" id="username" name="username"><br>
    <label for="password">Password:</label><br>    //minimum 8 characters req
    <input type="text" id="password" name="password"><br>
    <label for="confpassword">Confirm Password:</label><br>
    <input type="text" id="confpassword" name="confpassword"><br>  //additional info required, must compare to PW to ensure they match
    <label for="phone">Phone:</label><br>
    <input type="integer" id="phone" name="phone"><br>
    <input type="submit" value="Submit">
  </fieldset>
</form>

</body>
</html>