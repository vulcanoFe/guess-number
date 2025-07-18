/**
 * function to generate a random number between min and max, excluding a specific number
 * @param min 
 * @param max 
 * @param exclude 
 * @returns 
 */
export function generateRandomBetween(min: number, max: number) {
	const rndNum = Math.floor(Math.random() * (max - min)) + min;
	return rndNum;
}

export default {}