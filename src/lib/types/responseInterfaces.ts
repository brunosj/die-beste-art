// Pages
export interface Picture {
	data: {
		attributes: {
			url: string;
		};
	};
}
export interface Homepage {
	attributes: {
		titel: string;
		slug: string;
		bild: {
			data: {
				attributes: {
					url: string;
				};
			};
		};
		CTA1: CTA;
		CTA2: CTA;
		USP1Titel: string;
		USP1Untertitel: string;
		USP1Pfad: string;
		USP1Bild: Picture;
		USP2Titel: string;
		USP2Untertitel: string;
		USP2Pfad: string;
		USP2Bild: Picture;
		USP3Titel: string;
		USP3Untertitel: string;
		USP3Pfad: string;
		USP3Bild: Picture;
		USPText: string;
	};
	id: number;
}

export interface Page {
	id: number;
	attributes: {
		titel: string;
		slug: string;
		bild: {
			data: {
				attributes: {
					url: string;
				};
			};
		};
		CTA: {
			data: CTA;
		};

		topSektion: Section;
		bannerSektion: Section;
		unterSektion: Section;
	};
}

// Components

export type CTA = {
	attributes: {
		text: string;
		link: string;
		bildposition: string;
		bild: {
			data: {
				attributes: {
					url: string;
				};
			};
		};
	};
};

export type Section = {
	titel: string;
	text: string;
	id: number;
	bild: {
		data: {
			attributes: {
				url: string;
			};
		};
	};
};
