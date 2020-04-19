import React from 'react';
import Columns from '../components/columns/columns'


export default class Home extends React.Component {
    public render () {
        return (
            <div className="content">
                <Columns />
            </div>
        )
    }
}