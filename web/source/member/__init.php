<?php
/**
 * [Weizan System] Copyright (c) 2014 012WZ.COM
 * Weizan is NOT a free software, it under the license terms, visited http://www.012wz.com/ for more details.
 */
 define('IN_GW', true);
if ($do == 'oauth' || $action == 'credit' || $action == 'passport' || $action == 'uc') {
	define('FRAME', 'setting');
} else {
	define('FRAME', 'member');
}

$frames = buildframes(array(FRAME));
$frames = $frames[FRAME];
