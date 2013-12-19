<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="utf-8">
    <title>Laravel4 AngularJS Starter Site</title>
	<link href="assets/style.min.css" rel="stylesheet">
</head>
<body ng-app="myApp">

<div class="container" ng-view></div>


<script src="assets/script.min.js"></script>

<script src="app/js/app.js"></script>
<script src="app/js/controllers.js"></script>
<script src="app/js/directives.js"></script>
<script src="app/js/filters.js"></script>
<script src="app/js/services.js"></script>
<script>
    angular.module("myApp").constant("CSRF_TOKEN", '<?php echo csrf_token(); ?>');
</script>
</body>
</html>