const interstitialSteps = [
	{
		title: 'Challenge Yourself!',
		copy: `Welcome to Challenge Central! Enjoy a free Daily Challenge every day, or upgrade to Club Pogo to unlock Premium Challenges with collectible Badge rewards.`,
	}, {
		title: 'Join the Action',
		copy: 'Club Pogo has a huge library of thousands of Challenges to explore. You can filter and sort to find the best Challenges for you.'
	}, {
		title: 'Go Deeper',
		copy: "You've got options! From Featured Challenges to Mix-n-Match and Personal Challenges, there are plenty of ways to win on Pogo."
	}, {
		title: 'Your prize',
		copy: "Take on the complimentary Welcome Aboard Challenge to get started. You'll earn a new Badge when you complete it. Good luck!",
		reward: true
	}
];

STEP_PX = 50

document.querySelector("#next-button").addEventListener('click', changeStatusBar);

step = document.querySelector("#step")
step.innerHTML = '<img src="./star.png">'
step.style.backgroundColor = 'white'

counter = 0

stepbar = document.getElementById("step-bar")	
stepbar.style.width = (interstitialSteps.length * STEP_PX) + 'px'
stepbar.innerHTML += '<div id="step' + counter + '" class="step" style="left: ' +  0 + 'px;"><img src="./star.png"></div>'

function changeStatusBar(){
	// Title and copy change
	document.querySelector("#caption-title").textContent = interstitialSteps[counter].title;
	document.querySelector("#caption-text").textContent = interstitialSteps[counter].copy;

	// Step-bar logic
	stepbar = document.getElementById("step-bar")	


	stepstatus = document.querySelector("#step-status")
	offset = STEP_PX * (counter + 1)
	stepstatus.style.width = offset + 'px'
	stepbar.innerHTML += '<div id="step' + counter + '" class="step" style="left: ' +  offset + 'px;"><img src="./tick.png"></div>'

	step = document.querySelector("#step")
	step.style.left = offset + 'px'
	step.style.backgroundColor = 'white'
	step.innerHTML = '<img src="./tick.png">'
	
	if(counter + 1 == interstitialSteps.length){
		console.log("adentro if")		
		step.innerHTML = '<img src="./gift.jpeg">'
		stepbar.innerHTML += '<div id="step' + counter + '" class="step" style="left: ' +  offset + 'px;"><img src="./gift.jpeg"></div>'
	}

	counter = counter + 1
}