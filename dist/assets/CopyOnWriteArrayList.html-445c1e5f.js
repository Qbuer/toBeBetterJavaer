const t=JSON.parse('{"key":"v-396740a1","path":"/thread/CopyOnWriteArrayList.html","title":"吊打Java并发面试官之CopyOnWriteArrayList","lang":"zh-CN","frontmatter":{"title":"吊打Java并发面试官之CopyOnWriteArrayList","shortTitle":"CopyOnWriteArrayList","description":"CopyOnWriteArrayList 是一个线程安全的变体，它是 Java 的 ArrayList 类的并发版本。这个类的线程安全是通过一个简单但强大的想法实现的：每当列表修改时，就创建列表的一个新副本。","category":["Java核心"],"tag":["Java并发编程"],"head":[["meta",{"name":"keywords","content":"Java,并发编程,多线程,Thread,CopyOnWriteArrayList"}],["meta",{"property":"og:url","content":"https://javabetter.cn/thread/CopyOnWriteArrayList.html"}],["meta",{"property":"og:site_name","content":"二哥的Java进阶之路"}],["meta",{"property":"og:title","content":"吊打Java并发面试官之CopyOnWriteArrayList"}],["meta",{"property":"og:description","content":"CopyOnWriteArrayList 是一个线程安全的变体，它是 Java 的 ArrayList 类的并发版本。这个类的线程安全是通过一个简单但强大的想法实现的：每当列表修改时，就创建列表的一个新副本。"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-12-08T12:03:00.000Z"}],["meta",{"property":"article:author","content":"沉默王二"}],["meta",{"property":"article:tag","content":"Java并发编程"}],["meta",{"property":"article:modified_time","content":"2023-12-08T12:03:00.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"吊打Java并发面试官之CopyOnWriteArrayList\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2023-12-08T12:03:00.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"沉默王二\\",\\"url\\":\\"/about-the-author/\\"}]}"]]},"headers":[{"level":2,"title":"什么是 CopyOnWrite","slug":"什么是-copyonwrite","link":"#什么是-copyonwrite","children":[]},{"level":2,"title":"CopyOnWriteArrayList原理","slug":"copyonwritearraylist原理","link":"#copyonwritearraylist原理","children":[{"level":3,"title":"get 方法","slug":"get-方法","link":"#get-方法","children":[]},{"level":3,"title":"add 方法","slug":"add-方法","link":"#add-方法","children":[]}]},{"level":2,"title":"CopyOnWriteArrayList 的使用","slug":"copyonwritearraylist-的使用","link":"#copyonwritearraylist-的使用","children":[]},{"level":2,"title":"CopyOnWriteArrayList 的缺点","slug":"copyonwritearraylist-的缺点","link":"#copyonwritearraylist-的缺点","children":[]},{"level":2,"title":"小结","slug":"小结","link":"#小结","children":[]}],"git":{"createdTime":1648037338000,"updatedTime":1702036980000,"contributors":[{"name":"itwanger","email":"www.qing_gee@163.com","commits":19},{"name":"沉默王二","email":"www.qing_gee@163.com","commits":3}]},"readingTime":{"minutes":7.76,"words":2327},"filePathRelative":"thread/CopyOnWriteArrayList.md","localizedDate":"2022年3月23日","excerpt":"<h1> 第二十三节：并发容器 CopyOnWriteArrayList</h1>\\n<p>学过 <a href=\\"https://javabetter.cn/collection/arraylist.html\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">ArrayList</a> 的小伙伴应该记得，ArrayList 是一个线程不安全的容器，如果在多线程环境下使用，需要手动加锁，或者使用 <code>Collections.synchronizedList()</code> 方法将其转换为线程安全的容器。</p>\\n<p>否则，将会出现 <a href=\\"https://javabetter.cn/collection/fail-fast.html\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">ConcurrentModificationException</a> 异常。</p>"}');export{t as data};
