// TODO: 引入单元测试
// const div = dom.create("<div class='ysq-new-div'>newDiv</div>");
// console.log(div);

// const testDiv = document.querySelector('#test')
// dom.after(testDiv, div);

// const divWithClass = dom.create('div.dot')
// divWithClass.innerHTML = 'divWithClass'
// const divWithId = dom.create('div#dot')
// divWithId.innerHTML = 'divWithId'
// dom.before(testDiv, divWithClass)
// dom.before(divWithClass, divWithId)
// console.log("xxx");
let div = document.createElement('div')
div.innerHTML = "divNew"
window.test.appendChild(div)
console.log('aaa');


// const div3 = dom.create('<div id="parent"></div>')
// dom.wrap(testDiv, div3)

// const emptyDiv = document.querySelector('#empty')
// const nodes = dom.empty(emptyDiv)
// console.log(nodes)

// dom.attr(test, 'title', 'Hi, I am Frank')
// const title = dom.attr(test, 'title')
// console.log(`title: ${title}`)


// dom.text(test, '你好，这是新的内容')
// dom.text(test)

// dom.style(test, { border: '1px solid red', color: 'blue' })
// console.log(dom.style(test, 'border'))
// dom.style(test, 'border', '1px solid black')

// dom.class.add(test, 'red')
// dom.class.add(test, 'blue')
// dom.class.remove(test, 'blue')
// console.log(dom.class.has(test, 'blue'))

// const fn = () => {
//     console.log('点击了')
// }
// dom.on(test, 'click', fn)
// dom.off(test, 'click', fn)


// console.log(dom.find('#test')[0] === testDiv) // true
// const test2 = dom.find('#test2')[0]
// console.log(dom.find('.red', test2)[0])

// console.log(dom.parent(test))

// const s2 = dom.find('#s2')[0]
// console.log(dom.siblings(s2))
// console.log(dom.next(s2))
// console.log(dom.previous(s2))

// const t = dom.find('#travel')[0]
// dom.each(dom.children(t), (n) => dom.style(n, 'color', 'red'))

// console.log(dom.index(s2))