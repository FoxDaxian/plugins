import './index.css'
// 基本样式完成
const msg = (msg = 'hello, notice', type = 'info', canClose = false) => {
	const stTime = 3500
	const className = `n${ Date.now() }`
	// 创建一个临时节点，方便使用字符串写dom
	const tempNode = document.createElement('div')
	const removeNode = () => {
		if (truleNode.classList.contains('disappear')) {
			clearTimeout(timer)
			truleNode.parentNode.removeChild(truleNode)
		}
	}
	const disappear = () => {
		truleNode.classList.remove('appear')
		truleNode.classList.add('disappear')
	}
	let truleNode
	let timer = null

	const node = `
	<div class="${ className } mininotice ${ type }">
		<p class="${ canClose ? '' : 'noClose' }">${ msg === '' ? 'hello, notice' : msg }</p>
		${ canClose ? '<div class="close"></div>' : ''}
	</div>
	`
	tempNode.innerHTML = node
	truleNode = tempNode.childNodes[1]
	document.body.appendChild(truleNode)

	truleNode.classList.add('appear')
	truleNode.querySelector('.close') && truleNode.querySelector('.close').addEventListener('click', disappear)
	truleNode.addEventListener('webkitAnimationEnd', removeNode)

	timer = setTimeout(() => {
		disappear()
	}, stTime)
}

module.exports = {
	msg
}