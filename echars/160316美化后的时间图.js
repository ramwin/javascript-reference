option = {
    title: {
        text: '堆叠区域图'
    },
    tooltip : {
        trigger: 'axis'
    },
    legend: {
        data:['邮件营销','联盟广告','视频广告','直接访问','搜索引擎']
    },
    toolbox: {
        feature: {
            saveAsImage: {}
        }
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    xAxis : [
        {
            type : 'time',
            boundaryGap : false,
            data : ['周一','周二','周三','周四','周五','周六','周日']
        }
    ],
    yAxis : [
        {
            type : 'value'
        }
    ],
    series : [
        {
            name:'邮件营销',
            type:'line',
            data:[[120,7], [121,8], [131,6], [144,5]]
        },
        {
            name:'联盟广告',
            type:'line',
            data:[[120,1], [121,2], [131,3], [144,4]]
        },
        {
            name:'视频广告',
            type:'line',
            data:[[120,1], [121,1], [131,2], [144,3]]
        },
        {
            name:'直接访问',
            type:'line',
            data:[[120,2], [121,3], [131,4], [144,5]]
        },
        {
            name:'搜索引擎',
            type:'line',
            label: {
                normal: {
                    show: true,
                    position: 'top'
                }
            },
            data:[[120,6], [121,5], [131,5], [144,5]]
        }
    ]
};

