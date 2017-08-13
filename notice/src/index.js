import notice from 'mininotice'
import 'mininotice/lib/notice.css'

console.log(notice)
document.querySelector('h1').onclick = function() {
	notice.msg('', 'success', 1)
}
