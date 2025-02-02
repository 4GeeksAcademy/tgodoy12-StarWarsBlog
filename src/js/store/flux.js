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
			getAllVehicles: async () => {
				
				try {
					const response = await fetch("https://swapi.dev/api/vehicles/");
					if(!response.ok) {
						throw new Error("Status: " + response.status)
					}
					const data = await response.json();
					const vehiclesId = data.results.map(vehicle => {
						const id = vehicle.url.split("/")[5];
						return { ...vehicle, id };
					})
					console.log(data.results)
					setStore({ vehicles: vehiclesId });
					
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
			//para que no de error cuando quiero entrar a un id especifico sin pasar por el home
			// loadStore: async (type) => {
			// 	try {
			// 		const response = await fetch(`https://swapi.dev/api/${type}/`);
			// 		if(!response.ok) {
			// 		throw new Error("Status: " + response.status)
			// 		}
			// 		const data = await response.json();
			// 		const typeId = data.results.map(item => {
			// 			const id = item.url.split("/")[5];
			// 			return { ...item, id };
			// 		})
			// 		setStore({ [type]: typeId });
			// 		return true;
			// 	} catch (error) {
			// 		console.log(error);
			// 		return false;	
			// 	}
				
			// }
		}
	};
};

export default getState;
