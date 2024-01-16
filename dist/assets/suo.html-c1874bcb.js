import{_ as r}from"./plugin-vue_export-helper-c27b6911.js";import{r as d,o as s,c,a as e,d as n,b as t,e as i}from"./app-729f55ad.js";const l={},o=i(`<h2 id="前言" tabindex="-1"><a class="header-anchor" href="#前言" aria-hidden="true">#</a> 前言</h2><p>Java提供了种类丰富的锁，每种锁因其特性的不同，在适当的场景下能够展现出非常高的效率。本文旨在对锁相关源码（本文中的源码来自JDK 8和Netty 3.10.6）、使用场景进行举例，为读者介绍主流锁的知识点，以及不同的锁的适用场景。</p><p>Java中往往是按照是否含有某一特性来定义锁，我们通过特性将锁进行分组归类，再使用对比的方式进行介绍，帮助大家更快捷的理解相关知识。下面给出本文内容的总体分类目录：</p><figure><img src="https://cdn.tobebetterjavaer.com/tobebetterjavaer/images/nice-article/other-bukfsdjavassmtjstd-b2ded433-defd-4535-b767-fd2e5be0b5b9.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h3 id="_1-乐观锁-vs-悲观锁" tabindex="-1"><a class="header-anchor" href="#_1-乐观锁-vs-悲观锁" aria-hidden="true">#</a> 1. 乐观锁 VS 悲观锁</h3><p>乐观锁与悲观锁是一种广义上的概念，体现了看待线程同步的不同角度。在Java和数据库中都有此概念对应的实际应用。</p><p>先说概念。对于同一个数据的并发操作，悲观锁认为自己在使用数据的时候一定有别的线程来修改数据，因此在获取数据的时候会先加锁，确保数据不会被别的线程修改。Java中，synchronized关键字和Lock的实现类都是悲观锁。</p><p>而乐观锁认为自己在使用数据时不会有别的线程修改数据，所以不会添加锁，只是在更新数据的时候去判断之前有没有别的线程更新了这个数据。如果这个数据没有被更新，当前线程将自己修改的数据成功写入。如果数据已经被其他线程更新，则根据不同的实现方式执行不同的操作（例如报错或者自动重试）。</p><p>乐观锁在Java中是通过使用无锁编程来实现，最常采用的是CAS算法，Java原子类中的递增操作就通过CAS自旋实现的。</p><figure><img src="https://cdn.tobebetterjavaer.com/tobebetterjavaer/images/nice-article/other-bukfsdjavassmtjstd-840de182-83e2-4639-868a-bd5cc984575f.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>根据从上面的概念描述我们可以发现：</p><ul><li>悲观锁适合写操作多的场景，先加锁可以保证写操作时数据正确。</li><li>乐观锁适合读操作多的场景，不加锁的特点能够使其读操作的性能大幅提升。</li></ul><p>光说概念有些抽象，我们来看下乐观锁和悲观锁的调用方式示例：</p><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>// ------------------------- 悲观锁的调用方式 -------------------------
// synchronized
public synchronized void testMethod() {
	// 操作同步资源
}
// ReentrantLock
private ReentrantLock lock = new ReentrantLock(); // 需要保证多个线程使用的是同一个锁
public void modifyPublicResources() {
	lock.lock();
	// 操作同步资源
	lock.unlock();
}

// ------------------------- 乐观锁的调用方式 -------------------------
private AtomicInteger atomicInteger = new AtomicInteger();  // 需要保证多个线程使用的是同一个AtomicInteger
atomicInteger.incrementAndGet(); //执行自增1
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>通过调用方式示例，我们可以发现悲观锁基本都是在显式的锁定之后再操作同步资源，而乐观锁则直接去操作同步资源。那么，为何乐观锁能够做到不锁定同步资源也可以正确的实现线程同步呢？我们通过介绍乐观锁的主要实现方式 “CAS” 的技术原理来为大家解惑。</p><p>CAS全称 Compare And Swap（比较与交换），是一种无锁算法。在不使用锁（没有线程被阻塞）的情况下实现多线程之间的变量同步。java.util.concurrent包中的原子类就是通过CAS来实现了乐观锁。</p><p>CAS算法涉及到三个操作数：</p><ul><li>需要读写的内存值 V。</li><li>进行比较的值 A。</li><li>要写入的新值 B。</li></ul><p>当且仅当 V 的值等于 A 时，CAS通过原子方式用新值B来更新V的值（“比较+更新”整体是一个原子操作），否则不会执行任何操作。一般情况下，“更新”是一个不断重试的操作。</p><p>之前提到java.util.concurrent包中的原子类，就是通过CAS来实现了乐观锁，那么我们进入原子类AtomicInteger的源码，看一下AtomicInteger的定义：</p><figure><img src="https://cdn.tobebetterjavaer.com/tobebetterjavaer/images/nice-article/other-bukfsdjavassmtjstd-86e17b45-2993-48df-b7cd-ee86bb15c922.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>根据定义我们可以看出各属性的作用：</p><ul><li>unsafe： 获取并操作内存的数据。</li><li>valueOffset： 存储value在AtomicInteger中的偏移量。</li><li>value： 存储AtomicInteger的int值，该属性需要借助volatile关键字保证其在线程间是可见的。</li></ul><p>接下来，我们查看AtomicInteger的自增函数incrementAndGet()的源码时，发现自增函数底层调用的是unsafe.getAndAddInt()。但是由于JDK本身只有Unsafe.class，只通过class文件中的参数名，并不能很好的了解方法的作用，所以我们通过OpenJDK 8 来查看Unsafe的源码：</p><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>// ------------------------- JDK 8 -------------------------
// AtomicInteger 自增方法
public final int incrementAndGet() {
  return unsafe.getAndAddInt(this, valueOffset, 1) + 1;
}

// Unsafe.class
public final int getAndAddInt(Object var1, long var2, int var4) {
  int var5;
  do {
      var5 = this.getIntVolatile(var1, var2);
  } while(!this.compareAndSwapInt(var1, var2, var5, var5 + var4));
  return var5;
}

// ------------------------- OpenJDK 8 -------------------------
// Unsafe.java
public final int getAndAddInt(Object o, long offset, int delta) {
   int v;
   do {
       v = getIntVolatile(o, offset);
   } while (!compareAndSwapInt(o, offset, v, v + delta));
   return v;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>根据OpenJDK 8的源码我们可以看出，getAndAddInt()循环获取给定对象o中的偏移量处的值v，然后判断内存值是否等于v。如果相等则将内存值设置为 v + delta，否则返回false，继续循环进行重试，直到设置成功才能退出循环，并且将旧值返回。整个“比较+更新”操作封装在compareAndSwapInt()中，在JNI里是借助于一个CPU指令完成的，属于原子操作，可以保证多个线程都能够看到同一个变量的修改值。</p><p>后续JDK通过CPU的cmpxchg指令，去比较寄存器中的 A 和 内存中的值 V。如果相等，就把要写入的新值 B 存入内存中。如果不相等，就将内存值 V 赋值给寄存器中的值 A。然后通过Java代码中的while循环再次调用cmpxchg指令进行重试，直到设置成功为止。</p><p>CAS虽然很高效，但是它也存在三大问题，这里也简单说一下：</p><ol><li><strong>ABA问题</strong>。CAS需要在操作值的时候检查内存值是否发生变化，没有发生变化才会更新内存值。但是如果内存值原来是A，后来变成了B，然后又变成了A，那么CAS进行检查时会发现值没有发生变化，但是实际上是有变化的。ABA问题的解决思路就是在变量前面添加版本号，每次变量更新的时候都把版本号加一，这样变化过程就从“A－B－A”变成了“1A－2B－3A”。</li></ol><ul><li>JDK从1.5开始提供了AtomicStampedReference类来解决ABA问题，具体操作封装在compareAndSet()中。compareAndSet()首先检查当前引用和当前标志与预期引用和预期标志是否相等，如果都相等，则以原子方式将引用值和标志的值设置为给定的更新值。</li></ul><ol start="2"><li><strong>循环时间长开销大</strong>。CAS操作如果长时间不成功，会导致其一直自旋，给CPU带来非常大的开销。</li><li><strong>只能保证一个共享变量的原子操作</strong>。对一个共享变量执行操作时，CAS能够保证原子操作，但是对多个共享变量操作时，CAS是无法保证操作的原子性的。</li></ol><ul><li>Java从1.5开始JDK提供了AtomicReference类来保证引用对象之间的原子性，可以把多个变量放在一个对象里来进行CAS操作。</li></ul><h3 id="_2-自旋锁-vs-适应性自旋锁" tabindex="-1"><a class="header-anchor" href="#_2-自旋锁-vs-适应性自旋锁" aria-hidden="true">#</a> 2. 自旋锁 VS 适应性自旋锁</h3><p>在介绍自旋锁前，我们需要介绍一些前提知识来帮助大家明白自旋锁的概念。</p><p>阻塞或唤醒一个Java线程需要操作系统切换CPU状态来完成，这种状态转换需要耗费处理器时间。如果同步代码块中的内容过于简单，状态转换消耗的时间有可能比用户代码执行的时间还要长。</p><p>在许多场景中，同步资源的锁定时间很短，为了这一小段时间去切换线程，线程挂起和恢复现场的花费可能会让系统得不偿失。如果物理机器有多个处理器，能够让两个或以上的线程同时并行执行，我们就可以让后面那个请求锁的线程不放弃CPU的执行时间，看看持有锁的线程是否很快就会释放锁。</p><p>而为了让当前线程“稍等一下”，我们需让当前线程进行自旋，如果在自旋完成后前面锁定同步资源的线程已经释放了锁，那么当前线程就可以不必阻塞而是直接获取同步资源，从而避免切换线程的开销。这就是自旋锁。</p><figure><img src="https://cdn.tobebetterjavaer.com/tobebetterjavaer/images/nice-article/other-bukfsdjavassmtjstd-be0964a8-856a-45c9-ab75-ce9505c2e237.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>自旋锁本身是有缺点的，它不能代替阻塞。自旋等待虽然避免了线程切换的开销，但它要占用处理器时间。如果锁被占用的时间很短，自旋等待的效果就会非常好。反之，如果锁被占用的时间很长，那么自旋的线程只会白浪费处理器资源。所以，自旋等待的时间必须要有一定的限度，如果自旋超过了限定次数（默认是10次，可以使用-XX:PreBlockSpin来更改）没有成功获得锁，就应当挂起线程。</p><p>自旋锁的实现原理同样也是CAS，AtomicInteger中调用unsafe进行自增操作的源码中的do-while循环就是一个自旋操作，如果修改数值失败则通过循环来执行自旋，直至修改成功。</p><figure><img src="https://cdn.tobebetterjavaer.com/tobebetterjavaer/images/nice-article/other-bukfsdjavassmtjstd-0756521c-becf-4657-ab42-1973d74e9c73.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>自旋锁在JDK1.4.2中引入，使用-XX:+UseSpinning来开启。JDK 6中变为默认开启，并且引入了自适应的自旋锁（适应性自旋锁）。</p><p>自适应意味着自旋的时间（次数）不再固定，而是由前一次在同一个锁上的自旋时间及锁的拥有者的状态来决定。如果在同一个锁对象上，自旋等待刚刚成功获得过锁，并且持有锁的线程正在运行中，那么虚拟机就会认为这次自旋也是很有可能再次成功，进而它将允许自旋等待持续相对更长的时间。如果对于某个锁，自旋很少成功获得过，那在以后尝试获取这个锁时将可能省略掉自旋过程，直接阻塞线程，避免浪费处理器资源。</p><p>在自旋锁中 另有三种常见的锁形式:TicketLock、CLHlock和MCSlock，本文中仅做名词介绍，不做深入讲解，感兴趣的同学可以自行查阅相关资料。</p><h3 id="_3-无锁-vs-偏向锁-vs-轻量级锁-vs-重量级锁" tabindex="-1"><a class="header-anchor" href="#_3-无锁-vs-偏向锁-vs-轻量级锁-vs-重量级锁" aria-hidden="true">#</a> 3. 无锁 VS 偏向锁 VS 轻量级锁 VS 重量级锁</h3><p>这四种锁是指锁的状态，专门针对synchronized的。在介绍这四种锁状态之前还需要介绍一些额外的知识。</p><p>首先为什么Synchronized能实现线程同步？</p><p>在回答这个问题之前我们需要了解两个重要的概念：“Java对象头”、“Monitor”。</p><h4 id="java对象头" tabindex="-1"><a class="header-anchor" href="#java对象头" aria-hidden="true">#</a> Java对象头</h4><p>synchronized是悲观锁，在操作同步资源之前需要给同步资源先加锁，这把锁就是存在Java对象头里的，而Java对象头又是什么呢？</p><p>我们以Hotspot虚拟机为例，Hotspot的对象头主要包括两部分数据：Mark Word（标记字段）、Klass Pointer（类型指针）。</p><p><strong>Mark Word</strong>：默认存储对象的HashCode，分代年龄和锁标志位信息。这些信息都是与对象自身定义无关的数据，所以Mark Word被设计成一个非固定的数据结构以便在极小的空间内存存储尽量多的数据。它会根据对象的状态复用自己的存储空间，也就是说在运行期间Mark Word里存储的数据会随着锁标志位的变化而变化。</p><p><strong>Klass Point</strong>：对象指向它的类元数据的指针，虚拟机通过这个引用来确定这个对象是哪个类的实例。</p><h4 id="monitor" tabindex="-1"><a class="header-anchor" href="#monitor" aria-hidden="true">#</a> Monitor</h4><p>Monitor可以理解为一个同步工具或一种同步机制，通常被描述为一个对象。每一个Java对象就有一把看不见的锁，称为内部锁或者Monitor锁。</p><p>Monitor是线程私有的数据结构，每一个线程都有一个可用monitor record列表，同时还有一个全局的可用列表。每一个被锁住的对象都会和一个monitor关联，同时monitor中有一个Owner字段存放拥有该锁的线程的唯一标识，表示该锁被这个线程占用。</p><p>现在话题回到synchronized，synchronized通过Monitor来实现线程同步，Monitor是依赖于底层的操作系统的Mutex Lock（互斥锁）来实现的线程同步。</p><p>如同我们在自旋锁中提到的“阻塞或唤醒一个Java线程需要操作系统切换CPU状态来完成，这种状态转换需要耗费处理器时间。如果同步代码块中的内容过于简单，状态转换消耗的时间有可能比用户代码执行的时间还要长”。这种方式就是synchronized最初实现同步的方式，这就是JDK 6之前synchronized效率低的原因。这种依赖于操作系统Mutex Lock所实现的锁我们称之为“重量级锁”，JDK 6中为了减少获得锁和释放锁带来的性能消耗，引入了“偏向锁”和“轻量级锁”。</p><p>所以目前锁一共有4种状态，级别从低到高依次是：无锁、偏向锁、轻量级锁和重量级锁。锁状态只能升级不能降级。</p><p>通过上面的介绍，我们对synchronized的加锁机制以及相关知识有了一个了解，那么下面我们给出四种锁状态对应的的Mark Word内容，然后再分别讲解四种锁状态的思路以及特点：</p><table><thead><tr><th>锁状态</th><th>存储内容</th><th>存储内容</th></tr></thead><tbody><tr><td>无锁</td><td>对象的hashCode、对象分代年龄、是否是偏向锁（0）</td><td>01</td></tr><tr><td>偏向锁</td><td>偏向线程ID、偏向时间戳、对象分代年龄、是否是偏向锁（1）</td><td>01</td></tr><tr><td>轻量级锁</td><td>指向栈中锁记录的指针</td><td>00</td></tr><tr><td>重量级锁</td><td>指向互斥量（重量级锁）的指针</td><td>10</td></tr></tbody></table><p><strong>无锁</strong></p><p>无锁没有对资源进行锁定，所有的线程都能访问并修改同一个资源，但同时只有一个线程能修改成功。</p><p>无锁的特点就是修改操作在循环内进行，线程会不断的尝试修改共享资源。如果没有冲突就修改成功并退出，否则就会继续循环尝试。如果有多个线程修改同一个值，必定会有一个线程能修改成功，而其他修改失败的线程会不断重试直到修改成功。上面我们介绍的CAS原理及应用即是无锁的实现。无锁无法全面代替有锁，但无锁在某些场合下的性能是非常高的。</p><p><strong>偏向锁</strong></p><p>偏向锁是指一段同步代码一直被一个线程所访问，那么该线程会自动获取锁，降低获取锁的代价。</p><p>在大多数情况下，锁总是由同一线程多次获得，不存在多线程竞争，所以出现了偏向锁。其目标就是在只有一个线程执行同步代码块时能够提高性能。</p><p>当一个线程访问同步代码块并获取锁时，会在Mark Word里存储锁偏向的线程ID。在线程进入和退出同步块时不再通过CAS操作来加锁和解锁，而是检测Mark Word里是否存储着指向当前线程的偏向锁。引入偏向锁是为了在无多线程竞争的情况下尽量减少不必要的轻量级锁执行路径，因为轻量级锁的获取及释放依赖多次CAS原子指令，而偏向锁只需要在置换ThreadID的时候依赖一次CAS原子指令即可。</p><p>偏向锁只有遇到其他线程尝试竞争偏向锁时，持有偏向锁的线程才会释放锁，线程不会主动释放偏向锁。偏向锁的撤销，需要等待全局安全点（在这个时间点上没有字节码正在执行），它会首先暂停拥有偏向锁的线程，判断锁对象是否处于被锁定状态。撤销偏向锁后恢复到无锁（标志位为“01”）或轻量级锁（标志位为“00”）的状态。</p><p>偏向锁在JDK 6及以后的JVM里是默认启用的。可以通过JVM参数关闭偏向锁：-XX:-UseBiasedLocking=false，关闭之后程序默认会进入轻量级锁状态。</p><p><strong>轻量级锁</strong></p><p>是指当锁是偏向锁的时候，被另外的线程所访问，偏向锁就会升级为轻量级锁，其他线程会通过自旋的形式尝试获取锁，不会阻塞，从而提高性能。</p><p>在代码进入同步块的时候，如果同步对象锁状态为无锁状态（锁标志位为“01”状态，是否为偏向锁为“0”），虚拟机首先将在当前线程的栈帧中建立一个名为锁记录（Lock Record）的空间，用于存储锁对象目前的Mark Word的拷贝，然后拷贝对象头中的Mark Word复制到锁记录中。</p><p>拷贝成功后，虚拟机将使用CAS操作尝试将对象的Mark Word更新为指向Lock Record的指针，并将Lock Record里的owner指针指向对象的Mark Word。</p><p>如果这个更新动作成功了，那么这个线程就拥有了该对象的锁，并且对象Mark Word的锁标志位设置为“00”，表示此对象处于轻量级锁定状态。</p><p>如果轻量级锁的更新操作失败了，虚拟机首先会检查对象的Mark Word是否指向当前线程的栈帧，如果是就说明当前线程已经拥有了这个对象的锁，那就可以直接进入同步块继续执行，否则说明多个线程竞争锁。</p><p>若当前只有一个等待线程，则该线程通过自旋进行等待。但是当自旋超过一定的次数，或者一个线程在持有锁，一个在自旋，又有第三个来访时，轻量级锁升级为重量级锁。</p><p><strong>重量级锁</strong></p><p>升级为重量级锁时，锁标志的状态值变为“10”，此时Mark Word中存储的是指向重量级锁的指针，此时等待锁的线程都会进入阻塞状态。</p><p>整体的锁状态升级流程如下：</p><figure><img src="https://cdn.tobebetterjavaer.com/tobebetterjavaer/images/nice-article/other-bukfsdjavassmtjstd-3d0981fb-8f3c-4d66-90c4-170178f2ff76.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>综上，偏向锁通过对比Mark Word解决加锁问题，避免执行CAS操作。而轻量级锁是通过用CAS操作和自旋来解决加锁问题，避免线程阻塞和唤醒而影响性能。重量级锁是将除了拥有锁的线程以外的线程都阻塞。</p><h3 id="_4-公平锁-vs-非公平锁" tabindex="-1"><a class="header-anchor" href="#_4-公平锁-vs-非公平锁" aria-hidden="true">#</a> 4. 公平锁 VS 非公平锁</h3><p>公平锁是指多个线程按照申请锁的顺序来获取锁，线程直接进入队列中排队，队列中的第一个线程才能获得锁。公平锁的优点是等待锁的线程不会饿死。缺点是整体吞吐效率相对非公平锁要低，等待队列中除第一个线程以外的所有线程都会阻塞，CPU唤醒阻塞线程的开销比非公平锁大。</p><p>非公平锁是多个线程加锁时直接尝试获取锁，获取不到才会到等待队列的队尾等待。但如果此时锁刚好可用，那么这个线程可以无需阻塞直接获取到锁，所以非公平锁有可能出现后申请锁的线程先获取锁的场景。非公平锁的优点是可以减少唤起线程的开销，整体的吞吐效率高，因为线程有几率不阻塞直接获得锁，CPU不必唤醒所有线程。缺点是处于等待队列中的线程可能会饿死，或者等很久才会获得锁。</p><p>直接用语言描述可能有点抽象，这里作者用从别处看到的一个例子来讲述一下公平锁和非公平锁。</p><figure><img src="https://cdn.tobebetterjavaer.com/tobebetterjavaer/images/nice-article/other-bukfsdjavassmtjstd-dc687c10-f5c2-483f-8446-16e24c89ec51.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>如上图所示，假设有一口水井，有管理员看守，管理员有一把锁，只有拿到锁的人才能够打水，打完水要把锁还给管理员。每个过来打水的人都要管理员的允许并拿到锁之后才能去打水，如果前面有人正在打水，那么这个想要打水的人就必须排队。管理员会查看下一个要去打水的人是不是队伍里排最前面的人，如果是的话，才会给你锁让你去打水；如果你不是排第一的人，就必须去队尾排队，这就是公平锁。</p><p>但是对于非公平锁，管理员对打水的人没有要求。即使等待队伍里有排队等待的人，但如果在上一个人刚打完水把锁还给管理员而且管理员还没有允许等待队伍里下一个人去打水时，刚好来了一个插队的人，这个插队的人是可以直接从管理员那里拿到锁去打水，不需要排队，原本排队等待的人只能继续等待。如下图所示：</p><figure><img src="https://cdn.tobebetterjavaer.com/tobebetterjavaer/images/nice-article/other-bukfsdjavassmtjstd-f39276f9-26b7-4a57-bc7f-32a3f7221897.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>接下来我们通过ReentrantLock的源码来讲解公平锁和非公平锁。</p><figure><img src="https://cdn.tobebetterjavaer.com/tobebetterjavaer/images/nice-article/other-bukfsdjavassmtjstd-7b929419-86a4-4e72-99f4-228aa5597097.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>根据代码可知，ReentrantLock里面有一个内部类Sync，Sync继承AQS（AbstractQueuedSynchronizer），添加锁和释放锁的大部分操作实际上都是在Sync中实现的。它有公平锁FairSync和非公平锁NonfairSync两个子类。ReentrantLock默认使用非公平锁，也可以通过构造器来显示的指定使用公平锁。</p><p>下面我们来看一下公平锁与非公平锁的加锁方法的源码:</p><figure><img src="https://cdn.tobebetterjavaer.com/tobebetterjavaer/images/nice-article/other-bukfsdjavassmtjstd-758a4637-fd98-49f2-bb0f-9690c363e0b6.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>通过上图中的源代码对比，我们可以明显的看出公平锁与非公平锁的lock()方法唯一的区别就在于公平锁在获取同步状态时多了一个限制条件：hasQueuedPredecessors()。</p><figure><img src="https://cdn.tobebetterjavaer.com/tobebetterjavaer/images/nice-article/other-bukfsdjavassmtjstd-8278a6df-0d0c-4547-8b74-229b58fc893d.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>再进入hasQueuedPredecessors()，可以看到该方法主要做一件事情：主要是判断当前线程是否位于同步队列中的第一个。如果是则返回true，否则返回false。</p><p>综上，公平锁就是通过同步队列来实现多个线程按照申请锁的顺序来获取锁，从而实现公平的特性。非公平锁加锁时不考虑排队等待问题，直接尝试获取锁，所以存在后申请却先获得锁的情况。</p><h3 id="_5-可重入锁-vs-非可重入锁" tabindex="-1"><a class="header-anchor" href="#_5-可重入锁-vs-非可重入锁" aria-hidden="true">#</a> 5. 可重入锁 VS 非可重入锁</h3>`,100),v={href:"https://javabetter.cn/thread/reentrantLock.html",target:"_blank",rel:"noopener noreferrer"},p={href:"https://javabetter.cn/thread/synchronized-1.html",target:"_blank",rel:"noopener noreferrer"},u=i(`<div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>public class Widget {
    public synchronized void doSomething() {
        System.out.println(&quot;方法1执行...&quot;);
        doOthers();
    }

    public synchronized void doOthers() {
        System.out.println(&quot;方法2执行...&quot;);
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在上面的代码中，类中的两个方法都是被内置锁synchronized修饰的，doSomething()方法中调用doOthers()方法。因为内置锁是可重入的，所以同一个线程在调用doOthers()时可以直接获得当前对象的锁，进入doOthers()进行操作。</p><p>如果是一个不可重入锁，那么当前线程在调用doOthers()之前需要将执行doSomething()时获取当前对象的锁释放掉，实际上该对象锁已被当前线程所持有，且无法释放。所以此时会出现死锁。</p><p>而为什么可重入锁就可以在嵌套调用时可以自动获得锁呢？我们通过图示和源码来分别解析一下。</p><p>还是打水的例子，有多个人在排队打水，此时管理员允许锁和同一个人的多个水桶绑定。这个人用多个水桶打水时，第一个水桶和锁绑定并打完水之后，第二个水桶也可以直接和锁绑定并开始打水，所有的水桶都打完水之后打水人才会将锁还给管理员。这个人的所有打水流程都能够成功执行，后续等待的人也能够打到水。这就是可重入锁。</p><figure><img src="https://cdn.tobebetterjavaer.com/tobebetterjavaer/images/nice-article/other-bukfsdjavassmtjstd-35dc49bf-87c9-4133-b68f-269fb0508f75.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>但如果是非可重入锁的话，此时管理员只允许锁和同一个人的一个水桶绑定。第一个水桶和锁绑定打完水之后并不会释放锁，导致第二个水桶不能和锁绑定也无法打水。当前线程出现死锁，整个等待队列中的所有线程都无法被唤醒。</p><figure><img src="https://cdn.tobebetterjavaer.com/tobebetterjavaer/images/nice-article/other-bukfsdjavassmtjstd-08479ca1-5d43-475c-8592-9f183e52cc26.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>之前我们说过ReentrantLock和synchronized都是重入锁，那么我们通过重入锁ReentrantLock以及非可重入锁NonReentrantLock的源码来对比分析一下为什么非可重入锁在重复调用同步资源时会出现死锁。</p><p>首先ReentrantLock和NonReentrantLock都继承父类AQS，其父类AQS中维护了一个同步状态status来计数重入次数，status初始值为0。</p><p>当线程尝试获取锁时，可重入锁先尝试获取并更新status值，如果status == 0表示没有其他线程在执行同步代码，则把status置为1，当前线程开始执行。如果status != 0，则判断当前线程是否是获取到这个锁的线程，如果是的话执行status+1，且当前线程可以再次获取锁。而非可重入锁是直接去获取并尝试更新当前status的值，如果status != 0的话会导致其获取锁失败，当前线程阻塞。</p><p>释放锁时，可重入锁同样先获取当前status的值，在当前线程是持有锁的线程的前提下。如果status-1 == 0，则表示当前线程所有重复获取锁的操作都已经执行完毕，然后该线程才会真正释放锁。而非可重入锁则是在确定当前线程是持有锁的线程之后，直接将status置为0，将锁释放。</p><figure><img src="https://cdn.tobebetterjavaer.com/tobebetterjavaer/images/nice-article/other-bukfsdjavassmtjstd-d6e12a34-c889-45e1-83bf-a4d7e36eedde.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h3 id="_6-独享锁-vs-共享锁" tabindex="-1"><a class="header-anchor" href="#_6-独享锁-vs-共享锁" aria-hidden="true">#</a> 6. 独享锁 VS 共享锁</h3><p>独享锁和共享锁同样是一种概念。我们先介绍一下具体的概念，然后通过ReentrantLock和ReentrantReadWriteLock的源码来介绍独享锁和共享锁。</p><p>独享锁也叫排他锁，是指该锁一次只能被一个线程所持有。如果线程T对数据A加上排它锁后，则其他线程不能再对A加任何类型的锁。获得排它锁的线程即能读数据又能修改数据。JDK中的synchronized和JUC中Lock的实现类就是互斥锁。</p><p>共享锁是指该锁可被多个线程所持有。如果线程T对数据A加上共享锁后，则其他线程只能对A再加共享锁，不能加排它锁。获得共享锁的线程只能读数据，不能修改数据。</p><p>独享锁与共享锁也是通过AQS来实现的，通过实现不同的方法，来实现独享或者共享。</p><p>下图为ReentrantReadWriteLock的部分源码：</p><figure><img src="https://cdn.tobebetterjavaer.com/tobebetterjavaer/images/nice-article/other-bukfsdjavassmtjstd-baa93e76-ac90-4955-8955-50dabc6efbdd.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>我们看到ReentrantReadWriteLock有两把锁：ReadLock和WriteLock，由词知意，一个读锁一个写锁，合称“读写锁”。再进一步观察可以发现ReadLock和WriteLock是靠内部类Sync实现的锁。Sync是AQS的一个子类，这种结构在CountDownLatch、ReentrantLock、Semaphore里面也都存在。</p><p>在ReentrantReadWriteLock里面，读锁和写锁的锁主体都是Sync，但读锁和写锁的加锁方式不一样。读锁是共享锁，写锁是独享锁。读锁的共享锁可保证并发读非常高效，而读写、写读、写写的过程互斥，因为读锁和写锁是分离的。所以ReentrantReadWriteLock的并发性相比一般的互斥锁有了很大提升。</p><p>那读锁和写锁的具体加锁方式有什么区别呢？在了解源码之前我们需要回顾一下其他知识。 在最开始提及AQS的时候我们也提到了state字段（int类型，32位），该字段用来描述有多少线程获持有锁。</p><p>在独享锁中这个值通常是0或者1（如果是重入锁的话state值就是重入的次数），在共享锁中state就是持有锁的数量。但是在ReentrantReadWriteLock中有读、写两把锁，所以需要在一个整型变量state上分别描述读锁和写锁的数量（或者也可以叫状态）。于是将state变量“按位切割”切分成了两个部分，高16位表示读锁状态（读锁个数），低16位表示写锁状态（写锁个数）。如下图所示：</p><figure><img src="https://cdn.tobebetterjavaer.com/tobebetterjavaer/images/nice-article/other-bukfsdjavassmtjstd-62e2bf55-452e-4353-9635-0ea368e355dd.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>了解了概念之后我们再来看代码，先看写锁的加锁源码：</p><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>protected final boolean tryAcquire(int acquires) {
	Thread current = Thread.currentThread();
	int c = getState(); // 取到当前锁的个数
	int w = exclusiveCount(c); // 取写锁的个数w
	if (c != 0) { // 如果已经有线程持有了锁(c!=0)
    // (Note: if c != 0 and w == 0 then shared count != 0)
		if (w == 0 || current != getExclusiveOwnerThread()) // 如果写线程数（w）为0（换言之存在读锁） 或者持有锁的线程不是当前线程就返回失败
			return false;
		if (w + exclusiveCount(acquires) &gt; MAX_COUNT)    // 如果写入锁的数量大于最大数（65535，2的16次方-1）就抛出一个Error。
      throw new Error(&quot;Maximum lock count exceeded&quot;);
		// Reentrant acquire
    setState(c + acquires);
    return true;
  }
  if (writerShouldBlock() || !compareAndSetState(c, c + acquires)) // 如果当且写线程数为0，并且当前线程需要阻塞那么就返回失败；或者如果通过CAS增加写线程数失败也返回失败。
		return false;
	setExclusiveOwnerThread(current); // 如果c=0，w=0或者c&gt;0，w&gt;0（重入），则设置当前线程或锁的拥有者
	return true;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>这段代码首先取到当前锁的个数c，然后再通过c来获取写锁的个数w。因为写锁是低16位，所以取低16位的最大值与当前的c做与运算（ int w = exclusiveCount©; ），高16位和0与运算后是0，剩下的就是低位运算的值，同时也是持有写锁的线程数目。</li><li>在取到写锁线程的数目后，首先判断是否已经有线程持有了锁。如果已经有线程持有了锁(c!=0)，则查看当前写锁线程的数目，如果写线程数为0（即此时存在读锁）或者持有锁的线程不是当前线程就返回失败（涉及到公平锁和非公平锁的实现）。</li><li>如果写入锁的数量大于最大数（65535，2的16次方-1）就抛出一个Error。</li><li>如果当且写线程数为0（那么读线程也应该为0，因为上面已经处理c!=0的情况），并且当前线程需要阻塞那么就返回失败；如果通过CAS增加写线程数失败也返回失败。</li><li>如果c=0,w=0或者c&gt;0,w&gt;0（重入），则设置当前线程或锁的拥有者，返回成功！</li></ul><p>tryAcquire()除了重入条件（当前线程为获取了写锁的线程）之外，增加了一个读锁是否存在的判断。如果存在读锁，则写锁不能被获取，原因在于：必须确保写锁的操作对读锁可见，如果允许读锁在已被获取的情况下对写锁的获取，那么正在运行的其他读线程就无法感知到当前写线程的操作。</p><p>因此，只有等待其他读线程都释放了读锁，写锁才能被当前线程获取，而写锁一旦被获取，则其他读写线程的后续访问均被阻塞。写锁的释放与ReentrantLock的释放过程基本类似，每次释放均减少写状态，当写状态为0时表示写锁已被释放，然后等待的读写线程才能够继续访问读写锁，同时前次写线程的修改对后续的读写线程可见。</p><p>接着是读锁的代码：</p><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>protected final int tryAcquireShared(int unused) {
    Thread current = Thread.currentThread();
    int c = getState();
    if (exclusiveCount(c) != 0 &amp;&amp;
        getExclusiveOwnerThread() != current)
        return -1;                                   // 如果其他线程已经获取了写锁，则当前线程获取读锁失败，进入等待状态
    int r = sharedCount(c);
    if (!readerShouldBlock() &amp;&amp;
        r &lt; MAX_COUNT &amp;&amp;
        compareAndSetState(c, c + SHARED_UNIT)) {
        if (r == 0) {
            firstReader = current;
            firstReaderHoldCount = 1;
        } else if (firstReader == current) {
            firstReaderHoldCount++;
        } else {
            HoldCounter rh = cachedHoldCounter;
            if (rh == null || rh.tid != getThreadId(current))
                cachedHoldCounter = rh = readHolds.get();
            else if (rh.count == 0)
                readHolds.set(rh);
            rh.count++;
        }
        return 1;
    }
    return fullTryAcquireShared(current);
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>可以看到在tryAcquireShared(int unused)方法中，如果其他线程已经获取了写锁，则当前线程获取读锁失败，进入等待状态。如果当前线程获取了写锁或者写锁未被获取，则当前线程（线程安全，依靠CAS保证）增加读状态，成功获取读锁。读锁的每次释放（线程安全的，可能有多个读线程同时释放读锁）均减少读状态，减少的值是“1&lt;&lt;16”。所以读写锁才能实现读读的过程共享，而读写、写读、写写的过程互斥。</p><p>此时，我们再回头看一下互斥锁ReentrantLock中公平锁和非公平锁的加锁源码：</p><figure><img src="https://cdn.tobebetterjavaer.com/tobebetterjavaer/images/nice-article/other-bukfsdjavassmtjstd-7fa4ea6b-02ef-4fd4-992d-9ed08e5d4c76.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>我们发现在ReentrantLock虽然有公平锁和非公平锁两种，但是它们添加的都是独享锁。根据源码所示，当某一个线程调用lock方法获取锁时，如果同步资源没有被其他线程锁住，那么当前线程在使用CAS更新state成功后就会成功抢占该资源。而如果公共资源被占用且不是被当前线程占用，那么就会加锁失败。所以可以确定ReentrantLock无论读操作还是写操作，添加的锁都是都是独享锁。</p><h2 id="结语" tabindex="-1"><a class="header-anchor" href="#结语" aria-hidden="true">#</a> 结语</h2><p>本文Java中常用的锁以及常见的锁的概念进行了基本介绍，并从源码以及实际应用的角度进行了对比分析。限于篇幅以及个人水平，没有在本篇文章中对所有内容进行深层次的讲解。</p><p>其实Java本身已经对锁本身进行了良好的封装，降低了研发同学在平时工作中的使用难度。但是研发同学也需要熟悉锁的底层原理，不同场景下选择最适合的锁。而且源码中的思路都是非常好的思路，也是值得大家去学习和借鉴的。</p><h2 id="参考资料" tabindex="-1"><a class="header-anchor" href="#参考资料" aria-hidden="true">#</a> 参考资料</h2>`,40),b=e("li",null,"《Java并发编程艺术》",-1),h={href:"https://blog.csdn.net/u013256816/article/details/51204385",target:"_blank",rel:"noopener noreferrer"},m={href:"https://juejin.im/post/5a73cbbff265da4e807783f5",target:"_blank",rel:"noopener noreferrer"},g={href:"https://juejin.im/post/5b42c2546fb9a04f8751eabc",target:"_blank",rel:"noopener noreferrer"},f={href:"https://zhuanlan.zhihu.com/p/29866981",target:"_blank",rel:"noopener noreferrer"},k={href:"http://www.infoq.com/cn/articles/java-se-16-synchronized",target:"_blank",rel:"noopener noreferrer"},A={href:"https://blog.csdn.net/qq_19431333/article/details/70568478",target:"_blank",rel:"noopener noreferrer"},j={href:"https://www.cnblogs.com/twoheads/p/9635309.html",target:"_blank",rel:"noopener noreferrer"},_={href:"https://my.oschina.net/adan1/blog/158107",target:"_blank",rel:"noopener noreferrer"},S={href:"https://mrdear.cn/2018/06/23/java/java--readwritelock",target:"_blank",rel:"noopener noreferrer"},J=e("h2",{id:"作者简介",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#作者简介","aria-hidden":"true"},"#"),n(" 作者简介")],-1),y=e("ul",null,[e("li",null,"家琪，美团点评后端工程师。2017 年加入美团点评，负责美团点评境内度假的业务开发。")],-1),C={href:"https://tech.meituan.com/2018/11/15/java-lock.html",target:"_blank",rel:"noopener noreferrer"},x=e("hr",null,null,-1),R={href:"https://github.com/itwanger/toBeBetterJavaer",target:"_blank",rel:"noopener noreferrer"},L={href:"https://javabetter.cn/overview/",target:"_blank",rel:"noopener noreferrer"},z=e("p",null,[n("微信搜 "),e("strong",null,"沉默王二"),n(" 或扫描下方二维码关注二哥的原创公众号沉默王二，回复 "),e("strong",null,"222"),n(" 即可免费领取。")],-1),w=e("figure",null,[e("img",{src:"https://cdn.tobebetterjavaer.com/tobebetterjavaer/images/gongzhonghao.png",alt:"",tabindex:"0",loading:"lazy"}),e("figcaption")],-1);function I(M,W){const a=d("ExternalLinkIcon");return s(),c("div",null,[o,e("p",null,[n("可重入锁又名递归锁，是指在同一个线程在外层方法获取锁的时候，再进入该线程的内层方法会自动获取锁（前提：锁的是同一个对象或者class），不会因为之前已经获取过还没释放而阻塞。Java中"),e("a",v,[n("ReentrantLock"),t(a)]),n("和"),e("a",p,[n("synchronized"),t(a)]),n("都是可重入锁，可重入锁的一个优点是可一定程度避免死锁。下面用示例代码来进行分析：")]),u,e("ol",null,[b,e("li",null,[e("a",h,[n("Java中的锁"),t(a)])]),e("li",null,[e("a",m,[n("Java CAS 原理剖析"),t(a)])]),e("li",null,[e("a",g,[n("Java并发——关键字synchronized解析"),t(a)])]),e("li",null,[e("a",f,[n("Java synchronized原理总结"),t(a)])]),e("li",null,[e("a",k,[n("聊聊并发（二）——Java SE1.6中的Synchronized"),t(a)])]),e("li",null,[e("a",A,[n("深入理解读写锁—ReadWriteLock源码分析"),t(a)])]),e("li",null,[e("a",j,[n("【JUC】JDK1.8源码分析之ReentrantReadWriteLock"),t(a)])]),e("li",null,[e("a",_,[n("Java多线程（十）之ReentrantReadWriteLock深入分析"),t(a)])]),e("li",null,[e("a",S,[n("Java–读写锁的实现原理"),t(a)])])]),J,y,e("blockquote",null,[e("p",null,[n("参考链接："),e("a",C,[n("https://tech.meituan.com/2018/11/15/java-lock.html"),t(a)]),n("，整理：沉默王二")])]),x,e("p",null,[n("GitHub 上标星 10000+ 的开源知识库《"),e("a",R,[n("二哥的 Java 进阶之路"),t(a)]),n("》第一版 PDF 终于来了！包括Java基础语法、数组&字符串、OOP、集合框架、Java IO、异常处理、Java 新特性、网络编程、NIO、并发编程、JVM等等，共计 32 万余字，500+张手绘图，可以说是通俗易懂、风趣幽默……详情戳："),e("a",L,[n("太赞了，GitHub 上标星 10000+ 的 Java 教程"),t(a)])]),z,w])}const V=r(l,[["render",I],["__file","suo.html.vue"]]);export{V as default};
