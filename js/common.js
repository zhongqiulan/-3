/**
 * Created by J-LIN on 2017/12/24.
 */
function id(a) {

    return document.getElementById(a);
}


/**
 * �ҵ���һ���ֵ�Ԫ��
 */
function getNextElement(obj) {

    //�Ժ��ж�֧��֧��ĳ�����ԣ���ֱ��if�������ˣ�ifΪtrue�ʹ���֧�֣�Ϊfalse����֧��
    //�����ж�
    if (obj.nextElementSibling) {

        return obj.nextElementSibling;

    } else {

        //�ӽڵ�������
        var node = obj.nextSibling;

        if (node == null) {

            return null;


        } else {

            //ֻҪ���Ǳ�ǩ������ѭ��������������һ��
            //ֻҪ�Ǳ�ǩ�Ͳ�����ѭ������������ѭ��
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
 * ��ȡ��ҳ����ȥ�ľ���
 */
function getScroll() {

    return {

        scrollTop: window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0,
        scrollLeft: window.pageXOffset || document.documentElement.scrollLeft || document.body.scrollLeft || 0
    };
}

/**
 * ��ȡ��ҳ��������Ĵ�С
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
 * ��ȡԪ�ص���ʽ
 * @param obj ����Ҫ��ȡ��ʽ��Ԫ��
 * @param attr Ҫ��ȡʲô��ʽ
 */
function getStyle(obj, attr) {

    if (window.getComputedStyle) {

        return window.getComputedStyle(obj, null)[attr];

    } else {

        //�϶���IE8
        return obj.currentStyle[attr];
    }
}


/**
 * ��ȡ�¼����������ҳ�����Ͻǵ�����
 * @param e �¼�����
 */
function getPagePoint(e) {

    e = e || window.event;

    return {
        pageX: e.clientX + getScroll().scrollLeft,
        pageY: e.clientY + getScroll().scrollTop
    }
}