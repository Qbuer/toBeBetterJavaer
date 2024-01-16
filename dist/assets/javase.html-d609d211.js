import{_ as n}from"./plugin-vue_export-helper-c27b6911.js";import{r as o,o as l,c as d,a as t,d as a,b as r,e as i}from"./app-729f55ad.js";const c={},h=i('<h2 id="java-基础" tabindex="-1"><a class="header-anchor" href="#java-基础" aria-hidden="true">#</a> Java 基础</h2><h3 id="java-概述" tabindex="-1"><a class="header-anchor" href="#java-概述" aria-hidden="true">#</a> Java 概述</h3><h4 id="java-语言有哪些特点" tabindex="-1"><a class="header-anchor" href="#java-语言有哪些特点" aria-hidden="true">#</a> Java 语言有哪些特点？</h4><ul><li><p>面向对象（封装，继承，多态）；</p></li><li><p>平台无关性，具体表现在，Java 是一门“一次编写，到处运行（Write Once，Run any Where）”的编程语言，因此采用 Java 语言编写的程序具有很好的可移植性，Java 之所以能做到这一点的关键因为 Java 虚拟机的存在。在引入 JVM 之后，Java 语言在不同平台上运行不需要再重新编译。</p></li><li><p>可靠性、安全性；</p></li><li><p>支持多线程。C++ 没有内置的多线程机制，因此必须调用操作系统的多线程功能来进行多线程程序设计，而 Java 语言却提供了多线程支持；</p></li><li><p>支持网络编程并且很方便。Java 语言诞生的起因之一就是为了简化网络编程而设计的；</p></li><li><p>编译与解释并存；</p></li></ul><h4 id="java-和-c-有什么关系-它们有什么区别" tabindex="-1"><a class="header-anchor" href="#java-和-c-有什么关系-它们有什么区别" aria-hidden="true">#</a> Java 和 C++有什么关系，它们有什么区别？</h4><ul><li>都是面向对象的语言，都支持封装、继承和多态；</li><li>C++ 支持指针，而 Java 没有指针的概念；</li><li>C++ 支持多继承，而 Java 不支持多重继承，但允许一个类实现多个接口；</li><li>Java 是完全面向对象的语言，并且还取消了 C/C++ 中的结构和联合，使编译程序更加简洁；</li><li>Java 自动进行垃圾回收操作，不再需要程序员手动回收资源，而 C++ 必须由程序释放内存资源，这就增加了程序员的负担。</li><li>Java 不支持操作符重载，操作符重载则被认为是 C++ 的突出特征；</li><li>Java 允许预处理，但不支持预处理器功能，所以为了实现预处理，它提供了引入语句（import），但它与 C++ 预处理器的功能类似；</li><li>Java 不支持缺省参数函数，而 C++ 支持；</li><li>C 和 C++ 不支持字符串变量，在 C 和 C++ 程序中使用“Null”终止符代表字符串的结束。在 Java 中字符串是用类对象（String 和 StringBuffer）来实现的；</li><li>goto 语句是 C 和 C++ 的“遗物”，Java 不提供 goto 语句，虽然 Java 指定 goto 作为关键字，但不支持它的使用，这使程序更简洁易读；</li><li>Java 不支持 C++ 中的自动强制类型转换，如果需要，必须由程序显式进行强制类型转换。</li></ul><h4 id="jvm、jre-和-jdk-的关系是什么" tabindex="-1"><a class="header-anchor" href="#jvm、jre-和-jdk-的关系是什么" aria-hidden="true">#</a> JVM、JRE 和 JDK 的关系是什么？</h4><p>JDK 是 Java Development Kit 的缩写，它是功能齐全的 Java SDK，拥有 JRE 所拥有的一切，还有编译器 javac 和工具，如 javadoc 和 jdb 等命令。JDK 能够创建和编译 Java 程序。</p><p>JRE 是 Java Runtime Environment 缩写，它可以运行编译后的 Java 程序。其包括 Java 虚拟机（JVM）、Java 类库、java 命令和其他的一些基础构件。但是，它不能用于创建新程序。</p><p>JDK 包含 JRE，JRE 包含 JVM。</p><figure><img src="http://blog-img.coolsen.cn/img/image-20210219163725268.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h4 id="什么是字节码" tabindex="-1"><a class="header-anchor" href="#什么是字节码" aria-hidden="true">#</a> <strong>什么是字节码?</strong></h4><blockquote><p>这个问题，面试官可以扩展提问，Java 是编译执行的语言，还是解释执行的语言?</p></blockquote><p>Java 之所以可以“一次编译，到处运行”，一是因为 JVM 针对各种操作系统、平台都进行了定制，二是因为无论在什么平台，都可以编译生成固定格式的字节码（.class 文件）供 JVM 使用。因此，也可以看得出字节码对于 Java 生态的重要性。</p><p>之所以被称之为字节码，是因为字节码文件由十六进制值组成，而 JVM 以两个十六进制值为一组，即以字节为单位进行读取。在 Java 中一般是用 javac 命令编译源代码为字节码文件，一个.java 文件从编译到运行的示例如图所示。</p><figure><img src="http://blog-img.coolsen.cn/img/image-20210219165630888.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h4 id="采用字节码的好处是什么" tabindex="-1"><a class="header-anchor" href="#采用字节码的好处是什么" aria-hidden="true">#</a> 采用字节码的好处是什么?</h4><p>Java 语言通过字节码的方式，在一定程度上解决了传统解释型语言执行效率低的问题，同时又保留了解释型语言可移植的特点。所以 Java 程序运行时比较高效，而且，由于字节码并不专对一种特定的机器，因此，Java 程序无须重新编译便可在多种不同的计算机上运行。</p><h4 id="oracle-jdk-和-openjdk-的区别是什么" tabindex="-1"><a class="header-anchor" href="#oracle-jdk-和-openjdk-的区别是什么" aria-hidden="true">#</a> Oracle JDK 和 OpenJDK 的区别是什么？</h4><p>可能在看这个问题之前，很多人和我一样并没有接触和使用过 OpenJDK。下面通过我收集到的一些资料对你解答一下这个容易被忽视的问题。</p><ul><li>Oracle JDK 版本将每三年发布一次，而 OpenJDK 版本每三个月发布一次；</li><li>OpenJDK 是一个参考模型并且是完全开源的，而 Oracle JDK 是 OpenJDK 的一个实现，并不是完全开源的；</li><li>Oracle JDK 比 OpenJDK 更稳定。OpenJDK 和 Oracle JDK 的代码几乎相同，但 Oracle JDK 有更多的类和一些错误修复。因此，如果您想开发企业/商业软件，建议选择 Oracle JDK，因为它经过了彻底的测试和修正。某些情况下，有些人提到在使用 OpenJDK 可能会遇到了许多应用程序崩溃的问题，但是，只需切换到 Oracle JDK 就可以解决；</li><li>在响应性和 JVM 性能方面，Oracle JDK 比 OpenJDK 提供了更好的性能；</li><li>Oracle JDK 不会为即将发布的版本提供长期支持，用户每次都必须通过更新到最新版本获得支持；</li><li>Oracle JDK 根据二进制代码许可协议获得许可，而 OpenJDK 根据 GPLv2 许可获得许可。</li></ul>',21),p={href:"https://github.com/itwanger/toBeBetterJavaer",target:"_blank",rel:"noopener noreferrer"},s={href:"https://javabetter.cn/overview/",target:"_blank",rel:"noopener noreferrer"},g=i('<p>微信搜 <strong>沉默王二</strong> 或扫描下方二维码关注二哥的原创公众号沉默王二，回复 <strong>222</strong> 即可免费领取。</p><figure><img src="https://cdn.tobebetterjavaer.com/tobebetterjavaer/images/gongzhonghao.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h3 id="基础语法" tabindex="-1"><a class="header-anchor" href="#基础语法" aria-hidden="true">#</a> 基础语法</h3><h4 id="java-有哪些数据类型" tabindex="-1"><a class="header-anchor" href="#java-有哪些数据类型" aria-hidden="true">#</a> Java 有哪些数据类型？</h4><p>Java 语言的数据类型分为两种：基本数据类型和引用数据类型。</p><figure><img src="http://blog-img.coolsen.cn/img/image-20210219172725756.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>1.基本数据类型</p><p>包括 boolean（布尔型）、float（单精度浮点型）、char（字符型）、byte（字节型）、short（短整型）、int（整型）、long（长整型）和 double （双精度浮点型）共 8 种，如下表所示。</p><table><thead><tr><th>基本类型</th><th>位数</th><th>字节</th><th>默认值</th></tr></thead><tbody><tr><td>int</td><td>32</td><td>4</td><td>0</td></tr><tr><td>short</td><td>16</td><td>2</td><td>0</td></tr><tr><td>long</td><td>64</td><td>8</td><td>0L</td></tr><tr><td>byte</td><td>8</td><td>1</td><td>0</td></tr><tr><td>char</td><td>16</td><td>2</td><td>&#39;u0000&#39;</td></tr><tr><td>float</td><td>32</td><td>4</td><td>0f</td></tr><tr><td>double</td><td>64</td><td>8</td><td>0d</td></tr><tr><td>boolean</td><td>1</td><td></td><td>false</td></tr></tbody></table><p>对于 boolean，官方文档未明确定义，它依赖于 JVM 厂商的具体实现。逻辑上是占用 1 位，但是实际中会考虑计算机高效存储等因素。</p><p>Java 虚拟机规范讲到：在 JVM 中并没有提供 boolean 专用的字节码指令，而 boolean 类型数据在经过编译后会在 JVM 中通过 int 类型来表示，此时 boolean 数据为 4 字节 32 位，而 boolean 数组将会被编码成 Java 虚拟机的 byte 数组，此时每个 boolean 数据为 1 字节占 8bit。</p><p>注意：</p><ol><li>Java 使用 long 类型的数据时一定要在数值后面加上 <strong>L</strong>，否则将作为整型解析：</li><li><code>char a = &#39;h&#39;</code>char :单引号，<code>String a = &quot;hello&quot;</code> :双引号</li></ol><p>2.引用数据类型</p><p>建立在基本数据类型的基础上，包括数组、类和接口。引用数据类型是由用户自定义，用来限制其他数据的类型。另外，Java 语言中不支持 C++中的指针类型、结构类型、联合类型和枚举类型。</p><h4 id="switch-是否能作用在-byte-上-是否能作用在-long-上-是否能作用在-string-上" tabindex="-1"><a class="header-anchor" href="#switch-是否能作用在-byte-上-是否能作用在-long-上-是否能作用在-string-上" aria-hidden="true">#</a> switch 是否能作用在 byte 上，是否能作用在 long 上，是否能作用在 String 上？</h4><p>Java5 以前的 switch(expr) 表达式中，expr 只能是 byte、short、char、int。</p><p>从 Java 5 开始，Java 引入了枚举类型， expr 也可以是 enum 类型。</p><p>从 Java 7 开始，expr 还可以是字符串(String)，但是长整型(long)在目前所有的版本中都是不可以的。</p><h4 id="访问修饰符-public、private、protected、以及不写-默认-时的区别" tabindex="-1"><a class="header-anchor" href="#访问修饰符-public、private、protected、以及不写-默认-时的区别" aria-hidden="true">#</a> <strong>访问修饰符 public、private、protected、以及不写（默认）时的区别</strong>？</h4><p>Java 中，可以使用访问控制符来保护对类、变量、方法和构造方法的访问。Java 支持 4 种不同的访问权限。</p><ul><li><strong>default</strong> (即默认，什么也不写）: 在同一包内可见，不使用任何修饰符。使用对象：类、接口、变量、方法。</li><li><strong>private</strong> : 在同一类内可见。使用对象：变量、方法。 <strong>注意：不能修饰类（外部类）</strong>。</li><li><strong>public</strong> : 对所有类可见。使用对象：类、接口、变量、方法。</li><li><strong>protected</strong> : 对同一包内的类和所有子类可见。使用对象：变量、方法。 <strong>注意：不能修饰类（外部类）</strong>。</li></ul><figure><img src="http://blog-img.coolsen.cn/img/image-20210219173433142.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h4 id="break-continue-return-的区别及作用" tabindex="-1"><a class="header-anchor" href="#break-continue-return-的区别及作用" aria-hidden="true">#</a> break,continue,return 的区别及作用？</h4><ul><li><p>break <strong>结束当前的循环体</strong></p></li><li><p>continue 跳出本次循环，继续执行下次循环(<strong>结束正在执行的循环 进入下一个循环条件</strong>)</p></li><li><p>return 程序返回，不再执行后面的代码(<strong>结束当前的方法 直接返回</strong>)</p></li></ul>',25);function J(v,u){const e=o("ExternalLinkIcon");return l(),d("div",null,[h,t("p",null,[a("GitHub 上标星 10000+ 的开源知识库《"),t("a",p,[a("二哥的 Java 进阶之路"),r(e)]),a("》第一版 PDF 终于来了！包括Java基础语法、数组&字符串、OOP、集合框架、Java IO、异常处理、Java 新特性、网络编程、NIO、并发编程、JVM等等，共计 32 万余字，500+张手绘图，可以说是通俗易懂、风趣幽默……详情戳："),t("a",s,[a("太赞了，GitHub 上标星 10000+ 的 Java 教程"),r(e)])]),g])}const m=n(c,[["render",J],["__file","javase.html.vue"]]);export{m as default};
