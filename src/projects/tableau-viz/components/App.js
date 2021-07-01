import React, {Component} from 'react';
import TableauViz from './Tableau-viz';

class App extends Component {
    render() {
        return (
            <div>
                <h1>Superstore Sales Dashboard</h1>
                <div class="centerDashboard">
                    <TableauViz />
                </div>
            </div>
        )
    }
  }


export default App;

