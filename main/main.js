module.exports = function main(inputs) {
	if (inputs.distance <= 2 ) {
		return Math.round(6 + inputs.parkTime * 0.25);
	}else if (inputs.distance > 2 && inputs.distance <= 8) {
		return Math.round(6 + (inputs.distance - 2) * 0.8 + inputs.parkTime * 0.25);
	}else if(inputs.distance > 8) {
		return Math.round(6 + 6 * 0.8 + (inputs.distance - 8) * 1.2 + inputs.parkTime * 0.25);
	}else {
		return 0;
	}
};
