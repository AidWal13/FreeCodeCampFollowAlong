export function detectCollision(ball, gameObject) {
    let bottomOfBall = ball.position.y + ball.size;
    let topOfBall = ball.position.y;
    let leftSideOfBall = ball.position.x;
    let rightSideOfBall = ball.position.x + ball.size;

    let topOfObject = gameObject.position.y;
    let leftSideOfObject = gameObject.position.x;
    let rightSideOfObject = gameObject.position.x + gameObject.width;
    let bottomOfObject = gameObject.position.y + gameObject.height;

    if (
        bottomOfBall >= topOfObject &&
        topOfBall <= bottomOfObject &&
        leftSideOfBall >= leftSideOfObject &&
        rightSideOfBall <=  rightSideOfObject
        ) {
            return true;
        } else {
            return false;
        }
}

export function detectBallLeftSideCollision(ball, gameObject) {
    let bottomOfBall = ball.position.y + ball.size;
    let topOfBall = ball.position.y;
    let leftSideOfBall = ball.position.x;

    let topOfObject = gameObject.position.y;
    let rightSideOfObject = gameObject.position.x + gameObject.width;
    let bottomOfObject = gameObject.position.y + gameObject.height;

    if (
        bottomOfBall <= bottomOfObject + (ball.size * 0.08) &&
        topOfBall >= topOfObject - (ball.size * 0.08) &&
        leftSideOfBall === rightSideOfObject 
        ) {
            return true;
        } else {
            return false;
        }
}

export function detectBallRightSideCollision(ball, gameObject) {
    let bottomOfBall = ball.position.y + ball.size;
    let topOfBall = ball.position.y;
    let rightSideOfBall = ball.position.x + ball.size;

    let topOfObject = gameObject.position.y;
    let leftSideOfObject = gameObject.position.x;
    let bottomOfObject = gameObject.position.y + gameObject.height;

    if (
        bottomOfBall <= bottomOfObject + (ball.size * 0.15) &&
        topOfBall >= topOfObject - (ball.size * 0.15) &&
        rightSideOfBall === leftSideOfObject 
        ) {
            return true;
        } else {
            return false;
        }
}