let x1 = jQuery('.test').addClass('red')
let x2 = x1.find('.child').addClass('yellow')
x2.each(function (div) {
    console.log(div);
})