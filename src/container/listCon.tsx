import { connect } from "react-redux";
import CandidateList from "../components/candidateList";
import { Dispatch } from "redux";
import shuffleArray from "../components/helpers/shuffleArray";
import { shuffleData, shuffleDataAction } from "../actions";

const mapStateToProps = (state: any): { state: any } => ({
  state: state,
});

const mapDispatchToProps = (
  dispatch: Dispatch
): { shuffleData: (state: Array<JSON>) => shuffleDataAction } => ({
  shuffleData: (state: Array<JSON>) => dispatch(shuffleData(state)),
});

const ListCon = connect(mapStateToProps, mapDispatchToProps)(CandidateList);
export default ListCon;
