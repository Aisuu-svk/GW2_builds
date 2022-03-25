$(function () {
  $("#menu").load("https://aisuu-svk.github.io/GW2_builds/html/menu.html");
});

function copyToClipboard(element) {
  var $temp = $("<input>");
  $("body").append($temp);
  $temp.val($(element).text()).select();
  document.execCommand("copy");
  $temp.remove();
}
