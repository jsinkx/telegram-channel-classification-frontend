import { ComponentPropsWithoutRef, FC } from 'react'
import { Pie } from 'react-chartjs-2'

import { ArcElement, Chart as ChartJS, Legend, Tooltip } from 'chart.js'

import { TelegramChannelsLabels } from '@shared/telegram-channels-labels'

import { StyledPieChart } from './PieChart.styles'

type PieChartProps = {
	data: number[]
} & ComponentPropsWithoutRef<'div'>

ChartJS.register(ArcElement, Tooltip, Legend)

export const PieChart: FC<PieChartProps> = ({ data: probabilities, ...props }) => {
	const data = {
		labels: TelegramChannelsLabels,
		datasets: [
			{
				label: 'Вероятность класса, (%)',
				data: probabilities.map((p) => p * 100),
				backgroundColor: ['rgba(153, 102, 255, 0.2)', 'rgba(54, 162, 235, 0.2)', 'rgba(255, 99, 132, 0.2)'],
				borderColor: ['rgba(153, 102, 255, 1)', 'rgba(54, 162, 235, 1)', 'rgba(255, 99, 132, 1)'],
				borderWidth: 1,
			},
		],
	}

	return (
		<StyledPieChart {...props}>
			<Pie data={data} />
		</StyledPieChart>
	)
}
