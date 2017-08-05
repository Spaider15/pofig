import * as React from "react";
import { render } from "react-dom";
import {
    Route,
    Link,
    HashRouter as Router,
} from "react-router-dom";

const One = () => (<div><div>Page 1</div><Link to="/two">На страницу 2</Link></div>);
const Two = () => (<div><div>Page 2</div><Link to="/">На страницу 1</Link></div>);

render(
    <Router>
        <div>
            <Route exact path="/" component={One} />
            <Route path="/two" component={Two} />
        </div>
    </Router>,
    document.getElementById("root"),
);
