import _ from 'lodash';
import './style.css';
import Icon from './icon.png';

function component() {
    var element = document.createElement('div');

    // Lodash（目前通过一个 script 脚本引入）对于执行这一行是必需的

    var a = document.createElement('div')
    a.innerHTML = _.join(['Hello', 'webpack', '方正隶书'], ' ');
    a.classList.add('hello');
    element.appendChild(a)

    var e = document.createElement('div')
    e.innerHTML = "&#xe6e0;";
    e.classList.add('iconfont')
    element.appendChild(e)

    var myIcon = new Image();
    myIcon.src = Icon;
    element.appendChild(myIcon);

    return element;
}

document.body.appendChild(component());
