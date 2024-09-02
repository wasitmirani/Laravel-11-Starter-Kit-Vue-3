!(function () {
    let isDarkStyle;
    let e;
    e = (isDarkStyle ? config.colors_dark : config.colors).textMuted;
    var a = document.querySelector("#swiper-weekly-sales-with-bg"),
        a = (a && new Swiper(a, { loop: !0, autoplay: { delay: 2500, disableOnInteraction: !1 }, pagination: { clickable: !0, el: ".swiper-pagination" } }), document.querySelector("#saleThisMonth")),
        t = {
            chart: { height: 97, type: "line", parentHeightOffset: 0, toolbar: { show: !1 }, dropShadow: { top: 14, blur: 4, left: 0, enabled: !0, opacity: 0.12, color: config.colors.primary } },
            tooltip: { enabled: !1 },
            grid: { xaxis: { lines: { show: !1 } }, yaxis: { lines: { show: !1 } }, padding: { top: -12, left: -2, right: 8, bottom: -10 } },
            colors: [config.colors.primary],
            stroke: { width: 5, lineCap: "round" },
            series: [{ data: [200, 200, 500, 500, 300, 300, 100, 100, 450, 450, 650, 650] }],
            xaxis: { labels: { show: !1 }, axisTicks: { show: !1 }, axisBorder: { show: !1 } },
            yaxis: { min: 0, labels: { show: !1 } },
        };
    null !== a && new ApexCharts(a, t).render();
    (a = document.querySelectorAll(".chart-progress")),
        a &&
            a.forEach(function (e) {
                var a = config.colors[e.dataset.color],
                    t = e.dataset.series,
                    a = {
                        chart: { height: 90, width: 90, type: "radialBar", sparkline: { enabled: !0 } },
                        plotOptions: {
                            radialBar: {
                                hollow: { size: "52%", image: e.dataset.icon, imageWidth: 24, imageHeight: 24, imageClipped: !1 },
                                dataLabels: { name: { show: !1 }, value: { show: !1 } },
                                track: { background: config.colors_label.secondary },
                            },
                        },
                        states: { hover: { filter: { type: "none" } }, active: { filter: { type: "none" } } },
                        stroke: { lineCap: "round" },
                        colors: [a],
                        grid: { padding: { bottom: 0 } },
                        series: [t],
                        labels: ["Progress"],
                        responsive: [
                            { breakpoint: 1400, options: { chart: { height: 100 } } },
                            { breakpoint: 1380, options: { chart: { height: 96 } } },
                            { breakpoint: 1354, options: { chart: { height: 93 } } },
                            { breakpoint: 1336, options: { chart: { height: 88 } } },
                            { breakpoint: 1286, options: { chart: { height: 84 } } },
                            { breakpoint: 1258, options: { chart: { height: 80 } } },
                            { breakpoint: 1200, options: { chart: { height: 98 } } },
                        ],
                    };
                new ApexCharts(e, a).render();
            }),
        (t = document.querySelector("#swiper-marketing-sales")),
        t && new Swiper(t, { loop: !0, autoplay: { delay: 2500, disableOnInteraction: !1 }, pagination: { clickable: !0, el: ".swiper-pagination" } }),
        (a = document.querySelector("#liveVisitors")),
        (t = {
            chart: { height: 153, parentHeightOffset: 0, type: "bar", toolbar: { show: !1 } },
            plotOptions: { bar: { borderRadius: 8, columnWidth: "43%", endingShape: "rounded", startingShape: "rounded" } },
            colors: [config.colors.success],
            grid: { padding: { top: -4, left: -20, right: -2, bottom: -7 }, yaxis: { lines: { show: !1 } } },
            dataLabels: { enabled: !1 },
            series: [{ data: [70, 118, 92, 49, 19, 49, 23, 82, 65, 23, 49, 65, 65] }],
            legend: { show: !1 },
            xaxis: { labels: { show: !1 }, axisTicks: { show: !1 }, axisBorder: { show: !1 } },
            yaxis: { labels: { show: !1 } },
            responsive: [
                { breakpoint: 1443, options: { plotOptions: { bar: { borderRadius: 7 } } } },
                { breakpoint: 1372, options: { plotOptions: { bar: { borderRadius: 6 } } } },
                { breakpoint: 1248, options: { plotOptions: { bar: { borderRadius: 5 } } } },
                { breakpoint: 1200, options: { plotOptions: { bar: { borderRadius: 6 } } } },
                { breakpoint: 992, options: { plotOptions: { bar: { borderRadius: 8 } }, chart: { height: 156 } } },
                { breakpoint: 838, options: { plotOptions: { bar: { borderRadius: 6 } } } },
                { breakpoint: 644, options: { plotOptions: { bar: { borderRadius: 4 } } } },
                { breakpoint: 474, options: { plotOptions: { bar: { borderRadius: 7 } } } },
                { breakpoint: 383, options: { plotOptions: { bar: { borderRadius: 6 } } } },
            ],
        }),
        null !== a && new ApexCharts(a, t).render(),
        (a = $(".datatables-ecommerce")),
        a.length &&
            (a = a.DataTable({
                ajax: assetsPath + "json/table-dashboards.json",
                dom: "t",
                columns: [{ data: "id" }, { data: "name" }, { data: "email" }, { data: "role" }, { data: "status" }],
                columnDefs: [
                    { targets: 0, searchable: !1, visible: !1 },
                    {
                        targets: 1,
                        render: function (e, a, t, o) {
                            var i = t.image,
                                r = t.name,
                                s = t.username;
                            return (
                                '<div class="d-flex justify-content-start align-items-center user-name"><div class="avatar-wrapper"><div class="avatar avatar-sm me-3">' +
                                (i
                                    ? '<img src="' + assetsPath + "img/avatars/" + i + '" alt="Avatar" class="rounded-circle">'
                                    : '<span class="avatar-initial rounded-circle bg-label-' +
                                      ["success", "danger", "warning", "info", "dark", "primary", "secondary"][Math.floor(6 * Math.random())] +
                                      '">' +
                                      (i = (((i = (r = t.name).match(/\b\w/g) || []).shift() || "") + (i.pop() || "")).toUpperCase()) +
                                      "</span>") +
                                '</div></div><div class="d-flex flex-column"><span class="name text-truncate h6 mb-0">' +
                                r +
                                '</span><small class="user_name text-truncate">@' +
                                s +
                                "</small></div></div>"
                            );
                        },
                    },
                    {
                        targets: -2,
                        render: function (e, a, t, o) {
                            var t = t.role,
                                i = {
                                    Admin: { icon: "ri-vip-crown-line", class: "primary" },
                                    Editor: { icon: "ri-edit-box-line", class: "warning" },
                                    Author: { icon: "ri-computer-line", class: "danger" },
                                    Maintainer: { icon: "ri-pie-chart-2-line", class: "info" },
                                    Subscriber: { icon: "ri-user-line", class: "success" },
                                };
                            return void 0 === i[t] ? e : '<span class="d-flex align-items-center gap-2 text-heading"><i class="' + i[t].icon + " ri-22px text-" + i[t].class + '"></i>' + t + "</span>";
                        },
                    },
                    {
                        targets: -1,
                        render: function (e, a, t, o) {
                            var t = t.status,
                                i = { 1: { title: "Pending", class: "bg-label-warning" }, 2: { title: "Active", class: " bg-label-success" }, 3: { title: "Inactive", class: " bg-label-secondary" } };
                            return void 0 === i[t] ? e : '<span class="badge rounded-pill ' + i[t].class + '">' + i[t].title + "</span>";
                        },
                    },
                ],
                order: [[0, "asc"]],
            })),
        (t = document.querySelector("#visitsByDayChart")),
        (a = {
            chart: { height: 314, type: "bar", parentHeightOffset: 0, toolbar: { show: !1 } },
            plotOptions: { bar: { borderRadius: 8, distributed: !0, columnWidth: "55%", endingShape: "rounded", startingShape: "rounded" } },
            series: [{ data: [38, 55, 48, 65, 80, 38, 48] }],
            tooltip: { enabled: !1 },
            legend: { show: !1 },
            dataLabels: { enabled: !1 },
            colors: [config.colors_label.primary, config.colors.primary, config.colors_label.primary, config.colors.primary, config.colors.primary, config.colors_label.primary, config.colors_label.primary],
            grid: { show: !1, padding: { top: -15, left: -7, right: -4 } },
            states: { hover: { filter: { type: "none" } }, active: { filter: { type: "none" } } },
            xaxis: { axisTicks: { show: !1 }, axisBorder: { show: !1 }, categories: ["S", "M", "T", "W", "T", "F", "S"], labels: { style: { colors: e, fontSize: "13px", fontFamily: "Inter" } } },
            yaxis: { show: !1 },
            responsive: [
                { breakpoint: 1240, options: { chart: { height: 307 } } },
                { breakpoint: 1200, options: { chart: { height: 327 } } },
                { breakpoint: 992, options: { chart: { height: 250 }, plotOptions: { bar: { columnWidth: "35%" } } } },
                { breakpoint: 577, options: { plotOptions: { bar: { columnWidth: "45%" } } } },
                { breakpoint: 477, options: { plotOptions: { bar: { columnWidth: "50%" } } } },
            ],
        });
    null !== t && new ApexCharts(t, a).render();
})();
