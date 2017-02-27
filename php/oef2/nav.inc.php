	<nav>
		<a 	<?php
	$class = $_SERVER["SCRIPT_NAME"];
	if(strpos($class, "home") !== false)
	{
		echo('class="active"');
	}
	?> href="home.php">home</a>
		<a 	<?php
	$class = $_SERVER["SCRIPT_NAME"];
	if(strpos($class, "contact") !== false)
	{
		echo('class="active"');
	}
	?> href="contact.php">contact</a>
	</nav>
