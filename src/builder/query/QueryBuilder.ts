import { query } from "../../bedrock/query/query"

export class QueryBuilder {
	constructor(private query: string, ...params: (number | string)[]) {
		if (params.length > 0) this.query += `(${params.map((s) => this.quote(s)).join(", ")})`
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

export function q(q: keyof typeof query, ...params: (number | string)[]) {
	return new QueryBuilder(`query.${q}`, ...params)
}
