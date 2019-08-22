import React from 'react';
import { Redirect, Route } from 'react-router-dom';

    export const ProtectedRoute = ({component: Component, ...rest }) => {
        console.log(' rest props autheduser ' + rest.authedUser);
    return (
        <Route {...rest} render={ props => { 
            if (rest.authedUser!==undefined && rest.authedUser!==null && Object.keys(rest.authedUser).length !==0) {
                console.log(' returning original component' + rest.authedUser);
                return <Component {...props} />
            } else {
                console.log('redirecting to signin ' + rest.authedUser);
                return <Redirect to={ {
                    pathname:'/signin',
                    state: {
                        from:props.location
                    }
                }           
                } />
            }
        }}           
        />
    )
}

