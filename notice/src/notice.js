import css from './index.css'

// 基本样式完成
const msg = (msg = 'hello, notice', type = 'info', canClose = false) => {
	const stTime = 3500
	const className = `n${ Date.now() }`
	// 创建一个临时节点，方便使用字符串写dom
	const tempNode = document.createElement('div')
	const removeNode = () => {
		if (truleNode.classList.contains(`${ css.disappear }`)) {
			clearTimeout(timer)
			truleNode.parentNode.removeChild(truleNode)
		}
	}
	const disappear = () => {
		truleNode.classList.remove(`${ css.appear }`)
		truleNode.classList.add(`${ css.disappear }`)
	}
	let truleNode
	let timer = null

	const node = `
	<div class="${ className } ${ css.mininotice } ${ css[type] }">
		<p class="${ canClose ? '' : css.noClose }">${ msg === '' ? 'hello, notice' : msg }</p>
		${ canClose ? '<div class="' + css.close + '"></div>' : ''}
	</div>
	`
	tempNode.innerHTML = node
	truleNode = tempNode.childNodes[1]
	document.body.appendChild(truleNode)

	truleNode.classList.add(`${ css.appear }`)
	truleNode.querySelector(`.${ css.close }`) && truleNode.querySelector(`.${ css.close }`).addEventListener('click', disappear)
	truleNode.addEventListener('webkitAnimationEnd', removeNode)

	timer = setTimeout(() => {
		disappear()
	}, stTime)
}

module.exports = {
	msg
}