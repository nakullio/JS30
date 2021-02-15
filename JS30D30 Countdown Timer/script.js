// create function call timer
function timer(seconds) {
  //  when the timer start
  const now = Date.now();
  const then = now + seconds * 1000;
  console.log({ now, then });
}
