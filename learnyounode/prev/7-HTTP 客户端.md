## HTTP 客户端 (第 7 个习题，共 13 个)

编写一个程序来发起一个 HTTP GET 请求，所请求的 URL
为命令行参数的第一个。然后将每一个 "data"
事件所得的数据，以字符串形式在终端（标准输出 stdout）的新的一行打印出来。

─────────────────────────────────────────────────────────────────────────────

## 提示

完成这个练习，你需要使用 Node.js 核心模块之一：http。

你可以使用浏览器访问
file:///usr/local/lib/node_modules/learnyounode/docs-nodejs/http.html
来获取关于 http 模块的文档。

http.get() 方法是用来发		起简单的 GET
请求的快捷方式，使用这个方法可以一定程度简化你的程序。http.get()
的第一个参数是你想要 GET 的 URL，第二个参数则是回调函数。

与其他的回调函数不同，这个回调函数有如下这些特征：

```js
 function callback (response) { /* ... */ }
```

response 对象是一个 Node 的 Stream 类型的对象，你可以将 Node Stream
当做一个会触发一些事件的对象，其中我们通常所需要关心的事件有三个：
"data"，"error" 以及 "end"。你可以像这样来监听一个事件：

```
 response.on('data', function (data) { /* ... */ })
```

'data'
事件会在每个数据块到达并已经可以对其进行一些处理的时候被触发。数据块的大小
将取决于数据源。

你从 http.get() 所获得的 response 对象/Stream 还有一个 setEncoding()
的方法。如果你调用这个方法，并为其指定参数为 utf8，那么 data
事件中会传递字符串，而不是标准的 Node Buffer 对象，这样，你也不用再手动将
Buffer 对象转换成字符串了。
