<?php
		global $_GPC, $_W;
		$pindex = max(1, intval($_GPC['page']));
		$psize = 15;
		$condition = '';
		if (!empty($_GPC['ccate'])) {
			$cid = intval($_GPC['ccate']);
			$condition .= " AND ccate = '{$cid}'";
		} elseif (!empty($_GPC['pcate'])) {
			$cid = intval($_GPC['pcate']);
			$condition .= " AND pcate = '{$cid}'";
		}
		$children = array();
		$category = pdo_fetchall("SELECT * FROM ".tablename('jufeng_wcy_category')." WHERE weid = '{$_W['uniacid']}' ORDER BY parentid ASC, displayorder DESC");
		foreach ($category as $index => $row) {
			if (!empty($row['parentid'])){
				$children[$row['parentid']][] = $row;
				unset($category[$index]);
			}
		}
		$ccate1 = pdo_fetchall("SELECT * FROM ".tablename('jufeng_wcy_foods')." WHERE weid = '{$_W['uniacid']}' AND ccate = '{$_GPC['ccate']}' ");
		$category1 = pdo_fetchall("SELECT * FROM ".tablename('jufeng_wcy_category')." WHERE weid = '{$_W['uniacid']}' AND (id = '{$_GPC['pcate']}' OR id = '{$ccate1[0]['pcate']}') ORDER BY parentid ASC, displayorder DESC");
		$ptime1 = $category1[0]['time1'];
		$ptime2 = $category1[0]['time2'];
		$ptime3 = $category1[0]['time3'];
		$ptime4 = $category1[0]['time4'];
		$pcatefoods = pdo_fetchall("SELECT * FROM ".tablename('jufeng_wcy_foods')." WHERE weid = '{$_W['uniacid']}' AND pcate = '{$category1[0]['id']}' ");
		
		$pricetotal =0;
			foreach ($pcatefoods as &$row1) {
		$pcatecart = pdo_fetch("SELECT * FROM ".tablename('jufeng_wcy_cart')." WHERE from_user = :from_user AND weid = '{$_W['uniacid']}' AND foodsid = '{$row1['id']}'", array(':from_user' => $_W['fans']['from_user']));
		$pcatetotal += $pcatecart['total'];
			$price = pdo_fetch("SELECT * FROM ".tablename('jufeng_wcy_foods')." WHERE weid = '{$_W['uniacid']}' AND id = '{$pcatecart['foodsid']}'");
			if($price['preprice']){$pricetotal += $price['preprice']*$pcatecart['total'];}
			else{$pricetotal += $price['oriprice']*$pcatecart['total'];}
			}
			$between = $category1[0]['sendprice']-$pricetotal;
			if($_GPC['order'] == 0){
$list = pdo_fetchall("SELECT * FROM ".tablename('jufeng_wcy_foods')." WHERE weid = '{$_W['uniacid']}' $condition ORDER BY ishot DESC LIMIT ".($pindex - 1) * $psize.','.$psize);
			}
			else if($_GPC['order'] == 1){
$list = pdo_fetchall("SELECT * FROM ".tablename('jufeng_wcy_foods')." WHERE weid = '{$_W['uniacid']}' $condition ORDER BY hits DESC LIMIT ".($pindex - 1) * $psize.','.$psize);			}
			else if($_GPC['order'] == 2){
$list = pdo_fetchall("SELECT * FROM ".tablename('jufeng_wcy_foods')." WHERE weid = '{$_W['uniacid']}' $condition ORDER BY preprice ASC LIMIT ".($pindex - 1) * $psize.','.$psize);			}
			else if($_GPC['order'] == 3){
$list = pdo_fetchall("SELECT * FROM ".tablename('jufeng_wcy_foods')." WHERE weid = '{$_W['uniacid']}' $condition ORDER BY title ASC LIMIT ".($pindex - 1) * $psize.','.$psize);			}
		
		$total = pdo_fetchcolumn('SELECT COUNT(*) FROM ' . tablename('jufeng_wcy_foods') . " WHERE weid = '{$_W['uniacid']}' $condition");
		$pager = pagination($total, $pindex, $psize, $url = '', $context = array('before' => 0, 'after' => 0, 'ajaxcallback' => ''));
		if (!empty($list)) {
			foreach ($list as &$row) {
											$foodsid = pdo_fetchall("SELECT foodsid,total FROM ".tablename('jufeng_wcy_cart')." WHERE foodsid = '{$row['id']}' AND from_user = '{$_W['fans']['from_user']}'", array(), 'foodsid');
								$row['foodsid'] = $foodsid;
			}
		}
		include $this->template('list');
					?>