import './index.css'
// 基本样式完成
const msg = (msg = 'hello, notice') => {
	const className = `n${ Date.now() }`
	// 创建一个临时节点，方便使用字符串写dom
	const tempNode = document.createElement('div')
	let truleNode

	const node = `
	<div class="${ className } mininotice">
		<p>${ msg }</p>
		<div class="close"></div>
	</div>
	`
	tempNode.innerHTML = node
	truleNode = tempNode.childNodes[1]
	document.body.appendChild(truleNode)

	truleNode.querySelector('.close').onclick = function() {
		this.parentNode.parentNode.removeChild(this.parentNode)
	}
}

module.exports = {
	msg
}