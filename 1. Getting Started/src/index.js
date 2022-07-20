function buttonClick(){
    const el = document.getElementById('header');
    el.innerHTML = 'Hello World';

    const listItems = ['Apple', 'Banana', 'Orange'];
    const ul = document.getElementById('shoppingList')
    _.forEach(listItems, function(item){
        const li = document.createElement('li');
        li.innerHTML = item;
        ul.appendChild(li);    
    })
}