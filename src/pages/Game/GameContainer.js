import { Game } from "./Game.jsx";
import { connect } from "react-redux";

const mapStateToProps = (state) => ({
	heroes: state.TeamReducer.heroes,
});

export default connect(mapStateToProps, null)(Game);
