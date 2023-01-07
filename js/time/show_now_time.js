function show_now_time() {
    Y = new Date();
    T = Y.getTime()
    i = 24 * 60 * 60 * 1000;
    d = T / i;
    
    D = Math.floor(d); // 计算天数并向下取整
    h = (d - D) * 24;
    H = Math.floor(h); // 计算剩余不足一天的小时数并向下取整
    m = (h - H) * 60;
    M = Math.floor(m); // 计算剩余不足一小时的分钟数并向下取整
    now_time.innerHTML = D + " 天 " + H + " 小时 " + M + " 分 "
}
show_now_time();