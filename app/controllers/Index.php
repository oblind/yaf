<?php
/**
 * @name IndexController
 * @author oblind-nb\oblind
 * @desc 默认控制器
 * @see http://www.php.net/manual/en/class.yaf-controller-abstract.php
 */
class IndexController extends Yaf\Controller_Abstract {

  public function indexAction($name = "Stranger") {
    return true;
  }
}
