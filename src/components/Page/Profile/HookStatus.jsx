import React from 'react';

class ProfileStatus extends React.Component {
    state = {
        editMode: false,
        status: this.props.status
    }

    activatedChange() {
        this.setState({editMode: true})
    }

    deactivatedChange() {
        this.setState({editMode: false})
        this.props.updateStatus(this.state.status)
    }
    onStatusChange =(e)=> {
        this.setState({status: e.currentTarget.value})
    }

    render() {
        return (
            <div>
                {!this.state.editMode
                    ?
                    <div>
                        <span onClick={() => this.activatedChange()}>
                            {this.props.status || 'No status'}
                        </span>
                    </div>
                    :
                    <div>
                        <input onBlur={() => this.deactivatedChange()}
                               autoFocus={true} type="text"
                               onChange={this.onStatusChange}
                               value={this.state.status}/>
                    </div>}
            </div>
        )
    }


}

export default ProfileStatus;