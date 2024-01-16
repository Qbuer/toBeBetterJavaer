import{_ as c}from"./plugin-vue_export-helper-c27b6911.js";import{r as i,o as p,c as o,a,d as s,b as e,e as t}from"./app-729f55ad.js";const l={},r=a("h1",{id:"全文搜索引擎elasticsearch入门教程",tabindex:"-1"},[a("a",{class:"header-anchor",href:"#全文搜索引擎elasticsearch入门教程","aria-hidden":"true"},"#"),s(" 全文搜索引擎Elasticsearch入门教程")],-1),u={href:"https://mp.weixin.qq.com/s/NPJkMy5RppyFk9QhzHxhrw",target:"_blank",rel:"noopener noreferrer"},d=t('<p>不过，我首先要声明一点，我对 Elasticsearch 并没有进行很深入的研究，仅仅是因为要用，就学一下。但作为一名负责任的技术博主，我是用心的，为此还特意在某某时间上买了一门视频课程，作者叫阮一鸣。说实话，他光秃秃的头顶让我对这门课程产生了浓厚的兴趣。</p><p>经过三天三夜的学习，总算是入了 Elasticsearch 的门，我就决定把这些心得体会分享出来，感兴趣的小伙伴可以作为参考。遇到文章中有错误的地方，不要手下留情，过来捶我，只要不打脸就好。</p><figure><img src="https://cdn.tobebetterjavaer.com/tobebetterjavaer/images/elasticsearch/rumen-ebb2bdbc-2cdb-4540-b48f-41f92c848f2f.jpg" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h3 id="_01、elasticsearch-是什么" tabindex="-1"><a class="header-anchor" href="#_01、elasticsearch-是什么" aria-hidden="true">#</a> 01、Elasticsearch 是什么</h3><blockquote><p>Elasticsearch 是一个分布式、RESTful 风格的搜索和数据分析引擎，能够解决不断涌现出的各种用例。 作为 Elastic Stack 的核心，它集中存储您的数据，帮助您发现意料之中以及意料之外的情况。</p></blockquote><p>以上引用来自于官方，不得不说，解释得蛮文艺的。意料之中和意料之外，这两个词让我想起来了某一年的高考作文题（情理之中和意料之外）。</p><p>Elastic Stack 又是什么呢？整个架构图如下图（来源于网络，侵删）所示。</p><figure><img src="https://cdn.tobebetterjavaer.com/tobebetterjavaer/images/elasticsearch/rumen-04b04318-25c9-4eb5-895e-9c608a4b26f9.jpg" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>信息量比较多，对吧？那就记住一句话吧，Elasticsearch 是 Elastic Stack 的核心。</p><p>国内外的很多知名公司都在用 Elasticsearch，比如说滴滴、今日头条、谷歌、微软等等。Elasticsearch 有很多强大的功能，比如说全文搜索、购物推荐、附近定位推荐等等。</p><p>理论方面的内容就不说太多了，我怕小伙伴们会感到枯燥。毕竟入门嘛，实战才重要。</p><h3 id="_02、安装-elasticsearch" tabindex="-1"><a class="header-anchor" href="#_02、安装-elasticsearch" aria-hidden="true">#</a> 02、安装 Elasticsearch</h3><p>Elasticsearch 是由 Java 开发的，所以早期的版本需要先在电脑上安装 JDK 进行支持。后来的版本中内置了 Java 环境，所以直接下载就行了。Elasticsearch 针对不同的操作系统有不同的安装包，我们这篇入门的文章就以 Windows 为例吧。</p><p>下载地址如下：</p>',14),g={href:"https://www.elastic.co/cn/downloads/elasticsearch",target:"_blank",rel:"noopener noreferrer"},b=t('<p>最新的版本是 7.6.2，280M 左右。但我硬生生花了 10 分钟的时间才下载完毕，不知道是不是连通的 200M 带宽不给力，还是官网本身下载的速度就慢，反正我去洗了 6 颗葡萄吃完后还没下载完。</p><p>Elasticsearch 是免安装的，只需要把 zip 包解压就可以了。</p><figure><img src="https://cdn.tobebetterjavaer.com/tobebetterjavaer/images/elasticsearch/rumen-07da0521-74eb-4a90-b17f-59258e622609.jpg" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>1）bin 目录下是一些脚本文件，包括 Elasticsearch 的启动执行文件。</p><p>2）config 目录下是一些配置文件。</p><p>3）jdk 目录下是内置的 Java 运行环境。</p><p>4）lib 目录下是一些 Java 类库文件。</p><p>5）logs 目录下会生成一些日志文件。</p><p>6）modules 目录下是一些 Elasticsearch 的模块。</p><p>7）plugins 目录下可以放一些 Elasticsearch 的插件。</p><p>直接双击 bin 目录下的 elasticsearch.bat 文件就可以启动 Elasticsearch 服务了。</p><figure><img src="https://cdn.tobebetterjavaer.com/tobebetterjavaer/images/elasticsearch/rumen-7dd19afd-1aeb-49b6-a07c-f11e139fe3d3.jpg" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>输出的日志信息有点多，不用细看，注意看到有“started”的字样就表明启动成功了。为了进一步确认 Elasticsearch 有没有启动成功，可以在浏览器的地址栏里输入 <code>http://localhost:9200</code> 进行查看（9200 是 Elasticsearch 的默认端口号）。</p><figure><img src="https://cdn.tobebetterjavaer.com/tobebetterjavaer/images/elasticsearch/rumen-51f269c2-7482-494a-8a04-6585f20176a7.jpg" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>你看，为了 Search。</p><p>那如何停止服务呢？可以直接按下 <code>Ctrl+C</code> 组合键——粗暴、壁咚。</p><h3 id="_03、安装-kibana" tabindex="-1"><a class="header-anchor" href="#_03、安装-kibana" aria-hidden="true">#</a> 03、安装 Kibana</h3><p>通过 Kibana，我们可以对 Elasticsearch 服务进行可视化操作，就像在 Linux 操作系统下安装一个图形化界面一样。</p><p>下载地址如下：</p>',19),h={href:"https://www.elastic.co/cn/downloads/kibana",target:"_blank",rel:"noopener noreferrer"},k=t(`<p>最新的版本是 7.6.2，284M 左右，体积和 Elasticsearch 差不多。选择下载 Windows 版，zip 格式的，完成后直接解压就行了。下载的过程中又去洗了 6 颗葡萄吃，狗头。</p><figure><img src="https://cdn.tobebetterjavaer.com/tobebetterjavaer/images/elasticsearch/rumen-12372ee6-acc0-4425-964b-ca32886f17ce.jpg" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>包目录不再一一解释了，进入 bin 目录下，双击运行 kibana.bat 文件，启动 Kibana 服务。整个过程比 Elasticsearch 要慢一些，当看到 <code>[Kibana][http] http server running</code> 的信息后，说明服务启动成功了。</p><figure><img src="https://cdn.tobebetterjavaer.com/tobebetterjavaer/images/elasticsearch/rumen-784d70ef-b6e7-4312-85f1-36ace9b2a5bd.jpg" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>在浏览器地址栏输入 <code>http://localhost:5601</code> 查看 Kibana 的图形化界面。</p><figure><img src="https://cdn.tobebetterjavaer.com/tobebetterjavaer/images/elasticsearch/rumen-e6f64545-a925-4bb4-a25e-44129832fb4e.jpg" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>由于当前的 Elasticsearch 服务端中还没有任何数据，所以我们可以选择「Try Our Sample Data」导入 Kibana 提供的模拟数据体验一下。下图是导入电商数据库的看板页面，是不是很丰富？</p><figure><img src="https://cdn.tobebetterjavaer.com/tobebetterjavaer/images/elasticsearch/rumen-a16d99ff-272d-43bb-aa94-23b240cc464b.jpg" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>打开 Dev Tools 面板，可以看到一个简单的 DSL 查询语句（一种完全基于 JSON 的特定于领域的语言），点击「运行」按钮后就可以看到 JSON 格式的数据了。</p><figure><img src="https://cdn.tobebetterjavaer.com/tobebetterjavaer/images/elasticsearch/rumen-5c44bd79-d3a9-49fb-9414-04dc38840cfb.jpg" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h3 id="_04、elasticsearch-的关键概念" tabindex="-1"><a class="header-anchor" href="#_04、elasticsearch-的关键概念" aria-hidden="true">#</a> 04、Elasticsearch 的关键概念</h3><p>在进行下一步之前，需要先来理解 Elasticsearch 中的几个关键概念，比如说什么是索引，什么是类型，什么是文档等等。Elasticsearch 既然是一个数据引擎，它里面的一些概念就和 MySQL 有一定的关系。</p><figure><img src="https://cdn.tobebetterjavaer.com/tobebetterjavaer/images/elasticsearch/rumen-ad2b2f8c-5a19-4c5e-9bc7-cf7ba17830bf.jpg" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>看完上面这幅图（来源于网络，侵删），是不是瞬间就清晰了。向 Elasticsearch 中存储数据，其实就是向 Elasticsearch 中的 index 下面的 type 中存储 JSON 类型的数据。</p><h3 id="_05、在-java-中使用-elasticsearch" tabindex="-1"><a class="header-anchor" href="#_05、在-java-中使用-elasticsearch" aria-hidden="true">#</a> 05、在 Java 中使用 Elasticsearch</h3><p>有些小伙伴可能会问，“二哥，我是一名 Java 程序员，我该如何在 Java 中使用 Elasticsearch 呢？”这个问题问得好，这就来，这就来。</p><p>Elasticsearch 既然内置了 Java 运行环境，自然就提供了一系列 API 供我们操作。</p><p>第一步，在项目中添加 Elasticsearch 客户端依赖：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;dependency&gt;
    &lt;groupId&gt;org.elasticsearch.client&lt;/groupId&gt;
    &lt;artifactId&gt;elasticsearch-rest-high-level-client&lt;/artifactId&gt;
    &lt;version&gt;7.6.2&lt;/version&gt;
&lt;/dependency&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>第二步，新建测试类 ElasticsearchTest：</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">ElasticsearchTest</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">IOException</span> <span class="token punctuation">{</span>

        <span class="token class-name">RestHighLevelClient</span> client <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">RestHighLevelClient</span><span class="token punctuation">(</span>
                <span class="token class-name">RestClient</span><span class="token punctuation">.</span><span class="token function">builder</span><span class="token punctuation">(</span>
                        <span class="token keyword">new</span> <span class="token class-name">HttpHost</span><span class="token punctuation">(</span><span class="token string">&quot;localhost&quot;</span><span class="token punctuation">,</span> <span class="token number">9200</span><span class="token punctuation">,</span> <span class="token string">&quot;http&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token class-name">IndexRequest</span> indexRequest <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">IndexRequest</span><span class="token punctuation">(</span><span class="token string">&quot;writer&quot;</span><span class="token punctuation">)</span>
                <span class="token punctuation">.</span><span class="token function">id</span><span class="token punctuation">(</span><span class="token string">&quot;1&quot;</span><span class="token punctuation">)</span>
                <span class="token punctuation">.</span><span class="token function">source</span><span class="token punctuation">(</span><span class="token string">&quot;name&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;沉默王二&quot;</span><span class="token punctuation">,</span>
                        <span class="token string">&quot;age&quot;</span><span class="token punctuation">,</span> <span class="token number">18</span><span class="token punctuation">,</span>
                        <span class="token string">&quot;memo&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;一枚有趣的程序员&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">IndexResponse</span> indexResponse <span class="token operator">=</span> client<span class="token punctuation">.</span><span class="token function">index</span><span class="token punctuation">(</span>indexRequest<span class="token punctuation">,</span> <span class="token class-name">RequestOptions</span><span class="token punctuation">.</span><span class="token constant">DEFAULT</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token class-name">GetRequest</span> getRequest <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">GetRequest</span><span class="token punctuation">(</span><span class="token string">&quot;writer&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;1&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token class-name">GetResponse</span> getResponse <span class="token operator">=</span> client<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span>getRequest<span class="token punctuation">,</span> <span class="token class-name">RequestOptions</span><span class="token punctuation">.</span><span class="token constant">DEFAULT</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">String</span> sourceAsString <span class="token operator">=</span> getResponse<span class="token punctuation">.</span><span class="token function">getSourceAsString</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>sourceAsString<span class="token punctuation">)</span><span class="token punctuation">;</span>
        client<span class="token punctuation">.</span><span class="token function">close</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>1）RestHighLevelClient 为 Elasticsearch 提供的 REST 客户端，可以通过 HTTP 的形式连接到 Elasticsearch 服务器，参数为主机名和端口号。</p><p>有了 RestHighLevelClient 客户端，我们就可以向 Elasticsearch 服务器端发送请求并获取响应。</p><p>2）IndexRequest 用于向 Elasticsearch 服务器端添加一个索引，参数为索引关键字，比如说“writer”，还可以指定 id。通过 source 的方式可以向当前索引中添加文档数据源（键值对的形式）。</p><p>有了 IndexRequest 对象后，可以调用客户端的 <code>index()</code> 方法向 Elasticsearch 服务器添加索引。</p><p>3）GetRequest 用于向 Elasticsearch 服务器端发送一个 get 请求，参数为索引关键字，以及 id。</p><p>有了 GetRequest 对象后，可以调用客户端的 <code>get()</code> 方法向 Elasticsearch 服务器获取索引。<code>getSourceAsString()</code> 用于从响应中获取文档数据源（JSON 字符串的形式）。</p><p>好了，来看一下程序的输出结果：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>{&quot;name&quot;:&quot;沉默王二&quot;,&quot;age&quot;:18,&quot;memo&quot;:&quot;一枚有趣的程序员&quot;}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>完全符合我们的预期，perfect！</p><p>也可以通过 Kibana 的 Dev Tools 面板查看“writer”索引，结果如下图所示。</p><figure><img src="https://cdn.tobebetterjavaer.com/tobebetterjavaer/images/elasticsearch/rumen-64baa243-0075-436e-a070-f28813fee284.jpg" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h3 id="_06、鸣谢" tabindex="-1"><a class="header-anchor" href="#_06、鸣谢" aria-hidden="true">#</a> 06、鸣谢</h3><p>好了，我亲爱的小伙伴们，以上就是本文的全部内容了，是不是看完后很想实操一把 Elasticsearch，赶快行动吧！如果你在学习的过程中遇到了问题，欢迎随时和我交流，虽然我也是个菜鸟，但我有热情啊。</p><p>另外，如果你想写入门级别的文章，这篇就是最好的范例。</p><figure><img src="https://cdn.tobebetterjavaer.com/tobebetterjavaer/images/gongzhonghao.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>`,36);function m(v,f){const n=i("ExternalLinkIcon");return p(),o("div",null,[r,a("p",null,[s("学习真的是一件令人开心的事情，上次分享了 "),a("a",u,[s("Redis 入门"),e(n)]),s("的文章后，收到了很多小伙伴的鼓励，比如说：“哎呀，不错呀，二哥，通俗易懂，十分钟真的入门了”。瞅瞅，瞅瞅，我决定再接再厉，入门一下 Elasticsearch，因为我们公司的商城系统升级了，需要用 Elasticsearch 做商品的搜索。")]),d,a("p",null,[a("a",g,[s("https://www.elastic.co/cn/downloads/elasticsearch"),e(n)])]),b,a("p",null,[a("a",h,[s("https://www.elastic.co/cn/downloads/kibana"),e(n)])]),k])}const x=c(l,[["render",m],["__file","rumen.html.vue"]]);export{x as default};
