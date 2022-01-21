import { Query } from "../../bedrock/query/Query"

export class QueryBuilder {
	constructor(private query: string) {}

	public eq(value: string | number | boolean) {
		this.query += " == " + value
		return this
	}

	public neq(value: string | number | boolean) {
		this.query += " != " + value
		return this
	}

	public lessThan(value: string | number | boolean) {
		this.query += " <= " + value
		return this
	}

	public greaterThan(value: string | number | boolean) {
		this.query += " >= " + value
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

	public group() {
		this.query = `(${this.query})`
		return this
	}

	toString(): string {
		return this.query
	}
}

export function q(query: Query) {
	return new QueryBuilder(`query.${query}`)
}
