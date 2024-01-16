import{_ as p}from"./plugin-vue_export-helper-c27b6911.js";import{r as o,o as l,c as i,a as n,d as a,b as e,e as t}from"./app-729f55ad.js";const c={},r=t(`<h1 id="_3-4-java数据类型转换" tabindex="-1"><a class="header-anchor" href="#_3-4-java数据类型转换" aria-hidden="true">#</a> 3.4 Java数据类型转换</h1><p>“三妹，今天我们来聊聊 Java 中的数据类型转换。”我开门见山地对三妹说。</p><p>“好啊。”三妹愉快地说。</p><p>数据类型转换的目的是确保在表达式求值时，不同类型的数据能够相互兼容。</p><h3 id="_01、自动类型转换" tabindex="-1"><a class="header-anchor" href="#_01、自动类型转换" aria-hidden="true">#</a> 01、自动类型转换</h3><p>自动类型转换（自动类型提升）是 Java 编译器在不需要显式转换的情况下，将一种基本数据类型自动转换为另一种基本数据类型的过程。这种转换通常发生在表达式求值期间，当不同类型的数据需要相互兼容时。自动类型转换遵循以下规则：</p><ul><li>如果任一操作数是 double 类型，其他操作数将被转换为 double 类型。</li><li>否则，如果任一操作数是 float 类型，其他操作数将被转换为 float 类型。</li><li>否则，如果任一操作数是 long 类型，其他操作数将被转换为 long 类型。</li><li>否则，所有操作数将被转换为 int 类型。</li></ul><p>需要注意的是，自动类型转换只发生在兼容类型之间。例如，从较小的数据类型（如 int）到较大的数据类型（如 long 或 double）的转换是安全的，因为较大的数据类型可以容纳较小数据类型的所有可能值。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>byte -&gt; short -&gt; int -&gt; long -&gt; float -&gt; double
char -&gt; int -&gt; long -&gt; float -&gt; double
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>下面是一个简单的示例，演示了自动类型转换：</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">int</span> intValue <span class="token operator">=</span> <span class="token number">5</span><span class="token punctuation">;</span>
<span class="token keyword">double</span> doubleValue <span class="token operator">=</span> <span class="token number">2.5</span><span class="token punctuation">;</span>

<span class="token comment">// 自动类型转换：intValue 被转换为 double 类型</span>
<span class="token keyword">double</span> result <span class="token operator">=</span> intValue <span class="token operator">*</span> doubleValue<span class="token punctuation">;</span>
<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;结果: &quot;</span> <span class="token operator">+</span> result<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 输出：结果: 12.5</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在这个示例中，我们有一个 int 类型的变量 intValue 和一个 double 类型的变量 doubleValue。当我们将它们相乘时，根据自动类型转换的规则，intValue 将被转换为 double 类型，以便将两个 double 类型的操作数相乘。最终结果将是一个 double 类型的值：12.5。</p><p>再来举个例子，顾客到超市购物，购买牙膏 2 盒，面巾纸 4 盒。其中牙膏的价格是 10.9 元，面巾纸的价格是 5.8 元，求商品总价格。实现代码如下：</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">float</span> price1 <span class="token operator">=</span> <span class="token number">10.9f</span><span class="token punctuation">;</span> <span class="token comment">// 定义牙膏的价格，单精度浮点型float</span>
<span class="token keyword">double</span> price2 <span class="token operator">=</span> <span class="token number">5.8</span><span class="token punctuation">;</span> <span class="token comment">// 定义面巾纸的价格，双精度浮点型double</span>
<span class="token keyword">int</span> num1 <span class="token operator">=</span> <span class="token number">2</span><span class="token punctuation">;</span> <span class="token comment">// 定义牙膏的数量，整型 int</span>
<span class="token keyword">int</span> num2 <span class="token operator">=</span> <span class="token number">4</span><span class="token punctuation">;</span> <span class="token comment">// 定义面巾纸的数量</span>
<span class="token keyword">double</span> res <span class="token operator">=</span> price1 <span class="token operator">*</span> num1 <span class="token operator">+</span> price2 <span class="token operator">*</span> num2<span class="token punctuation">;</span> <span class="token comment">// 计算总价</span>
<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;一共付给收银员&quot;</span> <span class="token operator">+</span> res <span class="token operator">+</span> <span class="token string">&quot;元&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 输出总价</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上述代码中首先定义了一个 float 类型的变量存储牙膏的价格，然后定义了一个 double 类型的变量存储面巾纸的价格，再定义两个 int 类型的变量存储物品的数量，最后进行了乘运算以及和运算之后，将结果储存在一个 double 类型的变量中进行输出。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>一共付给收银员44.99999923706055元
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>从执行结果看出，float、int 和 double 三种数据类型参与运算，最后输出的结果为 double 类型的数据。这种转换一般称为“表达式中类型的自动提升”。</p><p>自动类型提升有好处，但它也会引起令人疑惑的编译错误。例如，下面看起来正确的程序却会引起问题：</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">byte</span> b <span class="token operator">=</span> <span class="token number">50</span><span class="token punctuation">;</span>

b <span class="token operator">=</span> b <span class="token operator">*</span> <span class="token number">2</span><span class="token punctuation">;</span> <span class="token comment">// Type mismatch: cannot convert from int to byte</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>如上所示，第二行会报“类型不匹配：无法从int转换为byte”错误。</p><p>该程序试图将一个完全合法的 byte 型的值 50*2 存储给一个 byte 型的变量。但是当表达式求值的时候，操作数被自动的提升为 int 型，计算结果也被提升为 int 型。这样表达式的结果现在是 int 型，不强制转换它就不能被赋为 byte 型。</p><p>所以应该使用一个显示的强制类型转换，例如：</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">byte</span> b <span class="token operator">=</span> <span class="token number">50</span><span class="token punctuation">;</span>
b <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token keyword">byte</span><span class="token punctuation">)</span><span class="token punctuation">(</span>b<span class="token operator">*</span><span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>这样就能产生正确的值 100。</p><p>但如果是下面这样的代码，就不会报错：</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">byte</span> b <span class="token operator">=</span> <span class="token number">50</span><span class="token punctuation">;</span>
b <span class="token operator">*=</span> <span class="token number">2</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>这是因为 b <em>= 2 等价于 b = (byte)(b</em>2)，编译器会自动进行强制类型转换。</p>`,27),u={href:"https://javabetter.cn/zhishixingqiu/",target:"_blank",rel:"noopener noreferrer"},d=t(`<div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">byte</span> b <span class="token operator">=</span> <span class="token number">50</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>球友认为 50 默认的是 int 类型，大范围类型转换为小范围类型不应该是需要强制转化吗？</p><p>我的回答是编译器帮我们自动做了隐式转换，一个值是 int 类型，但是它的值在 byte 类型的取值范围（-127到 128）内，那么编译器会自动将 int 类型转换为 byte 类型。</p><figure><img src="https://cdn.tobebetterjavaer.com/stutymore/type-cast-20240110162913.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>希望大家能顾理解，自动类型转换并不局限于小类型到大类型，也可以是大类型到小类型，只要值在小类型的取值范围内，编译器就会自动帮我们做隐式转换。</p><p>注意：char 类型比较特殊，char 自动转换成 int、long、float 和 double，但 byte 和 short 不能自动转换为 char，而且 char 也不能自动转换为 byte 或 short。</p><h3 id="_02、强制类型转换" tabindex="-1"><a class="header-anchor" href="#_02、强制类型转换" aria-hidden="true">#</a> 02、强制类型转换</h3><p>强制类型转换是 Java 中将一种数据类型显式转换为另一种数据类型的过程。与自动类型转换不同，强制类型转换需要程序员显式地指定要执行的转换。强制类型转换在以下情况中可能需要：</p><ul><li>将较大的数据类型转换为较小的数据类型。</li><li>将浮点数转换为整数。</li><li>将字符类型转换为数值类型。</li></ul><p>需要注意的是，强制类型转换可能会导致数据丢失或精度降低，因为目标类型可能无法容纳原始类型的所有可能值。因此，在进行强制类型转换时，需要确保转换后的值仍然在目标类型的范围内。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>double -&gt; float -&gt; long -&gt; int -&gt; char -&gt; short -&gt; byte
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>以下是一个简单的示例，演示了强制类型转换：</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">double</span> doubleValue <span class="token operator">=</span> <span class="token number">42.8</span><span class="token punctuation">;</span>

<span class="token comment">// 强制类型转换：将 double 类型转换为 int 类型</span>
<span class="token keyword">int</span> intValue <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token keyword">int</span><span class="token punctuation">)</span> doubleValue<span class="token punctuation">;</span>
<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;整数值: &quot;</span> <span class="token operator">+</span> intValue<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 输出：整数值: 42</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在这个示例中，我们有一个 double 类型的变量 doubleValue。我们希望将其转换为 int 类型的变量 intValue。为此，我们使用强制类型转换语法，即在要转换的变量之前加上目标类型的括号（如 (int)）。</p><p>需要注意的是，将 doubleValue 转换为 int 类型时，小数部分将被截断。因此，输出结果将是：Integer value: 42。在这种情况下，精度丢失是可以接受的，但在其他情况下，我们可能需要更加小心地处理类型转换以避免数据丢失。</p><p>顾客到超市购物，购买牙膏 2 盒，面巾纸 4 盒。其中牙膏的价格是 10.9 元，面巾纸的价格是 5.8 元，求商品总价格，在计算总价时采用 int 类型的数据进行存储。实现代码如下：</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">float</span> price1 <span class="token operator">=</span> <span class="token number">10.9f</span><span class="token punctuation">;</span>
<span class="token keyword">double</span> price2 <span class="token operator">=</span> <span class="token number">5.8</span><span class="token punctuation">;</span>
<span class="token keyword">int</span> num1 <span class="token operator">=</span> <span class="token number">2</span><span class="token punctuation">;</span>
<span class="token keyword">int</span> num2 <span class="token operator">=</span> <span class="token number">4</span><span class="token punctuation">;</span>
<span class="token keyword">int</span> res2 <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token keyword">int</span><span class="token punctuation">)</span> <span class="token punctuation">(</span>price1 <span class="token operator">*</span> num1 <span class="token operator">+</span> price2 <span class="token operator">*</span> num2<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;一共付给收银员&quot;</span> <span class="token operator">+</span> res2 <span class="token operator">+</span> <span class="token string">&quot;元&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在上述实例中，有 double 类型、float 类型和 int 类型的数据参与运算，其运算结果默认为 double 类型，题目要求的结果为 int 类型，因为 int 类型的取值范围要小于 double 类型的取值范围，所以需要进行强制类型转换。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>一共付给收银员44元
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><hr>`,20),k={href:"https://github.com/itwanger/toBeBetterJavaer",target:"_blank",rel:"noopener noreferrer"},v={href:"https://javabetter.cn/overview/",target:"_blank",rel:"noopener noreferrer"},b=n("p",null,[a("微信搜 "),n("strong",null,"沉默王二"),a(" 或扫描下方二维码关注二哥的原创公众号沉默王二，回复 "),n("strong",null,"222"),a(" 即可免费领取。")],-1),m=n("figure",null,[n("img",{src:"https://cdn.tobebetterjavaer.com/tobebetterjavaer/images/gongzhonghao.png",alt:"",tabindex:"0",loading:"lazy"}),n("figcaption")],-1);function g(h,y){const s=o("ExternalLinkIcon");return l(),i("div",null,[r,n("p",null,[a("另外，之前有"),n("a",u,[a("球友"),e(s)]),a("不太理解这样的代码：")]),d,n("p",null,[a("GitHub 上标星 10000+ 的开源知识库《"),n("a",k,[a("二哥的 Java 进阶之路"),e(s)]),a("》第一版 PDF 终于来了！包括Java基础语法、数组&字符串、OOP、集合框架、Java IO、异常处理、Java 新特性、网络编程、NIO、并发编程、JVM等等，共计 32 万余字，500+张手绘图，可以说是通俗易懂、风趣幽默……详情戳："),n("a",v,[a("太赞了，GitHub 上标星 10000+ 的 Java 教程"),e(s)])]),b,m])}const x=p(c,[["render",g],["__file","type-cast.html.vue"]]);export{x as default};
