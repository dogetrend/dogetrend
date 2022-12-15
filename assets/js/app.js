function copyPay(username) {
  navigator.clipboard.writeText(username);
  launch_toast();
}

function launch_toast() {
    var x = document.getElementById("toast")
    x.className = "show";
    setTimeout(function(){ x.className = x.className.replace("show", ""); }, 5000);
}