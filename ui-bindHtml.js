/*
 * angular-ui-bootstrap
 * http://angular-ui.github.io/bootstrap/
 * Version: 0.11.0-SNAPSHOT - 2014-01-24
 * License: MIT
 */


angular.module('ui.bootstrap.bindHtml', [])

  .directive('bindHtmlUnsafe', function () {
    return function (scope, element, attr) {
      element.addClass('ng-binding').data('$binding', attr.bindHtmlUnsafe);
      scope.$watch(attr.bindHtmlUnsafe, function bindHtmlUnsafeWatchAction(value) {
        element.html(value || '');
      });
    };
  });