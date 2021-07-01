import React from "react";
import tableau from "tableau-api";

class TableauViz extends React.Component{
    initTableau() {
        const vizUrl = "https://public.tableau.com/views/AdvancedSuperstoreDashboard/StateAnalysis?:language=en&:display_count=y&mobile=&:origin=viz_share_link";

        const options = {
            hideTabs: true,
            onFirstInteractive: () => {
                console.log("it worked");
            }
        };
        this.viz = new window.tableau.Viz(this.container, vizUrl, options);
    }

    render() {
        return <div ref={c => (this.container=c)} />;
    }

    componentDidMount() {
        this.initTableau();
    }
}

export default TableauViz;