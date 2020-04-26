import React, {Component} from 'react'
import style from './Status.module.css'

class Status extends Component {
    state = {
        editMode: false,
        status: this.props.status
    }
    activateEditMode = () => {
        this.setState({
            editMode: true

        })
    }

    disactivateEditMode = () => {
        this.setState({
            editMode: false
        })
    }

    changeStatus = (event) => {
        this.setState({
            status: event.currentTarget.value
        })
        this.props.setStatus(this.state.status)
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if(prevProps.status !== this.props.status){
            this.setState({
                status: this.props.status
            })
        }
    }

    render() {
        return (
            <div className={style.status}>
                {!this.state.editMode
                    ? <div>
                        <span onDoubleClick={this.activateEditMode}>{this.props.status}</span>
                    </div>

                    : <div>
                        <input onChange={this.changeStatus} autoFocus={true} onBlur={this.disactivateEditMode} value={this.state.status || '-----'}/>
                    </div>
                }
            </div>
        )
    }
}

export default Status