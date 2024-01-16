import{_ as p}from"./plugin-vue_export-helper-c27b6911.js";import{r as c,o,c as l,a as s,d as n,b as t,e}from"./app-729f55ad.js";const i={},u=s("h1",{id:"_5-9-java代码初始化块",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#_5-9-java代码初始化块","aria-hidden":"true"},"#"),n(" 5.9 Java代码初始化块")],-1),r=s("p",null,"“哥，今天我们要学习的内容是‘代码初始化块’，对吧？”看来三妹已经提前预习了我上次留给她的作业。",-1),d={href:"https://javabetter.cn/oo/var.html",target:"_blank",rel:"noopener noreferrer"},k=e(`<p>“可以直接通过‘=’操作符对成员变量进行初始化，但通过代码初始化块可以做更多的事情，比如说打印出成员变量初始化后的值。”</p><p>“三妹，来看下面的代码，我们可以直接通过 <code>=</code> 操作符对成员变量进行初始化。”</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">class</span> <span class="token class-name">Bike</span><span class="token punctuation">{</span>  
    <span class="token keyword">int</span> speed<span class="token operator">=</span><span class="token number">100</span><span class="token punctuation">;</span>  
<span class="token punctuation">}</span>  
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>“哥，那为什么还需要代码初始化块呢？”三妹眨了眨眼睛，不解地问。</p><p>“我们可以通过代码初始化块执行一个更复杂的操作，比如为集合填充值。来看下面这段代码。”</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Bike</span> <span class="token punctuation">{</span>
    <span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">&gt;</span></span> list<span class="token punctuation">;</span>

    <span class="token punctuation">{</span>
        list <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ArrayList</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        list<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token string">&quot;沉默王二&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        list<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token string">&quot;沉默王三&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">Bike</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span>list<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>“如果只使用‘=’操作符的话，是没办法完成集合初始化的，对吧？‘=’ 后面只能 new 出集合，却没办法填充值，代码初始化就可以完成这项工作。”</p>`,7),v={href:"https://javabetter.cn/oo/construct.html",target:"_blank",rel:"noopener noreferrer"},m=e(`<p>“不要着急，三妹，先来看下面这个例子。”</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Car</span> <span class="token punctuation">{</span>
    <span class="token class-name">Car</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;构造方法&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;代码初始化块&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">new</span> <span class="token class-name">Car</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>“我们来看一下程序的输出结果就一下子明白了。”</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>代码初始化块
构造方法
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>“从输出结果看上去，仿佛代码初始化块执行得更早，对吧？事实上是这样子吗？”我露出神秘的微笑，问三妹。</p><p>“难道我看到的是假象吗？”三妹睁大了眼睛。</p><p>“不是的，对象在初始化的时候会先调用构造方法，这是毫无疑问的，只不过，构造方法在执行的时候会把代码初始化块放在构造方法中其他代码之前，所以，先看到了‘代码初始化块’，后看到了‘’构造方法’。”</p>`,7),b={href:"http://draw.io",target:"_blank",rel:"noopener noreferrer"},g=e(`<figure><img src="https://cdn.tobebetterjavaer.com/tobebetterjavaer/images/object-class/22-01.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>“哦，原来如此啊！”三妹仿佛发现了新大陆，意味深长地说，“编译器把代码初始化块放到了构造方法中，怪不得。”</p><p>等三妹明白彻底搞明白后，我对她继续说道：“对于代码初始化来说，它有三个规则。”</p><ul><li>类实例化的时候执行代码初始化块；</li><li>实际上，代码初始化块是放在构造方法中执行的，只不过比较靠前；</li><li>代码初始化块里的执行顺序是从前到后的。</li></ul><p>“这些规则不用死记硬背，大致了解一下就行了。我们继续来看下面这段代码。”话音刚落，我就在新版的 IDEA 中噼里啪啦地敲了起来，新版真香。</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">class</span> <span class="token class-name">A</span> <span class="token punctuation">{</span>
    <span class="token class-name">A</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;父类构造方法&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">B</span> <span class="token keyword">extends</span> <span class="token class-name">A</span><span class="token punctuation">{</span>
    <span class="token class-name">B</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;子类构造方法&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;代码初始化块&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">new</span> <span class="token class-name">B</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>“来看一下输出结果。”</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>父类构造方法
代码初始化块
子类构造方法
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>“在默认情况下，子类的构造方法在执行的时候会主动去调用父类的构造方法。也就是说，其实是构造方法先执行的，再执行的代码初始化块。”</p><p>“这个例子再次印证了之前的第二条规则：代码初始化块是放在构造方法中执行的，只不过比较靠前。”</p>`,10),y={href:"https://javabetter.cn/oo/static.html",target:"_blank",rel:"noopener noreferrer"},h=e(`<p>下面是一个 Java 示例代码，演示实例初始化块和静态初始化块的用法：</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Example</span> <span class="token punctuation">{</span>
    <span class="token comment">// 静态变量</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">int</span> staticVar <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>
    <span class="token comment">// 实例变量</span>
    <span class="token keyword">public</span> <span class="token keyword">int</span> instanceVar <span class="token operator">=</span> <span class="token number">2</span><span class="token punctuation">;</span>

    <span class="token comment">// 静态初始化块</span>
    <span class="token keyword">static</span> <span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;执行静态初始化块&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        staticVar <span class="token operator">=</span> <span class="token number">3</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token comment">// 实例初始化块</span>
    <span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;执行实例初始化块&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        instanceVar <span class="token operator">=</span> <span class="token number">4</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token comment">// 构造方法</span>
    <span class="token keyword">public</span> <span class="token class-name">Example</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;执行构造方法&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;执行main方法&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token class-name">Example</span> e1 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Example</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">Example</span> e2 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Example</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;e1的静态变量：&quot;</span> <span class="token operator">+</span> e1<span class="token punctuation">.</span>staticVar<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;e1的实例变量：&quot;</span> <span class="token operator">+</span> e1<span class="token punctuation">.</span>instanceVar<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;e2的静态变量：&quot;</span> <span class="token operator">+</span> e2<span class="token punctuation">.</span>staticVar<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;e2的实例变量：&quot;</span> <span class="token operator">+</span> e2<span class="token punctuation">.</span>instanceVar<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在这个示例代码中，有一个静态变量 staticVar 和一个实例变量 instanceVar，以及一个静态初始化块和一个实例初始化块。在静态初始化块中，我们打印了一条消息并修改了静态变量的值；在实例初始化块中，我们也打印了一条消息并修改了实例变量的值。</p><p>来看一下执行结果：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>执行静态初始化块
执行main方法
执行实例初始化块
执行构造方法
执行实例初始化块
执行构造方法
e1的静态变量：3
e1的实例变量：4
e2的静态变量：3
e2的实例变量：4
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>从输出结果可以看出，静态初始化块在类加载时执行，只会执行一次，并且优先于实例初始化块和构造方法的执行；实例初始化块在每次创建对象时执行，在构造方法之前执行。</p><p>“好了，今天就先讲到这吧，中午休息一下，下午的精神会更足。”刚对三妹说完这句话，我的哈欠就上来了，好困。</p><hr>`,8),_={href:"https://github.com/itwanger/toBeBetterJavaer",target:"_blank",rel:"noopener noreferrer"},w={href:"https://javabetter.cn/overview/",target:"_blank",rel:"noopener noreferrer"},f=s("p",null,[n("微信搜 "),s("strong",null,"沉默王二"),n(" 或扫描下方二维码关注二哥的原创公众号沉默王二，回复 "),s("strong",null,"222"),n(" 即可免费领取。")],-1),x=s("figure",null,[s("img",{src:"https://cdn.tobebetterjavaer.com/tobebetterjavaer/images/gongzhonghao.png",alt:"",tabindex:"0",loading:"lazy"}),s("figcaption")],-1);function q(j,S){const a=c("ExternalLinkIcon");return o(),l("div",null,[u,r,s("p",null,[n("“是的，三妹。代码初始化块用于初始化一些"),s("a",d,[n("成员变量"),t(a)]),n("。 ”我面带着朴实无华的微笑回答着她，“对象在创建的时候会执行代码初始化块，又称实例初始化块，主要和静态初始化块做区分。”")]),k,s("p",null,[n("“"),s("a",v,[n("构造方法"),t(a)]),n("执行得早还是代码初始化块啊，哥？”三妹这个问题问的还是挺有水平的。")]),m,s("p",null,[n("说完这句话，我打开 "),s("a",b,[n("draw.io"),t(a)]),n("，使上了吃奶的劲，画出了下面这幅图。")]),g,s("p",null,[n("除了这种实例化代码初始化块，还有静态初始化，不过我们会放到 "),s("a",y,[n("static 关键字"),t(a)]),n("中去讲，这里先大致了解一下。")]),h,s("p",null,[n("GitHub 上标星 10000+ 的开源知识库《"),s("a",_,[n("二哥的 Java 进阶之路"),t(a)]),n("》第一版 PDF 终于来了！包括Java基础语法、数组&字符串、OOP、集合框架、Java IO、异常处理、Java 新特性、网络编程、NIO、并发编程、JVM等等，共计 32 万余字，500+张手绘图，可以说是通俗易懂、风趣幽默……详情戳："),s("a",w,[n("太赞了，GitHub 上标星 10000+ 的 Java 教程"),t(a)])]),f,x])}const E=p(i,[["render",q],["__file","code-init.html.vue"]]);export{E as default};
