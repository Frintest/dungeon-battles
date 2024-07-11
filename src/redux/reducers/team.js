const SET_ACTIVE_TEAM = "team/SET_ACTIVE_TEAM";
const SET_ACTIVE_CREATE_TYPE = "team/SET_ACTIVE_CREATE_TYPE";

const initialState = {
	team: "your",
	createType: "default",
	heroes: {
		"your": {
			"Название": {
				name: "Название",
				avatarSrc: "offer.jpg",
				weapon: "Кагорушка",
				lifeCount: 2,
				damageCount: 2,
			},
			"Названией": {
				name: "Названией",
				avatarSrc: "offer.jpg",
				weapon: "Кувалда",
				lifeCount: 2,
				damageCount: 2,
			},
			"Названиеп": {
				name: "Названиеп",
				avatarSrc: "offer.jpg",
				weapon: "Кувалда",
				lifeCount: 2,
				damageCount: 2,
			},
			"Названиеп": {
				name: "Названиеп",
				avatarSrc: "offer.jpg",
				weapon: "Кувалда",
				lifeCount: 2,
				damageCount: 2,
			},
		},
		"opponent": {
			"Название 2": {
				name: "Назва1ние",
				avatarSrc: "offer.jpg",
				weapon: "",
				lifeCount: 2,
				damageCount: 2,
			},
		},
	}
};

export const TeamReducer = (state = initialState, action) => {
	switch (action.type) {
		case SET_ACTIVE_TEAM: {
			return {
				...state,
				team: action.team,
			}
		}

		case SET_ACTIVE_CREATE_TYPE: {
			return {
				...state,
				createType: action.createType,
			}
		}

		default:
			return state;
	}
};

export const setActiveTeam = (team) => ({ type: SET_ACTIVE_TEAM, team });
export const setActiveCreateType = (createType) => ({ type: SET_ACTIVE_CREATE_TYPE, createType });
