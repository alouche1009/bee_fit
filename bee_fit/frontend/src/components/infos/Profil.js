import React, { Fragment } from 'react';
import Form from './Form';
import Infos from './Infos';

export default function Profil() {
    return (
        <Fragment>
            <div class="row">
                <div class="col-sm-9">
                    <div class="card">
                        <Infos />
                    </div>
                </div>
                <div class="col-sm-9">
                    <div class="card">
                        <Form />
                    </div>
                </div>
            </div>
        </Fragment>
    );
} 