const { max, min } = Math
const { toString } = Object.prototype


// 验证用户名
const user = function(str, length = [4,16]) {
	try {
		const reg = new RegExp(`^[a-zA-Z0-9_-]{${min.apply(null, length)},${max.apply(null, length)}}$`)
		if (toString.call(length) !== '[object Array]' || length.length !== 2 || max.apply(null, length) > 20 || min.apply(null, length) < 2) {
			throw 'user方法的第二个参数要求长度为2的数组，且最小值>=2，最大值<=20'
		}
		if (toString.call(str) !== '[object String]') {
			throw 'user方法的第一个参数要求为String类型'
		}
		return reg.test(str)
	} catch (err) {
		console.log(`%cWARN: ${err}`, 'color:#FF4949;')
	}
}

// 验证Email
const email = function(str) {
	try {
		const reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/
		if (toString.call(str) !== '[object String]') {
			throw 'email方法的第一个参数要求为String类型'
		}
		return reg.test(str)
	} catch (err) {
		console.log(`%cWARN: ${err}`, 'color:#FF4949;')
	}
}

// 验证手机号码
const phone = function(str) {
	try {
		const reg = /^1[34578]\d{9}$/
		if (toString.call(str) !== '[object Number]' && toString.call(str) !== '[object String]') {
			throw 'email方法的第一个参数要求为Number类型或者String类型'
		}
		return reg.test(str)
	} catch (err) {
		console.log(`%cWARN: ${err}`, 'color:#FF4949;')
	}
}

// 验证身份证号码
const IDcard = function(str) {
	try {
		const reg = /^[1-9]\d{5}(18|19|([23]\d))\d{2}((0[1-9])|(10|11|12))(([0-2][1-9])|10|20|30|31)\d{3}[0-9Xx]$/
		if (toString.call(str) !== '[object String]') {
			throw 'email方法的第一个参数要求为String类型'
		}
		return reg.test(str)
	} catch (err) {
		console.log(`%cWARN: ${err}`, 'color:#FF4949;')
	}
}


// 验证全中文
const fullCn = function(str) {
	try {
		const reg = /^[\u4E00-\u9FA5]+$/
		if (toString.call(str) !== '[object String]') {
			throw 'email方法的第一个参数要求为String类型'
		}
		console.log(reg.test(str))
		return reg.test(str)
	} catch (err) {
		console.log(`%cWARN: ${err}`, 'color:#FF4949;')
	}
}

// 验证部分中文，可以取反判断不能有中文的句子
const partCn = function(str) {
	try {
		const reg = /[\u4E00-\u9FA5]/
		if (toString.call(str) !== '[object String]') {
			throw 'email方法的第一个参数要求为String类型'
		}
		return reg.test(str)
	} catch (err) {
		console.log(`%cWARN: ${err}`, 'color:#FF4949;')
	}
}



module.exports = {
	user, email, phone, IDcard, fullCn, partCn
}