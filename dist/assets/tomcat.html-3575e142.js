import{_ as i}from"./plugin-vue_export-helper-c27b6911.js";import{r as a,o as r,c as l,a as t,d as e,b as o,e as s}from"./app-aa0e59bf.js";const d={},c=t("h1",{id:"spring-boot为什么不需要额外安装tomcat",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#spring-boot为什么不需要额外安装tomcat","aria-hidden":"true"},"#"),e(" Spring Boot为什么不需要额外安装Tomcat？")],-1),g=t("p",null,"首次接触 Spring Boot 的时候，绝大多数小伙伴应该和我一样好奇：",-1),p=t("blockquote",null,[t("p",null,"为什么 Spring Boot 不需要额外安装 Tomcat 啊？")],-1),v=t("p",null,"到底为什么呢？让我们带着好奇心开始今天的旅程吧。",-1),m={href:"https://mp.weixin.qq.com/s/13La2GC5q4ZclEVqf6Mr9w",target:"_blank",rel:"noopener noreferrer"},b=s(`<div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;parent&gt;
	&lt;groupId&gt;org.springframework.boot&lt;/groupId&gt;
	&lt;artifactId&gt;spring-boot-starter-parent&lt;/artifactId&gt;
	&lt;version&gt;2.6.1&lt;/version&gt;
	&lt;relativePath/&gt; &lt;!-- lookup parent from repository --&gt;
&lt;/parent&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>什么意思呢？</p><p>意思是我们当前的 Spring Boot 项目依赖于 spring-boot-starter-parent 这个父项目。有点 Java 中的继承（extends）的味道。</p><p>怎么查看 spring-boot-starter-parent.pom 文件的内容呢？</p><p>如果你不确定自己的 Maven 本地仓库在哪里，可以在终端执行 <code>mvn help:effective-settings</code> 命令。</p><figure><img src="https://cdn.tobebetterjavaer.com/tobebetterjavaer/images/springboot/tomcat-01.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>顺藤摸瓜，根据 parent 的 groupId、artifactId、version 可以锁定 spring-boot-starter-parent.pom 文件的位置。</p><figure><img src="https://cdn.tobebetterjavaer.com/tobebetterjavaer/images/springboot/tomcat-02.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>使用文本编辑器打开以后大致可以看到以下内容：</p><figure><img src="https://cdn.tobebetterjavaer.com/tobebetterjavaer/images/springboot/tomcat-03.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><ul><li>定义了 JDK 的版本为 1.8</li><li>项目默认的编码方式为 UTF-8</li><li>Maven 的编译环境</li><li>以及父依赖 spring-boot-dependencies</li></ul><p>照葫芦画瓢，我们按照同样的方法找到 spring-boot-dependencies.pom 文件。可以看到这里面定义了一系列的属性和依赖，差不多 2800 行。</p><figure><img src="https://cdn.tobebetterjavaer.com/tobebetterjavaer/images/springboot/tomcat-04.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>有消息队列依赖、commons 工具包依赖、数据库链接依赖、HTTP 链接依赖、Spring 家族依赖、Web 服务器依赖等等。</p><p>可以说这里是 Spring Boot 项目依赖的版本管理中心。</p><p>版本管理中心默认配置了项目所需的所有基础环境的版本，这些版本会随着 Spring Boot 版本的升级而不断变化，也就是说，开发人员不需要再关心这些琐碎依赖的版本了，交给大管家 Spring Boot 就可以了。</p><p>Spring Boot 会帮我们选好最稳定的新版本，这体现出了 Spring Boot 项目的灵魂：“<strong>约定优于配置</strong>”，你想配置当然可以，但没必要，按照约定俗成的来就行。</p><p>理解了这一点，我们再来继续看 pom.xml 文件，里面有一个 <code>spring-boot-starter-web</code> 依赖。这一次，我们直接按住 Ctrl 键（macOS 是 Command 键），点击鼠标左键就可以跳转到 spring-boot-starter-web.pom 的源文件了。</p><figure><img src="https://cdn.tobebetterjavaer.com/tobebetterjavaer/images/springboot/tomcat-05.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>部分源码如下：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>  &lt;dependency&gt;
      &lt;groupId&gt;org.springframework.boot&lt;/groupId&gt;
      &lt;artifactId&gt;spring-boot-starter&lt;/artifactId&gt;
      &lt;version&gt;2.6.1&lt;/version&gt;
      &lt;scope&gt;compile&lt;/scope&gt;
    &lt;/dependency&gt;
    &lt;dependency&gt;
      &lt;groupId&gt;org.springframework.boot&lt;/groupId&gt;
      &lt;artifactId&gt;spring-boot-starter-json&lt;/artifactId&gt;
      &lt;version&gt;2.6.1&lt;/version&gt;
      &lt;scope&gt;compile&lt;/scope&gt;
    &lt;/dependency&gt;
    &lt;dependency&gt;
      &lt;groupId&gt;org.springframework.boot&lt;/groupId&gt;
      &lt;artifactId&gt;spring-boot-starter-tomcat&lt;/artifactId&gt;
      &lt;version&gt;2.6.1&lt;/version&gt;
      &lt;scope&gt;compile&lt;/scope&gt;
    &lt;/dependency&gt;
    &lt;dependency&gt;
      &lt;groupId&gt;org.springframework&lt;/groupId&gt;
      &lt;artifactId&gt;spring-web&lt;/artifactId&gt;
      &lt;version&gt;5.3.13&lt;/version&gt;
      &lt;scope&gt;compile&lt;/scope&gt;
    &lt;/dependency&gt;
    &lt;dependency&gt;
      &lt;groupId&gt;org.springframework&lt;/groupId&gt;
      &lt;artifactId&gt;spring-webmvc&lt;/artifactId&gt;
      &lt;version&gt;5.3.13&lt;/version&gt;
      &lt;scope&gt;compile&lt;/scope&gt;
    &lt;/dependency&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>spring-web 提供了核心 HTTP 集成，包括一些便捷的 servlet 过滤器， Spring HTTP 调用，用于集成其它 web 框架的基础结构以及技术（Hessian，Burlap）。</p><p>spring-webmvc 是 Spring MVC 的一个实现。spring-webmvc 依赖于 spring-web，这样包含它就会间接地添加 spring-web，不必显示添加 spring-web。</p><p>看一下 spring-boot-starter-tomcat 的 pom 文件：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;?xml version=&quot;1.0&quot; encoding=&quot;UTF-8&quot;?&gt;
&lt;project xsi:schemaLocation=&quot;http://maven.apache.org/POM/4.0.0 http://maven.apache.org/xsd/maven-4.0.0.xsd&quot; xmlns=&quot;http://maven.apache.org/POM/4.0.0&quot;
    xmlns:xsi=&quot;http://www.w3.org/2001/XMLSchema-instance&quot;&gt;
  &lt;modelVersion&gt;4.0.0&lt;/modelVersion&gt;
  &lt;groupId&gt;org.springframework.boot&lt;/groupId&gt;
  &lt;artifactId&gt;spring-boot-starter-tomcat&lt;/artifactId&gt;
  &lt;version&gt;2.6.1&lt;/version&gt;
  &lt;name&gt;spring-boot-starter-tomcat&lt;/name&gt;
  &lt;dependencies&gt;
    &lt;dependency&gt;
      &lt;groupId&gt;jakarta.annotation&lt;/groupId&gt;
      &lt;artifactId&gt;jakarta.annotation-api&lt;/artifactId&gt;
      &lt;version&gt;1.3.5&lt;/version&gt;
      &lt;scope&gt;compile&lt;/scope&gt;
    &lt;/dependency&gt;
    &lt;dependency&gt;
      &lt;groupId&gt;org.apache.tomcat.embed&lt;/groupId&gt;
      &lt;artifactId&gt;tomcat-embed-core&lt;/artifactId&gt;
      &lt;version&gt;9.0.55&lt;/version&gt;
      &lt;scope&gt;compile&lt;/scope&gt;
      &lt;exclusions&gt;
        &lt;exclusion&gt;
          &lt;artifactId&gt;tomcat-annotations-api&lt;/artifactId&gt;
          &lt;groupId&gt;org.apache.tomcat&lt;/groupId&gt;
        &lt;/exclusion&gt;
      &lt;/exclusions&gt;
    &lt;/dependency&gt;
    &lt;dependency&gt;
      &lt;groupId&gt;org.apache.tomcat.embed&lt;/groupId&gt;
      &lt;artifactId&gt;tomcat-embed-el&lt;/artifactId&gt;
      &lt;version&gt;9.0.55&lt;/version&gt;
      &lt;scope&gt;compile&lt;/scope&gt;
    &lt;/dependency&gt;
    &lt;dependency&gt;
      &lt;groupId&gt;org.apache.tomcat.embed&lt;/groupId&gt;
      &lt;artifactId&gt;tomcat-embed-websocket&lt;/artifactId&gt;
      &lt;version&gt;9.0.55&lt;/version&gt;
      &lt;scope&gt;compile&lt;/scope&gt;
      &lt;exclusions&gt;
        &lt;exclusion&gt;
          &lt;artifactId&gt;tomcat-annotations-api&lt;/artifactId&gt;
          &lt;groupId&gt;org.apache.tomcat&lt;/groupId&gt;
        &lt;/exclusion&gt;
      &lt;/exclusions&gt;
    &lt;/dependency&gt;
  &lt;/dependencies&gt;
&lt;/project&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>从这里可以看出来SpringBoot默认的启动容器是Tomcat，Tomcat 的组成核心 jakarta.annotation、tomcat-embed-core、tomcat-annotations-api、org.apache.tomcat.embed 全部都通过 Maven 引入过来了。</p><figure><img src="https://cdn.tobebetterjavaer.com/tobebetterjavaer/images/springboot/tomcat-06.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>core 的版本是 9.0.55，Tomcat 官网上最新的 9.0.x 版本是 9.0.56，高了一个版本。</p><figure><img src="https://cdn.tobebetterjavaer.com/tobebetterjavaer/images/springboot/tomcat-07.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>不过无所谓，直接下载 9.0.56 的 src，对比看一下，是否大致相同。</p><figure><img src="https://cdn.tobebetterjavaer.com/tobebetterjavaer/images/springboot/tomcat-08.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>对比之下可以看得出，Spring Boot 引入的 Tomcat 更精简一点，大体上都是相同的，这也就是<strong>为什么Spring Boot 不需要额外安装 Tomcat 的根本原因了</strong>。</p><p>Spring Boot 的 starter 已经帮我们搞定过了。这也是Spring Boot 大行其道的重要原因，省去了开发人员配置的时间，更专注于业务逻辑的实现、性能的优化，至于那些繁杂的配置嘛，交给 Spring Boot 这个大管家就可以了，他约定好的东西，只要没问题，不需要特殊化定制，用就对了。</p>`,33);function u(f,I){const n=a("ExternalLinkIcon");return r(),l("div",null,[c,g,p,v,t("p",null,[e("打开"),t("a",m,[e("上一节"),o(n)]),e("我们搭建好的 tobebetterjavaer 项目，找到 pom.xml 文件，可以在里面看到一个 parent 属性，代码如下：")]),b])}const y=i(d,[["render",u],["__file","tomcat.html.vue"]]);export{y as default};
