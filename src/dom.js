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
            // b56bd620fd1714ae8a2aa13189cf9fd1938cdcf7
            // dbade65f106b8fbe381cd27a50a648702ffd2101
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
    wrap() {

    },
    // 删
    remove() {

    },
    empty() {

    },
    // 改
    attr() {
    },
    text() {

    },
    html() {

    },
    style() {

    },
    class: {
        add() {

        },
        remove() {

        },
        has() {
        }
    },
    on() {

    },
    off() {

    },
    // 查
    find() {

    },
    parent() {

    },
    children() {

    },
    siblings() {

    },
    next() {

    },
    previous() {

    },
    each() {

    },
    index() {

    }
}