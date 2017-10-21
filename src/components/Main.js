import React from 'react';
import './Main.css';

class Main extends React.Component {

    render() {
        return(
            <main className="Main">
                <div className="container">
                    <fieldset className="field">
                        <legend className="label">Gender</legend>
                        <div className="gender-control" data-gender={this.props.gender}>
                            <div className="active-gender-slider"></div>
                            <div className="gender-group">
                                <input type='radio' id='apft_gender_1' value="male"
                                    onChange={this.props.handleChange}
                                    checked={this.props.gender === 'male'} />
                                <label htmlFor="apft_gender_1">Male</label>
                            </div>
                            <div className="gender-group">
                                <input type='radio' id='apft_gender_2' value="female"
                                    onChange={this.props.handleChange}
                                    checked={this.props.gender === 'female'} />
                                <label htmlFor="apft_gender_2">Female</label>
                            </div>
                        </div>
                    </fieldset>
                    <div className="field">
                        <label className="label" htmlFor="apft_pu">Push-Ups</label>
                        <div className="control">
                            <input className="input" type="number" pattern="[0-9]*" min="0" inputMode="numeric" id="apft_pu" onChange={this.props.handleChange} />
                        </div>
                    </div>
                    <div className="field">
                        <label className="label" htmlFor="apft_su">Sit-Ups</label>
                        <div className="control">
                            <input className="input" type="number" pattern="[0-9]*" min="0" inputMode="numeric" id="apft_su" onChange={this.props.handleChange} />
                        </div>
                    </div>
                    <div className="columns">
                        <div className="column">
                            <div className="field">
                                <label className="label" htmlFor="apft_min">Run Time</label>
                                <div className="control">
                                    <input className="input" type="number" pattern="[0-9]*" min="0" max="99" inputMode="numeric" id="apft_min" onChange={this.props.handleChange} placeholder="00" />
                                </div>
                            </div>
                        </div>
                        <div className="column">
                            <div className="field">
                                <label className="label" htmlFor="apft_sec">&nbsp;</label>
                                <div className="control">
                                    <input className="input" type="number" pattern="[0-9]*" min="0" max="59" inputMode="numeric" id="apft_sec" onChange={this.props.handleChange} placeholder="00" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        )
    }
}

export default Main;
