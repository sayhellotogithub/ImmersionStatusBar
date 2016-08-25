##Android沉浸式状态栏完全解析
[http://mp.weixin.qq.com/s?__biz=MzA5MzI3NjE2MA==&mid=2650236820&idx=1&sn=78cc47bc3448d59b391faab8ca3c5123&scene=0#wechat_redirect](http://mp.weixin.qq.com/s?__biz=MzA5MzI3NjE2MA==&mid=2650236820&idx=1&sn=78cc47bc3448d59b391faab8ca3c5123&scene=0#wechat_redirect)

###什么是沉浸式？
先来分析一下叫错的原因吧，之所以很多人会叫错，是因为根本就不了解沉浸式是什么意思，然后就人云亦云跟着叫了。那么沉浸式到底是什么意思呢？

根据百度百科上的定义，沉浸式就是要给用户提供完全沉浸的体验，使用户有一种置身于虚拟世界之中的感觉。

比如说现在大热的VR就是主打的沉浸式体验。

那么对应到Android操作系统上面，怎样才算是沉浸式体验呢？这个可能在大多数情况下都是用不到的，不过在玩游戏或者看电影的时候就非常重要了。因为游戏或者影视类的应用都希望能让用户完全沉浸在其中，享受它们提供的娱乐内容，但如果这个时候在屏幕的上方还显示一个系统状态栏的话，可能就会让用户分分钟产生跳戏的感觉。

那么我们来看一下比较好的游戏都是怎么实现的，比如说海岛奇兵：

Android沉浸式模式的本质就是全屏化