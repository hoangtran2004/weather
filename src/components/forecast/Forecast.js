import {
    Accordion,
    AccordionItem,
    AccordionItemButton,
    AccordionItemHeading,
    AccordionItemPanel
} from "react-accessible-accordion";
import './Forecast.css'
const WEEK_DAY = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']
const Forecast = ({data}) => {
    const dayInAWeek = new Date().getDay();

    const foreCastDay = WEEK_DAY.slice(dayInAWeek, WEEK_DAY.length).concat(WEEK_DAY.slice(0, dayInAWeek));
    console.log('forecast', foreCastDay)
    return (
        <>
            <label className="title">Daily</label>
            <Accordion allowZeroExpanded>
                {data.list.splice(0, 7).map((item, index) => (
                    <AccordionItem key={index}>
                        <AccordionItemHeading>
                            <AccordionItemButton>
                                <div className="daily-item">
                                    <img src={`icons-weather/${item.weather[0].icon}.png`} alt="weather"
                                         className="icon-small"/>
                                    <label className="day">{foreCastDay[index]}</label>
                                    <label className="description">{item.weather[0].description}</label>
                                    <label className="min-max">{Math.round(item.main.temp_min)}°C / {Math.round(item.main.temp_max)}°C</label>

                                </div>
                            </AccordionItemButton>
                        </AccordionItemHeading>
                        <AccordionItemPanel>
                            <div className="daily-details-grid">
                                <div className="daily-detail-grid-item">
                                    <label>Pressure</label>
                                    <label>{item.main.pressure}</label>
                                </div>
                                <div className="daily-detail-grid-item">
                                    <label>Humidity</label>
                                    <label>{item.main.humidity}%</label>
                                </div>
                                <div className="daily-detail-grid-item">
                                    <label>Clouds</label>
                                    <label>{item.clouds.all}</label>
                                </div>
                                <div className="daily-detail-grid-item">
                                    <label>Clouds</label>
                                    <label>{item.wind.speed}m/s</label>
                                </div>
                                <div className="daily-detail-grid-item">
                                    <label>Sea levels</label>
                                    <label>{item.main.sea_level}m</label>
                                </div>
                                <div className="daily-detail-grid-item">
                                    <label>Feels like</label>
                                    <label>{item.main.feels_like}°C</label>
                                </div>
                            </div>
                        </AccordionItemPanel>
                    </AccordionItem>
                ))}
            </Accordion>
        </>
    )

}
export default Forecast;