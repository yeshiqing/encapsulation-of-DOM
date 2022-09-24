// TODO: 先自己写一遍然后和方方的，自己笔记的对比一下
window.dom = {
    // 增
    create(string) {
        const template = document.createElement("template")
        let reg = /^([a-z]+)([.#])([a-z0-9]+)$/i
        // string is "div.dot"
        if (reg.test(string)) {
            let foundArr = string.match(reg)
            let ele = document.createElement(foundArr[1])
            let symbol = foundArr[2]
            let attrValue = foundArr[3]
            let hashMap = {
                "#": "id",
                ".": "className"
            }
            let attrName = hashMap[symbol]
            ele[attrName] = attrValue
            template.innerHTML = ele.outerHTML
        } else {
            template.innerHTML = string.trim()
        }
        return template.content.firstElementChild
    },
    after(node, nodeAfter) {
        node.parentNode.insertBefore(nodeAfter, node.nextSibling)
    },
    before(node, nodeBefore) {
        node.parentNode.insertBefore(nodeBefore, node)
    },
    append(node, nodeAppend) {
        node.appendChild(nodeAppend)
    },
    wrap(node, nodeWrapper) {
        node.parentNode.insertBefore(nodeWrapper, node)
        nodeWrapper.appendChild(node)
    },
    // 删
    remove(node) {
        node.remove()
    },
    empty(node) {
        let children = node.children
        let array = []
        children = Array.from(children)
        let child = children.shift()
        while (child) {
            array.push(child)
            child = children.shift()
        }

        return array
    },
    // 改
    attr(node, attrName, attrValue) { // 函数重载
        if (arguments.length === 3) {
            node.setAttribute(attrName, attrValue)
        } else if (arguments.length === 2) {
            return node.getAttribute(attrName)
        }
    },
    text(node, text) {
        if (arguments.length === 2) {
            node.innerText = text
        } else if (arguments.length === 1) {
            return node.innerText
        }
    },
    html(node, html) {
        if (arguments.length === 2) {
            node.innerHTML = html
        } else if (arguments.length === 1) {
            return node.innerHTML
        }
    },
    style(node, attrName, attrValue) { // 适配
        if (arguments.length === 3) {
            node.style[attrName] = attrValue
        } else if (arguments.length === 2) {
            if (attrName instanceof Object) {
                let prop = attrName
                for (let key in prop) {
                    node.style[key] = prop[key]
                }
            } else if (typeof attrName === 'string') {
                return node.style[attrName]
            }
        }
    },
    class: {
        add(node, className) {
            node.classList.add(className)
        },
        remove(node, className) {
            node.classList.remove(className)
        },
        has(node, className) {
            return node.classList.contains(className)
        }
    },
    on(node, eventName, fn) {
        node.addEventListener(eventName, fn, false)
    },
    off(node, eventName, fn) {
        node.removeEventListener(eventName, fn, false)
    },
    // 查
    find(selector, scope) {
        if (arguments.length === 1) {
            return document.querySelectorAll(selector)
        } else if (arguments.length === 2) {
            return scope.querySelectorAll(selector)
        }
    },
    parent(node) {
        return node.parentNode
    },
    children(node) {
        return node.children
    },
    siblings(node) { // 这个函数写得很漂亮，数组的高级用法 Array.from，Array.prototype.filter
        return Array.from(node.parentNode.children).filter(n => (n !== node))
    },
    next(node) {
        do {
            node = node.nextSibling
        } while (node.nodeType !== 1)
        return node
    },
    previous(node) {
        do {
            node = node.previousSibling
        } while (node.nodeType !== 1)
        return node
    },
    each(nodeList, fn) {
        Array.from(nodeList).forEach(fn)
    },
    index(node) {
        let children = node.parentNode.children
        for (let i = 0; i < children.length; i++) {
            if (node === children[i]) {
                return i
            }
        }
    }
}