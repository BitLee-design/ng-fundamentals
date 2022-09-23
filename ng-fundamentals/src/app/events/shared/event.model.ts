export interface IEvent {
	id: number
	name: string
	date: Date
	time: string
	price: number
	imageUrl: string
	location?: {
		adress: string
		city: string
		contry: string
	},
	onlineUrl?: string
	sessions: ISection[]

}

export interface ISection {
	id: number
	name: string
	presenter: string
	duration: number
	level: string
	abstract: string
	votors: string
}