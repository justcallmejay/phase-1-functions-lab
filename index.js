function distanceFromHqInBlocks(blocks){
    return Math.abs(blocks - 42);
}

distanceFromHqInBlocks(43);
distanceFromHqInBlocks(50);
distanceFromHqInBlocks(34);

//////

function distanceFromHqInFeet(blocks){
    return Math.abs((blocks - 42) * 264)
}

distanceFromHqInFeet(43);
distanceFromHqInFeet(50);
distanceFromHqInFeet(34);
//////

function distanceTravelledInFeet(start, end){
    return Math.abs((start - end)*264)
}

distanceTravelledInFeet(43, 48);
distanceTravelledInFeet(50, 60);
distanceTravelledInFeet(34, 28);

//////

function calculatesFarePrice(start, end){
    const distance = Math.abs((start - end) * 264)
    if (distance < 400){
        return 0;
    }
    else if (distance >= 400 && distance < 2000) {
        return ((distance - 400)* .02);
    }
    else if (distance > 2000 && distance < 2499){
        return 25;
    }
    else if (distance > 2500){
        return 'cannot travel that far';
    }
}
calculatesFarePrice(43, 44);
calculatesFarePrice(34, 32);
calculatesFarePrice(50, 58);
calculatesFarePrice(34, 24);