// This file was automatically generated from searchFriend.soy.
// Please don't edit this file by hand.

if (typeof xnTemplate == 'undefined') { var xnTemplate = {}; }
if (typeof xnTemplate.sdk == 'undefined') { xnTemplate.sdk = {}; }


xnTemplate.sdk.searchFirends = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('\t<div class="searchBox"><input type="text" placeholder="请输入信息" class="font-30"/><ul class="selectedFriends"><li><i class="close">+</i></li></ul></div><div class="share"><span class="font-30">选择好友(3/', soy.$$escapeHtml(opt_data.friend_list.length), ')</span><input type="submit" value="分享" class="font-30" /></div><ul class="friendList">');
  var friendList22 = opt_data.friend_list;
  var friendListLen22 = friendList22.length;
  if (friendListLen22 > 0) {
    for (var friendIndex22 = 0; friendIndex22 < friendListLen22; friendIndex22++) {
      var friendData22 = friendList22[friendIndex22];
      output.append('<li ><img src="', soy.$$escapeHtml(friendData22.head_url), '"/><span>', soy.$$escapeHtml(friendData22.user_name), '</span></li>');
    }
  } else {
    output.append('0');
  }
  output.append('</ul>');
  return opt_sb ? '' : output.toString();
};
