import React from "react";

export class Switcher extends React.Component {
    constructor(props) {
        super(props);
        this.state = { isActive: this.props.isActive };
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.props.onChange(!this.state.isActive);
        this.setState(state => ({
            isActive: !state.isActive
        }));
    }


    render() {

        return (
            <div className="c-switcher ">
                <input onChange={this.handleClick} type="checkbox" name="switcherdefault" id="switcherdefault" checked={this.state.isActive ? true : false} className="c-switcher__input" />
                    <label htmlFor="switcherdefault" className="c-switcher__label">
                        {this.props.label}
                    </label>
            </div>
        );
    }
}
