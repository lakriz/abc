import React from "react";

export class Toggle extends React.Component {
    constructor(props) {
        super(props);
        this.state = {isActive: false};
        this.handleClick = this.handleClick.bind(this);

        console.log('Toggle', this.props);
    }

    handleClick() {
        this.setState(state => ({
            isActive: !state.isActive
        }));
    }

    render() {
        const items = this.props.items.map((item, key) =>
            <div key={key}>
                <input id="toggle{key}" className="c-radio-toggle__input" name="{this.props.select_type}" value={key} type="radio" />
                <label htmlFor="toggle{key}" className="c-radio-toggle__label">
                <span className="c-radio-toggle__text">
                    <span className="c-radio-toggle__icon c-icon c-icon--check" aria-hidden="true"/>{item.label}</span>
                </label>
            </div>);



        return (
            <div className="c-radio-toggle">
                {items}
            </div>
        );
    }
}
