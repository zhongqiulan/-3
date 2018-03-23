/**
 * Created by J-LIN on 2017/12/24.
 */
function id(a) {

    return document.getElementById(a);
}


/**
 * 找到下一个兄弟元素
 */
function getNextElement(obj) {

    //以后判断支不支持某个属性，就直接if它就行了，if为true就代表支持，为false代表不支持
    //能力判断
    if (obj.nextElementSibling) {

        return obj.nextElementSibling;

    } else {

        //从节点里面找
        var node = obj.nextSibling;

        if (node == null) {

            return null;


        } else {

            //只要不是标签都满足循环条件继续找下一个
            //只要是标签就不满足循环条件，跳出循环
            while (node.nodeType != 1) {

                node = node.nextSibling;

                if (node == null) {

                    return null;
                }
            }

            return node;
        }
    }

}


/**
 * 获取网页滚出去的距离
 */
function getScroll() {

    return {

        scrollTop: window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0,
        scrollLeft: window.pageXOffset || document.documentElement.scrollLeft || document.body.scrollLeft || 0
    };
}

/**
 * 获取网页可视区域的大小
 */
function pageClient() {

    return {
        clientWidth: window.innerWidth
        || document.documentElement.clientWidth
        || document.body.clientWidth
        || 0,

        clientHeight: window.innerHeight
        || document.documentElement.clientHeight
        || document.body.clientHeight
        || 0
    }
}


/**
 * 获取元素的样式
 * @param obj 传入要获取样式的元素
 * @param attr 要获取什么样式
 */
function getStyle(obj, attr) {

    if (window.getComputedStyle) {

        return window.getComputedStyle(obj, null)[attr];

    } else {

        //肯定是IE8
        return obj.currentStyle[attr];
    }
}


/**
 * 获取事件对象相对于页面左上角的坐标
 * @param e 事件对象
 */
function getPagePoint(e) {

    e = e || window.event;

    return {
        pageX: e.clientX + getScroll().scrollLeft,
        pageY: e.clientY + getScroll().scrollTop
    }
}