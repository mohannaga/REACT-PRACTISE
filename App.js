 /* 
 <div id="parent">
    <div id="child1">
        <h1 id="title">im h1 tag</h1>
        <h2 id="subtitle">im h2 tag</h2>
    </div>
    <div id="child2">
        <h1 id="title">im h1 tag</h1>
        <h2 id="subtitle">im h2 tag</h2>
    </div>

 </div>



*/ 
const parent = React.createElement('div',{id:"parent"}, [
    React.createElement('div', {id:"child1"},[
        React.createElement( 'h1', {id:"title"}, 'im h1 tag'),
        React.createElement( 'h2', {id:"subtitle"}, 'im h2 tag')]),
        React.createElement('div', {id:"child2"},[
            React.createElement( 'h1', {id:"title"}, 'im h1 tag'),
            React.createElement( 'h2', {id:"subtitle"}, 'im h2 tag')])
]);

    console.log(parent);//object    




const heading = React.createElement('h1', {id:"title",xyz:"abc"}, 'Hello World from React');
console.log(heading);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(parent);