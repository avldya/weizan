<?php
// +----------------------------------------------------------------------
// | Author: 微赞 
// +----------------------------------------------------------------------
defined('IN_IA') or exit('Access Denied');
define('__CSS__', MODULE_URL . 'resource/css');
define('__IMG__', MODULE_URL . 'resource/images');
define('__JS__', MODULE_URL . 'resource/js');
include_once 'function/functions.php';
$fr_moudle_name = 'fr_ds_';
global $_GPC, $_W;
if (defined('IN_MOBILE')) {
    session_start();
}
if (!$_W['ispost']) {
    //清除用户自己的未付款支付日志
    $params = array(
        'uniacid' => $_W['uniacid'],
        'module' => 'fr_ds',
        'status' => 0,
        'openid' => $_W['openid']
    );
    pdo_delete('core_paylog', $params);
}