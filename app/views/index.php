<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="utf-8">
    <title>Laravel4 AngularJS Starter Site</title>
	<link href="app/css/bootstrap-theme.min.css" rel="stylesheet">
	<link href="app/css/bootstrap.min.css" rel="stylesheet">
    <link href="app/css/app.css" rel="stylesheet" />
</head>
<body ng-app="myApp">

<div class="container" ng-view></div>


<script src="vendor/angular/angular.min.js"></script>
<script src="vendor/jquery/jquery.min.js"></script>
<script src="vendor/angular-cookies/angular-cookies.min.js"></script>
<script src="vendor/lodash/dist/lodash.min.js"></script>
<script src="vendor/ng/angular.min.js"></script>
<script src="vendor/ng-cookies/angular-cookies.min.js"></script>
<script src="vendor/ng-i18n/angular-locale_en.js"></script>
<script src="vendor/ng-resource/angular-resource.min.js"></script>
<script src="vendor/ng-rest/dist/restangular.min.js"></script>
<script src="vendor/ng-router/angular-route.min.js"></script>
<script src="vendor/ng-sanitize/angular-sanitize.min.js"></script>
<script src="vendor/ng-storage/src/angularLocalStorage.js"></script>
<script src="vendor/ng-translate/angular-translate.min.js"></script>
<script src="vendor/ng-upload/dist/angular-file-upload-shim.min.js"></script>
<script src="vendor/ng-upload/dist/angular-file-upload.min.js"></script>
<script src="vendor/ui-bootstrap/ui-bootstrap-tpls.min.js"></script>
<script src="vendor/ui-router/release/angular-ui-router.min.js"></script>

<!-- Recaptcha library
	<script type="text/javascript" src="//www.google.com/recaptcha/api/js/recaptcha_ajax.js"></script>
	<script src="vendor/ng-captcha/release/angular-recaptcha.min.js"></script>
	-->


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