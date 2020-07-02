/*
 每次更新码云技术笔记时，需要在重新部署Gitee Page刷新
 插入图片：![图片介绍](./img/图片名)
*/
module.exports = {
  lang: 'zh-CN',
  // 设置网站标题
  title: '杉-技术笔记',
  // 设置输出目录
  dest: './dist',
  head: [
    ['link', { rel: 'icon', href: '/img/LOGO.ico' }]
  ],
  base: '/technicalnotes/', // 设置站点根路径
  //repo: 'https://github.com/txs1992/mt-blog' // 添加 github 链接
  theme: 'vuepress-theme-yilia-plus',
  plugins: [
    ["vuepress-plugin-auto-sidebar", {}],
    ['@vuepress/back-to-top', true],
  ],
  // 配置图片，支持图片中文命名
  markdown: {
    extendMarkdown: md => {
      md.use(require("markdown-it-disable-url-encode"));
    }
  },
  themeConfig: {
    // 添加导航栏
    nav: [
      { text: '首页', link: '/' },
      {
        text: '前端',
        items: [
          { text: 'Andorid', link: '/front-end/Andorid/' },
          { text: 'Flutter', link: '/front-end/Flutter/' },
          { text: 'HTML5', link: '/front-end/HTML5/' },
          { text: 'JavaScript', link: '/front-end/JavaScript/' },
          { text: 'Vue', link: '/front-end/Vue/' },
          { text: 'React', link: '/front-end/React/' },
          { text: 'Webpack', link: '/front-end/Webpack/' },
          { text: 'Electron', link: '/front-end/Electron/' },
        ]
      },
      {
        text: '后端',
        items: [
          { text: 'Java', link: '/back-end/Java/' },
          { text: 'JavaWeb', link: '/back-end/JavaWeb/' },
          { text: 'Spring', link: '/back-end/Spring/' },
          { text: 'SpringBoot', link: '/back-end/SpringBoot/' },
          { text: 'Python', link: '/back-end/Python/' },
          { text: 'SQL数据库', link: '/back-end/SQL/' },
          { text: 'PHP', link: '/back-end/PHP/' },
        ]
      },
      {
        text: '其他',
        items: [
          { text: 'Git', link: '/Other/Git/' },
          { text: 'WinPE', link: '/Other/WinPE/' },
        ]
      },
      { text: '关于', link: 'https://firpe.cn/about' },
      { text: '投食 ', link: 'https://firpe.cn/donate' },
    ],
    //设置自动侧边栏
    sidebar: 'auto',
    // 为以下路由添加侧边栏
    //sidebar: ['/Docs'],
    //搜索框
    search: true,
    //不显示所有页面的标题链接
    displayAllHeaders: false,
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