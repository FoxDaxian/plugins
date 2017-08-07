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

// 验证密码长度，没有强度
const password = function(str, length = [4,16]) {
	try {
		const reg = new RegExp(`^(\\w){${min.apply(null, length)},${max.apply(null, length)}}$`)
		if (toString.call(length) !== '[object Array]' || length.length !== 2 || max.apply(null, length) > 20 || min.apply(null, length) < 2) {
			throw 'user方法的第二个参数要求长度为2的数组，且最小值>=2，最大值<=20'
		}
		return reg.test(str)
	} catch (err) {
		console.log(`%cWARN: ${err}`, 'color:#FF4949;')
	}
}

// 判断两次密码是否一致
const issamepw = function(str1, str2) {
	if (str1 === str2) {
		return true
	} else {
		return false
	}
}

// 判断浏览器内核
const curBrowser = function () {
    const userAgent = navigator.userAgent

    const isOpera = userAgent.indexOf("Opera") > -1
    const isIE = userAgent.indexOf("compatible") > -1 && userAgent.indexOf("MSIE") > -1 && !isOpera
    const isFF = userAgent.indexOf("Firefox") > -1
    const isCH = userAgent.indexOf("Chrome") > -1
    const isSafari = userAgent.indexOf("Safari") > -1

    if (isIE) {
        let IE5 = IE55 = IE6 = IE7 = IE8 = false
        const reIE = new RegExp("MSIE (\\d+\\.\\d+);")
        reIE.test(userAgent)
        const fIEVersion = parseFloat(RegExp["$1"])
        IE55 = fIEVersion == 5.5
        IE6 = fIEVersion == 6.0
        IE7 = fIEVersion == 7.0
        IE8 = fIEVersion == 8.0
        if (IE55) {
            return "IE55"
        }
        if (IE6) {
            return "IE6"
        }
        if (IE7) {
            return "IE7"
        }
        if (IE8) {
            return "IE8"
        }
    }

    if (isFF) {
        return "Firefox"
    }
    if (isCH) {
        return "Chrome"
    }
    if (isOpera) {
        return "Opera"
    }
    if (isSafari) {
        return "Safari"
    }
}

/**
 * textarea 输入文字的时候自适应高度，不出现滚动条
 * @param  {Element} elem     textarea标签
 * @param  {Number} extra     光标距离textarea底部的距离， 默认为0
 * @param  {Number} maxHeight textarea的最大高度
 * @return {None}             无返回值
 */
const autoTextarea = function(elem, extra, maxHeight) {
    extra = extra || 0
    const isFirefox = !!document.getBoxObjectFor || 'mozInnerScreenX' in window,
        isOpera = !!window.opera && !!window.opera.toString().indexOf('Opera'),
        addEvent = function(type, callback) {
            elem.addEventListener ?
                elem.addEventListener(type, callback, false) :
                elem.attachEvent('on' + type, callback)
        },
        getStyle = elem.currentStyle ? function(name) {
            const val = elem.currentStyle[name]
            if (name === 'height' && val.search(/px/i) !== 1) {
                const rect = elem.getBoundingClientRect()
                return rect.bottom - rect.top -
                    parseFloat(getStyle('paddingTop')) -
                    parseFloat(getStyle('paddingBottom')) + 'px'
            }
            return val
        } : function(name) {
            return getComputedStyle(elem, null)[name]
        },
        minHeight = parseFloat(getStyle('height'))
    elem.style.resize = 'none'
    const change = function() {
        let scrollTop, height,
            padding = 0,
            style = elem.style
        if (elem._length === elem.value.length) return
        elem._length = elem.value.length
        if (!isFirefox && !isOpera) {
            padding = parseInt(getStyle('paddingTop')) + parseInt(getStyle('paddingBottom'))
        }
        scrollTop = document.body.scrollTop || document.documentElement.scrollTop
        elem.style.height = minHeight + 'px'
        if (elem.scrollHeight > minHeight) {
            if (maxHeight && elem.scrollHeight > maxHeight) {
                height = maxHeight - padding
                style.overflowY = 'auto'
            } else {
                height = elem.scrollHeight - padding
                style.overflowY = 'hidden'
            }
            style.height = height + extra + 'px'
            scrollTop += parseInt(style.height) - elem.currHeight
            document.body.scrollTop = scrollTop
            document.documentElement.scrollTop = scrollTop
            elem.currHeight = parseInt(style.height)
        }
    }
    addEvent('propertychange', change)
    addEvent('input', change)
    addEvent('focus', change)
    change()
}

/**
 * 获取当月的天数
 * @param  {Number} year  年
 * @param  {Number} month 要获取月份的上一个月
 * @return {Number}       该月有多少天
 */
function daysInMonth(year, month) {
    let date = new Date(year, month + 1, 0);
    return date.getDate();
}

module.exports = {
	user, email, phone, IDcard, fullCn, partCn, password, issamepw, curBrowser, autoTextarea, daysInMonth
}