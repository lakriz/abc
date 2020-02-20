import React, { Component } from "react";
import { graphql } from 'react-apollo';

import * as queries from "../graphql/queries";
import Amplify, { Analytics, Storage, API, graphqlOperation } from 'aws-amplify';
import {BrandListItem} from "./BrandListItem";

export class BrandList extends Component {

    render() {

        console.log('BrandList component props', this.props.brands)
        return (

            <div className={'brandlist'}>
                {this.props.brands && this.props.brands.data && [].concat(this.props.brands.data.listBrands.items).sort((a, b) => b.id.localeCompare(a.id)).map(brand => (
                    <div className={'brandlist__item'} key={brand.id}>
                       <BrandListItem brand={brand}/>
                    </div>
                    ))}
            </div>
        )
    }
}

