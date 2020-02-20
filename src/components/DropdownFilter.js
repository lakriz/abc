import React from "react";

export class DropdownFilter extends React.Component {
    constructor(props) {
        super(props);
        this.state = {isOpen: false, selected: false};
        this.handleToggle = this.handleToggle.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }

    handleToggle() {
        this.setState(state => ({
            isOpen: !state.isOpen
        }));
    }

    handleClick(id) {
        this.props.onChange(id);
        this.setState(state => ({
            selected: id,
            isOpen: false
        }));
    }

    render() {
        const data = {title: 'Awareness', selected: 'below', items: [{id: 'above',  label: 'Above Market'}, {id: 'average', label: 'Market Average'}, {id:'below', label: 'Below Market'}]};

        const dropdown_items = data.items.map((item, key) =>
            <span key={item.id}>
                <button className={"c-filter-dropdown__item " + (item.id === this.state.selected ? "c-filter-dropdown__item--selected" : "")} onClick={() => this.handleClick(item.id)} role="menuitem">{item.label}</button>
            </span>
        );

        return (
            <div className={"c-filter-dropdown " + (this.state.isOpen ? 'is-open' : '')} data-toggle="dropdown" id="filterDropdown">
                <button onClick={this.handleToggle} className="c-filter-dropdown__toggle" aria-haspopup="true" aria-expanded="false" aria-describedby="filterDropdown" data-trigger="dropdown">
                    <span className="c-filter-dropdown__text">{data.title}</span>
                    <span className="c-icon c-icon--chevron-down c-filter-dropdown__icon c-icon--functional" />
                </button>
                <div className="c-filter-dropdown__menu" role="menu" aria-hidden="true" data-items="dropdown">
                    {dropdown_items}
                </div>
            </div>
        );
    }
}
