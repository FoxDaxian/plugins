# mini通知插件

#### first:
```javascript
    npm i mininotice -S
```
#### then:
```javascript
    import mininotice from 'mininotice'
    import 'mininotice/lib/notice.css'
    // execute
    mininotice.msg('评论不能为空', 'success', true)
```
#### At present, notice plugin has a few ways:

- ##### ```mininotice.msg```: just like toast component, 3.5s after the disappearance
    ```Mininotice.msg has the following parameters:```  

    |name|type|default|desc|
    |-----|-----|-----|--------------------|
    |msg|String|'hello, notice'|message of mininotice.msg|
    |type|String|'info'|there are four, namely: ```info```, ```success```, ```warning```, ```danger```|
    |canClose|Boolean|false|Whether it can be closed|


## all of the above is what i hope you expect   :)
