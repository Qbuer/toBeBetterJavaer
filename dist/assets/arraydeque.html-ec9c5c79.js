const e=JSON.parse('{"key":"v-d7ca4ccc","path":"/collection/arraydeque.html","title":"详解 Java 中的双端队列（ArrayDeque附源码分析）","lang":"zh-CN","frontmatter":{"title":"详解 Java 中的双端队列（ArrayDeque附源码分析）","shortTitle":"双端队列ArrayDeque详解","category":["Java核心"],"tag":["集合框架（容器）"],"description":"本文详细解析了 Java 中的双端队列 ArrayDeque 的实现原理、功能特点以及源码，为您提供了 ArrayDeque 的实际应用示例和性能优化建议。阅读本文，将帮助您更深入地理解双端队列在 Java 编程中的应用，从而在实际编程中充分发挥其优势。","head":[["meta",{"name":"keywords","content":"Java,ArrayDeque,堆,队列,java 双端队列,java ArrayDeque,源码分析, 实现原理"}],["meta",{"property":"og:url","content":"https://javabetter.cn/collection/arraydeque.html"}],["meta",{"property":"og:site_name","content":"二哥的Java进阶之路"}],["meta",{"property":"og:title","content":"详解 Java 中的双端队列（ArrayDeque附源码分析）"}],["meta",{"property":"og:description","content":"本文详细解析了 Java 中的双端队列 ArrayDeque 的实现原理、功能特点以及源码，为您提供了 ArrayDeque 的实际应用示例和性能优化建议。阅读本文，将帮助您更深入地理解双端队列在 Java 编程中的应用，从而在实际编程中充分发挥其优势。"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-12-08T12:03:00.000Z"}],["meta",{"property":"article:author","content":"沉默王二"}],["meta",{"property":"article:tag","content":"集合框架（容器）"}],["meta",{"property":"article:modified_time","content":"2023-12-08T12:03:00.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"详解 Java 中的双端队列（ArrayDeque附源码分析）\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2023-12-08T12:03:00.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"沉默王二\\",\\"url\\":\\"/about-the-author/\\"}]}"]]},"headers":[{"level":3,"title":"栈和队列","slug":"栈和队列","link":"#栈和队列","children":[]},{"level":3,"title":"方法剖析","slug":"方法剖析","link":"#方法剖析","children":[]},{"level":3,"title":"小结","slug":"小结","link":"#小结","children":[]}],"git":{"createdTime":1660737164000,"updatedTime":1702036980000,"contributors":[{"name":"itwanger","email":"www.qing_gee@163.com","commits":13},{"name":"沉默王二","email":"www.qing_gee@163.com","commits":5},{"name":"ThinkingBook","email":"14156581+ThinkingBook@users.noreply.github.com","commits":1},{"name":"hbingzhi","email":"houbingzhi123@gmail.com","commits":1},{"name":"luanheart","email":"luanheartx@gmail.com","commits":1}]},"readingTime":{"minutes":13.54,"words":4061},"filePathRelative":"collection/arraydeque.md","localizedDate":"2022年8月17日","excerpt":"<h1> 6.12 双端队列ArrayDeque详解</h1>\\n<blockquote>\\n<p>好，我们这节继续有请王老师上台来给大家讲 ArrayDeque，鼓掌欢迎了👏🏻。</p>\\n</blockquote>\\n<p>Java 里有一个叫做<em>Stack</em>的类，却没有叫做<em>Queue</em>的类（它只是个接口名字，和类还不一样）。</p>\\n<div class=\\"language-java line-numbers-mode\\" data-ext=\\"java\\"><pre class=\\"language-java\\"><code><span class=\\"token keyword\\">public</span> <span class=\\"token keyword\\">interface</span> <span class=\\"token class-name\\">Queue</span><span class=\\"token generics\\"><span class=\\"token punctuation\\">&lt;</span><span class=\\"token class-name\\">E</span><span class=\\"token punctuation\\">&gt;</span></span> <span class=\\"token keyword\\">extends</span> <span class=\\"token class-name\\">Collection</span><span class=\\"token generics\\"><span class=\\"token punctuation\\">&lt;</span><span class=\\"token class-name\\">E</span><span class=\\"token punctuation\\">&gt;</span></span> <span class=\\"token punctuation\\">{</span><span class=\\"token punctuation\\">}</span>\\n</code></pre><div class=\\"line-numbers\\" aria-hidden=\\"true\\"><div class=\\"line-number\\"></div></div></div>"}');export{e as data};
