// Example Item in the array.
// {
//     "movie_id": 1,
//     "title": "Iron Man",
//     "phase": "Phase One",
//     "release_year": 2015,
//     "running_time": 126,
//     "rating_name": "PG-13",
//     "disc_format_name": "Blu-ray",
//     "viewing_format_name": "Widescreen",
//     "release_date": "May 2, 2008",
//     "budget": "140,000,000"
// }
export function sortByBudget(sample) {
    // Also sort by movie_id
    return sample.sort(function(a,b){
		if(a.budget < b.budget) return -1;
		if (a.budget > b.budget) return 1;
		return a.movie_id - b.movie_id;
	});
}

export function sortByTitle(sample) {
    return sample.sort(function(a,b){
		if(a.title < b.title) return -1;
		if(a.title > b.title) return 1;
		return 0;
	});
}

export function filterByBluray(sample) {
    // Also sort by movie_id
    return sample.filter(function(item){
		if(item.disc_format_name.includes("Blu-ray")) return true;
	}).sort(function(a,b){
		return a.movie_id - b.movie_id;
	});
}

export function transformArray(sample) {
    return sortByTitle(sample.map(s=>{
		const {title, release_date:release} = s;
		return {title ,phase:1,release};
	})
	);
}

export function sumBudget(sample) {
    return sample.reduce((accumulator, item) => {
		return accumulator + parseInt(item.budget.replaceAll(",",""));
	},0);
}
