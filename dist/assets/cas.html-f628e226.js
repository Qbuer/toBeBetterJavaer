const e=JSON.parse('{"key":"v-c14f0f20","path":"/thread/cas.html","title":"一文彻底搞清楚Java实现CAS的原理","lang":"zh-CN","frontmatter":{"title":"一文彻底搞清楚Java实现CAS的原理","shortTitle":"乐观锁CAS","description":"CAS（Compare-and-Swap）是一种被广泛应用在并发控制中的算法，它是一种乐观锁的实现方式。CAS全称为“比较并交换”，是一种无锁的原子操作。","category":["Java核心"],"tag":["Java并发编程"],"head":[["meta",{"name":"keywords","content":"Java,并发编程,多线程,Thread,cas"}],["meta",{"property":"og:url","content":"https://javabetter.cn/thread/cas.html"}],["meta",{"property":"og:site_name","content":"二哥的Java进阶之路"}],["meta",{"property":"og:title","content":"一文彻底搞清楚Java实现CAS的原理"}],["meta",{"property":"og:description","content":"CAS（Compare-and-Swap）是一种被广泛应用在并发控制中的算法，它是一种乐观锁的实现方式。CAS全称为“比较并交换”，是一种无锁的原子操作。"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-12-08T12:03:00.000Z"}],["meta",{"property":"article:author","content":"沉默王二"}],["meta",{"property":"article:tag","content":"Java并发编程"}],["meta",{"property":"article:modified_time","content":"2023-12-08T12:03:00.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"一文彻底搞清楚Java实现CAS的原理\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2023-12-08T12:03:00.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"沉默王二\\",\\"url\\":\\"/about-the-author/\\"}]}"]]},"headers":[{"level":2,"title":"乐观锁与悲观锁","slug":"乐观锁与悲观锁","link":"#乐观锁与悲观锁","children":[{"level":3,"title":"悲观锁","slug":"悲观锁","link":"#悲观锁","children":[]},{"level":3,"title":"乐观锁","slug":"乐观锁","link":"#乐观锁","children":[]}]},{"level":2,"title":"什么是 CAS","slug":"什么是-cas","link":"#什么是-cas","children":[]},{"level":2,"title":"CAS 的原理","slug":"cas-的原理","link":"#cas-的原理","children":[]},{"level":2,"title":"CAS 如何实现原子操作？","slug":"cas-如何实现原子操作","link":"#cas-如何实现原子操作","children":[]},{"level":2,"title":"CAS 的三大问题","slug":"cas-的三大问题","link":"#cas-的三大问题","children":[{"level":3,"title":"ABA 问题","slug":"aba-问题","link":"#aba-问题","children":[]},{"level":3,"title":"长时间自旋","slug":"长时间自旋","link":"#长时间自旋","children":[]},{"level":3,"title":"多个共享变量的原子操作","slug":"多个共享变量的原子操作","link":"#多个共享变量的原子操作","children":[]}]},{"level":2,"title":"小结","slug":"小结","link":"#小结","children":[]}],"git":{"createdTime":1648037338000,"updatedTime":1702036980000,"contributors":[{"name":"itwanger","email":"www.qing_gee@163.com","commits":17},{"name":"沉默王二","email":"www.qing_gee@163.com","commits":4}]},"readingTime":{"minutes":14.34,"words":4302},"filePathRelative":"thread/cas.md","localizedDate":"2022年3月23日","excerpt":"<h1> 第十二节：乐观锁 CAS</h1>\\n<p>CAS（Compare-and-Swap）是一种乐观锁的实现方式，全称为“比较并交换”，是一种无锁的原子操作。</p>\\n<p>在并发编程中，我们都知道<code>i++</code>操作是非线程安全的，这是因为 <code>i++</code>操作不是原子操作，我们之前在讲<a href=\\"https://javabetter.cn/thread/thread-bring-some-problem.html\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">多线程带来了什么问题</a>中有讲到，大家应该还记得吧？</p>"}');export{e as data};
