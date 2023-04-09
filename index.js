// Code your solution in this file!
function distanceFromHqInBlocks(block) {
  if (block >= 42) {
    return block - 42;
  } else if (block < 42) {
    return 42 - block;
  }
}

function distanceTravelledInFeet(start, destination) {
  if (start >= destination) {
    return (start - destination) * 264;
  } else if (start < destination) {
    return (destination - start) * 264;
  }
}

function distanceFromHqInFeet(block) {
  const numblocks = distanceFromHqInBlocks(block);
  return numblocks * 264;
}

function calculatesFarePrice(start, destination) {
  const traveled = distanceTravelledInFeet(start, destination);
  if (traveled <= 400) {
    return 0;
  } else if (traveled > 400 && traveled <= 2000) {
    return (traveled - 400) * 0.02;
  } else if (traveled > 2000 && traveled <= 2500) {
    return 25;
  } else if (traveled > 2500) {
    return "cannot travel that far";
  }
}
