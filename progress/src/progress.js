//创建节点
const progressNode = document.createElement('div')
progressNode.classList.add('progress')
const barNode = document.createElement('div')
barNode.classList.add('bar')
progressNode.appendChild(barNode);

const a = 10

let onoff = false
const start = () => {
	if (!onoff) {
		document.body.appendChild(progressNode)
	}
}
export default {
	start
}
