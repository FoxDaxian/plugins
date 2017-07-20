# 顶部进度条插件

#### first:
```javascript
    npm i miniprogress -S
```
#### then:
```javascript
    import miniprogress from 'miniprogress'
    import 'miniprogress/lib/progress.css'
```
####there are several APIs below:
|name|arg|type|argDesrc|featurs|
|---|---|---|---|---|
|start|none|---|---|start|
|inc|none|---|---|increase by 8% per time|
|set|exist|Int|$gt:0 && $lt:1|custom set percent|
|done|exist|String|if successful is null(mean don't input anything),if fail only input 'fail'|end with success or fail|
```javascript
//eg:
miniprogress.start()
miniprogress.inc()
miniprogress.set(0.5)
miniprogress.done()
miniprogress.done('fail')
```

##all of the above is what i hope you expect   :)