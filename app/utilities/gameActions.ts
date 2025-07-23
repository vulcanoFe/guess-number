/**
 * function to generate a random number between min and max, excluding a specific number
 * @param min 
 * @param max 
 * @param exclude 
 * @returns 
 */
export function generateRandomBetween(min: number, max: number, exclude: number): number {
	const rndNum = Math.floor(Math.random() * (max - min)) + min;

	if (rndNum === exclude) {
		return generateRandomBetween(min, max, exclude);
	} else {
		return rndNum;
	}
}

export default {};