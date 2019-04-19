

export function setBookDataFromServer(state,bookFromServer){
	state.name = bookFromServer.name;
	state.description = bookFromServer.description;
	state.imageUrl = bookFromServer.imageUrl;
	state.categoryId = bookFromServer.categoryId;
	state.id = bookFromServer._id
};

export function clearBookForm(state){
	state.name = '';
	state.description = '';
	state.imageUrl = '';
	state.categoryId = '';
	state.id = ''
}

