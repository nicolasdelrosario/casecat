export default function getRandomDelay<T>(possibleDelays: ReadonlyArray<T>): T {
	return possibleDelays[Math.floor(Math.random() * possibleDelays.length)]
}
