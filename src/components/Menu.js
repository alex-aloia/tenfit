import React, {Component} from 'react';
import {DropdownMenu} from 'foundation-sites/js/foundation.dropdownMenu';

class Menu extends Component {
    componentDidUpdate() {
        // pointer to foundation DOM element
        this._fDom = new DropdownMenu($(this.el));
    }

    render() {
        const {items} = this.props;

        return (
            <ul className={'menu ' + (items.length ? 'dropdown' : '')} data-dropdown-menu ref={el => this.el = el}>
                {this.props.items.map(item =>
                    <li key={item.ID}>
                        <a href={item.href}>{item.title}</a>
                        {item.children && item.children.length > 0 && <Menu items={item.children}/>}
                    </li>
                )}
            </ul>
        );
    }
}

export default Menu;

// const Menu = (props) => {
//     const {items} = props;
//     console.log('items', items);
//
//
//     return (
//         <ul className="dropdown menu" data-dropdown-menu>
//             {items.map(item =>
//                 <li key={item.ID}>
//                     {/*<a href={item.href}>{item.title}</a>*/}
//                     <a href="#">{item.title}</a>
//                     {/*{item.children && item.children.length > 0 && <Menu items={item.children}/>}*/}
//                     {item.children && item.children.length > 0 && <ul className="memu"><li><a href="#">Some Stuff</a></li></ul> }
//                 </li>
//             )}
//         </ul>
//     )
// };
