//创建节点
const progressNode = document.createElement('div')
progressNode.classList.add('progress')
const barNode = document.createElement('div')
barNode.classList.add('bar')
progressNode.appendChild(barNode);

const st = (time)=>{
	return new Promise((resolve, reject)=>{
		setTimeout(()=>{
			resolve()
		}, time);
	})
}
let onoff = false
const start = async ()=>{
	if (!onoff) {
		document.body.appendChild(progressNode)
		onoff = !onoff
	}
	barNode.style.transform = 'translateX(-100%)'
	await st(16)
	barNode.style.transform = 'translateX(-20%)'
}
export default {
	start
}
