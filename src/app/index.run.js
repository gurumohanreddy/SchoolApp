(function() {
  'use strict';

  angular
    .module('schoolwebapp')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log) {

    $log.debug('runBlock end');
  }

})();
