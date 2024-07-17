const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			characters: [],
			planets: [],
			vehicles: [],
			favorites: []
		},
		actions: {
			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},
			loadSomeData: () => {
				/**
					fetch().then().then(data => setStore({ "foo": data.bar }))
				*/
			},
			getAllCharacters: async () => {
				
				try {
					const response = await fetch("https://swapi.dev/api/people/");
					if(!response.ok) {
						throw new Error("Status: " + response.status)
					}
					const data = await response.json();
					const charactersId = data.results.map(character => {
						const id = character.url.split("/")[5];
						return { ...character, id };
					})
					// console.log(data.results)
					setStore({ characters: charactersId });
					
					return true;
				} catch (error) {
					console.log(error);
					return false;	
				}
			},
			getAllPlanets: async () => {
				
				try {
					const response = await fetch("https://swapi.dev/api/planets/");
					if(!response.ok) {
						throw new Error("Status: " + response.status)
					}
					const data = await response.json();
					const planetsId = data.results.map(planet => {
						const id = planet.url.split("/")[5];
						return { ...planet, id };
					})
					// console.log(data.results)
					setStore({ planets: planetsId });
					
					return true;
				} catch (error) {
					console.log(error);
					return false;	
				}
			},
			likes: (name) => {
				const store = getStore();
				let newFavorites;

				if(store.favorites.includes(name)) {
					newFavorites = store.favorites.filter(fav => fav !== name);
				}else {
					newFavorites = [...store.favorites, name];
				}
				 
                setStore({ favorites: newFavorites });
			}
		}
	};
};

export default getState;
