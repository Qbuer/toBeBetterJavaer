import{_ as p}from"./plugin-vue_export-helper-c27b6911.js";import{r as o,o as c,c as i,a as s,d as n,b as e,e as t}from"./app-729f55ad.js";const l={},u=t('<h1 id="_5-4-java中的方法" tabindex="-1"><a class="header-anchor" href="#_5-4-java中的方法" aria-hidden="true">#</a> 5.4 Java中的方法</h1><p>“二哥，这一节我们学什么呢？”三妹满是期待的问我。</p><p>“这一节我们来了解一下 Java 中的方法——什么是方法？如何声明方法？方法有哪几种？什么是实例方法？什么是静态方法？什么是抽象方法？什么是本地方法？”我笑着对三妹说，“我开始了啊，你要注意力集中啊。”</p><h3 id="_01、java中的方法是什么" tabindex="-1"><a class="header-anchor" href="#_01、java中的方法是什么" aria-hidden="true">#</a> 01、Java中的方法是什么？</h3><p>方法用来实现代码的可重用性，我们编写一次方法，并多次使用它。通过增加或者删除方法中的一部分代码，就可以提高整体代码的可读性。</p><p>只有方法被调用时，它才会执行。Java 中最有名的方法当属 <code>main()</code> 方法，这是程序的入口。</p><h3 id="_02、如何声明方法" tabindex="-1"><a class="header-anchor" href="#_02、如何声明方法" aria-hidden="true">#</a> 02、如何声明方法？</h3><p>方法的声明反映了方法的一些信息，比如说可见性、返回类型、方法名和参数。如下图所示。</p><figure><img src="https://cdn.tobebetterjavaer.com/tobebetterjavaer/images/object-class/17-01.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>',9),d=s("strong",null,"访问权限",-1),r={href:"https://javabetter.cn/oo/access-control.html",target:"_blank",rel:"noopener noreferrer"},k=t(`<ul><li>public：该方法可以被所有类访问。</li><li>private：该方法只能在定义它的类中访问。</li><li>protected：该方法可以被同一个包中的类，或者不同包中的子类访问。</li><li>default：如果一个方法没有使用任何访问权限修饰符，那么它是 package-private 的，意味着该方法只能被同一个包中的类可见。</li></ul><p><strong>返回类型</strong>：方法返回的数据类型，可以是基本数据类型、对象和集合，如果不需要返回数据，则使用 void 关键字。</p><p><strong>方法名</strong>：方法名最好反应出方法的功能，比如，我们要创建一个将两个数字相减的方法，那么方法名最好是 subtract。</p><p>方法名最好是一个动词，并且以小写字母开头。如果方法名包含两个以上单词，那么第一个单词最好是动词，然后是形容词或者名词，并且要以驼峰式的命名方式命名。比如：</p><ul><li>一个单词的方法名：<code>sum()</code></li><li>多个单词的方法名：<code>stringComparision()</code></li></ul><p>一个方法可能与同一个类中的另外一个方法同名，这被称为方法重载。</p><p><strong>参数</strong>：参数被放在一个圆括号内，如果有多个参数，可以使用逗号隔开。参数包含两个部分，参数类型和参数名。如果方法没有参数，圆括号是空的。</p><p><strong>方法签名</strong>：每一个方法都有一个签名，包括方法名和参数。</p><p><strong>方法体</strong>：方法体放在一对花括号内，把一些代码放在一起，用来执行特定的任务。</p><h3 id="_03、方法有哪几种" tabindex="-1"><a class="header-anchor" href="#_03、方法有哪几种" aria-hidden="true">#</a> 03、方法有哪几种？</h3><p>方法可以分为两种，一种叫标准类库方法，一种叫用户自定义方法。</p><h4 id="_1-预先定义方法" tabindex="-1"><a class="header-anchor" href="#_1-预先定义方法" aria-hidden="true">#</a> <strong>1）预先定义方法</strong></h4><p>Java 提供了大量预先定义好的方法供我们调用，也称为标准类库方法，或者内置方法。比如说 String 类的 <code>length()</code>、<code>equals()</code>、<code>compare()</code> 方法，以及我们在初学 Java 阶段最常用的 <code>println()</code> 方法，用来在控制台打印信息。</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@author</span> 微信搜「沉默王二」，回复关键字 PDF
 */</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">PredefinedMethodDemo</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;沉默王二，一枚有趣的程序员&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在上面的代码中，我们使用了两个预先定义的方法，<code>main()</code> 方法是程序运行的入口，<code>println()</code> 方法是 <code>PrintStream</code> 类的一个方法。这些方法已经提前定义好了，所以我们可以直接使用它们。</p><p>我们可以通过集成开发工具查看预先定义方法的方法签名，当我们把鼠标停留在 <code>println()</code> 方法上面时，就会显示下图中的内容：</p><figure><img src="https://cdn.tobebetterjavaer.com/tobebetterjavaer/images/object-class/17-02.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p><code>println()</code> 方法的访问权限修饰符是 public，返回类型为 void，方法名为 println，参数为 <code>String x</code>，以及 Javadoc（方法是干嘛的）。</p><p>预先定义方法让编程变得简单了起来，我们只需要在实现某些功能的时候直接调用这些方法即可，不需要重新编写。</p><p>Java 的一个非常大的优势，就是，JDK 的设计者（开发者）为我们提供了大量的标准类库方法，这对于初学编程的新手来说极其友好；不仅如此，GitHub/码云上也有大量可以直接拿到生产环境下使用的第三方类库，比如说 hutool 啊、Apache 包啊、一线大厂或者顶级开发大佬贡献的类库，比如说 Druid、Gson 等等。</p><p>但如果你想从一个初级开发者（俗称调包侠）晋升为一名优秀的 Java 工程师，那就需要深入研究这些源码，并掌握，最好是能自己写出来这些源码，最起码能自定义一些源码，以便为我们所用。</p><h4 id="_2-用户自定义方法" tabindex="-1"><a class="header-anchor" href="#_2-用户自定义方法" aria-hidden="true">#</a> <strong>2）用户自定义方法</strong></h4><p>当预先定义方法无法满足我们的要求时，就需要自定义一些方法，比如说，我们来定义这样一个方法，用来检查数字是偶数还是奇数。</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">findEvenOdd</span><span class="token punctuation">(</span><span class="token keyword">int</span> num<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>num <span class="token operator">%</span> <span class="token number">2</span> <span class="token operator">==</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>num <span class="token operator">+</span> <span class="token string">&quot; 是偶数&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>num <span class="token operator">+</span> <span class="token string">&quot; 是奇数&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>方法名叫做 <code>findEvenOdd</code>，访问权限修饰符是 public，并且是静态的（static），返回类型是 void，参数有一个整型（int）的 num。方法体中有一个 if else 语句，如果 num 可以被 2 整除，那么就打印这个数字是偶数，否则就打印这个数字是奇数。</p><p>方法被定义好后，如何被调用呢？</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@author</span> 微信搜「沉默王二」，回复关键字 PDF
 */</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">EvenOddDemo</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token function">findEvenOdd</span><span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token function">findEvenOdd</span><span class="token punctuation">(</span><span class="token number">11</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">findEvenOdd</span><span class="token punctuation">(</span><span class="token keyword">int</span> num<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>num <span class="token operator">%</span> <span class="token number">2</span> <span class="token operator">==</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>num <span class="token operator">+</span> <span class="token string">&quot; 是偶数&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
            <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>num <span class="token operator">+</span> <span class="token string">&quot; 是奇数&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>main()</code> 方法是程序的入口，并且是静态的，那么就可以直接调用同样是静态方法的 <code>findEvenOdd()</code>。</p><p>当一个方法被 static 关键字修饰时，它就是一个静态方法。换句话说，静态方法是属于类的，不属于类实例的（不需要通过 new 关键字创建对象来调用，直接通过类名就可以调用）。</p><h3 id="_04、什么是实例方法" tabindex="-1"><a class="header-anchor" href="#_04、什么是实例方法" aria-hidden="true">#</a> 04、什么是实例方法？</h3>`,30),v={href:"https://javabetter.cn/oo/static.html",target:"_blank",rel:"noopener noreferrer"},m=t(`<div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@author</span> 微信搜「沉默王二」，回复关键字 PDF
 */</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">InstanceMethodExample</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">InstanceMethodExample</span> instanceMethodExample <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">InstanceMethodExample</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>instanceMethodExample<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">int</span> <span class="token function">add</span><span class="token punctuation">(</span><span class="token keyword">int</span> a<span class="token punctuation">,</span> <span class="token keyword">int</span> b<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> a <span class="token operator">+</span> b<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>add()</code> 方法是一个实例方法，需要创建 InstanceMethodExample 对象来访问。</p><p>实例方法有两种特殊类型：</p><ul><li>getter 方法</li><li>setter 方法</li></ul><p>getter 方法用来获取私有变量（private 修饰的字段）的值，setter 方法用来设置私有变量的值。</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@author</span> 沉默王二，一枚有趣的程序员
 */</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Person</span> <span class="token punctuation">{</span>
    <span class="token keyword">private</span> <span class="token class-name">String</span> name<span class="token punctuation">;</span>
    <span class="token keyword">private</span> <span class="token keyword">int</span> age<span class="token punctuation">;</span>
    <span class="token keyword">private</span> <span class="token keyword">int</span> sex<span class="token punctuation">;</span>

    <span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">getName</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> name<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">setName</span><span class="token punctuation">(</span><span class="token class-name">String</span> name<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>name <span class="token operator">=</span> name<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">int</span> <span class="token function">getAge</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> age<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">setAge</span><span class="token punctuation">(</span><span class="token keyword">int</span> age<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>age <span class="token operator">=</span> age<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">int</span> <span class="token function">getSex</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> sex<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">setSex</span><span class="token punctuation">(</span><span class="token keyword">int</span> sex<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>sex <span class="token operator">=</span> sex<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>getter 方法以 get 开头，setter 方法以 set 开头。</p><h3 id="_05、什么是静态方法" tabindex="-1"><a class="header-anchor" href="#_05、什么是静态方法" aria-hidden="true">#</a> 05、什么是静态方法？</h3>`,8),b={href:"https://javabetter.cn/oo/static.html",target:"_blank",rel:"noopener noreferrer"},g=t(`<div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token doc-comment comment">/**
 * 微信搜索「沉默王二」，回复 Java
 *
 * <span class="token keyword">@author</span> 沉默王二
 * <span class="token keyword">@date</span> 8/9/22
 */</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">StaticMethodExample</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">int</span> <span class="token function">add</span><span class="token punctuation">(</span><span class="token keyword">int</span> a<span class="token punctuation">,</span> <span class="token keyword">int</span> b<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> a <span class="token operator">+</span> b<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>StaticMethodExample 类中，mian 和 add 方法都是静态方法，不同的是，main 方法是程序的入口。当我们调用静态方法的时候，就不需要 new 出来类的对象，就可以直接调用静态方法了，一些工具类的方法都是静态方法，比如说 hutool 工具类库，里面有大量的静态方法可以直接调用。</p><blockquote><p>Hutool 的目标是使用一个工具方法代替一段复杂代码，从而最大限度的避免“复制粘贴”代码的问题，彻底改变我们写代码的方式。</p></blockquote><p>以计算 MD5 为例：</p><ul><li>👴【以前】打开搜索引擎 -&gt; 搜“Java MD5 加密” -&gt; 打开某篇博客-&gt; 复制粘贴 -&gt; 改改好用</li><li>👦【现在】引入 Hutool -&gt; SecureUtil.md5()</li></ul><p>Hutool 的存在就是为了减少代码搜索成本，避免网络上参差不齐的代码出现导致的 bug。</p><h3 id="_06、什么是抽象方法" tabindex="-1"><a class="header-anchor" href="#_06、什么是抽象方法" aria-hidden="true">#</a> 06、什么是抽象方法？</h3>`,7),h={href:"https://javabetter.cn/oo/abstract.html",target:"_blank",rel:"noopener noreferrer"},y=t(`<div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@author</span> 微信搜「沉默王二」，回复关键字 PDF
 */</span>
<span class="token keyword">abstract</span> <span class="token keyword">class</span> <span class="token class-name">AbstractDemo</span> <span class="token punctuation">{</span>
    <span class="token keyword">abstract</span> <span class="token keyword">void</span> <span class="token function">display</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>当一个类继承了抽象类后，就必须重写抽象方法：</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@author</span> 微信搜「沉默王二」，回复关键字 PDF
 */</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">MyAbstractDemo</span> <span class="token keyword">extends</span> <span class="token class-name">AbstractDemo</span> <span class="token punctuation">{</span>
    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">void</span> <span class="token function">display</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;重写了抽象方法&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">MyAbstractDemo</span> myAbstractDemo <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">MyAbstractDemo</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        myAbstractDemo<span class="token punctuation">.</span><span class="token function">display</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>输出结果如下所示：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>重写了抽象方法
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>“关于方法，我们就讲到这里吧，学会了类/变量/方法，基本上就可以做一个入门级的 Java 程序员了。”我面露微笑，继续对三妹说，“继续加油吧！”</p><p>“好的，谢谢二哥你的细心帮助。”</p><hr>`,8),w={href:"https://github.com/itwanger/toBeBetterJavaer",target:"_blank",rel:"noopener noreferrer"},f={href:"https://javabetter.cn/overview/",target:"_blank",rel:"noopener noreferrer"},_=s("p",null,[n("微信搜 "),s("strong",null,"沉默王二"),n(" 或扫描下方二维码关注二哥的原创公众号沉默王二，回复 "),s("strong",null,"222"),n(" 即可免费领取。")],-1),x=s("figure",null,[s("img",{src:"https://cdn.tobebetterjavaer.com/tobebetterjavaer/images/gongzhonghao.png",alt:"",tabindex:"0",loading:"lazy"}),s("figcaption")],-1);function j(S,J){const a=o("ExternalLinkIcon");return c(),i("div",null,[u,s("p",null,[d,n("：它指定了方法的可见性。Java 提供了四种"),s("a",r,[n("访问权限修饰符"),e(a)]),n("：")]),k,s("p",null,[n("没有使用 "),s("a",v,[n("static 关键字"),e(a)]),n("修饰，但在类中声明的方法被称为实例方法，在调用实例方法之前，必须创建类的对象。")]),m,s("p",null,[n("相应的，有 "),s("a",b,[n("static 关键字"),e(a)]),n("修饰的方法就叫做静态方法。")]),g,s("p",null,[n("没有方法体的方法被称为抽象方法，它总是在"),s("a",h,[n("抽象类"),e(a)]),n("中声明。这意味着如果类有抽象方法的话，这个类就必须是抽象的。可以使用 atstract 关键字创建抽象方法和抽象类。")]),y,s("p",null,[n("GitHub 上标星 10000+ 的开源知识库《"),s("a",w,[n("二哥的 Java 进阶之路"),e(a)]),n("》第一版 PDF 终于来了！包括Java基础语法、数组&字符串、OOP、集合框架、Java IO、异常处理、Java 新特性、网络编程、NIO、并发编程、JVM等等，共计 32 万余字，500+张手绘图，可以说是通俗易懂、风趣幽默……详情戳："),s("a",f,[n("太赞了，GitHub 上标星 10000+ 的 Java 教程"),e(a)])]),_,x])}const q=p(l,[["render",j],["__file","method.html.vue"]]);export{q as default};
