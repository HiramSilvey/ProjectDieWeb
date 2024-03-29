class Hero extends Artifact {
	
	_life: number;
	_strength: number;
	_guard: number;

	_canAttack: boolean;
	_canMove: boolean;

	constructor() {
		super();
		super.setKind("Hero");
		this._life = 0;
		this._strength = 0;
		this._guard = 0;

		this._canAttack = true;
		this._canMove = true;
	}

	setLife(life: number) {
		this._life = life;
	}
	
	getLife(): number {
		return this._life;
	}

	setStrength(strength: number) {
		this._strength = strength;
	}

	getStrength(): number {
		return this._strength;
	}

	setGuard(guard: number) {
		this._guard = guard;
	}

	getGuard(): number {
		return this._guard;
	}

	setCanAttack(canAttack: boolean) {
		this._canAttack = canAttack;
	}

	getCanAttack(): boolean {
		return this._canAttack;
	}

	setCanMove(canMove: boolean) {
		this._canMove = canMove;
	}

	getCanMove(): boolean {
		return this._canMove;
	}

}
