<script lang="ts">
</script>

<section class="layout -mt-12 sectionPb">
	<form action="#" method="POST" class=" bg-gold-200 rounded-md shadow-sm pt-6 lg:pt-0">
		<div class="mx-auto p-6 lg:p-12">
			<div class="grid grid-cols-1 gap-x-8 gap-y-6 lg:grid-cols-2">
				<div class="col-span-2">
					<fieldset class="lg:grid grid-cols-2">
						<legend class="block font-bold text-lg leading-6"> Anrede* </legend>
						<div class="flex mt-4 text-sm leading-6 justify-between">
							<div class="flex items-center gap-x-2.5">
								<input
									id="female"
									name="salutation"
									value="Frau"
									type="radio"
									class="mt-1 h-6 w-6 border-ateneTaupe-200 text-purple-500 shadow-sm focus:ring-purple-500 accent-purple-500"
								/>
								<label for="female">Frau</label>
							</div>
							<div class="flex items-center gap-x-2.5">
								<input
									id="male"
									name="salutation"
									value="Herr"
									type="radio"
									class="mt-1 h-6 w-6 border-ateneTaupe-200 text-purple-500 shadow-sm focus:ring-purple-500 accent-purple-500"
								/>
								<label for="male">Herr</label>
							</div>
							<div class="flex items-center gap-x-2.5">
								<input
									id="female"
									name="salutation"
									value="Divers"
									type="radio"
									class="mt-1 h-6 w-6 border-ateneTaupe-200 text-purple-500 shadow-sm focus:ring-purple-500 accent-purple-500"
								/>
								<label for="budget-under-25k">Divers</label>
							</div>
						</div>
					</fieldset>
				</div>
				<div class="col-span-2 lg:col-span-1">
					<label for="first-name" class="block text-sm leading-6"> Vorname* </label>
					<div class="mt-2.5">
						<input
							type="text"
							name="first-name"
							id="first-name"
							autoComplete="given-name"
							class="block w-full rounded-md border border-ateneTaupe-200 focus:border-purple-500 dark:border-ateneTaupe-700 px-3.5 py-2 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:dark:bg-transparent outline-none sm:text-sm sm:leading-6"
						/>
					</div>
				</div>
				<div class="col-span-2 lg:col-span-1">
					<label for="last-name" class="block text-sm leading-6"> Nachname* </label>
					<div class="mt-2.5">
						<input
							type="text"
							name="last-name"
							id="last-name"
							autoComplete="family-name"
							class="block w-full rounded-md border border-ateneTaupe-200 focus:border-purple-500 dark:border-ateneTaupe-700 px-3.5 py-2 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 sm:text-sm sm:leading-6 focus:dark:bg-transparent outline-none"
						/>
					</div>
				</div>
				<div class="col-span-2 lg:col-span-1">
					<label for="company" class="block text-sm leading-6"> Firma </label>
					<div class="mt-2.5">
						<input
							type="text"
							name="company"
							id="company"
							autoComplete="company"
							class="block w-full rounded-md border border-ateneTaupe-200 focus:border-purple-500 dark:border-ateneTaupe-700 px-3.5 py-2 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:dark:bg-transparent outline-none sm:text-sm sm:leading-6"
						/>
					</div>
				</div>
				<div class="col-span-2 lg:col-span-1">
					<label for="email" class="block text-sm leading-6"> Email* </label>
					<div class="mt-2.5">
						<input
							type="email"
							name="email"
							id="email"
							autoComplete="email"
							class="block w-full rounded-md border border-ateneTaupe-200 focus:border-purple-500 dark:border-ateneTaupe-700 px-3.5 py-2 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:dark:bg-transparent outline-none sm:text-sm sm:leading-6"
						/>
					</div>
				</div>
				<div class="col-span-2 lg:col-span-1">
					<label for="phone-number" class="block text-sm leading-6"> Telefon </label>
					<div class="mt-2.5">
						<input
							type="tel"
							name="phone-number"
							id="phone-number"
							autoComplete="tel"
							class="block w-full rounded-md border border-ateneTaupe-200 focus:border-purple-500 dark:border-ateneTaupe-700 px-3.5 py-2 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:dark:bg-transparent outline-none sm:text-sm sm:leading-6"
						/>
					</div>
				</div>
				<div class="hidden lg:block mt-auto ml-auto col-span-2 lg:col-span-1">
					<p class="font-bold text-lg leading-6">(*Pflichtfelder)</p>
				</div>

				<div class="col-span-2">
					<label for="message" class="block text-sm leading-6"> Nachricht* </label>
					<div class="mt-2.5">
						<textarea
							name="message"
							id="message"
							rows={4}
							class="block w-full rounded-md border border-ateneTaupe-200 focus:border-purple-500 dark:border-ateneTaupe-700 px-6 py-2 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:dark:bg-transparent outline-none sm:text-sm sm:leading-6"
							value={''}
						/>
					</div>
				</div>
			</div>
			<div class="flex space-x-3 mt-6 items-start">
				<input
					type="checkbox"
					name="privacy"
					id="privacy"
					class="border-purple-500 text-purple-500 h-6 w-6 accent-purple-500"
				/>
				<label for="comments" class=" text-sm lg:text-lg leading-6 font-light aBlue">
					Ich bin damit einverstanden, dass diese Daten zum Zweck der Kontaktaufnahme gespeichert
					und verarbeitet werden. Mir ist bekannt, dass ich meine Einwilligung jederzeit widerrufen
					kann.</label
				>
			</div>
			<div class="mt-8 flex justify-end">
				<button
					type="submit"
					class="bg-brown-900 duration-300 hover:bg-brown-700 ease-in-out text-beige-500 flex py-3 px-4 text-sm uppercase rounded-md"
				>
					Nachricht senden
				</button>
			</div>
		</div>
	</form>
</section>
