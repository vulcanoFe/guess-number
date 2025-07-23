/**
 * function to generate a random number between min and max, excluding a specific number
 * @param min 
 * @param max 
 * @param exclude 
 * @returns 
 */
export function generateRandomBetween(min: number, max: number, exclude: number) {
	const rndNum = Math.floor(Math.random() * (max - min)) + min;
	if (rndNum === exclude) {
		console.warn(`Generated number ${rndNum} is equal to the excluded number ${exclude}. Regenerating...`);
		return generateRandomBetween(min, max, exclude); // Recursively call until a valid number is found
	}
	else {
		return rndNum;
	}
}

export default {};