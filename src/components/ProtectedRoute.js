import {useHistory} from "react-router";
import {createElement, useEffect} from "react";
import {Route} from "react-router-dom";

const ProtectedRoute = ({component, ...rest}) => {
    const history = useHistory();

    useEffect(() => {
        if (!localStorage.getItem("user")) {
            history.push("/");
        }
    }, [history, component]);

    return <Route {...rest} render={(props) => createElement(component, props)}/>;
};

export default ProtectedRoute;
