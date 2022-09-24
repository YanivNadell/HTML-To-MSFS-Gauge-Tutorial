class Gauge_Tamplate extends BaseInstrument {
    constructor() {
		super();
    }
    get templateID() { return "Gauge_Tamplate"; }
	get isInteractive() { return true; } //if true, gauge will be clickable. if false, gauge will not be clickable
	//OnStart Function:
    connectedCallback() {
		super.connectedCallback();
		//Global Vars & On Start ->
    }



    disconnectedCallback() {
        super.disconnectedCallback();}
	onInteractionEvent(_args) {}


	//main update function
    Update() {

    }		
		
	
	//both "browserUpdate" and "msfsUpdate" functions i dont know what they do and never used them. they are here just to let you know that they are exist.
	browserUpdate() {		
		return;
	}	
	msfsUpdate() {
		return;
	}


}
registerInstrument('gauge-tamplate', Gauge_Tamplate);

