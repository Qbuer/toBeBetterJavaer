import{_ as p}from"./plugin-vue_export-helper-c27b6911.js";import{r as t,o as c,c as o,a,d as n,b as e,e as i}from"./app-729f55ad.js";const l={},d=i(`<p>重写（Overriding）算是 Java 中一个非常重要的概念，理解重写到底是什么对每个 Java 程序员来说都至关重要，这篇文章就来给大家说说重写过程中应当遵守的 12 条规则。</p><h2 id="_01、什么是重写" tabindex="-1"><a class="header-anchor" href="#_01、什么是重写" aria-hidden="true">#</a> 01、什么是重写？</h2><p>重写带来了一种非常重要的能力，可以让子类重新实现从超类那继承过来的方法。在下面这幅图中，Animal 是父类，Dog 是子类，Dog 重新实现了 <code>move()</code> 方法用来和父类进行区分，毕竟狗狗跑起来还是比较有特色的。</p><figure><img src="https://cdn.tobebetterjavaer.com/tobebetterjavaer/images/basic-extra-meal/Overriding-1.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>重写的方法和被重写的方法，不仅方法名相同，参数也相同，只不过，方法体有所不同。</p><h2 id="_02、哪些方法可以被重写" tabindex="-1"><a class="header-anchor" href="#_02、哪些方法可以被重写" aria-hidden="true">#</a> 02、哪些方法可以被重写？</h2><h3 id="规则一-只能重写继承过来的方法。" tabindex="-1"><a class="header-anchor" href="#规则一-只能重写继承过来的方法。" aria-hidden="true">#</a> <strong>规则一：只能重写继承过来的方法</strong>。</h3><p>因为重写是在子类重新实现从父类继承过来的方法时发生的，所以只能重写继承过来的方法，这很好理解。这就意味着，只能重写那些被 public、protected 或者 default 修饰的方法，private 修饰的方法无法被重写。</p><p>Animal 类有 <code>move()</code>、<code>eat()</code> 和 <code>sleep()</code> 三个方法：</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Animal</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">move</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token punctuation">}</span>

    <span class="token keyword">protected</span> <span class="token keyword">void</span> <span class="token function">eat</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token punctuation">}</span>
    
    <span class="token keyword">void</span> <span class="token function">sleep</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span> <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Dog 类来重写这三个方法：</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Dog</span> <span class="token keyword">extends</span> <span class="token class-name">Animal</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">move</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token punctuation">}</span>

    <span class="token keyword">protected</span> <span class="token keyword">void</span> <span class="token function">eat</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token punctuation">}</span>

    <span class="token keyword">void</span> <span class="token function">sleep</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span> <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>OK，完全没有问题。但如果父类中的方法是 private 的，就行不通了。</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Animal</span> <span class="token punctuation">{</span>
    <span class="token keyword">private</span> <span class="token keyword">void</span> <span class="token function">move</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>此时，Dog 类中的 <code>move()</code> 方法就不再是一个重写方法了，因为父类的 <code>move()</code> 方法是 private 的，对子类并不可见。</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Dog</span> <span class="token keyword">extends</span> <span class="token class-name">Animal</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">move</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_03、哪些方法不能被重写" tabindex="-1"><a class="header-anchor" href="#_03、哪些方法不能被重写" aria-hidden="true">#</a> 03、哪些方法不能被重写？</h2><h3 id="规则二-final、static-的方法不能被重写。" tabindex="-1"><a class="header-anchor" href="#规则二-final、static-的方法不能被重写。" aria-hidden="true">#</a> <strong>规则二：final、static 的方法不能被重写</strong>。</h3><p>一个方法是 final 的就意味着它无法被子类继承到，所以就没办法重写。</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Animal</span> <span class="token punctuation">{</span>
    <span class="token keyword">final</span> <span class="token keyword">void</span> <span class="token function">move</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>由于父类 Animal 中的 <code>move()</code> 是 final 的，所以子类在尝试重写该方法的时候就出现编译错误了！</p><figure><img src="https://cdn.tobebetterjavaer.com/tobebetterjavaer/images/basic-extra-meal/Overriding-2.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>同样的，如果一个方法是 static 的，也不允许重写，因为静态方法可用于父类以及子类的所有实例。</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Animal</span> <span class="token punctuation">{</span>
    <span class="token keyword">final</span> <span class="token keyword">void</span> <span class="token function">move</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>重写的目的在于根据对象的类型不同而表现出多态，而静态方法不需要创建对象就可以使用。没有了对象，重写所需要的“对象的类型”也就没有存在的意义了。</p><figure><img src="https://cdn.tobebetterjavaer.com/tobebetterjavaer/images/basic-extra-meal/Overriding-3.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h2 id="_04、重写方法的要求" tabindex="-1"><a class="header-anchor" href="#_04、重写方法的要求" aria-hidden="true">#</a> 04、重写方法的要求</h2><h3 id="规则三-重写的方法必须有相同的参数列表。" tabindex="-1"><a class="header-anchor" href="#规则三-重写的方法必须有相同的参数列表。" aria-hidden="true">#</a> <strong>规则三：重写的方法必须有相同的参数列表</strong>。</h3><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Animal</span> <span class="token punctuation">{</span>
    <span class="token keyword">void</span> <span class="token function">eat</span><span class="token punctuation">(</span><span class="token class-name">String</span> food<span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Dog 类中的 <code>eat()</code> 方法保持了父类方法 <code>eat()</code> 的同一个调调，都有一个参数——String 类型的 food。</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Dog</span> <span class="token keyword">extends</span> <span class="token class-name">Animal</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">eat</span><span class="token punctuation">(</span><span class="token class-name">String</span> food<span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>一旦子类没有按照这个规则来，比如说增加了一个参数：</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Dog</span> <span class="token keyword">extends</span> <span class="token class-name">Animal</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">eat</span><span class="token punctuation">(</span><span class="token class-name">String</span> food<span class="token punctuation">,</span> <span class="token keyword">int</span> amount<span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这就不再是重写的范畴了，当然也不是重载的范畴，因为重载考虑的是同一个类。</p><p><strong>规则四：重写的方法必须返回相同的类型</strong>。</p><p>父类没有返回类型：</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Animal</span> <span class="token punctuation">{</span>
    <span class="token keyword">void</span> <span class="token function">eat</span><span class="token punctuation">(</span><span class="token class-name">String</span> food<span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>子类尝试返回 String：</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Dog</span> <span class="token keyword">extends</span> <span class="token class-name">Animal</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">eat</span><span class="token punctuation">(</span><span class="token class-name">String</span> food<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>于是就编译出错了（返回类型不兼容）。</p><figure><img src="https://cdn.tobebetterjavaer.com/tobebetterjavaer/images/basic-extra-meal/Overriding-4.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h3 id="规则五-重写的方法不能使用限制等级更严格的权限修饰符。" tabindex="-1"><a class="header-anchor" href="#规则五-重写的方法不能使用限制等级更严格的权限修饰符。" aria-hidden="true">#</a> <strong>规则五：重写的方法不能使用限制等级更严格的权限修饰符</strong>。</h3><p>可以这样来理解：</p><ul><li>如果被重写的方法是 default，那么重写的方法可以是 default、protected 或者 public。</li><li>如果被重写的方法是 protected，那么重写的方法只能是 protected 或者 public。</li><li>如果被重写的方法是 public， 那么重写的方法就只能是 public。</li></ul><p>举个例子，父类中的方法是 protected：</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Animal</span> <span class="token punctuation">{</span>
    <span class="token keyword">protected</span> <span class="token keyword">void</span> <span class="token function">eat</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>子类中的方法可以是 public：</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Dog</span> <span class="token keyword">extends</span> <span class="token class-name">Animal</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">eat</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>如果子类中的方法用了更严格的权限修饰符，编译器就报错了。</p><figure><img src="https://cdn.tobebetterjavaer.com/tobebetterjavaer/images/basic-extra-meal/Overriding-5.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h3 id="规则六-重写后的方法不能抛出比父类中更高级别的异常。" tabindex="-1"><a class="header-anchor" href="#规则六-重写后的方法不能抛出比父类中更高级别的异常。" aria-hidden="true">#</a> <strong>规则六：重写后的方法不能抛出比父类中更高级别的异常</strong>。</h3><p>举例来说，如果父类中的方法抛出的是 IOException，那么子类中重写的方法不能抛出 Exception，可以是 IOException 的子类或者不抛出任何异常。这条规则只适用于可检查的异常。</p><p>可检查（checked）异常必须在源代码中显式地进行捕获处理，不检查（unchecked）异常就是所谓的运行时异常，比如说 NullPointerException、ArrayIndexOutOfBoundsException 之类的，不会在编译器强制要求。</p><p>父类抛出 IOException：</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Animal</span> <span class="token punctuation">{</span>
    <span class="token keyword">protected</span> <span class="token keyword">void</span> <span class="token function">eat</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">IOException</span> <span class="token punctuation">{</span> <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>子类抛出 FileNotFoundException 是可以满足重写的规则的，因为 FileNotFoundException 是 IOException 的子类。</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Dog</span> <span class="token keyword">extends</span> <span class="token class-name">Animal</span> <span class="token punctuation">{</span>
   <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">eat</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">FileNotFoundException</span> <span class="token punctuation">{</span> <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>如果子类抛出了一个新的异常，并且是一个 checked 异常：</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Dog</span> <span class="token keyword">extends</span> <span class="token class-name">Animal</span> <span class="token punctuation">{</span>
   <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">eat</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">FileNotFoundException</span><span class="token punctuation">,</span> <span class="token class-name">InterruptedException</span> <span class="token punctuation">{</span> <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>那编译器就会提示错误：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>Error:(9, 16) java: com.itwanger.overriding.Dog中的eat()无法覆盖com.itwanger.overriding.Animal中的eat()
  被覆盖的方法未抛出java.lang.InterruptedException
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>但如果子类抛出的是一个 unchecked 异常，那就没有冲突：</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Dog</span> <span class="token keyword">extends</span> <span class="token class-name">Animal</span> <span class="token punctuation">{</span>
   <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">eat</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">FileNotFoundException</span><span class="token punctuation">,</span> <span class="token class-name">IllegalArgumentException</span> <span class="token punctuation">{</span> <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>如果子类抛出的是一个更高级别的异常：</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Dog</span> <span class="token keyword">extends</span> <span class="token class-name">Animal</span> <span class="token punctuation">{</span>
   <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">eat</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">Exception</span> <span class="token punctuation">{</span> <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>编译器同样会提示错误，因为 Exception 是 IOException 的父类。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>Error:(9, 16) java: com.itwanger.overriding.Dog中的eat()无法覆盖com.itwanger.overriding.Animal中的eat()
  被覆盖的方法未抛出java.lang.Exception
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_05、如何调用被重写的方法" tabindex="-1"><a class="header-anchor" href="#_05、如何调用被重写的方法" aria-hidden="true">#</a> 05、如何调用被重写的方法？</h2><h3 id="规则七-可以在子类中通过-super-关键字来调用父类中被重写的方法。" tabindex="-1"><a class="header-anchor" href="#规则七-可以在子类中通过-super-关键字来调用父类中被重写的方法。" aria-hidden="true">#</a> <strong>规则七：可以在子类中通过 super 关键字来调用父类中被重写的方法</strong>。</h3><p>子类继承父类的方法而不是重新实现是很常见的一种做法，在这种情况下，可以按照下面的形式调用父类的方法：</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">super</span><span class="token punctuation">.</span><span class="token function">overriddenMethodName</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>来看例子。</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Animal</span> <span class="token punctuation">{</span>
    <span class="token keyword">protected</span> <span class="token keyword">void</span> <span class="token function">eat</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>子类重写了 <code>eat()</code> 方法，然后在子类的 <code>eat()</code> 方法中，可以在方法体的第一行通过 <code>super.eat()</code> 调用父类的方法，然后再增加属于自己的代码。</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Dog</span> <span class="token keyword">extends</span> <span class="token class-name">Animal</span> <span class="token punctuation">{</span>
   <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">eat</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
       <span class="token keyword">super</span><span class="token punctuation">.</span><span class="token function">eat</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
       <span class="token comment">// Dog-eat</span>
   <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_06、重写和构造方法" tabindex="-1"><a class="header-anchor" href="#_06、重写和构造方法" aria-hidden="true">#</a> 06、重写和构造方法</h2><h3 id="规则八-构造方法不能被重写。" tabindex="-1"><a class="header-anchor" href="#规则八-构造方法不能被重写。" aria-hidden="true">#</a> <strong>规则八：构造方法不能被重写</strong>。</h3><p>因为构造方法很特殊，而且子类的构造方法不能和父类的构造方法同名（类名不同），所以构造方法和重写之间没有任何关系。</p><h2 id="_07、重写和抽象方法" tabindex="-1"><a class="header-anchor" href="#_07、重写和抽象方法" aria-hidden="true">#</a> 07、重写和抽象方法</h2><h3 id="规则九-如果一个类继承了抽象类-抽象类中的抽象方法必须在子类中被重写。" tabindex="-1"><a class="header-anchor" href="#规则九-如果一个类继承了抽象类-抽象类中的抽象方法必须在子类中被重写。" aria-hidden="true">#</a> <strong>规则九：如果一个类继承了抽象类，抽象类中的抽象方法必须在子类中被重写</strong>。</h3><p>先来看这样一个接口类：</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">interface</span> <span class="token class-name">Animal</span> <span class="token punctuation">{</span>
    <span class="token keyword">void</span> <span class="token function">move</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>接口中的方法默认都是抽象方法，通过反编译是可以看得到的：</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">interface</span> <span class="token class-name">Animal</span>
<span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">abstract</span> <span class="token keyword">void</span> <span class="token function">move</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>如果一个抽象类实现了 Animal 接口，<code>move()</code> 方法不是必须被重写的：</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">abstract</span> <span class="token keyword">class</span> <span class="token class-name">AbstractDog</span> <span class="token keyword">implements</span> <span class="token class-name">Animal</span> <span class="token punctuation">{</span>
    <span class="token keyword">protected</span> <span class="token keyword">abstract</span> <span class="token keyword">void</span> <span class="token function">bark</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>但如果一个类继承了抽象类 AbstractDog，那么 Animal 接口中的 <code>move()</code> 方法和抽象类 AbstractDog 中的抽象方法 <code>bark()</code> 都必须被重写：</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">BullDog</span> <span class="token keyword">extends</span> <span class="token class-name">AbstractDog</span> <span class="token punctuation">{</span>
 
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">move</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
 
    <span class="token keyword">protected</span> <span class="token keyword">void</span> <span class="token function">bark</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_08、重写和-synchronized-方法" tabindex="-1"><a class="header-anchor" href="#_08、重写和-synchronized-方法" aria-hidden="true">#</a> 08、重写和 synchronized 方法</h2><h3 id="规则十-synchronized-关键字对重写规则没有任何影响。" tabindex="-1"><a class="header-anchor" href="#规则十-synchronized-关键字对重写规则没有任何影响。" aria-hidden="true">#</a> <strong>规则十：synchronized 关键字对重写规则没有任何影响</strong>。</h3><p>synchronized 关键字用于在多线程环境中获取和释放监听对象，因此它对重写规则没有任何影响，这就意味着 synchronized 方法可以去重写一个非同步方法。</p><h2 id="_09、重写和-strictfp-方法" tabindex="-1"><a class="header-anchor" href="#_09、重写和-strictfp-方法" aria-hidden="true">#</a> 09、重写和 strictfp 方法</h2><h3 id="规则十一-strictfp-关键字对重写规则没有任何影响。" tabindex="-1"><a class="header-anchor" href="#规则十一-strictfp-关键字对重写规则没有任何影响。" aria-hidden="true">#</a> <strong>规则十一：strictfp 关键字对重写规则没有任何影响</strong>。</h3><p>如果你想让浮点运算更加精确，而且不会因为硬件平台的不同导致执行的结果不一致的话，可以在方法上添加 strictfp 关键字。因此 strictfp 关键和重写规则无关。</p><hr>`,95),u={href:"https://github.com/itwanger/toBeBetterJavaer",target:"_blank",rel:"noopener noreferrer"},r={href:"https://javabetter.cn/overview/",target:"_blank",rel:"noopener noreferrer"},k=a("p",null,[n("微信搜 "),a("strong",null,"沉默王二"),n(" 或扫描下方二维码关注二哥的原创公众号沉默王二，回复 "),a("strong",null,"222"),n(" 即可免费领取。")],-1),v=a("figure",null,[a("img",{src:"https://cdn.tobebetterjavaer.com/tobebetterjavaer/images/gongzhonghao.png",alt:"",tabindex:"0",loading:"lazy"}),a("figcaption")],-1);function m(b,g){const s=t("ExternalLinkIcon");return c(),o("div",null,[d,a("p",null,[n("GitHub 上标星 10000+ 的开源知识库《"),a("a",u,[n("二哥的 Java 进阶之路"),e(s)]),n("》第一版 PDF 终于来了！包括Java基础语法、数组&字符串、OOP、集合框架、Java IO、异常处理、Java 新特性、网络编程、NIO、并发编程、JVM等等，共计 32 万余字，500+张手绘图，可以说是通俗易懂、风趣幽默……详情戳："),a("a",r,[n("太赞了，GitHub 上标星 10000+ 的 Java 教程"),e(s)])]),k,v])}const w=p(l,[["render",m],["__file","Overriding.html.vue"]]);export{w as default};
