// This file was automatically generated from feed.soy.
// Please don't edit this file by hand.

if (typeof examples == 'undefined') { var examples = {}; }
if (typeof examples.simple == 'undefined') { examples.simple = {}; }


examples.simple.feed = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<ul>');
  var feedList4 = opt_data.feed_list;
  var feedListLen4 = feedList4.length;
  if (feedListLen4 > 0) {
    for (var feedIndex4 = 0; feedIndex4 < feedListLen4; feedIndex4++) {
      var feedData4 = feedList4[feedIndex4];
      output.append('<li>');
      switch (feedData4.type) {
        case 502:
          xnTemplate.feed.status_update(soy.$$augmentData(feedData4, {feed: feedData4}), output);
          break;
        default:
          xnTemplate.feed.defaultFeed(soy.$$augmentData(feedData4, {feed: feedData4}), output);
      }
    }
  } else {
    output.append('0</li>');
  }
  output.append('</ul>');
  return opt_sb ? '' : output.toString();
};
