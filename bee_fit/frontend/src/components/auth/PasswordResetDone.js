import React, { Component } from "react";

export default class PasswordResetDone extends Component {
    render() {
        return (
            <div className="Logout no-padding-b">
            <h2 className="Logout"> Un mail vous a été envoyé afin de réinitialiser votre mot de passe. 
            <br/>
            <br/>
            Merci de suivre le lien présent sur l'email pour procéder à la réinitialisation. 
            <br/>
            <br/>
            Si vous n'êtes pas à l'origine de cette demande, merci d'ignorer cet email.</h2>
        
        </div>
        )
    }
}