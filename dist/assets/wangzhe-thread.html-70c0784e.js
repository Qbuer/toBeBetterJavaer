import{_ as e}from"./plugin-vue_export-helper-c27b6911.js";import{r as c,o,c as l,a as s,d as n,b as t,e as p}from"./app-729f55ad.js";const i={},u=p(`<h1 id="第一节-java多线程入门" tabindex="-1"><a class="header-anchor" href="#第一节-java多线程入门" aria-hidden="true">#</a> 第一节：Java多线程入门</h1><p>对于 Java 初学者来说，多线程的很多概念听起来就很难理解。比方说：</p><ul><li>进程，是对运行时程序的封装，是系统进行资源调度和分配的基本单位，实现了操作系统的并发。</li><li>线程，是进程的子任务，是 CPU 调度和分派的基本单位，实现了进程内部的并发。</li></ul><p>很抽象，对不对？打个比喻，你在打一把王者（其实我不会玩哈 doge）：</p><ul><li>进程可以比作是你开的这一把游戏</li><li>线程可以比作是你所选的英雄或者是游戏中的水晶野怪等之类的。</li></ul><p>带着这个比喻来理解进程和线程的一些关系，一个进程可以有多个线程就叫多线程。是不是感觉非常好理解了？</p><h2 id="进程和线程" tabindex="-1"><a class="header-anchor" href="#进程和线程" aria-hidden="true">#</a> 进程和线程</h2><p><strong>❤1、线程在进程下进行</strong></p><p>（单独的英雄角色、野怪、小兵肯定不能运行）</p><p><strong>❤2、进程之间不会相互影响，主线程结束将会导致整个进程结束</strong></p><p>（两把游戏之间不会有联系和影响。你的水晶被推掉，你这把游戏就结束了）</p><p><strong>❤3、不同的进程数据很难共享</strong></p><p>（两把游戏之间很难有联系，有联系的情况比如上把的敌人这把又匹配到了）</p><p><strong>❤4、同进程下的不同线程之间数据很容易共享</strong></p><p>（你开的那一把游戏，你可以看到每个玩家的状态——生死，也可以看到每个玩家的出装等等）</p><p><strong>❤5、进程使用内存地址可以限定使用量</strong></p><p>（开的房间模式，决定了你可以设置有多少人进，当房间满了后，其他人就进不去了，除非有人退出房间，其他人才能进）</p><h2 id="创建线程的三种方式" tabindex="-1"><a class="header-anchor" href="#创建线程的三种方式" aria-hidden="true">#</a> 创建线程的三种方式</h2><p>搞清楚上面这些概念之后，我们来看一下多线程创建的三种方式：</p><h3 id="继承-thread-类" tabindex="-1"><a class="header-anchor" href="#继承-thread-类" aria-hidden="true">#</a> 继承 Thread 类</h3><p>♠①：创建一个类继承 Thread 类，并重写 run 方法。</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">MyThread</span> <span class="token keyword">extends</span> <span class="token class-name">Thread</span> <span class="token punctuation">{</span>
    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">run</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> <span class="token number">100</span><span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token function">getName</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token string">&quot;:打了&quot;</span> <span class="token operator">+</span> i <span class="token operator">+</span> <span class="token string">&quot;个小兵&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>我们来写个测试方法验证下：</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token comment">//创建MyThread对象</span>
<span class="token class-name">MyThread</span> t1<span class="token operator">=</span><span class="token keyword">new</span>  <span class="token class-name">MyThread</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token class-name">MyThread</span> t2<span class="token operator">=</span><span class="token keyword">new</span>  <span class="token class-name">MyThread</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token class-name">MyThread</span> t3<span class="token operator">=</span><span class="token keyword">new</span>  <span class="token class-name">MyThread</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">//设置线程的名字</span>
t1<span class="token punctuation">.</span><span class="token function">setName</span><span class="token punctuation">(</span><span class="token string">&quot;鲁班&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
t2<span class="token punctuation">.</span><span class="token function">setName</span><span class="token punctuation">(</span><span class="token string">&quot;刘备&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
t3<span class="token punctuation">.</span><span class="token function">setName</span><span class="token punctuation">(</span><span class="token string">&quot;亚瑟&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">//启动线程</span>
t1<span class="token punctuation">.</span><span class="token function">start</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
t2<span class="token punctuation">.</span><span class="token function">start</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
t3<span class="token punctuation">.</span><span class="token function">start</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>来看一下执行后的结果：</p><figure><img src="https://cdn.tobebetterjavaer.com/tobebetterjavaer/images/thread/wangzhe-thread-01.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h3 id="实现-runnable-接口" tabindex="-1"><a class="header-anchor" href="#实现-runnable-接口" aria-hidden="true">#</a> 实现 Runnable 接口</h3><p>♠②：创建一个类实现 Runnable 接口，并重写 run 方法。</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">MyRunnable</span> <span class="token keyword">implements</span> <span class="token class-name">Runnable</span> <span class="token punctuation">{</span>
    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">run</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> <span class="token number">10</span><span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">try</span> <span class="token punctuation">{</span><span class="token comment">//sleep会发生异常要显示处理</span>
                <span class="token class-name">Thread</span><span class="token punctuation">.</span><span class="token function">sleep</span><span class="token punctuation">(</span><span class="token number">20</span><span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//暂停20毫秒</span>
            <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">InterruptedException</span> e<span class="token punctuation">)</span> <span class="token punctuation">{</span>
                e<span class="token punctuation">.</span><span class="token function">printStackTrace</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
            <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token class-name">Thread</span><span class="token punctuation">.</span><span class="token function">currentThread</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">getName</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token string">&quot;打了:&quot;</span> <span class="token operator">+</span> i <span class="token operator">+</span> <span class="token string">&quot;个小兵&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>我们来写个测试方法验证下：</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token comment">//创建MyRunnable类</span>
<span class="token class-name">MyRunnable</span> mr <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">MyRunnable</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">//创建Thread类的有参构造,并设置线程名</span>
<span class="token class-name">Thread</span> t1 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Thread</span><span class="token punctuation">(</span>mr<span class="token punctuation">,</span> <span class="token string">&quot;张飞&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token class-name">Thread</span> t2 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Thread</span><span class="token punctuation">(</span>mr<span class="token punctuation">,</span> <span class="token string">&quot;貂蝉&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token class-name">Thread</span> t3 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Thread</span><span class="token punctuation">(</span>mr<span class="token punctuation">,</span> <span class="token string">&quot;吕布&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">//启动线程</span>
t1<span class="token punctuation">.</span><span class="token function">start</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
t2<span class="token punctuation">.</span><span class="token function">start</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
t3<span class="token punctuation">.</span><span class="token function">start</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>来看一下执行后的结果：</p><figure><img src="https://cdn.tobebetterjavaer.com/tobebetterjavaer/images/thread/wangzhe-thread-02.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h3 id="实现-callable-接口" tabindex="-1"><a class="header-anchor" href="#实现-callable-接口" aria-hidden="true">#</a> 实现 Callable 接口</h3><p>♠③：实现 Callable 接口，重写 call 方法，这种方式可以通过 FutureTask 获取任务执行的返回值。</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">CallerTask</span> <span class="token keyword">implements</span> <span class="token class-name">Callable</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">&gt;</span></span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">call</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">Exception</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token string">&quot;Hello,i am running!&quot;</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">//创建异步任务</span>
        <span class="token class-name">FutureTask</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">&gt;</span></span> task<span class="token operator">=</span><span class="token keyword">new</span> <span class="token class-name">FutureTask</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">CallerTask</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">//启动线程</span>
        <span class="token keyword">new</span> <span class="token class-name">Thread</span><span class="token punctuation">(</span>task<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">start</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">try</span> <span class="token punctuation">{</span>
            <span class="token comment">//等待执行完成，并获取返回结果</span>
            <span class="token class-name">String</span> result<span class="token operator">=</span>task<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>result<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">InterruptedException</span> e<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            e<span class="token punctuation">.</span><span class="token function">printStackTrace</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">ExecutionException</span> e<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            e<span class="token punctuation">.</span><span class="token function">printStackTrace</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="关于线程的一些疑问" tabindex="-1"><a class="header-anchor" href="#关于线程的一些疑问" aria-hidden="true">#</a> 关于线程的一些疑问</h2><h3 id="❤1、为什么要重写-run-方法" tabindex="-1"><a class="header-anchor" href="#❤1、为什么要重写-run-方法" aria-hidden="true">#</a> ❤1、为什么要重写 run 方法？</h3><p>这是因为默认的<code>run()</code>方法不会做任何事情。</p><p>为了让线程执行一些实际的任务，我们需要提供自己的<code>run()</code>方法实现，这就需要重写<code>run()</code>方法。</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">MyThread</span> <span class="token keyword">extends</span> <span class="token class-name">Thread</span> <span class="token punctuation">{</span>
  <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">run</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;MyThread running&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在这个例子中，我们重写了<code>run()</code>方法，使其打印出一条消息。当我们创建并启动这个线程的实例时，它就会打印出这条消息。</p><h3 id="❤2、run-方法和-start-方法有什么区别" tabindex="-1"><a class="header-anchor" href="#❤2、run-方法和-start-方法有什么区别" aria-hidden="true">#</a> ❤2、run 方法和 start 方法有什么区别？</h3><ul><li><code>run()</code>：封装线程执行的代码，直接调用相当于调用普通方法。</li><li><code>start()</code>：启动线程，然后由 JVM 调用此线程的 <code>run()</code> 方法。</li></ul><p><strong>❤3、通过继承 Thread 的方法和实现 Runnable 接口的方式创建多线程，哪个好？</strong></p><p>实现 Runable 接口好，原因有两个：</p><ul><li>♠①、避免了 Java 单继承的局限性，Java 不支持多重继承，因此如果我们的类已经继承了另一个类，就不能再继承 Thread 类了。</li><li>♠②、适合多个相同的程序代码去处理同一资源的情况，把线程、代码和数据有效的分离，更符合面向对象的设计思想。Callable 接口与 Runnable 非常相似，但可以返回一个结果。</li></ul><h2 id="控制线程的其他方法" tabindex="-1"><a class="header-anchor" href="#控制线程的其他方法" aria-hidden="true">#</a> 控制线程的其他方法</h2><p>针对线程控制，大家还会遇到 3 个常见的方法，我们来一一介绍下。</p><h3 id="_1-sleep" tabindex="-1"><a class="header-anchor" href="#_1-sleep" aria-hidden="true">#</a> 1）sleep()</h3><p>使当前正在执行的线程暂停指定的毫秒数，也就是进入休眠的状态。</p><p>需要注意的是，sleep 的时候要对异常进行处理。</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">try</span> <span class="token punctuation">{</span><span class="token comment">//sleep会发生异常要显示处理</span>
    <span class="token class-name">Thread</span><span class="token punctuation">.</span><span class="token function">sleep</span><span class="token punctuation">(</span><span class="token number">20</span><span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//暂停20毫秒</span>
<span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">InterruptedException</span> e<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    e<span class="token punctuation">.</span><span class="token function">printStackTrace</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-join" tabindex="-1"><a class="header-anchor" href="#_2-join" aria-hidden="true">#</a> 2）join()</h3><p>等待这个线程执行完才会轮到后续线程得到 cpu 的执行权，使用这个也要捕获异常。</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token comment">//创建MyRunnable类</span>
<span class="token class-name">MyRunnable</span> mr <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">MyRunnable</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">//创建Thread类的有参构造,并设置线程名</span>
<span class="token class-name">Thread</span> t1 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Thread</span><span class="token punctuation">(</span>mr<span class="token punctuation">,</span> <span class="token string">&quot;张飞&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token class-name">Thread</span> t2 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Thread</span><span class="token punctuation">(</span>mr<span class="token punctuation">,</span> <span class="token string">&quot;貂蝉&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token class-name">Thread</span> t3 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Thread</span><span class="token punctuation">(</span>mr<span class="token punctuation">,</span> <span class="token string">&quot;吕布&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">//启动线程</span>
t1<span class="token punctuation">.</span><span class="token function">start</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">try</span> <span class="token punctuation">{</span>
    t1<span class="token punctuation">.</span><span class="token function">join</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//等待t1执行完才会轮到t2，t3抢</span>
<span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">InterruptedException</span> e<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    e<span class="token punctuation">.</span><span class="token function">printStackTrace</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
t2<span class="token punctuation">.</span><span class="token function">start</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
t3<span class="token punctuation">.</span><span class="token function">start</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>来看一下执行后的结果：</p><figure><img src="https://cdn.tobebetterjavaer.com/tobebetterjavaer/images/thread/wangzhe-thread-03.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h3 id="_3-setdaemon" tabindex="-1"><a class="header-anchor" href="#_3-setdaemon" aria-hidden="true">#</a> 3）setDaemon()</h3><p>将此线程标记为守护线程，准确来说，就是服务其他的线程，像 Java 中的垃圾回收线程，就是典型的守护线程。</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token comment">//创建MyRunnable类</span>
<span class="token class-name">MyRunnable</span> mr <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">MyRunnable</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">//创建Thread类的有参构造,并设置线程名</span>
<span class="token class-name">Thread</span> t1 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Thread</span><span class="token punctuation">(</span>mr<span class="token punctuation">,</span> <span class="token string">&quot;张飞&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token class-name">Thread</span> t2 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Thread</span><span class="token punctuation">(</span>mr<span class="token punctuation">,</span> <span class="token string">&quot;貂蝉&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token class-name">Thread</span> t3 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Thread</span><span class="token punctuation">(</span>mr<span class="token punctuation">,</span> <span class="token string">&quot;吕布&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

t1<span class="token punctuation">.</span><span class="token function">setDaemon</span><span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
t2<span class="token punctuation">.</span><span class="token function">setDaemon</span><span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">//启动线程</span>
t1<span class="token punctuation">.</span><span class="token function">start</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
t2<span class="token punctuation">.</span><span class="token function">start</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
t3<span class="token punctuation">.</span><span class="token function">start</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>如果其他线程都执行完毕，main 方法（主线程）也执行完毕，JVM 就会退出，也就是停止运行。如果 JVM 都停止运行了，守护线程自然也就停止了。</p><h3 id="_4-yield" tabindex="-1"><a class="header-anchor" href="#_4-yield" aria-hidden="true">#</a> 4）yield()</h3>`,63),r={href:"https://javabetter.cn/jvm/what-is-jvm.html",target:"_blank",rel:"noopener noreferrer"},k=p(`<div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">class</span> <span class="token class-name">YieldExample</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">Thread</span> thread1 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Thread</span><span class="token punctuation">(</span><span class="token class-name">YieldExample</span><span class="token operator">::</span><span class="token function">printNumbers</span><span class="token punctuation">,</span> <span class="token string">&quot;刘备&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">Thread</span> thread2 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Thread</span><span class="token punctuation">(</span><span class="token class-name">YieldExample</span><span class="token operator">::</span><span class="token function">printNumbers</span><span class="token punctuation">,</span> <span class="token string">&quot;关羽&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        thread1<span class="token punctuation">.</span><span class="token function">start</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        thread2<span class="token punctuation">.</span><span class="token function">start</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">private</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">printNumbers</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span> i <span class="token operator">&lt;=</span> <span class="token number">5</span><span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token class-name">Thread</span><span class="token punctuation">.</span><span class="token function">currentThread</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">getName</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token string">&quot;: &quot;</span> <span class="token operator">+</span> i<span class="token punctuation">)</span><span class="token punctuation">;</span>

            <span class="token comment">// 当 i 是偶数时，当前线程暂停执行</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span>i <span class="token operator">%</span> <span class="token number">2</span> <span class="token operator">==</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token class-name">Thread</span><span class="token punctuation">.</span><span class="token function">currentThread</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">getName</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token string">&quot; 让出控制权...&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token class-name">Thread</span><span class="token punctuation">.</span><span class="token keyword">yield</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>运行结果：</p><figure><img src="https://cdn.tobebetterjavaer.com/stutymore/wangzhe-thread-20240110111338.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>从这个结果可以看得出来，即便有时候让出了控制权，其他线程也不一定会执行。</p><h2 id="小结" tabindex="-1"><a class="header-anchor" href="#小结" aria-hidden="true">#</a> 小结</h2><p>本文主要介绍了 Java 多线程的创建方式，以及线程的一些常用方法。最后再来看一下线程的生命周期吧，一图胜千言。</p><figure><img src="https://cdn.tobebetterjavaer.com/tobebetterjavaer/images/thread/wangzhe-thread-04.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><hr>`,8),d={href:"https://github.com/itwanger/toBeBetterJavaer",target:"_blank",rel:"noopener noreferrer"},v={href:"https://javabetter.cn/thread/",target:"_blank",rel:"noopener noreferrer"},m={href:"https://javabetter.cn/thread/",target:"_blank",rel:"noopener noreferrer"},b={href:"https://javabetter.cn/thread/",target:"_blank",rel:"noopener noreferrer"},h={href:"https://javabetter.cn/thread/",target:"_blank",rel:"noopener noreferrer"},g=s("figure",null,[s("img",{src:"https://cdn.tobebetterjavaer.com/stutymore/wangzhe-thread-20230904125125.png",alt:"",tabindex:"0",loading:"lazy"}),s("figcaption")],-1);function f(y,w){const a=c("ExternalLinkIcon");return o(),l("div",null,[u,s("p",null,[n("yield() 方法是一个静态方法，用于暗示当前线程愿意放弃其当前的时间片，允许其他线程执行。然而，它只是向线程调度器提出建议，调度器可能会忽略这个建议。具体行为取决于操作系统和 "),s("a",r,[n("JVM"),t(a)]),n(" 的线程调度策略。")]),k,s("p",null,[n("GitHub 上标星 10000+ 的开源知识库《"),s("a",d,[n("二哥的 Java 进阶之路"),t(a)]),n("》第二份 PDF 《"),s("a",v,[n("并发编程小册"),t(a)]),n("》终于来了！包括线程的基本概念和使用方法、Java的内存模型、sychronized、volatile、CAS、AQS、ReentrantLock、线程池、并发容器、ThreadLocal、生产者消费者模型等面试和开发必须掌握的内容，共计 15 万余字，200+张手绘图，可以说是通俗易懂、风趣幽默……详情戳："),s("a",m,[n("太赞了，二哥的并发编程进阶之路.pdf"),t(a)])]),s("p",null,[s("a",b,[n("加入二哥的编程星球"),t(a)]),n("，在星球的第二个置顶帖「"),s("a",h,[n("知识图谱"),t(a)]),n("」里就可以获取 PDF 版本。")]),g])}const x=e(i,[["render",f],["__file","wangzhe-thread.html.vue"]]);export{x as default};
