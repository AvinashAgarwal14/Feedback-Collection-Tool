import React from 'react';
import {Route} from 'react-router-dom'
import SurveyList from './surveys/SurveyList';
import { Container, Button, lightColors, darkColors} from "react-floating-action-button";

const Dashboard = () => {
	return (
		<Route render={({ history}) => (
		<div>
			<SurveyList />
			<Container>
				<Button
					tooltip="Send Survey"
					icon="fa fa-plus"
					rotate={true}
					styles={{backgroundColor: darkColors.grey, color: lightColors.white}}
					onClick={() => {history.push('/surveys/new')}}
				/>
			</Container>
		</div>
		)} />
	);
};

export default Dashboard;
