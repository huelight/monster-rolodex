const Person = props =>{
    return React.createElement('div', {}, [
        React.createElement('h1', {key: 1}, props.name),
        React.createElement('p', {key: 2}, props.occupation),
    ]);
};
const App = ()=>{
    return React.createElement('div', {}, [
        React.createElement('h1', {class: 'title', key: 3}, 'React is rendered'),
        React.createElement(
        Person, 
        {name: 'Andrei', occupation: 'Instructor', key: 4}, null
        ),
        React.createElement(
        Person, 
        {name: 'Andrei', occupation: 'Instructor', key: 5}, null
        ),
        React.createElement(
        Person, 
        {name: 'Andrei', occupation: 'Instructor', key: 6}, null
        ),
        ]);

};
    const container = document.getElementById('root');
    const root = ReactDom.createRoot(container),
    root.render(React.createElement(App));