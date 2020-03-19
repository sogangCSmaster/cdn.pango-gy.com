function makeid(length) {
    var result           = '';
    var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var charactersLength = characters.length;
    for ( var i = 0; i < length; i++ ) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
}
function getCookie(name) {
    var dc = document.cookie;
    var prefix = name + "=";
    var begin = dc.indexOf("; " + prefix);
    if (begin == -1) {
        begin = dc.indexOf(prefix);
        if (begin != 0) return null;
    } else {
        begin += 2;
        var end = document.cookie.indexOf(";", begin);
        if (end == -1) {
        end = dc.length;
        }
    }
    return decodeURI(dc.substring(begin + prefix.length, end));
} 
function setCookie(cookie_name, value, days) {
    var exdate = new Date();
    exdate.setDate(exdate.getDate() + days);
    // 설정 일수만큼 현재시간에 만료값으로 지정
    
    var cookie_value = escape(value) + ((days == null) ? '' : ';    expires=' + exdate.toUTCString());
    document.cookie = cookie_name + '=' + cookie_value;
}
function pangoToast(userKey) {
    var myCookie = getCookie("pango-rule-cookie");
    if (myCookie == null) {
        myCookie = makeid(7);
        setCookie("pango-rule-cookie", myCookie, '30');
        var pathname = window.location.pathname;
        var xhttp = new XMLHttpRequest();
        xhttp.open("POST", "https://pushads.pango-gy.com/toast", false);
        xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
        var datas = "cookie="+myCookie+"&pathname="+pathname+"&userKey="+userKey+"&_method=PUT";
        xhttp.send(datas);
        var rule = xhttp.responseText
        if(rule!='not alert'){
            rule = JSON.parse(xhttp.responseText);
            toastr.options = {
                "closeButton": false,
                "debug": false,
                "newestOnTop": false,
                "progressBar": false,
                "positionClass": "toast-top-right",
                "preventDuplicates": false,
                "onclick": function(){
                    location.href=rule.link
                },
                "showDuration": "300",
                "hideDuration": "1000",
                "timeOut": "5000",
                "extendedTimeOut": "1000",
                "showEasing": "swing",
                "hideEasing": "linear",
                "showMethod": "fadeIn",
                "hideMethod": "fadeOut"
            }
            toastr.success(rule.content, rule.title);
        }
        
    } else {
        var pathname = window.location.pathname;
        var xhttp = new XMLHttpRequest();
        xhttp.open("POST", "https://pushads.pango-gy.com/toast", false);
        xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
        var datas = "cookie="+myCookie+"&pathname="+pathname+"&userKey="+userKey+"&_method=PUT";
        xhttp.send(datas);
        var rule = xhttp.responseText
        if(rule!='not alert'){
            rule = JSON.parse(xhttp.responseText);
            toastr.options = {
                "closeButton": false,
                "debug": false,
                "newestOnTop": false,
                "progressBar": false,
                "positionClass": "toast-top-right",
                "preventDuplicates": false,
                "onclick": function(){
                    location.href=rule.link
                },
                "showDuration": "300",
                "hideDuration": "1000",
                "timeOut": "5000",
                "extendedTimeOut": "1000",
                "showEasing": "swing",
                "hideEasing": "linear",
                "showMethod": "fadeIn",
                "hideMethod": "fadeOut"
            }
            toastr.success(rule.content, rule.title);
        }
    }
}