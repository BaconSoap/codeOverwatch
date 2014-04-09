angular.module('templates-main', ['templates/git/branchesCtrl.tpl.html', 'templates/index.tpl.html', 'templates/layout/header.tpl.html', 'templates/layout/sidebar.tpl.html', 'templates/overview.tpl.html', 'templates/overview/overviewCtrl.tpl.html', 'templates/state1.tpl.html', 'templates/state2.tpl.html']);

angular.module("templates/git/branchesCtrl.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("templates/git/branchesCtrl.tpl.html",
    "<div data-ng-controller=\"branchesCtrl\">\n" +
    "	<ul>\n" +
    "		<li ng-repeat=\"branch in viewModel.branches\">\n" +
    "			{{branch.name}}\n" +
    "		</li>\n" +
    "	</ul>\n" +
    "</div>");
}]);

angular.module("templates/index.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("templates/index.tpl.html",
    "<h2 class=\"sub-header\">Section title</h2>\n" +
    "<div ui-view></div>");
}]);

angular.module("templates/layout/header.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("templates/layout/header.tpl.html",
    "<div class=\"navbar navbar-inverse navbar-fixed-top\" role=\"navigation\">\n" +
    "	<div class=\"container-fluid\">\n" +
    "		<div class=\"navbar-header\">\n" +
    "			<button type=\"button\" class=\"navbar-toggle\" data-toggle=\"collapse\" data-target=\".navbar-collapse\">\n" +
    "				<span class=\"sr-only\">Toggle navigation</span>\n" +
    "				<span class=\"icon-bar\"></span>\n" +
    "				<span class=\"icon-bar\"></span>\n" +
    "				<span class=\"icon-bar\"></span>\n" +
    "			</button>\n" +
    "			<a class=\"navbar-brand\" href=\"#\">Overwatch</a>\n" +
    "		</div>\n" +
    "		<div class=\"navbar-collapse collapse\">\n" +
    "			<ul class=\"nav navbar-nav navbar-right\">\n" +
    "				<li><a data-ui-sref=\"overview\" href=\"#\">Dashboard</a></li>\n" +
    "				<li><a href=\"#\">Settings</a></li>\n" +
    "				<li><a href=\"#\">Profile</a></li>\n" +
    "				<li><a href=\"#\">Help</a></li>\n" +
    "			</ul>\n" +
    "			<form class=\"navbar-form navbar-right\">\n" +
    "				<input type=\"text\" class=\"form-control\" placeholder=\"Search...\">\n" +
    "			</form>\n" +
    "		</div>\n" +
    "	</div>\n" +
    "</div>");
}]);

angular.module("templates/layout/sidebar.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("templates/layout/sidebar.tpl.html",
    "<div class=\"col-sm-3 col-md-2 sidebar\">\n" +
    "	<ul class=\"nav nav-sidebar\">\n" +
    "		<li><a href=\"#\" ui-sref=\"overview\">Overview</a></li>\n" +
    "		<li><a href=\"#\" ui-sref=\"branches\">All Branches</a></li>\n" +
    "		<li><a href=\"#\">Export</a></li>\n" +
    "	</ul>\n" +
    "	<ul class=\"nav nav-sidebar\">\n" +
    "		<li><a href=\"\">Nav item</a></li>\n" +
    "		<li><a href=\"\">Nav item again</a></li>\n" +
    "		<li><a href=\"\">One more nav</a></li>\n" +
    "		<li><a href=\"\">Another nav item</a></li>\n" +
    "		<li><a href=\"\">More navigation</a></li>\n" +
    "	</ul>\n" +
    "	<ul class=\"nav nav-sidebar\">\n" +
    "		<li><a href=\"\">Nav item again</a></li>\n" +
    "		<li><a href=\"\">One more nav</a></li>\n" +
    "		<li><a href=\"\">Another nav item</a></li>\n" +
    "	</ul>\n" +
    "</div>");
}]);

angular.module("templates/overview.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("templates/overview.tpl.html",
    "overview!");
}]);

angular.module("templates/overview/overviewCtrl.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("templates/overview/overviewCtrl.tpl.html",
    "<div data-ng-controller=\"overviewCtrl\">\n" +
    "	this is the overview right in here\n" +
    "</div>");
}]);

angular.module("templates/state1.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("templates/state1.tpl.html",
    "this is state 1");
}]);

angular.module("templates/state2.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("templates/state2.tpl.html",
    "this is state 2");
}]);
