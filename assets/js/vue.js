var vm = new Vue({
	el: "#vue-form",
	data: () => ({
		withdrawAddressField: "",
		projectData: [],
		projectCode: "",
		projectName: "",
		isFinished: "",
		isPaused: "",
		itemsLeft: "",
		salePrice: "",
		selectedAmount: "Select amount",
		saleOpen: undefined,
		startDate: "",
		currentDate: "",
		statusMsg: "",
		serverError: undefined,
		isLoaded: false,
	}),
	methods: {
		async nextStep() {
			const ref = this;
			const form = document.getElementById("pos-form");

			form.addEventListener(
				"submit",
				function (event) {
					if (!form.checkValidity()) {
						event.preventDefault();
						event.stopPropagation();
					}

					form.classList.add("was-validated");
				},
				false
			);

			var withdrawAddress =
				document.getElementById("withdrawAddress").value;

			var totalSelected = document.getElementById("count").value;

			Cookies.set("wallet-address", withdrawAddress, { expires: 3 });

			var accountId = await getAccount(
				withdrawAddress,
				projectCode,
				totalSelected
			); //Submit actual ammount

			window.top.location.href = "account.html?accountId=" + accountId;
		},
		checkDate() {
			// this.startDate = "2021-10-24";
			if (this.currentDate < this.startDate) {
				this.saleOpen = false;
			} else {
				this.saleOpen = true;
			}
		},
	},
	mounted: function () {
		getProject(projectCode)
			.then((projectData) => {
				this.projectData = projectData;
				this.projectCode = projectData.code;
				this.projectName = projectData.name;
				this.isFinished = projectData.isFinished;
				this.isPaused = projectData.isPaused;
				this.itemsLeft = projectData.itemsLeft;
				this.salePrice = projectData.salePrice;
				this.totalCost = undefined;
				this.saleOpen = undefined;
				this.startDate = new Date(Date.parse(projectData.startDate))
					.toJSON()
					.slice(0, 10);
				this.currentDate = new Date().toJSON().slice(0, 10);
				this.statusMsg = projectData.statusMsg;
				this.isLoaded = true;
				this.checkDate();
			})
			.catch((error) => (this.serverError = true));

		// Read cookie value
		let addressCookieValue = Cookies.get("wallet-address");

		//Check cookie value/disable button
		if (addressCookieValue !== undefined) {
			this.withdrawAddressField = addressCookieValue;
		} else {
			this.withdrawAddressField = "";
		}

		this.checkDate();
	},
});
