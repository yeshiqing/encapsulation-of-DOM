// TODO: 引入单元测试
const div = dom.create("<div class='ysq-new-div'>newDiv</div>");
// console.log(div);

const testDiv = document.querySelector('#test')
dom.after(testDiv, div);

const divWithClass = dom.create('div.dot')
divWithClass.innerHTML = 'divWithClass'
const divWithId = dom.create('div#dot')
divWithId.innerHTML = 'divWithId'
dom.before(testDiv, divWithClass)
dom.before(divWithClass, divWithId)


const div3 = dom.create('<div id="divWrapper"></div>')
dom.wrap(testDiv, div3)

const emptyDiv = document.querySelector('#empty')
const nodes = dom.empty(emptyDiv)
// console.log(nodes)


dom.attr(testDiv, 'title', 'Hi, I am Jeffrey')
const title = dom.attr(testDiv, 'title')
// console.log(`title: ${title}`)


dom.text(testDiv, '你好，这是新的内容')
// console.log(dom.text(testDiv));

dom.style(testDiv, { border: '1px solid red', color: 'blue' })
// console.log(dom.style(testDiv, 'border'))
dom.style(testDiv, 'border', '1px solid black')

dom.class.add(testDiv, 'red')
dom.class.add(testDiv, 'blue')
dom.class.remove(testDiv, 'blue')
// console.log(dom.class.has(testDiv, 'blue'))

const fn = () => {
    console.log('点击了')
}
dom.on(testDiv, 'click', fn)
dom.off(testDiv, 'click', fn)


// console.log(dom.find('#test')[0] === testDiv) // true
const testDiv2 = dom.find('#test2')[0]
// console.log(dom.find('.red', testDiv2)[0])

// console.log(dom.parent(testDiv))
// console.log(dom.children(testDiv2))

const s2 = dom.find('#s2')[0]
// console.log(dom.siblings(s2))
// console.log(dom.next(s2))
// console.log(dom.previous(s2))

const t = dom.find('#traversal')[0]
dom.each(dom.children(t), (n) => dom.style(n, 'color', 'red'))

// console.log(dom.index(s2))