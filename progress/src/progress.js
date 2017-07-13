//创建节点
const progressNode = document.createElement('div')
progressNode.classList.add('progress')
const barNode = document.createElement('div')
barNode.classList.add('bar')
progressNode.appendChild(barNode);

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
let percent = -100
let speed = 3000
let speedOnoff = false
let transition = 400

barNode.style.transition = `${transition / 1000}s`

//开始函数
const start = async ()=>{
	if (!nodeAppendOnoff) {
		document.body.appendChild(progressNode)
		nodeAppendOnoff = !nodeAppendOnoff
	}
	barNode.style.transform = `translateX(${percent}%)`
	await st(16)
	percent += 10
	barNode.style.transform = `translateX(${percent}%)`

	let recursion = ()=>{
		speedOnoff = !speedOnoff
		speed = speedOnoff ? 2000 : 300
		setTimeout(function() {
			percent += ~~(random() * 7)
			if (percent >= 0) {
				percent = 0
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
	percent = 0
	barNode.style.transform = `translateX(${percent}%)`
	await st(transition)
	barNode.style.display = 'none'
	await st(16)
	barNode.parentNode.parentNode.removeChild(barNode.parentNode)
}

//设置一段距离
//0-1
const set = (dis)=>{
	percent = (1 - dis) * -100
	barNode.style.transform = `translateX(${percent}%)`
}

//每次增加一点点
const inc = ()=>{
	percent += 8
	barNode.style.transform = `translateX(${percent}%)`
}
export default {
	start, done, set, inc
}
