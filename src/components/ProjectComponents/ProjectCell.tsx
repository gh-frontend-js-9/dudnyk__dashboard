import React, {Component} from 'react';

interface IProps {
    cellType: string
}

class ProjectCell extends Component<IProps> {
    render() {
        return (
            <div className={this.props.cellType}>
                {this.props.children}
            </div>
        )
    }
}

export default ProjectCell;