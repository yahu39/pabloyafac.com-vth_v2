export const data = {
  "key": "v-38a0cbc8",
  "path": "/zh/posts/article/article6.html",
  "title": "文章 6",
  "lang": "en-US",
  "frontmatter": {
    "icon": "edit",
    "date": "2022-01-06T00:00:00.000Z",
    "category": [
      "CategoryA",
      "CategoryB"
    ],
    "tag": [
      "tag A",
      "tag B"
    ],
    "star": 10,
    "summary": "文章 6 标题 2 这里是内容。 标题 3 这里是内容。",
    "head": [
      [
        "meta",
        {
          "property": "og:url",
          "content": "https://vuepress-theme-hope-v2-demo.mrhope.site/zh/posts/article/article6.html"
        }
      ],
      [
        "meta",
        {
          "property": "og:title",
          "content": "文章 6"
        }
      ],
      [
        "meta",
        {
          "property": "og:type",
          "content": "article"
        }
      ],
      [
        "meta",
        {
          "property": "og:locale",
          "content": "en-US"
        }
      ],
      [
        "meta",
        {
          "name": "twitter:card",
          "content": "summary_large_image"
        }
      ],
      [
        "meta",
        {
          "property": "article:tag",
          "content": "tag A"
        }
      ],
      [
        "meta",
        {
          "property": "article:tag",
          "content": "tag B"
        }
      ],
      [
        "meta",
        {
          "property": "article:published_time",
          "content": "2022-01-06T00:00:00.000Z"
        }
      ]
    ]
  },
  "excerpt": "",
  "headers": [
    {
      "level": 2,
      "title": "标题 2",
      "slug": "标题-2",
      "children": [
        {
          "level": 3,
          "title": "标题 3",
          "slug": "标题-3",
          "children": []
        }
      ]
    }
  ],
  "readingTime": {
    "minutes": 0.06,
    "words": 19
  },
  "filePathRelative": "zh/posts/article/article6.md"
}

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updatePageData) {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ data }) => {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  })
}
