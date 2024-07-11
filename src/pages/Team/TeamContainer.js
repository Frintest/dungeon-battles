import { Team } from "./Team.jsx";
import { connect } from "react-redux";
import { setActiveTeam, setActiveCreateType } from "../../redux/reducers/team.js";

const mapStateToProps = (state) => ({
	team: state.TeamReducer.team,
	createType: state.TeamReducer.createType,
	heroes: state.TeamReducer.heroes,
});

export default connect(mapStateToProps, { setActiveTeam, setActiveCreateType })(Team);
