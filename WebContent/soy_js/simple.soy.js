// This file was automatically generated from simple.soy.
// Please don't edit this file by hand.

if (typeof examples == 'undefined') { var examples = {}; }
if (typeof examples.simple == 'undefined') { examples.simple = {}; }


examples.simple.userMessage = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('\t<form class="profile">', opt_data.profile.user_id, '<span>Hello<a class="userName">', soy.$$escapeHtml(opt_data.profile.user_name), '</a>!<img class="headUrl" src="', soy.$$escapeHtml(opt_data.profile.main_url), '" style="width:50px;height:50px;"/></span><p>vip等级：', soy.$$escapeHtml(opt_data.profile.vip_level), '</p><input type="hidden" value="', soy.$$escapeHtml(opt_data.profile.user_id), '" /><label>用户所属网络</label>:', soy.$$escapeHtml(opt_data.profile.network), (opt_data.profile.has_right) ? '<p> 有访问权限</p>' : '<p>' + soy.$$escapeHtml(opt_data.profile.has_right) + '没有访问权限</p>', '</form>');
  return opt_sb ? '' : output.toString();
};
