import JSONCrush from 'jsoncrush';
import { nanoid } from 'nanoid';
import { useEffect, useState } from 'react';
import { proxy, useSnapshot } from 'valtio';
import { TrashIcon } from '../Icons/TrashIcon';

type ExpenseUnit = 'year' | 'month';
interface Expense {
	title: string;
	description?: string;
	value?: number;
	frequency: ExpenseUnit;
	id: string;
}

const defaultExpenses: Expense[] = [
	{
		title: 'Health Insurance',
		value: 500,
		frequency: 'month',
		id: 'healthInsurance'
	},
	{
		title: "Other Insurance",
		description: "Life, Dental, etc",
		value: 100,
		frequency: 'month',
		id: 'otherInsurance'
	},
	{
		title: "Home Office Stipend",
		value: 50,
		frequency: 'month',
		id: 'homeOffice'
	},
	{
		title: "Personal Learning Budget",
		value: 1000,
		frequency: "year",
		id: 'learning'
	}
]

type TimeAdjustmentUnit = 'weeks' | 'days' | 'hoursPerMonth' | 'hoursPerWeek';
interface TimeAdjustment {
	title: string;
	description?: string;
	value: number;
	unit: 'weeks' | 'days' | 'hoursPerMonth' | 'hoursPerWeek';
	id: string;
}

const defaultTimeAdjustments: TimeAdjustment[] = [
	{
		id: 'holidays',
		title: "Holidays",
		value: 10,
		unit: "days"
	},
	{
		id: 'vacation',
		title: "Vacation",
		value: 5,
		unit: "weeks"
	},
	{
		id: 'admin',
		title: "Administrative Tasks",
		description: "Number of hours spent on non billable adminstrative tasks",
		value: 3,
		unit: "hoursPerWeek"
	}
]

function TimeAdjustmentUnitPicker({ unit, onChange }: { unit: TimeAdjustmentUnit, onChange: (value: TimeAdjustmentUnit) => void }) {
	return <select className="select bg-inherit" onChange={e => onChange(e.target.value as any as TimeAdjustmentUnit)} value={unit}>
		<option value='weeks'>weeks per year</option>
		<option value='days'>days per year</option>
		<option value='hoursPerMonth'>hours per month</option>
		<option value='hoursPerWeek'>hours per week</option>
	</select>
}

function ExpenseUnitPicker({ unit, onChange }: { unit: ExpenseUnit, onChange: (value: ExpenseUnit) => void }) {
	return <select className="select bg-inherit" onChange={e => onChange(e.target.value as any as ExpenseUnit)} value={unit}>
		<option value='month'>per month</option>
		<option value='year'>per year</option>
	</select>
}

const state = proxy({
	expenses: {
		salary: 100000,
		retirementMatch: 4,
		bonus: 10,
		selfEmployedTax: 7.65,
		profitMargin: 20
	},
	time: {
		hoursPerWeek: 40
	},
	customExpenses: defaultExpenses,
	timeAdjustments: defaultTimeAdjustments
});

function CalculateActualWorkingHours(values: typeof state) {
	let hours = values.time.hoursPerWeek * 52;
	for (const adjustment of values.timeAdjustments) {
		if (adjustment.unit === 'days') {
			hours -= adjustment.value * 8;
		}
		else if (adjustment.unit === 'weeks') {
			hours -= adjustment.value * 40;
		}
		else if (adjustment.unit === 'hoursPerMonth') {
			hours -= adjustment.value * 12;
		}
		else {
			hours -= adjustment.value * 52;
		}
	}
	return hours;
}

function CalculateRate(values: typeof state) {
	let totalCompensation = values.expenses.salary +
		values.expenses.salary * (values.expenses.bonus / 100) +
		values.expenses.salary * (values.expenses.retirementMatch / 100);
	for (const customExpense of values.customExpenses) {
		if (customExpense.value) {
			if (customExpense.frequency === 'month') {
				totalCompensation += customExpense.value * 12;
			}
			if (customExpense) {
				totalCompensation += customExpense.value;
			}
		}
	}
	totalCompensation += totalCompensation * (values.expenses.selfEmployedTax / 100);
	totalCompensation += totalCompensation * (values.expenses.profitMargin / 100);

	const hours = CalculateActualWorkingHours(values);
	const rate = totalCompensation / hours;
	return Math.round(rate)
}

function NewFieldForm({ label, onNewField }: { label: string, onNewField: (name: string) => void }) {
	const [name, setName] = useState('');
	const create = () => {
		if (name.length > 0) {
			onNewField(name);
			setName('');
		}
	}
	return <form onSubmit={e => { e.preventDefault(); create(); }} className="my-8 gap-4 mx-2">
		<label htmlFor="new-expense">{label}</label>
		<div className='flex gap-2 mr-2'>
			<input id="new-expense" type="text" value={name} onChange={e => setName(e.target.value)} className="p-4 flex-1" />
			<button className='btn btn-primary' type="submit">Create</button>
		</div>

	</form>
}

export const Calculator = () => {
	const snapshot = useSnapshot(state);
	const rate = CalculateRate(state);
	const actualWorkingHours = CalculateActualWorkingHours(state);
	const [loaded, setLoaded] = useState(false);
	useEffect(() => {
		const searchParams = new URLSearchParams(window.location.search);
		const query = searchParams.get('q');
		if (query) {
			const queryState = JSON.parse(JSONCrush.uncrush(query));
			state.customExpenses = queryState.customExpenses;
			state.expenses = queryState.expenses;
			state.time = queryState.time;
			state.timeAdjustments = queryState.timeAdjustments;
		}
		setLoaded(true);
	}, [])
	useEffect(() => {
		if (loaded) {
			const searchParams = new URLSearchParams(window.location.search);
			searchParams.set("q", JSONCrush.crush(JSON.stringify(snapshot)));
			const newRelativePathQuery = window.location.pathname + '?' + searchParams.toString();
			history.pushState(null, '', newRelativePathQuery);
		}
	}, [snapshot, loaded]);

	return <div className="mx-auto">
		<div className="mx-auto xs:max-w-sm max-w-7xl calculator flex flex-col md:flex-row mb-16">
			<div className='flex-1 ml-2'>
				<h1>Money</h1>
				<div className="label-text mx-4">The compensation your freelance business would pay you as an employee.</div>

				<div className="form-control">
					<label htmlFor="salary">Salary</label>
					<label className="input-group">
						<span>$</span>
						<input id="salary" type="number" defaultValue={snapshot.expenses.salary.toString()} onChange={e => state.expenses.salary = parseFloat(e.target.value)} className="flex-1" />
					</label>
				</div>

				<div className="form-control">
					<label htmlFor="401k">401k Match</label>
					<label className="input-group">
						<span>%</span>
						<input id="401k" type="number" defaultValue={snapshot.expenses.retirementMatch} onChange={e => state.expenses.retirementMatch = parseFloat(e.target.value)} className="flex-1" />
					</label>
				</div>

				<div className="form-control">
					<label htmlFor="bonus">Bonus</label>
					<label className="input-group">
						<span>%</span>
						<input id="bonus" type="number" defaultValue={snapshot.expenses.bonus} onChange={e => state.expenses.bonus = parseFloat(e.target.value)} className="flex-1" />
						<span>per year</span>
					</label>
				</div>

				{snapshot.customExpenses.map((expense, i) => <div className="form-control" key={expense.id}>
					<div>
						<div className='flex gap-2'>
							<button className='btn btn-ghost' onClick={() => state.customExpenses.splice(i, 1)}><TrashIcon className='text-red-600 h-6' /></button>
							<label htmlFor={expense.id}>{expense.title}</label>
						</div>
						{expense.description && <div className="label-text mx-4">{expense.description}</div>}
					</div>

					<label className="input-group">
						<span>$</span>
						<input id={expense.id} type="number" defaultValue={expense.value} onChange={e => state.customExpenses[i].value = parseFloat(e.target.value)} className="flex-1" />
						<span className="p-0"><ExpenseUnitPicker unit={expense.frequency} onChange={unit => state.customExpenses[i].frequency = unit} /></span>
					</label>
				</div>)}

				<NewFieldForm label="Create Expense" onNewField={name => state.customExpenses.push({ title: name, id: nanoid(), frequency: 'month' })} />

				<div className="form-control">
					<label htmlFor="self-employment-tax">Self Employment Tax</label>
					<div className="label-text mx-4">In the US self empoyed individuals are required to pay the 7.65% social security and medicare taxes that a company would pay for an employee.</div>
					<label className="input-group">
						<span>%</span>
						<input id="self-employment-tax" type="number" defaultValue={snapshot.expenses.selfEmployedTax} onChange={e => state.expenses.selfEmployedTax = parseFloat(e.target.value)} className="flex-1" />
					</label>
				</div>

				<div className="form-control">
					<label htmlFor="profit-margin">Profit Margin</label>
					<div className="label-text mx-4">This is typically 10-20 % for client service businesses.</div>
					<label className="input-group">
						<span>%</span>
						<input id="profit-margin" type="number" defaultValue={snapshot.expenses.profitMargin} onChange={e => state.expenses.profitMargin = parseFloat(e.target.value)} className="flex-1" />
					</label>
				</div>

				<h1>Working Hours</h1>
				<div>
					<label htmlFor="total-hours">Hours per week</label>
					<div className="label-text mx-4">The number of hours per week you&apos;d work as a full time employee.</div>
				</div>

				<label className="input-group">
					<input id="total-hours" type="number" defaultValue={snapshot.time.hoursPerWeek} onChange={e => state.time.hoursPerWeek = parseFloat(e.target.value)} className="flex-1" />
					<span>per week</span>
				</label>

				{snapshot.timeAdjustments.map((timeAdjustment, i) => <div key={timeAdjustment.id}>
					<div>
						<div className='flex gap-2'>
							<button className='btn btn-ghost' onClick={() => state.timeAdjustments.splice(i, 1)}><TrashIcon className='text-red-600 h-6' /></button>
							<label htmlFor={timeAdjustment.id}>{timeAdjustment.title}</label>
						</div>
						{timeAdjustment.description && <div className="label-text mx-4">{timeAdjustment.description}</div>}
					</div>

					<label className="input-group">
						<input id={timeAdjustment.id} type="number" defaultValue={timeAdjustment.value} onChange={e => state.timeAdjustments[i].value = parseFloat(e.target.value)} className="flex-1" />
						<span className="p-0"><TimeAdjustmentUnitPicker unit={timeAdjustment.unit} onChange={u => state.timeAdjustments[i].unit = u} /></span>
					</label>
				</div>)}

				<NewFieldForm label="Create Time Adjustment" onNewField={name => state.timeAdjustments.push({ id: nanoid(), title: name, unit: 'days', value: 0 })} />

				<div className='mx-4'>Actual working hours: {actualWorkingHours}</div>
				<div className='mb-24 lg:mb-0'></div>
			</div>
			<div className='flex-1 fixed bottom-0 bg-neutral md:hidden w-full flex flex-col p-4 gap-4'>
				<div className='flex-1 flex'>
					<div className='text-primary text-3xl flex-1'>Rate</div>
					<span className='text-3xl text-accent'>${rate}</span>
				</div>
				<div className='flex-1 flex'>
					<div className='text-primary text-3xl flex-1'>Annual</div>
					<span className='text-3xl text-accent'>${Math.trunc(rate * actualWorkingHours).toLocaleString()}</span>
				</div>
			</div>
			<div className='flex-1 bottom-0 hidden md:block mt-32'>
				<div className='sticky top-20 flex flex-col items-center'>
					<div className='flex w-72'>
						<div className='text-3xl text-primary flex-1'>Rate</div>
						<div className='text-3xl text-accent'>${rate}</div>
					</div>
					<div className='flex w-72'>
						<div className='text-3xl text-primary flex-1'>Annual</div>
						<div className='text-3xl text-accent'>${(rate * actualWorkingHours).toLocaleString()}</div>
					</div>
				</div>
			</div>
		</div>
	</div>
}