document.addEventListener('DOMContentLoaded',function () {
    const obj = {
        tag_name : 'script',
        file_name : './dynamic_script2.js',
        dependency: 'src',
        parent_tag : 'body',
        etc: ''
    }
    tag(obj)
    setInterval( () => {
        console.log(1)
    },5000)
})

function tag(obj_info) {
    const dynamic_tag = document.createElement(obj_info.tag_name);
    dynamic_tag.setAttribute(obj_info.dependency, obj_info.file_name);
    dynamic_tag.setAttribute('crossorigin','anonymous');
    if(obj_info.tag_name === 'link'){
        dynamic_tag.setAttribute('rel',obj_info.etc);
        dynamic_tag.async = false;
    }
    else if(obj_info.tag_name === 'script') dynamic_tag.async = true;
    dynamic_tag.onload = function () {}
    document.querySelector(obj_info.parent_tag).appendChild(dynamic_tag);
}