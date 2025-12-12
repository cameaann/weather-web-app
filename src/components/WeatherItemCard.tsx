
type WeatherItemProps ={
	title: string;
	value: string | number | undefined;
}

const WeatherItemCard = ({ title, value }: WeatherItemProps) => {

	return(
		<div className="h-[11.8rem] flex flex-col items-start justify-center bg-neutral-800 border-1 border-solid border-neutral-600 rounded-xl p-6 m-2 gap-6">
			<span className="text-xl color-neutral-200">{title}</span>
			<span className="text-5xl  color-neutral-0">{value}</span>
		</div>
	)
}

export default WeatherItemCard