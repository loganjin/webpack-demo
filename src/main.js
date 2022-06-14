// 使用CommonJS的模块化规范
const math = require('./js/mathUtils.js')
console.log(math.add(10,20));
console.log(math.mul(10,20));

// 使用ES6的模块化规范
import {name, age, height} from "./js/info";
console.log(name);
console.log(age);
console.log(height);

// 依赖CSS文件
require('./css/normal.css')

// 依赖less文件
require('./css/special.less')
document.writeln('<div>Hello World</div>')


// 使用Vue进行开发
// MARK: import时没有写路径（'vue'）,会从node_modules中找相关文件，为啥可以找？因为node_modules中export出Vue（export default Vue）
import Vue from 'vue'
// const app = new Vue({

// MARK: vue抽取方案1.0：把原来index.html里面的<div id="app"></div>里面的内容抽取到Vue实例的template里面
// new Vue({
//     el: '#app',
//     template: `
//     <h2>{{message}}</h2>
//     <button @click="btnClick">按钮</button>
//     <h2>{{name}}</h2>
//     `,
//     data: {
//         message: 'Hello Webpack',
//         name: 'loganjin'
//     },
//     methods: {
//         btnClick() {

//         }
//     }
// })

// // MARK: vue抽取方案2.0：父子组件
// const App = {
//     // mark: component template should contain exactly one root element, 一定别忘了有个根的div
//     template: `
//     <div>
//         <h2>{{message}}</h2>
//         <button @click="btnClick">按钮</button>
//         <h2>{{name}}</h2>
//     </div>
//     `,
//     data() {
//         return {
//             message: 'Hello Webpack',
//             name: 'loganjin'
//         }
//     },
//     methods: {
//         btnClick() {

//         }
//     }
// }

// new Vue({
//     el: '#app',
//     // mark: 如果在Vue实例中同时指定了template，那么template模板中的内容会替换掉挂载的对应的el模板
//     template: '<App/>',
//     components: {
//         App
//     }
// })

// // MARK: vue抽取方案3.0：app.js
// import App from './vue/app'
// new Vue({
//     el: '#app',
//     template: '<App/>',
//     components: {
//         App
//     }
// })

// MARK: vue抽取方案4.0：.vue(template、script、style分离)
import App from './vue/App.vue'
new Vue({
    el: '#app',
    template: '<App/>',
    components: {
        App
    }
})

