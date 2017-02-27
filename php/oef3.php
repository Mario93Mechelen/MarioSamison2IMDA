<?php
$todo = [
	[
	"beschrijving"=>"Oefenen voor PHP",
	"uren"=>65,
	"categorie"=>"thuis"
	],
	[
	"beschrijving"=>"Met de hond wandelen",
	"uren"=>0.5,
	"categorie"=>"thuis"	
	],
	[
	"beschrijving"=>"Template maken",
	"uren"=>15,
	"categorie"=>"school"
	],
	[
	"beschrijving"=>"Werken in tom&co",
	"uren"=>8,
	"categorie"=>"werk"	
	],
	[
	"beschrijving"=>"op restaurant gaan",
	"uren"=>2,
	"categorie"=>"thuis"	
	]
];
?>
<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>oef 3</title>
	<style>
		ul li
		{
			text-decoration: none;
			color:white;
		}
		p
		{
			text-align: center;
		}
		.green
		{
			background-color: green;
		}
		.orange
		{
			background-color: orange;
		}
		.red
		{
			background-color: red;
		}
	</style>
</head>
<body>
	<?php foreach ($todo as $t):?>
	<ul>
		<?php 
			if($t["uren"]<1)
			{
				echo('<li class="green"><p>');echo($t["beschrijving"]);echo('</p><p>');echo($t["uren"]);echo('</p><p>');echo($t["categorie"]);echo('</p></li>');
			};
					if($t["uren"]>1&&$t["uren"]<=5)
			{
				echo('<li class="orange"><p>');echo($t["beschrijving"]);echo('</p><p>');echo($t["uren"]);echo('</p><p>');echo($t["categorie"]);echo('</p></li>');
			}
					if($t["uren"]>5)
			{
				echo('<li class="red"><p>');echo($t["beschrijving"]);echo('</p><p>');echo($t["uren"]);echo('</p><p>');echo($t["categorie"]);echo('</p></li>');
			}
		?>
	</ul>
	<?php endforeach; ?>
</body>
</html>