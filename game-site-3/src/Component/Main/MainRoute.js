import React, { Component, Suspense } from 'react';
import { Route, withRouter, Switch, Redirect } from 'react-router-dom';


const TicketToHeaven = React.lazy(() =>
    import(/* webpackChunkName: "views-error" */ './MainComponent/MainComponent')
);



class App extends Component {
    render() {
        const { match } = this.props;

        return (
                <div className="w-100">
                    <Suspense fallback={<div className="loading" />}>
                        <Switch>
                            <Redirect
                                exact
                                from={`${match.url}/`}
                                to={`/ticket-to-heaven`}
                            />
                            {/*<Route*/}
                                {/*path={`${match.url}/ticket-to-heaven`}*/}
                                {/*render={props => <TicketToHeaven {...props} />}*/}
                            {/*/>*/}
                            <Redirect to="/error" />
                        </Switch>
                    </Suspense>
                </div>
        );
    }
}


export default App;
