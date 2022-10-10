window.$ = window.jQuery = function (selectorOrArray) {
    let elements = null
    if (typeof selectorOrArray === 'string') {
        elements = document.querySelectorAll(selectorOrArray)
    } else if (selectorOrArray instanceof Array) {
        elements = selectorOrArray
    }
    let api = Object.create(jQuery.prototype)
    Object.assign(api, {
        _oldApi: null,
        elements: elements
    })
    return api
}
jQuery.fn = jQuery.prototype = {
    find(selector) {
        let array = []
        this.each((ele, i) => {
            array = array.concat(Array.from(ele.querySelectorAll(selector)))
        })
        let newApi = jQuery(array)
        newApi._oldApi = this
        return newApi
    },
    end() {
        return this._oldApi
    },
    addClass(className) {
        this.each((ele, i) => {
            ele.classList.add(className)
        })
        return this
    },
    each(fn) {
        for (let i = 0; i < this.elements.length; i++) {
            fn.call(null, this.elements[i], i) // call null 的好处是什么呢？
        }
        return this
    },
    print() {
        console.log(this.elements)
        return this
    },
    on(eventName, selector, fn) {
        this.each((eleDelegator, i) => {
            eleDelegator.addEventListener(eventName, (e) => {
                // 1. 递归找到匹配选择器的委托元素
                let ele = e.target // 委托元素（委托自己的事件给祖先元素） delegated
                while (!ele.matches(selector)) {
                    if (ele === eleDelegator) {
                        ele = null // 没有找到「委托元素」
                        break;
                    }
                    ele = ele.parentNode
                }

                // 2. 如果找到符合要求的委托元素，执行 fn 
                ele && fn.call(ele, e)
            })
        })

        return this
    }
}