export default function splitArray<T>(array: Array<T>, size: number): T[][] {
	const result: Array<Array<T>> = []

	for (let i = 0; i < array.length; i++) {
		const index = i % size
		if (!result[index]) {
			result[index] = []
		}
		result[index].push(array[i])
	}

	return result
}
