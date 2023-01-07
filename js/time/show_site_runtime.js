function show_site_runtime() {
    window.setTimeout("show_site_runtime()", 1000); // 每秒运行一次函数
    X = new Date("01/01/2023 16:36:09"); //在这里修改你的建站时间,月/日/年 时/分/秒
    Y = new Date();
    T = (Y.getTime() - X.getTime()); // 获取当前时间与指定时间之间的时间间隔（ms）	
    i = 24 * 60 * 60 * 1000;
    d = T / i;
    D = Math.floor(d); // 计算天数并向下取整
    h = (d - D) * 24;
    H = Math.floor(h); // 计算剩余不足一天的小时数并向下取整
    m = (h - H) * 60;
    M = Math.floor(m); // 计算剩余不足一小时的分钟数并向下取整
    s = (m - M) * 60
    S = Math.floor(s); // 计算剩余不足一分钟的秒数并向下取整
    site_runtime.innerHTML = D + " 天 " + H + " 小时 " + M + " 分 " + S + " 秒 "
}
show_site_runtime();