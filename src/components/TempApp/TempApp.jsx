import React, { useState } from "react";
import { useEffect } from "react";
import clear from "../../images/clear.png";
import clouds from "../../images/cloudy.png";
import Rain from "../../images/rainy.png";
import Haze from "../../images/haze.png";
import Snow from "../../images/snow.png"
import Drizzle from "../../images/drizzle.png"
import Thunder from "../../images/thunder.png"
import cloudy from "../../images/cloudy.jpg"
import Rainy from "../../images/rainy.jpg"
import Drizzlee from "../../images/drizzle.jpg";
import Mistt from "../../images/mist.jpg";
import Sunny from "../../images/sunny.jpg";
import Snoww from "../../images/snow.jpg"
import Thunderr from "../../images/thunderstorm.jpg"
import searchhh from "../../images/magnifying-glass.png"
import thermometer from "../../images/thermometer.png"
import humidityright from "../../images/humidityright.png"
import windpng from "../../images/wind.png"
import humidity from "../../images/humidity.png"
const TempApp = () => {
    const [apidata, setapidata] = useState({})
    const [icon, setIcon] = useState()
    const [weatherdata, setweatherdata] = useState(null);
    const [background, setbackground] = useState();
    const [input, setInput] = useState("");
    const [search, setSearch] = useState("Najibabad");
    const [lat ,setlat] = useState("null");
    const [lon,setlon] = useState("null")

    const date = new Date();


    async function success(position) {
        const apiUrl = await fetch (`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=3b9245847b6a708d800b4b7c56a83503`)
        const apiUrlres = apiUrl.json();
        console.log(apiUrlres)
    }
    function failed(failed) {
        console.log('postion failed')
    }


    async function getCurrentLocation() {
        const res= navigator.geolocation.getCurrentPosition(success, failed)
        console.log(res);
    }
    

    async function data() {
        try {

            

            const apiResult = await fetch(`https://api.openweathermap.org/data/2.5/weather?units=metric&q=${search}&appid=3b9245847b6a708d800b4b7c56a83503`)
            
            const response = await apiResult.json();

            console.log(response);
            setapidata(response);
            const weather = response.weather[0].main;
            setweatherdata(weather);





            switch (weather) {
                case "Clouds":
                    {
                        setIcon(clouds);
                        setbackground(cloudy);
                        break;
                    }
                case "Rain":
                    {
                        setIcon(Rain);
                        setbackground(Rainy)
                        break;
                    }
                case "Mist":
                    {
                        setbackground(Mistt)
                        setIcon(Haze);
                        break;
                    }
                case "Haze":
                    {
                        setbackground(Mistt)
                        setIcon(Haze);
                        break;
                    }
                case "smoke":
                    {
                        setbackground(Mistt)
                        setIcon(Haze);
                        break;
                    }
                case "Sand":
                    {
                        setbackground(Mistt)
                        setIcon(Haze);
                        break;
                    }
                case "Fog":
                    {
                        setbackground(Mistt)
                        setIcon(Haze);
                        break;
                    }
                case "Tornado":
                    {
                        setbackground(Mistt)
                        setIcon(Haze);
                        break;
                    }
                case "Dust":
                    {
                        setbackground(Mistt)
                        setIcon(Haze);
                        break;
                    }
                case "Ash":
                    {
                        setbackground(Mistt)
                        setIcon(Haze);
                        break;
                    }


                case "Clear":
                    {
                        setbackground(Sunny)
                        setIcon(clear);
                        break;
                    }


                case "Snow":
                    {
                        setbackground(Snoww)
                        setIcon(Snow);
                        break;
                    }
                case "Thunder":
                    {
                        setbackground(Thunderr)
                        setIcon(Thunder);
                        break;
                    }

                case "Drizzle":
                    {
                        setbackground(Drizzlee)
                        setIcon(Drizzle);
                        break;
                    }

            }

        }
        catch (error) {
            console.log(error)
        }

    }
    useEffect(() => {
        data();
        getCurrentLocation();
    }, []);

    useEffect(() => {
        data();
    }, [search]);


    return (
        <>
            <div className="container-fluid" style={{ backgroundImage: `linear-gradient(rgba(0,0,0,0.2),rgba(0,0,0,0.2)),url(${background})`, backgroundSize: "cover", objectFit: "cover", backgroundRepeat: "no-repeat", backgroundPosition: "center" }}>

                <div className="row" style={{ height: "100vh" }}>

                    <div className="col-lg-8 d-flex flex-column justify-content-between " style={{ minHeight: "50vh" }}>

                        <div className="d-flex m-md-5  mx-2 my-3" >

                            <input className="w-100 p-2"
                                type="search"
                                placeholder="Search Location..."
                                style={{ border: "none", background: "transparent", borderBottom: "2px solid white", color: "white", outline: "none" }}
                                onChange={(event) => { setInput(event.target.value) }}
                            />

                            <div className="btn ms-3" onClick={() => { setSearch(input) }} style={{ border: 'none' }} >
                                <img src={searchhh} style={{ maxHeight: "4vh" }} alt="unavailable" />
                            </div>

                        </div>
                        <div className="d-flex m-md-5 mx-auto" >

                            <h1 className="text-white me-2" style={{ fontSize: 'clamp(50px, 8vw, 8vw)' }}>{apidata.main ? ` ${Math.floor(apidata.main.temp)}° ` : "N/A"}</h1>
                            <div className="me-3 d-flex flex-column justify-content-center">
                                <h2 className="text-white m-0 text-center" style={{ fontSize: 'clamp(35px, 4vw, 4vw)', fontWeight: "400" }}>{apidata.name}</h2>

                                <p className="text-white m-0 text-center" style={{ fontSize: 'clamp(15px, 1vw, 1vw)' }}> {date.toLocaleDateString('en-US', { weekday: "long", month: "short", day: "numeric" })}</p>
                            </div>


                            <div className="d-flex align-items-center">
                                <img src={icon} style={{ height: 'clamp(40px, 6vw, 6vw)' }} />
                            </div>

                        </div>
                    </div>

                    <div className="col-lg-4 p-lg-5 p-3 d-flex justify-content-center" style={{ backdropFilter: 'blur(10px)', background: 'linear-gradient(rgba(255,255,255,0.2),rgba(255,255,255,0.2))' }}>
                        < div className="col-sm-7 col-lg-10 col-10">
                            <h2 className="text-white text-center my-3 my-md-5">{weatherdata}</h2>

                            <div className="d-flex justify-content-between">
                                <p className="text-white">Temperature</p>

                                <div className="d-flex">
                                    <p className="text-white me-3"><b>{apidata.main ? `${Math.floor(apidata.main.temp)} °` : "N/A"}</b></p>
                                    <img src={thermometer} alt="icon" style={{ maxHeight: '3vh' }} />
                                </div>
                            </div>


                            <div className="d-flex justify-content-between">
                                <p className="text-white">Humidity</p>
                                <div className="d-flex">
                                    <p className="text-white me-3"><b>{apidata.main ? `${apidata.main.humidity}%` : "N/A"}</b></p>
                                    <img src={humidityright} alt="icon" style={{ maxHeight: '3vh' }} />
                                </div>
                            </div>


                            <div className="d-flex justify-content-between">
                                <p className="text-white">Visibility</p>
                                <div className="d-flex">
                                    <p className="text-white me-3"><b>{apidata ? `${Math.floor(apidata.visibility / 1000)}km` : "N/A"}</b></p>
                                    <img src={humidity} alt="icon" style={{ maxHeight: '3vh' }} />
                                </div>
                            </div>


                            <div className="d-flex justify-content-between">
                                <p className="text-white">Wind</p>
                                <div className="d-flex">
                                    <p className="text-white me-3"><b>{apidata.wind ? `${Math.floor(apidata.wind.speed)}km/h` : "N/A"}</b></p>
                                    <img src={windpng} alt="icon" style={{ maxHeight: '3vh' }} />
                                </div>
                            </div>

                        </div>
                    </div>




                </div>
            </div>
        </>
    )
}
export default TempApp;


