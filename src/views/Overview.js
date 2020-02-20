import React from "react";

import {DropdownFilter} from "../components/DropdownFilter"
import {Toggle} from "../components/Toggle"

import {Switcher} from "../components/Switcher";
import {BrandList} from "../components/BrandList";
import {API, graphqlOperation} from "aws-amplify";
import * as queries from "../graphql/queries";


export class Overview extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            brandsLocal: [],
            brandsGlobal: [],
            filterOnemarketingOnly: false
        };
        this.getBrandList = this.getBrandList.bind(this);
        this.getBrandList();
    }

    getBrandList = async () => {
        const brandsLocal = await API.graphql(graphqlOperation(queries.listBrands, {
            filter: {globalLine: {ne: true	}}
        }));
        const brandsGlobal = await API.graphql(graphqlOperation(queries.listBrands, {
            filter: {globalLine: {eq: true	}}
        }));

        this.setState({brandsLocal: brandsLocal, brandsGlobal: brandsGlobal });
    };

    handleDropdownFilter(e) {
        console.log('handleDropdownFilter', e);
    }

    handleSwitchOnemarketing(e) {
        console.log('handleSwitchOnemarketing', e);
    }

    render () {

        return (
            <div>
                <h2 className={"c-heading c-heading--section  u-margin-bottom-1 u-text-center"}>BRAND SCANNER</h2>
                <div className={"c-heading c-heading--subsection-medium u-margin-bottom-1 u-text-center"}>Real-time Consistency Check Homepages & worldwide Brand Awareness</div>

                <div className={"l-grid l-grid--max-width pl-grid u-margin-bottom-20"}>
                    <div className={"l-grid__row"}>
                        <div className={"l-grid__column-large-6 pl-grid__column "}>
                            <div className={"c-heading c-heading--subsection-large u-text-center"}>
                                <b className={"color-error"}>8</b>
                                &nbsp;Inconsistent Logos
                            </div>
                        </div>
                        <div className={"l-grid__column-large-6 pl-grid__column "}>
                            <div className={"c-heading c-heading--subsection-large u-text-center"}>
                                <b className={"color-success"}>25</b>
                                <span>&nbsp;OEs Taken Action</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className={"brandlist__head"}>
                    <div className={"brandlist__head__item"}><Toggle name={"select_type"} items={[{label: "Hallo 123", value: "1"}, {label: "Item 2", value: "2"}]} /></div>

                    <div className={"brandlist__head__item brandlist__head__item--right"}><DropdownFilter onChange={this.handleDropdownFilter} /></div>
                    <div className={"brandlist__head__item brandlist__head__item--right"}><Switcher onChange={this.handleSwitchOnemarketing} isActive={false} label={"oneMarketing only"} /></div>
                </div>

                <div className={"brandlist__body"}>
                    <h3>Local Brands</h3>
                    <BrandList brands={this.state.brandsLocal} />

                    <br/><br/>
                </div>

                <div className={"brandlist__body"}>
                    <h3>Global Brands</h3>
                    <BrandList brands={this.state.brandsGlobal} />
                </div>

            </div>
        );
    }
}