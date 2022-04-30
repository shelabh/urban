
import React from 'react';

const Landing = () => (
	<div className="w-full">
		<div className="w-full">
			<div className="w-full h-full flex justify-center items-center">
				<div>
					<img src="/images/home.png" />
				</div>
				<div className="flex flex-col absolute text-white items-center space-y-5">
					<div className="text-sm">
						Home / Delhi
					</div>
					<div className="text-6xl">
						Home services, on demand.
					</div>
					<div className="flex space-x-5 w-full justify-center pt-10">
						<div className="w-[40%]">
							<button className="flex rounded border bg-white w-[90%]  h-[3rem]  space-x-[40%]  justify-center items-center">
								<div className="flex items-center space-x-2 ">
									<img src="/images/location.svg" />
									<select className="text-black block appearance-none w-full cursor-pointer">
										<option>Delhi</option>
    										<option>Chandigarh</option>
    										<option>Ghaziabad</option>
									</select>
									<div className="pointer-events-none  inset-y-0 right-0 flex items-center px-2">
										<img src="/images/down.svg" />
									</div>
								</div>
							</button>
						</div>
						<div className="w-full">
							<form className="flex rounded border bg-white w-[100%]  h-[3rem]   items-center">
								<div className="flex ml-3  space-x-5">
									<img src="/images/search.svg" />
									<input className="text-neutral-400 border-none appearance-none bg-transparent w-full" id="services" type="text" placeholder="Select for services" />
								</div>
							</form>
						</div>
					</div>
				</div>
				<div className=" absolute rounded bg-white flex flex-col mt-[50%] drop-shadow-xl  h-[20rem] justify-center items-center  border w-[70%]">
					<div className="flex space-x-20">
						<div className="flex flex-col items-center space-y-5">
							<img src="/images/maskWomen.png"/>
							<span className="text-sm">
								Salon For Women
							</span>	
						</div>
						<div className="flex flex-col items-center space-y-5">
							<img src="/images/hair.png"/>
							<span className=" text-sm">
								Hair Services For Women 
							</span>
						</div>
						<div className="flex flex-col items-center space-y-3">
							<img src="/images/spaWomen.png"/>
							<span className="text-sm">
								Spa For Women
							</span>
						</div>
						<div className="flex flex-col items-center space-y-5">
							<img src="/images/men.png"/>
							<span className="text-sm">
								Salon For Men
							</span>
						</div>
						<div className="flex flex-col items-center space-y-5">
							<img src="/images/massageMen.png"/>
							<span className="text-sm">
								Massage For Men
							</span>
						</div>
						<div className="flex flex-col items-center space-y-5">
							<img src="/images/repair.png"/>
							<span className="text-sm">
								AC/Appliance Repair
							</span>
						</div>
					</div>
					<div className="flex space-x-20 mt-10 ml-10">
						<div className="flex flex-col items-center space-y-5">
							<img src="/images/geyser.png"/>
							<span className="text-sm">
								Geyser \N Repair
							</span>	
						</div>
						<div className="flex flex-col items-center space-y-5">
							<img src="/images/pest.png"/>
							<span className="text-sm">
								Cleaning & Pest Control
							</span>	
						</div>
						<div className="flex flex-col items-center space-y-5">
							<img src="/images/electricity.png"/>
							<span className="text-sm">
								Electricians
							</span>	
						</div>
						<div className="flex flex-col items-center ">
							<img src="/images/plumber.png"/>
							<span className="text-sm">
								Plumbers & Carpenters
							</span>	
						</div>
					</div>
				</div>	
			</div>
			
			
		</div>
	</div>
)

export default Landing