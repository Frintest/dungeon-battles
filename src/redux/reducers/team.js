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
				weapon: "Кувалда",
				lifeCount: 2,
				damageCount: 2,
			},
			"вапав": {
				name: "вапав",
				avatarSrc: "offer.jpg",
				weapon: "Кувалда",
				lifeCount: 2,
				damageCount: 2,
			},
			"вапвап": {
				name: "вапвап",
				avatarSrc: "offer.jpg",
				weapon: "Кувалда",
				lifeCount: 2,
				damageCount: 2,
			},
			"Назван1ие": {
				name: "Названи1е",
				avatarSrc: "offer.jpg",
				weapon: "Кувалда",
				lifeCount: 2,
				damageCount: 2,
			},
			"вапа1в": {
				name: "вапав1",
				avatarSrc: "offer.jpg",
				weapon: "Кувалда",
				lifeCount: 2,
				damageCount: 2,
			},
			"вапва1п": {
				name: "вапва1п",
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
