type Category = '' | 'home' | 'product' | 'category' | 'sobre';

export const createMenuObject = (activeMenu: Category) => {
    let returnObject = {
        home: false,
        product: false,
        category: false,
        sobre: false
    }

    if(activeMenu !== '') {
        returnObject[activeMenu] = true;
    }

    return returnObject;
}