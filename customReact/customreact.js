

const reactElement = {
    type: 'a',
    props : {
        href:'https://google.com',
        target: '_blank'
    },
    children: 'click me to visit google'
}


const mainContianer = document.querySelector("#root");

function customRender(reactElement, mainContianer){

    // const domElement = document.createElement(reactElement.type);
    // domElement.innerHTML = reactElement.children; 
    // domElement.setAttribute = reactElement('href',reactElement.props.href);
    // domElement.setAttribute = reactElement('target',reactElement.props.target);
    // mainContianer.appendChild(domElement);

    const domElement = document.createElement(reactElement.type);
    domElement.innerHTML = reactElement.children;
    for(const prop in reactElement.props){
        if(prop == 'children'){
            continue;
        }
        domElement.setAttribute(prop,reactElement.props[prop]);
    }
    mainContianer.appendChild(domElement);
}

customRender(reactElement,mainContianer);