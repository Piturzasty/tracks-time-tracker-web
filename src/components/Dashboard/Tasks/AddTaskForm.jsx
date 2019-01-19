import React, { Component } from 'react';
import FormButton from '../../common/FormButton';

export default class AddForm extends Component {
  constructor(props, task, projects, onSubmit) {
    super(props, task, projects, onSubmit);
    this.state = { ...this.props.task };
    this.changeHourlyPrice = this.changeHourlyPrice.bind(this);
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  changeHourlyPrice() {
    for (let i = 0; i < this.props.projects.length; ++i) {
      if (this.props.projects[i].id === Number(this.state.projectId)) {
        this.setState({ pricePerHour: this.props.projects[i].pricePerHour });
      }
    }
  }

  render() {
    const projects = this.props.projects;
    return (
      <div className="row justify-content-center mt-5 pt-5 mb-5 pb-5">
        <div className="col-6">
      <form id="addTaskForm" className="text-center" onSubmit={e => { e.preventDefault(); this.props.onSubmit(this.state) }}>
        <div className="entryScreenSpacer"></div>
        
        <div className="form-row">
          <div className="form-group col text-center">
            <h1 className="formTitle">Add Task</h1>
          </div>
        </div>

        <div className="form-row">
          <div className="form-group col text-left">
          <h6 className='title'>Projects *</h6>
            <select className="inputField" name="projectId" onChange={e => { this.onChange(e) }} defaultValue="" required >
              <option value="" disabled hidden>Choose project</option>
    {projects.map(project => <option key={project.id} value={project.id}>{project.name}</option>)}
            </select>
          </div>
        </div>

        <div className="form-row">
          <div className="form-group col text-left">
          <h6 className='title'>Name *</h6>
            <input className="inputField" name="name" type="text" placeholder="Name" onChange={e => { this.onChange(e) }} required />
          </div>
        </div>

        <div className="form-row">
          <div className="form-group col text-left">
          <h6 className='title'>Description *</h6>
            <input className="inputField" name="description" type="text" placeholder="Description" onChange={e => { this.onChange(e) }} />
          </div>
        </div>

        <div className="form-row">
          <div className="form-group col text-left">
          <h6 className='title'>For</h6>
            <input className="inputField" name="for" type="text" placeholder="For" onChange={e => { this.onChange(e) }} />
          </div>
        </div>

        <div className="form-row">
          <div className="form-group col text-left">
          <h6 className='title'>Price per hour ($)</h6>
            <input className="inputField" name="pricePerHour" type="number" placeholder="$ per hour" onChange={e => { this.onChange(e) }} defaultValue={this.state.pricePerHour} />
          </div>
        </div>

        <div className="form-row">
          <div className="form-group col">
            <FormButton needValidation={({ name: this.state.name, description: this.state.description, projectId: this.state.projectId })} name="add" />
          </div>
        </div>
      </form>
      </div></div>
    );
  }
}
