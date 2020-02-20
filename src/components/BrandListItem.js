import React from "react";
import {Link} from "react-router-dom";

export class BrandListItem extends React.Component {
    constructor(props) {
        super(props);
        this.state = { };
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.setState(state => ({
            isActive: !state.isActive
        }));
    }

    render() {
        const item = this.props.brand;

        return (
                <Link className={'branditem'} to={"/brand/" + item.id}>
                    <div className={"c-copy c-copy--large c-copy--large-exception u-margin-top-sm u-margin-bottom-sm"}>{item.name}</div>
                    <div className={"branditem__score"}>{item.score || "xx"}/100</div>
                    <div className={"branditem__score"}>{item.score_change || "-x"}</div>
                    <div className={"c-copy c-copy--large c-copy--large-exception u-margin-top-sm u-margin-bottom-sm"} >Brand Awarenesss</div>
                </Link>
        );
    }
}
