export const generateColorByString = (value: string) => {
	const hash =
		// eslint-disable-next-line no-bitwise
		value.split('').reduce((prevHash, currVal) => ((prevHash << 5) - prevHash + currVal.charCodeAt(0)) | 0, 0) %
		310

	return `hsl(${hash}, 60%, 50%)`
}
