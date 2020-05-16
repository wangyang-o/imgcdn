
function show_runtime() {
        window.setTimeout("show_runtime()", 1000);
        X = new Date("4/1/2020 1:00:00");
        Y = new Date();
        T = (Y.getTime() - X.getTime());
        M = 24 * 60 * 60 * 1000;
        a = T / M;
        A = Math.floor(a);
        b = (a - A) * 24;
        B = Math.floor(b);
        c = (b - B) * 60;
        C = Math.floor((b - B) * 60);
        D = Math.floor((c - C) * 60);
        var str1 = "#";
        for (var i = 0; i < 6; i++) {
                str1 += Math.floor(Math.random() * 9);
        }
        document.getElementById("runtime_span").innerHTML = "小破站已运行了: " + A + "天" + B + "小时" + C + "分" + D + "秒了"
        document.getElementById("runtime_span").style.color = str1;
}

show_runtime();