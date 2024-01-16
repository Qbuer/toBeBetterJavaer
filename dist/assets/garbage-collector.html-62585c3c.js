import{_ as l}from"./plugin-vue_export-helper-c27b6911.js";import{r as o,o as p,c as r,a,d as e,b as s,e as t}from"./app-729f55ad.js";const i={},c=t(`<h2 id="垃圾回收器性能指标" tabindex="-1"><a class="header-anchor" href="#垃圾回收器性能指标" aria-hidden="true">#</a> 垃圾回收器性能指标</h2><ul><li>吞吐量：程序运行时间占总运行时间（总运行时间=程序运行时间+垃圾回收时间）的比例，垃圾回收时间越少，吞吐量越高；</li><li>暂停时间：STW的时间；</li><li>内存占用：Java堆所占的大小。</li></ul><p>以上三点构成不可能三角，即一款垃圾回收器不可能同时满足三点。随着硬件水平的提升，内存占用不再是我们关注的重点，评估垃圾回收器性能时，重点关注吞吐量和暂停时间。吞吐量和暂停时间是相互矛盾的，目前我们追求的效果是：在最大吞吐量优先的情况下，减小暂停时间。</p><h2 id="垃圾回收器发展历史" tabindex="-1"><a class="header-anchor" href="#垃圾回收器发展历史" aria-hidden="true">#</a> 垃圾回收器发展历史</h2><ul><li>1999年JDK 1.3.1 发布第一款串行方式的Serial GC，ParNew垃圾回收器是Serial回收器的多线程版本；</li><li>2002年2月26，Parallel GC和Concurrent Mark Sweep GC（CMS）跟随JDK 1.4.2一起发布；</li><li>Parallel GC在JDK 1.6后称为HotSpot默认GC；</li><li>2012年，在JDK 1.7u4版本中，G1可用；</li><li>2017年，JDK 9中，G1成为默认垃圾回收器，CMS被标记为过时；</li><li>2018年3月，JDK 10中提升G1并行性；</li><li>2018年9月，JDK 11引入了Epsilon垃圾回收器，同时引入ZGC（实验版本）；</li><li>2019年3月，JDK 12发布，增强G1，并引入Shenandoah GC（实验版本）；</li><li>2019年9月，JDK 13发布，增强ZGC；</li><li>2020年3月，JDK 14发布，删除CMS，拓展ZGC在MAC和Windows上的应用。</li></ul><h2 id="垃圾回收器组合" tabindex="-1"><a class="header-anchor" href="#垃圾回收器组合" aria-hidden="true">#</a> 垃圾回收器组合</h2><p>7款经典垃圾回收器间的组合关系：</p><figure><img src="https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/325a506a3bf84ff583b220e2385430d2~tplv-k3u1fbpfcp-zoom-in-crop-mark:1512:0:0:0.awebp?" alt="gc07.png" tabindex="0" loading="lazy"><figcaption>gc07.png</figcaption></figure><p>说明：</p><ol><li>两个回收器间有连线，说明它们可以搭配使用；</li><li>Serial Old作为CMS出现“Concurrent Mode Failure”失败的后备预案；</li><li>G1可用于新生代和老年代；</li><li>红色虚线连线：JDK 8将这两组组合声明为废弃，并在JDK 9中完全移除；</li><li>绿色虚线连线：JDK 14中，弃用了该组合；</li><li>绿色虚线边框：JDK 14中，删除了CMS。</li></ol><h2 id="默认垃圾回收器查看" tabindex="-1"><a class="header-anchor" href="#默认垃圾回收器查看" aria-hidden="true">#</a> 默认垃圾回收器查看</h2><p>编写一段简单的java程序：</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Test</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;hello&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>添加<code>-XX:+PrintCommandLineFlags</code>JVM参数配置，在JDK 8环境下程序输出：</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token operator">-</span><span class="token constant">XX</span><span class="token operator">:</span><span class="token class-name">InitialHeapSize</span><span class="token operator">=</span><span class="token number">536870912</span> <span class="token operator">-</span><span class="token constant">XX</span><span class="token operator">:</span><span class="token class-name">MaxHeapSize</span><span class="token operator">=</span><span class="token number">8589934592</span> <span class="token operator">-</span><span class="token constant">XX</span><span class="token operator">:</span><span class="token operator">+</span><span class="token class-name">PrintCommandLineFlags</span> <span class="token operator">-</span><span class="token constant">XX</span><span class="token operator">:</span><span class="token operator">+</span><span class="token class-name">UseCompressedClassPointers</span> <span class="token operator">-</span><span class="token constant">XX</span><span class="token operator">:</span><span class="token operator">+</span><span class="token class-name">UseCompressedOops</span> <span class="token operator">-</span><span class="token constant">XX</span><span class="token operator">:</span><span class="token operator">+</span><span class="token class-name">UseParallelGC</span> 
hello
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p><code>-XX:+UseParallelGC</code>说明JDK 8默认的垃圾回收器为Parallel。</p><p>在JDK 9环境下输出：</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token operator">-</span><span class="token constant">XX</span><span class="token operator">:</span><span class="token class-name">G1ConcRefinementThreads</span><span class="token operator">=</span><span class="token number">10</span> <span class="token operator">-</span><span class="token constant">XX</span><span class="token operator">:</span><span class="token class-name">InitialHeapSize</span><span class="token operator">=</span><span class="token number">536870912</span> <span class="token operator">-</span><span class="token constant">XX</span><span class="token operator">:</span><span class="token class-name">MaxHeapSize</span><span class="token operator">=</span><span class="token number">8589934592</span> <span class="token operator">-</span><span class="token constant">XX</span><span class="token operator">:</span><span class="token operator">+</span><span class="token class-name">PrintCommandLineFlags</span> <span class="token operator">-</span><span class="token constant">XX</span><span class="token operator">:</span><span class="token class-name">ReservedCodeCacheSize</span><span class="token operator">=</span><span class="token number">251658240</span> <span class="token operator">-</span><span class="token constant">XX</span><span class="token operator">:</span><span class="token operator">+</span><span class="token class-name">SegmentedCodeCache</span> <span class="token operator">-</span><span class="token constant">XX</span><span class="token operator">:</span><span class="token operator">+</span><span class="token class-name">UseCompressedClassPointers</span> <span class="token operator">-</span><span class="token constant">XX</span><span class="token operator">:</span><span class="token operator">+</span><span class="token class-name">UseCompressedOops</span> <span class="token operator">-</span><span class="token constant">XX</span><span class="token operator">:</span><span class="token operator">+</span><span class="token class-name">UseG1GC</span> 
hello
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p><code>-XX:+UseG1GC</code>说明JDK 9默认的垃圾回收器为G1。</p><h2 id="经典垃圾回收器介绍" tabindex="-1"><a class="header-anchor" href="#经典垃圾回收器介绍" aria-hidden="true">#</a> 经典垃圾回收器介绍</h2><h3 id="serial、serial-old回收器" tabindex="-1"><a class="header-anchor" href="#serial、serial-old回收器" aria-hidden="true">#</a> Serial、Serial Old回收器</h3><p>Serial垃圾回收器为单线程<strong>串行回收器</strong>，为HotSpot中Client模式下默认的新生代垃圾回收器，采用复制算法、串行回收和STW机制进行内存回收；</p><p>Serial Old垃圾回收器为Serial提供的老年代垃圾回收器，采用标记压缩算法、串行回收和STW机制进行内存回收：</p><ul><li>Serial Old是运行在Client模式下默认的老年代垃圾回收器；</li><li>Serial Old在Server模式下主要有两个用途：与新生代的Parallel Scavenge配合使用；作为老年代CMS回收器的后备垃圾收集方案。</li></ul><p>Serial适用于运行在Client模式下的虚拟机或者内存不大（几十MB到一两百MB）的环境下，因为是串行的，有较长时间的STW，所以并不适用于要求快响应、交互较强的应用。</p><p>可以通过<code>XX:+UseSerialGC</code>参数启用Serial回收器，表示新生代使用Serial，老年代使用Serial Old。</p><h3 id="parnew回收器" tabindex="-1"><a class="header-anchor" href="#parnew回收器" aria-hidden="true">#</a> ParNew回收器</h3><p>ParNew是Parallel New两个词的简写，是Serial的多线程版本垃圾回收器。ParNew是很多JVM运行在Server模式下新生代的默认垃圾回收器，采用复制算法，并行回收和STW机制进行内存回收。</p><p>可以通过<code>XX:+UseParNewGC</code>参数启用ParNew回收器，表示新生代使用ParNew，老年代不受影响。</p><p>Serial、ParNew搭配Serial Old回收器示意图：</p><figure><img src="https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/9b5c5ae416fe4f55be06b037fb64850e~tplv-k3u1fbpfcp-zoom-in-crop-mark:1512:0:0:0.awebp?" alt="gc08.jpg" tabindex="0" loading="lazy"><figcaption>gc08.jpg</figcaption></figure>`,31),d={href:"https://link.juejin.cn?target=https%3A%2F%2Fcodertw.com%2F%25E7%25A8%258B%25E5%25BC%258F%25E8%25AA%259E%25E8%25A8%2580%2F691189%2F",title:"https://codertw.com/%E7%A8%8B%E5%BC%8F%E8%AA%9E%E8%A8%80/691189/",target:"_blank",rel:"noopener noreferrer"},u=t('<h3 id="parallel、parallel-old回收器" tabindex="-1"><a class="header-anchor" href="#parallel、parallel-old回收器" aria-hidden="true">#</a> Parallel、Parallel Old回收器</h3><p>Parallel Scavenge回收器也是作用于新生代，同样采用复制算法，并行回收和STW机制。</p><p>Parallel Scavenge和ParNew对比：</p><ul><li>Parallel Scavenge为吞吐量优先的垃圾回收器；</li><li>Parallel Scavenge具有自适应调节策略。</li></ul><p>JDK 1.6提供了用于老年代的并行垃圾回收器 —— Parallel Old回收器，用于替代Serial Old回收器。Parallel采用标记压缩、并行回收和STW机制。</p><p>可以通过<code>-XX:+UseParallelGC</code>指定新生代使用Parallel Scavenge回收器；<code>-XX:+UseParallelOldGC</code>指定老年代使用Parallel Old回收器，它们是成对存在的，开启一个另一个也会开启。</p><p>此外还可以通过<code>-XX:ParallelGCThreads=</code>设置并行回收器的线程数：</p><ul><li>默认情况下，当CPU数量小于8个时，<code>-XX:ParallelGCThreads=</code>的值等于CPU数量；</li><li>当CPU数量大于8个，<code>-XX:ParallelGCThreads=</code>的值等于<code>3+5*CPU_COUNT/8</code>。</li></ul><p><code>-XX:+UseAdaptiveSizePolicy</code>开启Parallel Scavenge的自适应调节策略：</p><ul><li>该模式下，年轻代大小、伊甸园区和幸存者区的比例、晋升老年代的对象年龄阈值都会自动调整，以达到在堆大小、吞吐量和停顿时间之间的平衡点。</li></ul><h3 id="cms回收器" tabindex="-1"><a class="header-anchor" href="#cms回收器" aria-hidden="true">#</a> CMS回收器</h3><p>JDK 1.5 HotSpot推出了一款真正意义上的并发回收器 —— CMS（Concurrent-Mark-Sweep），第一次实现了让垃圾回收线程和用户线程同时工作。CMS的关注点在于尽可能缩短垃圾收集时用户线程停顿的时间。</p><p>CMS作为一款老年代的垃圾回收器，不能和新生代垃圾回收器Parallel Scavenge搭配使用，只能和ParNew或者Serial搭配使用。</p><p>CMS回收器示意图：</p><figure><img src="https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/aee1d995eda44f979a42233a72c16769~tplv-k3u1fbpfcp-zoom-in-crop-mark:1512:0:0:0.awebp?" alt="gc09.png" tabindex="0" loading="lazy"><figcaption>gc09.png</figcaption></figure>',15),h={href:"https://link.juejin.cn?target=https%3A%2F%2Fcodertw.com%2F%25E7%25A8%258B%25E5%25BC%258F%25E8%25AA%259E%25E8%25A8%2580%2F691189%2F",title:"https://codertw.com/%E7%A8%8B%E5%BC%8F%E8%AA%9E%E8%A8%80/691189/",target:"_blank",rel:"noopener noreferrer"},k=t('<p>主要分为以下几个步骤：</p><ol><li>初始标记（Initial-Mark）：所有用户线程暂停（STW），这个阶段仅仅标记出GC Roots能直接关联到的对象，所以速度非常快，STW时间很短；</li><li>并发标记（Concurrent-Mark）：该阶段从GC Roots直接关联对象开始遍历整个对象链，虽然这个过程耗时较长，但并不需要暂停用户线程，并发执行，没有STW；</li><li>重新标记（Remark）：由于上一步用户线程也在执行，所以这一步用于修正因用户线程继续运行而导致标记发生变动的那一部分对象的标记记录。这个阶段会比初始标记阶段耗时长一点，但远比并发标记阶段低；</li><li>并发清除（Concurrent-Sweep）：该阶段清理删除垃圾，回收空间。由于没有移动对象，所以该阶段也不需要STW。</li></ol><p>CMS的优缺点都很明显：</p><p>优点：</p><ul><li>并发收集；</li><li>低延迟。</li></ul><p>缺点：</p><ul><li>会产生碎片。因为清理阶段用户线线程还在执行，所以只能采用不移动对象的标记-清除算法，而该算法会产生碎片问题；</li><li>对CPU资源敏感。CPU资源除了用于用户线程外，还需分配一部分用于处理垃圾回收，降低了吞吐量；</li><li>无法处理浮动垃圾。并发标记阶段，用户线程并未停止，该阶段也会产生垃圾， CMS无法对这些垃圾进行标记，只能留到下次GC时处理。</li></ul><p>此外，CMS在回收过程中，因为用户线程并没有中断，所以还需确保用户线程有足够的内存可用。换句话说，CMS回收器不能等老年代即将被填满时才去回收，而应当堆内存使用率到达一定阈值时，便开始进行回收。如果CMS运行期间预留内存不足，就会出现一次“Concurrent Mode Failure”失败，虚拟机会启动后备方案，临时启用Serial Old回收器来完成老年代的垃圾回收。</p><p>CMS回收器可设置参数：</p><ul><li><code>-XX:+UseConcMarkSweepGC</code>，开启CMS GC，开启后，<code>-XX:+UseParNewGC</code>会自动打开；</li><li><code>-XX:CMSInitiatingOccupanyFraction=</code>，设置堆内存使用率阈值，一旦达到这个阈值，CMS开始进行回收（JDK5及之前，默认值为68，JDK6及以上版本默认值为92%）；</li><li><code>-XX:+UseCMSCompactAtFullCollection</code>，指定在CMS回收完老年代后，对内存空间进行压缩处理，以避免碎片化问题；</li><li><code>-XX:CMSFullGCsBeforeCompaction</code>，设置执行多少次CMS GC后，对内存空间进行压缩整理；</li><li><code>-XX:ParallelCMSThreads=</code>，设置CMS的线程数。默认启动的线程数为<code>(ParallelGCThreads+3)/4</code>。我们知道，当CPU个数小于8时，ParallelGCThreads的默认值为CPU个数，所以对于一个8核CPU，默认启动的CMS线程数为3，换句话说只有62.5%的CPU资源用于处理用户线程。所以CMS不适合吞吐量要求高的场景。</li></ul><h3 id="g1回收器" tabindex="-1"><a class="header-anchor" href="#g1回收器" aria-hidden="true">#</a> G1回收器</h3><p>G1（Garbage First）回收器把堆内存分割成很多不相关的区域（region，物理上不连续），使用不同区域来表示伊甸园区，幸存者区和老年代。</p><p>G1会避免对整个Java堆进行垃圾收集，它会跟踪各个region里垃圾回收的价值大小（回收所获得的空间大小及所需时间的经验值），在后台维护一个优先列表，每次根据允许收集时间，优先回收价值最大的region。</p><p><strong>region的说明</strong></p><figure><img src="https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/f2d231b2900a43b0afff8dc3b650db2a~tplv-k3u1fbpfcp-zoom-in-crop-mark:1512:0:0:0.awebp?" alt="gc10.png" tabindex="0" loading="lazy"><figcaption>gc10.png</figcaption></figure>',15),g={href:"https://link.juejin.cn?target=https%3A%2F%2Ftech.meituan.com%2F2016%2F09%2F23%2Fg1.html",title:"https://tech.meituan.com/2016/09/23/g1.html",target:"_blank",rel:"noopener noreferrer"},C=a("ul",null,[a("li",null,"E表示伊甸园区，S表示幸存者区、O表示老年代，空白表示未使用的内存区域；"),a("li",null,"一个region在同一时间内只能属于一种角色；"),a("li",null,"G1新增了一个全新的内存区域——Humongous，主要用于存放大对象。")],-1),m=a("p",null,"G1回收垃圾过程如下图所示：",-1),b=a("figure",null,[a("img",{src:"https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/42bb941f6b0447dc9624388a2773eeb1~tplv-k3u1fbpfcp-zoom-in-crop-mark:1512:0:0:0.awebp?",alt:"gc11.png",tabindex:"0",loading:"lazy"}),a("figcaption",null,"gc11.png")],-1),S={href:"https://link.juejin.cn?target=https%3A%2F%2Fcodertw.com%2F%25E7%25A8%258B%25E5%25BC%258F%25E8%25AA%259E%25E8%25A8%2580%2F691189%2F",title:"https://codertw.com/%E7%A8%8B%E5%BC%8F%E8%AA%9E%E8%A8%80/691189/",target:"_blank",rel:"noopener noreferrer"},f=t('<p>主要分为以下几个步骤：</p><ol><li><strong>初始标记</strong>：仅仅是标记GC Roots能直接关联的对象，需要STW，但这个过程非常快；</li><li><strong>并发标记</strong>：从GC Roots出发，对堆中对象进行可达性分析，找出存活对象，该阶段耗时较长，但是可与用户线程并发执行；</li><li><strong>最终标记</strong>：主要修正在并发标记阶段因为用户线程继续运行而导致标记记录产生变动的那一部分对象的标记记录，需要STW；</li><li><strong>筛选回收</strong>：将各个region分区的回收价值和成本进行排序，根据用户所期望的停顿时间制定回收计划。这阶段停顿用户线程，STW。</li></ol><p>G1回收器的优缺点：</p><p>优点：</p><ul><li>并行与并发；</li><li>分代收集，可以采用不同的算法处理不同的对象；</li><li>空间整合，标记压缩算法意味着不会产生内存碎片；</li><li>可预测的停顿时间，能让使用者明确指定一个长度为M毫秒时间片段内，消耗在垃圾回收的时间不超过N毫秒（根据优先列表优先回收价值最大的region）。</li></ul><p>缺点：</p><ul><li>在小内存环境下和CMS相比没有优势，G1适合大的堆内存；</li><li>在用户程序运行过程中，G1无论是为了垃圾回收产生的内存占用，还是程序运行时的额外执行负载都要比CMS高。</li></ul><p>G1回收器相关参数设置：</p><ul><li><code>-XX:+UseG1GC</code>，开启G1 GC；</li><li><code>-XX:G1HeapRegionSize=</code>，设置region的大小。值为2的幂，范围是1MB到32MB之间，目标是根据最小堆内存大小划分出约2048个区域。所以如果这个值设置为2MB，那么堆最小内存大约为4GB；</li><li><code>-XX:MaxGCPauseMillis=</code>，设置期望达到的最大GC停顿时间指标（JVM会尽力实现，但不保证达到），默认值为200ms；</li><li><code>-XX:ParallelGCThread=</code>，设置STW时GC线程数值，最多设置为8；</li><li><code>-XX:ConcGCThreads=</code>，设置并发标记的线程数，推荐值为ParallelGCThread的1/4左右；</li><li><code>-XX:InitiatingHeapOccupancyPercent=</code>，设置触发并发GC周期的Java堆占用率阈值，超过这个值就触发GC，默认值为45。</li></ul><h2 id="总结" tabindex="-1"><a class="header-anchor" href="#总结" aria-hidden="true">#</a> 总结</h2><p>上面这几款经典的垃圾回收器各有特点，具体使用的时候需要根据具体的情况选用不同的垃圾回收器：</p><figure><img src="https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/29fc44f2c82549bea2fb368b1fd4c9ce~tplv-k3u1fbpfcp-zoom-in-crop-mark:1512:0:0:0.awebp?" alt="gc12.png" tabindex="0" loading="lazy"><figcaption>gc12.png</figcaption></figure><table><thead><tr><th>垃圾回收器</th><th>分类</th><th>作用位置</th><th>使用算法</th><th>特点</th><th>适用场景</th></tr></thead><tbody><tr><td>Serial</td><td>串行</td><td>新生代</td><td>复制算法</td><td>响应速度优先</td><td>适用于单CPU环境下的Client模式</td></tr><tr><td>ParNew</td><td>并行</td><td>新生代</td><td>复制算法</td><td>响应速度优先</td><td>多CPU环境Server模式下与CMS配合使用</td></tr><tr><td>Parallel</td><td>并行</td><td>新生代</td><td>复制算法</td><td>吞吐量优先</td><td>适用于后台运算而不需要太多交互的场景</td></tr><tr><td>Serial Old</td><td>串行</td><td>老年代</td><td>标记-压缩算法</td><td>响应速度优先</td><td>单CPU环境下的Client模式</td></tr><tr><td>Parallel Old</td><td>并行</td><td>老年代</td><td>标记-压缩算法</td><td>吞吐量优先</td><td>适用于后台运算而不需要太多交互的场景</td></tr><tr><td>CMS</td><td>并发</td><td>老年代</td><td>标记-压缩算法</td><td>响应速度优先</td><td>适用于互联网或B/S业务</td></tr><tr><td>G1</td><td>并行与并发</td><td>新生代、老年代</td><td>复制算法 标记-压缩算法</td><td>响应速度优先</td><td>面向服务端应用</td></tr></tbody></table><h2 id="新垃圾回收器" tabindex="-1"><a class="header-anchor" href="#新垃圾回收器" aria-hidden="true">#</a> 新垃圾回收器</h2><p><strong>Epsilon回收器、Shenandoah回收器、ZGC回收器</strong></p>',15),v={href:"https://juejin.cn/post/7029155686575521828",target:"_blank",rel:"noopener noreferrer"},X=a("hr",null,null,-1),G={href:"https://github.com/itwanger/toBeBetterJavaer",target:"_blank",rel:"noopener noreferrer"},P={href:"https://javabetter.cn/overview/",target:"_blank",rel:"noopener noreferrer"},_=a("p",null,[e("微信搜 "),a("strong",null,"沉默王二"),e(" 或扫描下方二维码关注二哥的原创公众号沉默王二，回复 "),a("strong",null,"222"),e(" 即可免费领取。")],-1),M=a("figure",null,[a("img",{src:"https://cdn.tobebetterjavaer.com/tobebetterjavaer/images/gongzhonghao.png",alt:"",tabindex:"0",loading:"lazy"}),a("figcaption")],-1);function w(E,j){const n=o("ExternalLinkIcon");return p(),r("div",null,[c,a("blockquote",null,[a("p",null,[e("图片来自于"),a("a",d,[e("codertw.com/%E7%A8%8B%E…"),s(n)])])]),u,a("blockquote",null,[a("p",null,[e("图片来自于"),a("a",h,[e("codertw.com/%E7%A8%8B%E…"),s(n)])])]),k,a("blockquote",null,[a("p",null,[e("图片来自于"),a("a",g,[e("tech.meituan.com/2016/09/23/…"),s(n)])])]),C,m,b,a("blockquote",null,[a("p",null,[e("图片来自于"),a("a",S,[e("codertw.com/%E7%A8%8B%E…"),s(n)])])]),f,a("blockquote",null,[a("p",null,[e("参考链接："),a("a",v,[e("https://juejin.cn/post/7029155686575521828"),s(n)]),e("，整理：沉默王二")])]),X,a("p",null,[e("GitHub 上标星 10000+ 的开源知识库《"),a("a",G,[e("二哥的 Java 进阶之路"),s(n)]),e("》第一版 PDF 终于来了！包括Java基础语法、数组&字符串、OOP、集合框架、Java IO、异常处理、Java 新特性、网络编程、NIO、并发编程、JVM等等，共计 32 万余字，500+张手绘图，可以说是通俗易懂、风趣幽默……详情戳："),a("a",P,[e("太赞了，GitHub 上标星 10000+ 的 Java 教程"),s(n)])]),_,M])}const A=l(i,[["render",w],["__file","garbage-collector.html.vue"]]);export{A as default};
