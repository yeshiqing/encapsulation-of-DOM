window.jQuery = function (selectorOrArray) {
    // return 的结果叫做「jQuery 对象」。jQuery 对象中的方法都是闭包，闭包可以访问外层函数的内部变量 elements 
    let elements = null
    if (typeof selectorOrArray === 'string') {
        elements = document.querySelectorAll(selectorOrArray)
    } else if (selectorOrArray instanceof Array) {
        elements = selectorOrArray
    }

    return {
        _oldApi: null,
        find(selector) {
            let array = []
            for (let i = 0; i < elements.length; i++) {
                array = array.concat(Array.from(elements[i].querySelectorAll(selector)))
            }
            let newApi = jQuery(array)
            newApi._oldApi = this
            return newApi
        },
        end() {
            return this._oldApi
        },
        addClass(className) {
            for (let i = 0; i < elements.length; i++) {
                elements[i].classList.add(className)
            }
            return this
        },
        each(fn) {
            for (let i = 0; i < elements.length; i++) {
                fn.call(null, elements[i], i) // call null 的好处是什么呢？
            }
        },
        print() {
            console.log(elements)
        }
    }
}