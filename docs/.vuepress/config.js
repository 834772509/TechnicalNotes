module.exports = {
  //每次更新码云技术笔记时，需要在重新部署Gitee Page刷新
  title: '杉-技术笔记',  // 设置网站标题
  dest: './dist',    // 设置输出目录
  head: [
    ['link', { rel: 'icon', href: '/img/LOGO.ico' }]
  ],
  base: '/technicalnotes/', // 设置站点根路径
  //repo: 'https://github.com/txs1992/mt-blog' // 添加 github 链接
  theme: 'vuepress-theme-yilia-plus',
  themeConfig: {
    // 添加导航栏
    nav: [
      { text: '首页', link: '/' },
      {
        text: '前端',
        items: [
          { text: 'HTML5', link: '/front-end/HTML5/' },
          { text: 'Vue', link: '/front-end/Vue/' },
          { text: 'MDUI', link: '/front-end/MDUI/' },
        ]
      },
      {
        text: '后端',
        items: [
          { text: 'Andorid', link: '/back-end/Andorid/' },
          { text: 'Java', link: '/back-end/Java/'},
          { text: 'Python', link: '/back-end/Python/'},
          { text: 'SQL数据库', link: '/back-end/SQL/'},
          { text: 'PHP', link: '/back-end/PHP/'},
          { text: '数据结构', link: '/back-end/DataStructure/'},
        ]
      },
      {
        text: '其他',
        items: [
          { text: 'WinPE', link: '/Other/WinPE/' },
        ]
      },
      { text: '关于', link: 'https://firpe.cn/about'},
      { text: '投食 ', link: 'https://firpe.cn/donate' },
    ],
    //设置自动侧边栏
    sidebar: 'auto',
    // 为以下路由添加侧边栏
    //sidebar: ['/Docs'],
    //隐藏搜索框
    search: false,
    //显示所有页面的标题链接
    displayAllHeaders: true,
    //开启页面滚动效果
    smoothScroll: true,
    yilia_plus: {
      // github-corner(关闭请设置为false)
      github: {
        url: false
      },
      footer: {
        // 网站成立年份(若填入年份小于当前年份，则显示为 2018-2019 类似的格式)
        since: 2020,
        // 网站作者(关闭请设置为false)
        //author: '<a href="https://gitee.com/fir834772509" target="_blank">杉</a>',
        author: false,
        // 访问量统计功能
        busuanzi: {
          // 是否启用(关闭请设置为false)
          enable: false
        }
      }
    }
  }
  }