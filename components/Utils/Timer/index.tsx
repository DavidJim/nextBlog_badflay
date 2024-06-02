import { useState, useEffect } from "react";
import dayjs from "dayjs";

interface TimeLeft {
	days: number;
	hours: number;
	minutes: number;
	seconds: number;
}

interface Props {
	targetDate: string;
	endDate?: string | null;
}

const CountdownTimer: React.FC<Props> = ({ targetDate, endDate = null }) => {
	const [liveStatus, setLiveStatus] = useState<Boolean>(false);
	const [isCompleted, setIsCompleted] = useState<Boolean>(false);

	const calculateTimeLeft = (): TimeLeft => {
		const now = dayjs();
		const start = dayjs(targetDate);
		const end = endDate ? dayjs(endDate) : dayjs(targetDate).add(1, "day");
		const difference = +dayjs(targetDate) - +dayjs();
		let timeLeft: TimeLeft = { days: 0, hours: 0, minutes: 0, seconds: 0 };

		if (now.isBefore(start)) {
			timeLeft = {
				days: Math.floor(difference / (1000 * 60 * 60 * 24)),
				hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
				minutes: Math.floor((difference / 1000 / 60) % 60),
				seconds: Math.floor((difference / 1000) % 60),
			};
		}
		return timeLeft;
	};

	const [timeLeft, setTimeLeft] = useState<TimeLeft>(calculateTimeLeft());

	useEffect(() => {
		const updateStatus = () => {
			const now = dayjs();
			const start = dayjs(targetDate);
			const end = endDate ? dayjs(endDate) : dayjs(targetDate).add(1, "day");

			if (now.isAfter(start) && now.isBefore(end)) {
				setLiveStatus(true);
				setIsCompleted(false);
			} else if (now.isAfter(end)) {
				setIsCompleted(true);
				setLiveStatus(false);
			} else if (now.isBefore(start)) {
				setLiveStatus(false);
				setIsCompleted(false);
			}

			setTimeLeft(calculateTimeLeft());
		};

		updateStatus(); // Actualizar el estado inmediatamente
		const timer = setInterval(() => {
			updateStatus();
		}, 1000);

		return () => clearInterval(timer);
	}, [targetDate, endDate]);

	const formatTime = (num: number): string => {
		return num < 10 ? `0${num}` : num.toString();
	};

	const formattedTime =
		timeLeft.days > 0
			? `${timeLeft.days} Días ${formatTime(timeLeft.hours)}:${formatTime(
					timeLeft.minutes
			  )}:${formatTime(timeLeft.seconds)}`
			: `${formatTime(timeLeft.hours)}:${formatTime(
					timeLeft.minutes
			  )}:${formatTime(timeLeft.seconds)}`;

	return (
		<div className="justify-center items-center">
			{liveStatus ? (
				<p className="text-2xl font-bold bg-red-500 rounded-full px-6 ">
					Live!
				</p>
			) : isCompleted ? (
				<p className="text-2xl font-bold bg-green-800 rounded-full px-6 ">
					Finalizado
				</p>
			) : (
				<p className="text-xl font-bold">{formattedTime}</p>
			)}
		</div>
	);
};

export default CountdownTimer;
