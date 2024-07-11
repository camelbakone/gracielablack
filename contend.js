//note: cookie 'sk_disclaimer' is mandatory and does not need confirmation by user
var el = document.getElementById('webmaster_disclaimer_overlay');
if (el && -1 < document.cookie.indexOf('sk_disclaimer=1')) {
    el.style.display = 'none';
}
else if (el) {
    document.getElementById('yes').addEventListener('click', function () {
        document.cookie = 'sk_disclaimer=1';
        el.style.display = 'none';
    });
    document.getElementById('no').addEventListener('click', function () {
        document.cookie = 'sk_disclaimer=0';
        document.body.style.display = 'none';
    });
}