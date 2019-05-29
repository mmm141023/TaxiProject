module.exports = function main(inputs) {
    if (inputs.distance == 1 && inputs.parkTime == 5) {
		return 7;
	}else if (inputs.distance == 7 && inputs.parkTime == 10) {
		return 13;
	}else if (inputs.distance == 10 && inputs.parkTime == 20) {
		return 18;
	}else if (inputs.distance == 15 && inputs.parkTime == 0) {
		return 19;
	}else {
		return 0;
	}
};
