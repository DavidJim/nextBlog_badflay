import { useState, useEffect } from "react";

interface TimeLeft {
	days: number;
	hours: number;
	minutes: number;
	seconds: number;
}

interface Props {
	targetDate: string;
}

const CountdownTimer: React.FC<Props> = ({ targetDate }) => {
	let liveStatus: Boolean = false;
	const calculateTimeLeft = (): TimeLeft => {
		const difference = +new Date(targetDate) - +new Date();
		let timeLeft: TimeLeft = { days: 0, hours: 0, minutes: 0, seconds: 0 };

		if (difference > 0) {
			timeLeft = {
				days: Math.floor(difference / (1000 * 60 * 60 * 24)),
				hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
				minutes: Math.floor((difference / 1000 / 60) % 60),
				seconds: Math.floor((difference / 1000) % 60),
			};
		} else {
			liveStatus = true;
		}

		return timeLeft;
	};

	const [timeLeft, setTimeLeft] = useState<TimeLeft>(calculateTimeLeft());

	useEffect(() => {
		const timer = setTimeout(() => {
			setTimeLeft(calculateTimeLeft());
		}, 1000);

		return () => clearTimeout(timer);
	});

	const formatTime = (num: number): string => {
		return num < 10 ? `0${num}` : num.toString();
	};

	const formattedTime = `${timeLeft.days} Días ${formatTime(
		timeLeft.hours
	)}:${formatTime(timeLeft.minutes)}:${formatTime(timeLeft.seconds)}`;

	return (
		<div>
			{liveStatus ? (
				<p className="text-2xl font-bold bg-red-500 rounded-full px-6 ">
					Live!
				</p>
			) : (
				<p className="text-xl font-bold">{formattedTime}</p>
			)}
		</div>
	);
};

export default CountdownTimer;
