import React from 'react';
import './Sidebar.css';

class Sidebar extends React.Component {

    render() {
        return(
            <aside className="Sidebar">
                <fieldset>
                    <legend>Age</legend>
                    <div className="control">
                        <div className="age-group">
                            <input type='radio' id='apft_age_1' value="17-21"
                                onChange={this.props.handleChange}
                                checked={this.props.age === '17-21'} />
                            <label htmlFor="apft_age_1">17-21</label>
                        </div>
                        <div className="age-group">
                            <input type='radio' id='apft_age_2' value="22-26"
                                onChange={this.props.handleChange}
                                checked={this.props.age === '22-26'} />
                            <label htmlFor="apft_age_2">22-26</label>
                        </div>
                        <div className="age-group">
                            <input type='radio' id='apft_age_3' value="27-31"
                                onChange={this.props.handleChange}
                                checked={this.props.age === '27-31'} />
                            <label htmlFor="apft_age_3">27-31</label>
                        </div>
                        <div className="age-group">
                            <input type='radio' id='apft_age_4' value="32-36"
                                onChange={this.props.handleChange}
                                checked={this.props.age === '32-36'} />
                            <label htmlFor="apft_age_4">32-36</label>
                        </div>
                        <div className="age-group">
                            <input type='radio' id='apft_age_5' value="37-41"
                                onChange={this.props.handleChange}
                                checked={this.props.age === '37-41'} />
                            <label htmlFor="apft_age_5">37-41</label>
                        </div>
                        <div className="age-group">
                            <input type='radio' id='apft_age_6' value="42-46"
                                onChange={this.props.handleChange}
                                checked={this.props.age === '42-46'} />
                            <label htmlFor="apft_age_6">42-46</label>
                        </div>
                        <div className="age-group">
                            <input type='radio' id='apft_age_7' value="47-51"
                                onChange={this.props.handleChange}
                                checked={this.props.age === '47-51'} />
                            <label htmlFor="apft_age_7">47-51</label>
                        </div>
                        <div className="age-group">
                            <input type='radio' id='apft_age_8' value="52-56"
                                onChange={this.props.handleChange}
                                checked={this.props.age === '52-56'} />
                            <label htmlFor="apft_age_8">52-56</label>
                        </div>
                        <div className="age-group">
                            <input type='radio' id='apft_age_9' value="57-61"
                                onChange={this.props.handleChange}
                                checked={this.props.age === '57-61'} />
                            <label htmlFor="apft_age_9">57-61</label>
                        </div>
                        <div className="age-group">
                            <input type='radio' id='apft_age_10' value="62+"
                                onChange={this.props.handleChange}
                                checked={this.props.age === '62+'} />
                            <label htmlFor="apft_age_10">62+</label>
                        </div>
                    </div>
                </fieldset>
            </aside>
        )
    }
}

export default Sidebar;
