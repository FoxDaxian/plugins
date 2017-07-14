//创建节点
let progressNode,barNode
function createEl() {
	progressNode = document.createElement('div')
	progressNode.classList.add('progress')
	barNode = document.createElement('div')
	barNode.classList.add('bar')
	progressNode.appendChild(barNode);
	return progressNode
}

const {random} = Math

const st = (time)=>{
	return new Promise((resolve, reject)=>{
		setTimeout(()=>{
			resolve()
		}, time);
	})
}

//节点是否添加到页面中
let nodeAppendOnoff = false
//距离
let percent = -100
//多久走一次
let speed = 3000
//改变速度
let speedOnoff = false
//一次动画时间
let transition = 400
//是否停止了动画
let isStop = false
//为加载完允许走到的最大值
let maxPercent = -5

//开始函数
//开始这里 重新开始的时候会有问题
const start = async ()=>{
	if (nodeAppendOnoff) {
		return false
	}
	if (!nodeAppendOnoff) {
		percent = -100
		document.body.appendChild(createEl())
		barNode.style.transition = `${transition / 1000}s`
		nodeAppendOnoff = !nodeAppendOnoff
	}
	barNode.classList.add('blink')
	barNode.style.transform = `translateX(${percent}%)`
	await st(16)
	percent += 10
	barNode.style.transform = `translateX(${percent}%)`

	let recursion = ()=>{
		speedOnoff = !speedOnoff
		speed = speedOnoff ? 2000 : 300
		setTimeout(function() {
			percent += ~~(random() * 7)
			if (percent >= maxPercent) {
				percent = maxPercent
				isStop = isStop ||  true
			}else{
				requestAnimationFrame(recursion)
			}
			barNode.style.transform = `translateX(${percent}%)`
		}, speed);
	}
	recursion()
}

//完成函数
const done = async ()=>{
	if (nodeAppendOnoff) {
		percent = 0
		barNode.style.transform = `translateX(${percent}%)`
		await st(transition)
		barNode.classList.remove('blink')
		await st(16)
		barNode.classList.add('disappear')
		await st(transition)
		barNode.style.display = 'none'
		await st(16)
		barNode.parentNode.parentNode.removeChild(barNode.parentNode)
		isStop = isStop ||  true
		nodeAppendOnoff = !nodeAppendOnoff
	}
}

//设置一段距离
//0-1
const set = (dis)=>{
	if (nodeAppendOnoff) {
		if (Math.max(dis, 1) === dis || Math.min(dis,0) === dis) {
			throw '请传入0-1之间的数'
		}
		if (isStop) {
			isStop = false
			start()
		}
		percent = (1 - dis) * -100
		barNode.style.transform = `translateX(${percent}%)`
	}
}

//每次增加一点点
const inc = ()=>{
	if (nodeAppendOnoff) {
		percent += 8
		if (percent >= maxPercent) {
			percent = maxPercent
		}
		barNode.style.transform = `translateX(${percent}%)`
	}
}
export default {
	start, done, set, inc
}
