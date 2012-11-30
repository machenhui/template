// This file was automatically generated from test.soyFJLmsPMfdEhhHHEEewnj2w==.
// Please don't edit this file by hand.

if (typeof examples == 'undefined') { var examples = {}; }
if (typeof examples.simple == 'undefined') { examples.simple = {}; }


examples.simple.filelist = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<ul>');
  var fileList4 = opt_data.filelist;
  var fileListLen4 = fileList4.length;
  if (fileListLen4 > 0) {
    for (var fileIndex4 = 0; fileIndex4 < fileListLen4; fileIndex4++) {
      var fileData4 = fileList4[fileIndex4];
      output.append('<li><a _href="', soy.$$escapeHtml(fileData4.url), '">', soy.$$escapeHtml(fileData4.name), '</a></li>');
    }
  } else {
    output.append('0');
  }
  output.append('</ul>');
  return opt_sb ? '' : output.toString();
};
