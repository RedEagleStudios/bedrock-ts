import { Query } from "../../bedrock/query/Query"

export class QueryBuilder {
	constructor(private query: string, param?: number | string) {
		if (param !== undefined) this.query += `(${this.quote(param)})`
	}

	private quote(value: number | string) {
		return typeof value === "string" ? `'${value}'` : value
	}

	public eq(value: number | string) {
		this.query += " == " + this.quote(value)
		return this
	}

	public neq(value: number | string) {
		this.query += " != " + this.quote(value)
		return this
	}

	public lessThan(value: number | string) {
		this.query += " <= " + this.quote(value)
		return this
	}

	public greaterThan(value: number | string) {
		this.query += " >= " + this.quote(value)
		return this
	}

	public and(q: QueryBuilder) {
		this.query += " && " + q.toString()
		return this
	}

	public or(q: QueryBuilder) {
		this.query += " || " + q.toString()
		return this
	}

	public not() {
		this.query = `!${this.query}`
		return this
	}

	public group() {
		this.query = `(${this.query})`
		return this
	}

	toString(): string {
		return this.query
	}
}

export function q(query: Query, param?: number | string) {
	return new QueryBuilder(`query.${query}`, param)
}
