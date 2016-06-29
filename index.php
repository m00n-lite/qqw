<!DOCTYPE html>
<html lang="en">
	<head>
		<meta charset="utf-8">
		<meta http-equiv="X-UA-Compatible" content="IE=edge">
		<meta name="viewport" content="width=device-width, initial-scale=1">

		<title>Gallery</title>

		<link href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css" rel="stylesheet">
		<link rel="stylesheet" href="/css/gallery.css">
		<link rel="stylesheet" href="/css/style.css">
	</head>
	<body>
		<div class="container">
			<p>
				Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
			</p>
			<div class="gallery">
				<?php for($i = 1; $i <= 6; $i++): ?>
					<div class="gallery__item" data-image="images/<?php echo $i; ?>.jpg">
						<img src="images/<?php echo $i; ?>-300x300.jpg" alt="">
					</div>
				<?php endfor; ?>
			</div>
		</div>
		<br><br>

		<script src="https://code.jquery.com/jquery-3.0.0.min.js"></script>
		<script src="js/gallery.js"></script>
		<script src="js/scripts.js"></script>
	</body>
</html>
