import{_ as p}from"./plugin-vue_export-helper-c27b6911.js";import{r as c,o,c as l,a as n,d as s,b as e,e as t}from"./app-729f55ad.js";const u={},i=n("h1",{id:"第二节-获取线程的执行结果",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#第二节-获取线程的执行结果","aria-hidden":"true"},"#"),s(" 第二节：获取线程的执行结果")],-1),r={href:"https://javabetter.cn/thread/wangzhe-thread.html",target:"_blank",rel:"noopener noreferrer"},k=t(`<p>前 2 种方式都有一个缺陷：在执行完任务之后无法获取执行结果。</p><p>如果需要获取执行结果，就必须通过共享变量或者线程通信的方式来达到目的，这样使用起来就比较麻烦。</p><p>Java 1.5 提供了 Callable、Future、FutureTask，它们可以在任务执行完后得到执行结果，今天我们就来详细的了解一下。</p><h2 id="无返回值的-runnable" tabindex="-1"><a class="header-anchor" href="#无返回值的-runnable" aria-hidden="true">#</a> 无返回值的 Runnable</h2><p>由于 <code>Runnable</code> 的 <code>run()</code> 方法的返回值为 void：</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">interface</span> <span class="token class-name">Runnable</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">abstract</span> <span class="token keyword">void</span> <span class="token function">run</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>所以在执行完任务之后无法返回任何结果。</p><h2 id="有返回值的-callable" tabindex="-1"><a class="header-anchor" href="#有返回值的-callable" aria-hidden="true">#</a> 有返回值的 Callable</h2><p>Callable 位于 <code>java.util.concurrent</code> 包下，也是一个接口，它定义了一个 <code>call()</code> 方法：</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">interface</span> <span class="token class-name">Callable</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">V</span><span class="token punctuation">&gt;</span></span> <span class="token punctuation">{</span>
    <span class="token class-name">V</span> <span class="token function">call</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">Exception</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,10),d=n("code",null,"call()",-1),v={href:"https://javabetter.cn/basic-extra-meal/generic.html",target:"_blank",rel:"noopener noreferrer"},m=n("p",null,"那怎么使用 Callable 呢？",-1),b={href:"https://javabetter.cn/thread/pool.html",target:"_blank",rel:"noopener noreferrer"},g=n("p",null,[s("ExecutorService 是一个接口，位于 "),n("code",null,"java.util.concurrent"),s(" 包下，它是 Java 线程池框架的核心接口，用来异步执行任务。它提供了一些关键方法用来进行线程管理。")],-1),h=n("figure",null,[n("img",{src:"https://cdn.tobebetterjavaer.com/stutymore/callable-future-futuretask-20230619105509.png",alt:"",tabindex:"0",loading:"lazy"}),n("figcaption")],-1),f={href:"https://javabetter.cn/thread/pool.html",target:"_blank",rel:"noopener noreferrer"},w=t(`<div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token comment">// 创建一个包含5个线程的线程池</span>
<span class="token class-name">ExecutorService</span> executorService <span class="token operator">=</span> <span class="token class-name">Executors</span><span class="token punctuation">.</span><span class="token function">newFixedThreadPool</span><span class="token punctuation">(</span><span class="token number">5</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// 创建一个Callable任务</span>
<span class="token class-name">Callable</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">&gt;</span></span> task <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Callable</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">call</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token string">&quot;Hello from &quot;</span> <span class="token operator">+</span> <span class="token class-name">Thread</span><span class="token punctuation">.</span><span class="token function">currentThread</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">getName</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token comment">// 提交任务到ExecutorService执行，并获取Future对象</span>
<span class="token class-name">Future</span><span class="token punctuation">[</span><span class="token punctuation">]</span> futures <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Future</span><span class="token punctuation">[</span><span class="token number">10</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> <span class="token number">10</span><span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    futures<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">=</span> executorService<span class="token punctuation">.</span><span class="token function">submit</span><span class="token punctuation">(</span>task<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">// 通过Future对象获取任务的结果</span>
<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> <span class="token number">10</span><span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>futures<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">// 关闭ExecutorService，不再接受新的任务，等待所有已提交的任务完成</span>
executorService<span class="token punctuation">.</span><span class="token function">shutdown</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1),y={href:"https://javabetter.cn/thread/pool.html",target:"_blank",rel:"noopener noreferrer"},x=t(`<p>为了做对比，我们再来看一下使用 Runnable 的方式：</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token comment">// 创建一个包含5个线程的线程池</span>
<span class="token class-name">ExecutorService</span> executorService <span class="token operator">=</span> <span class="token class-name">Executors</span><span class="token punctuation">.</span><span class="token function">newFixedThreadPool</span><span class="token punctuation">(</span><span class="token number">5</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// 创建一个Runnable任务</span>
<span class="token class-name">Runnable</span> task <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Runnable</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">run</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;Hello from &quot;</span> <span class="token operator">+</span> <span class="token class-name">Thread</span><span class="token punctuation">.</span><span class="token function">currentThread</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">getName</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token comment">// 提交任务到ExecutorService执行</span>
<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> <span class="token number">10</span><span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    executorService<span class="token punctuation">.</span><span class="token function">submit</span><span class="token punctuation">(</span>task<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">// 关闭ExecutorService，不再接受新的任务，等待所有已提交的任务完成</span>
executorService<span class="token punctuation">.</span><span class="token function">shutdown</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>可以看到，使用 Runnable 的方式要比 Callable 的方式简单一些，但是 Callable 的方式可以获取执行结果，这是 Runnable 做不到的。</p><h2 id="异步计算结果-future-接口" tabindex="-1"><a class="header-anchor" href="#异步计算结果-future-接口" aria-hidden="true">#</a> 异步计算结果 Future 接口</h2><p>在前面的例子中，我们通过 Future 来获取 Callable 任务的执行结果，那么 Future 是什么呢？</p><p>Future 位于 <code>java.util.concurrent</code> 包下，它是一个接口：</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">interface</span> <span class="token class-name">Future</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">V</span><span class="token punctuation">&gt;</span></span> <span class="token punctuation">{</span>
    <span class="token keyword">boolean</span> <span class="token function">cancel</span><span class="token punctuation">(</span><span class="token keyword">boolean</span> mayInterruptIfRunning<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">boolean</span> <span class="token function">isCancelled</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">boolean</span> <span class="token function">isDone</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token class-name">V</span> <span class="token function">get</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">InterruptedException</span><span class="token punctuation">,</span> <span class="token class-name">ExecutionException</span><span class="token punctuation">;</span>
    <span class="token class-name">V</span> <span class="token function">get</span><span class="token punctuation">(</span><span class="token keyword">long</span> timeout<span class="token punctuation">,</span> <span class="token class-name">TimeUnit</span> unit<span class="token punctuation">)</span>
        <span class="token keyword">throws</span> <span class="token class-name">InterruptedException</span><span class="token punctuation">,</span> <span class="token class-name">ExecutionException</span><span class="token punctuation">,</span> <span class="token class-name">TimeoutException</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>一共声明了 5 个方法：</p><ul><li><code>cancel()</code> 方法用来取消任务，如果取消任务成功则返回 true，如果取消任务失败则返回 false。参数 mayInterruptIfRunning 表示是否允许取消正在执行却没有执行完毕的任务，如果设置 true，则表示可以取消正在执行过程中的任务。如果任务已经完成，则无论 mayInterruptIfRunning 为 true 还是 false，此方法肯定返回 false，即如果取消已经完成的任务会返回 false；如果任务正在执行，若 mayInterruptIfRunning 设置为 true，则返回 true，若 mayInterruptIfRunning 设置为 false，则返回 false；如果任务还没有执行，则无论 mayInterruptIfRunning 为 true 还是 false，肯定返回 true。</li><li><code>isCancelled()</code> 方法表示任务是否被取消成功，如果在任务正常完成前被取消成功，则返回 true。</li><li><code>isDone()</code> 方法表示任务是否已经完成，若任务完成，则返回 true；</li><li><code>get()</code>方法用来获取执行结果，这个方法会产生阻塞，会一直等到任务执行完毕才返回；</li><li><code>get(long timeout, TimeUnit unit)</code>用来获取执行结果，如果在指定时间内，还没获取到结果，就直接返回 null。</li></ul><p>也就是说 Future 提供了三种功能：</p><ul><li>1）判断任务是否完成；</li><li>2）能够中断任务；</li><li>3）能够获取任务执行结果。</li></ul><p>由于 Future 只是一个接口，如果直接 new 的话，编译器是会有一个 ⚠️ 警告的，它会提醒我们最好使用 FutureTask。</p><figure><img src="https://cdn.tobebetterjavaer.com/stutymore/callable-future-futuretask-20230619111245.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>实际上，FutureTask 是 Future 接口的一个唯一实现类，我们在前面的例子中 <code>executorService.submit()</code> 返回的就是 FutureTask，通过 debug 模式可以观察到。</p><figure><img src="https://cdn.tobebetterjavaer.com/stutymore/callable-future-futuretask-20230619111830.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h2 id="异步计算结果-futuretask-实现类" tabindex="-1"><a class="header-anchor" href="#异步计算结果-futuretask-实现类" aria-hidden="true">#</a> 异步计算结果 FutureTask 实现类</h2><p>我们来看一下 FutureTask 的实现：</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">FutureTask</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">V</span><span class="token punctuation">&gt;</span></span> <span class="token keyword">implements</span> <span class="token class-name">RunnableFuture</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">V</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>FutureTask 类实现了 RunnableFuture 接口，我们看一下 RunnableFuture 接口的实现：</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">interface</span> <span class="token class-name">RunnableFuture</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">V</span><span class="token punctuation">&gt;</span></span> <span class="token keyword">extends</span> <span class="token class-name">Runnable</span><span class="token punctuation">,</span> <span class="token class-name">Future</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">V</span><span class="token punctuation">&gt;</span></span> <span class="token punctuation">{</span>
    <span class="token keyword">void</span> <span class="token function">run</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>可以看出 RunnableFuture 继承了 Runnable 接口和 Future 接口，而 FutureTask 实现了 RunnableFuture 接口。所以它既可以作为 Runnable 被线程执行，又可以作为 Future 得到 Callable 的返回值。</p><p>FutureTask 提供了 2 个构造器：</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token class-name">FutureTask</span><span class="token punctuation">(</span><span class="token class-name">Callable</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">V</span><span class="token punctuation">&gt;</span></span> callable<span class="token punctuation">)</span> <span class="token punctuation">{</span>
<span class="token punctuation">}</span>
<span class="token keyword">public</span> <span class="token class-name">FutureTask</span><span class="token punctuation">(</span><span class="token class-name">Runnable</span> runnable<span class="token punctuation">,</span> <span class="token class-name">V</span> result<span class="token punctuation">)</span> <span class="token punctuation">{</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>当需要异步执行一个计算并在稍后的某个时间点获取其结果时，就可以使用 FutureTask。来个例子</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token comment">// 创建一个固定大小的线程池</span>
<span class="token class-name">ExecutorService</span> executorService <span class="token operator">=</span> <span class="token class-name">Executors</span><span class="token punctuation">.</span><span class="token function">newFixedThreadPool</span><span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// 创建一系列 Callable</span>
<span class="token class-name">Callable</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Integer</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">[</span><span class="token punctuation">]</span> tasks <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Callable</span><span class="token punctuation">[</span><span class="token number">5</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> tasks<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">final</span> <span class="token keyword">int</span> index <span class="token operator">=</span> i<span class="token punctuation">;</span>
    tasks<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Callable</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Integer</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token annotation punctuation">@Override</span>
        <span class="token keyword">public</span> <span class="token class-name">Integer</span> <span class="token function">call</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">Exception</span> <span class="token punctuation">{</span>
            <span class="token class-name">TimeUnit</span><span class="token punctuation">.</span><span class="token constant">SECONDS</span><span class="token punctuation">.</span><span class="token function">sleep</span><span class="token punctuation">(</span>index <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token keyword">return</span> <span class="token punctuation">(</span>index <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token operator">*</span> <span class="token number">100</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">// 将 Callable 包装为 FutureTask，并提交到线程池</span>
<span class="token class-name">FutureTask</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Integer</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">[</span><span class="token punctuation">]</span> futureTasks <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">FutureTask</span><span class="token punctuation">[</span>tasks<span class="token punctuation">.</span>length<span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> tasks<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    futureTasks<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">FutureTask</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span>tasks<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    executorService<span class="token punctuation">.</span><span class="token function">submit</span><span class="token punctuation">(</span>futureTasks<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">// 获取任务结果</span>
<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> futureTasks<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;Result of task&quot;</span> <span class="token operator">+</span> <span class="token punctuation">(</span>i <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token string">&quot;: &quot;</span> <span class="token operator">+</span> futureTasks<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">// 关闭线程池</span>
executorService<span class="token punctuation">.</span><span class="token function">shutdown</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>来看一下输出结果</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>Result of task1: 100
Result of task2: 200
Result of task3: 300
Result of task4: 400
Result of task5: 500
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="小结" tabindex="-1"><a class="header-anchor" href="#小结" aria-hidden="true">#</a> 小结</h2><p>本文深入解释了如何在 Java 中使用 Callable、Future 和 FutureTask 来获取多线程执行结果。</p><hr>`,30),_={href:"https://github.com/itwanger/toBeBetterJavaer",target:"_blank",rel:"noopener noreferrer"},F={href:"https://javabetter.cn/thread/",target:"_blank",rel:"noopener noreferrer"},j={href:"https://javabetter.cn/thread/",target:"_blank",rel:"noopener noreferrer"},T={href:"https://javabetter.cn/thread/",target:"_blank",rel:"noopener noreferrer"},R={href:"https://javabetter.cn/thread/",target:"_blank",rel:"noopener noreferrer"},S=n("figure",null,[n("img",{src:"https://cdn.tobebetterjavaer.com/stutymore/wangzhe-thread-20230904125125.png",alt:"",tabindex:"0",loading:"lazy"}),n("figcaption")],-1);function E(C,I){const a=c("ExternalLinkIcon");return o(),l("div",null,[i,n("p",null,[n("a",r,[s("在第一节：初步掌握 Java 多线程中"),e(a)]),s("，我们讲述了创建线程的 3 种方式，一种是直接继承 Thread，一种是实现 Runnable 接口，另外一种是实现 Callable 接口。")]),k,n("p",null,[s("可以看到，"),d,s(" 方法返回的类型是一个 V 类型的"),n("a",v,[s("泛型"),e(a)]),s("。")]),m,n("p",null,[s("一般会配合 "),n("a",b,[s("ExecutorService"),e(a)]),s("（后面在讲线程池的时候会细讲，这里记住就行）来使用。")]),g,h,n("p",null,[s("下面的例子就用到了 "),n("a",f,[s("ExecutorService"),e(a)]),s(" 的 submit 方法。")]),w,n("p",null,[s("我们通过 "),n("a",y,[s("Executors 工具类"),e(a)]),s("来创建一个 ExecutorService，然后向里面提交 Callable 任务，然后通过 Future 来获取执行结果。")]),x,n("p",null,[s("GitHub 上标星 10000+ 的开源知识库《"),n("a",_,[s("二哥的 Java 进阶之路"),e(a)]),s("》第二份 PDF 《"),n("a",F,[s("并发编程小册"),e(a)]),s("》终于来了！包括线程的基本概念和使用方法、Java的内存模型、sychronized、volatile、CAS、AQS、ReentrantLock、线程池、并发容器、ThreadLocal、生产者消费者模型等面试和开发必须掌握的内容，共计 15 万余字，200+张手绘图，可以说是通俗易懂、风趣幽默……详情戳："),n("a",j,[s("太赞了，二哥的并发编程进阶之路.pdf"),e(a)])]),n("p",null,[n("a",T,[s("加入二哥的编程星球"),e(a)]),s("，在星球的第二个置顶帖「"),n("a",R,[s("知识图谱"),e(a)]),s("」里就可以获取 PDF 版本。")]),S])}const z=p(u,[["render",E],["__file","callable-future-futuretask.html.vue"]]);export{z as default};
