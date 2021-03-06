let adSelectors = [
  'iframe',
  'aside .csdn-tracking-statistics.mb8.box-shadow',
  'aside .right_box.footer_box.csdn-tracking-statistics',
  '.indexSuperise',
  '#adContent',
  '#reportContent',
  '.recommend-box',
  '.recommend-right',
  '.pulllog-box',
  '#article_content a img',
  '.login-mark',
  '#passportbox',
  '.mediav_ad'
]

document.querySelectorAll(adSelectors.join(',')).forEach(item => {
  item.style.display = 'none'
})

var readmore = document.getElementsByClassName("btn-readmore");
if (readmore != null) {
    readmore[0].removeAttribute('data-track-click');
    readmore[0].removeAttribute('data-report-click');
    readmore[0].click();
}